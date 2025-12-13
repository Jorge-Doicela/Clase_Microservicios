const express = require('express');
const app = express();
require('dotenv').config();
require('./src/database/index.db');

app.use(express.json());

const productRoutes = require('./src/routes/product.route');

app.use('/api/products', productRoutes);

app.listen(4002, () => {
    console.log('Servidor en http://localhost:4002');
});