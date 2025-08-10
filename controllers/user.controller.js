const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your-very-long-secret-key-with-special-characters-2025';

exports.register = (req, res) => {
  const { username, password, role } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  const existingUser = User.getByUsername(username);
  if (existingUser) {
    return res.status(400).json({ message: 'Username already exists' });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = {
    id: Date.now(),
    username,
    password: hashedPassword,
    role: role || 'customer',
  };

  const createdUser = User.create(newUser);

  const access_token = jwt.sign(
    { id: createdUser.id, username: createdUser.username, role: createdUser.role },
    SECRET_KEY,
    { expiresIn: '1h' }
  );

  res.status(201).json({
    message: 'User registered successfully',
    data: {
      access_token,
      expires: '1h',
      user: { id: createdUser.id, username: createdUser.username, role: createdUser.role },
    },
  });
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  const user = User.getByUsername(username);
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  const access_token = jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    SECRET_KEY,
    { expiresIn: '1h' }
  );

  res.json({
    message: 'Login successful',
    data: {
      access_token,
      expires: '1h',
      user: { id: user.id, username: user.username, role: user.role },
    },
  });
};

exports.getUsers = (req, res) => {
  const users = User.getAll();
  res.json({ message: 'Users retrieved successfully', data: users });
};

exports.getUser = (req, res) => {
  const id = parseInt(req.params.id);
  const user = User.getById(id);
  if (user) res.json({ message: 'User retrieved successfully', data: user });
  else res.status(404).json({ message: 'Not found' });
};