const express = require('express');
const cors = require('cors');
require('dotenv').config();

const conectarDB = require('./config/database');

conectarDB();

const app = express();

app.use(cors());
app.use(express.json());

// Rutas de productos
app.get('/api/productos', (req, res) => {
  res.json([
    { id: 1, nombre: 'Laptop', precio: 650, stock: 10 },
    { id: 2, nombre: 'Teclado', precio: 25, stock: 20 },
    { id: 3, nombre: 'Mouse', precio: 15, stock: 30 }
  ]);
});

app.get('/api/productos/:id', (req, res) => {
  const productos = [
    { id: 1, nombre: 'Laptop', precio: 650, stock: 10 },
    { id: 2, nombre: 'Teclado', precio: 25, stock: 20 },
    { id: 3, nombre: 'Mouse', precio: 15, stock: 30 }
  ];
  const producto = productos.find(p => p.id === Number(req.params.id));
  producto ? res.json(producto) : res.status(404).json({ mensaje: 'Producto no encontrado' });
});

app.post('/api/productos', (req, res) => {
  res.status(201).json({ mensaje: 'Producto registrado', datos: req.body });
});

app.put('/api/productos/:id', (req, res) => {
  res.json({ mensaje: 'Producto actualizado', id: req.params.id, datos: req.body });
});

app.delete('/api/productos/:id', (req, res) => {
  res.json({ mensaje: 'Producto eliminado', id: req.params.id });
});

module.exports = app;