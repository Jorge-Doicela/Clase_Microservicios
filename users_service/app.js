const express = require('express');
const app = express();
require('dotenv').config();
require('./src/database/index.db');

app.use(express.json());

const usersRoutes = require('./src/routes/users.route');

app.use('/api/users', usersRoutes);

app.listen(4001, () => {
    console.log('Servidor en http://localhost:4001');
});