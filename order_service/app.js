const express = require('express');
const app = express();
require('dotenv').config();
require('./src/database/index.db');

app.use(express.json());

const ordersRoutes = require('./src/routes/order.route');

app.use('/api/orders', ordersRoutes);

app.listen(4003, () => {
    console.log('Servidor en http://localhost:4003');
});