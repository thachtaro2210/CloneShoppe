const Product = require('../models/product.model');

exports.getProducts = (req, res) => {
  const products = Product.getAll();
  res.json(products);
};

exports.getProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const product = Product.getById(id);
  if (product) res.json(product);
  else res.status(404).json({ message: 'Not found' });
};

exports.createProduct = (req, res) => {
  const product = req.body;
  if (!product.id || !product.title || !product.price) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  const createdProduct = Product.create(product);
  res.status(201).json(createdProduct);
};

exports.updateProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const updated = Product.update(id, req.body);
  if (updated) res.json(updated);
  else res.status(404).json({ message: 'Not found' });
};

exports.deleteProduct = (req, res) => {
  const id = parseInt(req.params.id);
  Product.delete(id);
  res.status(204).end();
};