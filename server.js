const app = require('./app');

const PUERTO = process.env.PUERTO || 3000;

app.listen(PUERTO, () => {
  console.log(`🚀 API Amazon funcionando en: http://localhost:${PUERTO}`);
});