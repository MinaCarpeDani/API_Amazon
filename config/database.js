const mongoose = require('mongoose');
require('dotenv').config();

const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Base de datos conectada correctamente');
  } catch (error) {
    console.log('⚠️ No se pudo conectar a la base de datos');
    console.log('📌 Detalle:', error.message);
  }
};

module.exports = conectarDB;
