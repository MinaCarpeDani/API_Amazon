const mongoose = require('mongoose');
require('dotenv').config();

const conectarDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/api_amazon');
    console.log('✅ Base de datos conectada correctamente');
  } catch (error) {
    console.log('⚠️ No hay MongoDB activo — API funcionando sin base de datos');
    console.log('📌 Detalle:', error.message);
    // No cerramos el proceso para que la API siga funcionando
  }
};

module.exports = conectarDB;