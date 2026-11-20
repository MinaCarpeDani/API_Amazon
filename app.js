const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const conectarDB = require('./config/database');
conectarDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Archivos de tu página web
app.use(express.static(path.join(__dirname, 'public')));

// Usamos las rutas desde la carpeta routes
const productosRoutes = require('./routes/productos');
app.use('/api/productos', productosRoutes);

// Página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app;