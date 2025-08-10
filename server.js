const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/product.routes.js'); 
const userRoutes = require('./routes/user_routes.js'); 

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes); 

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});