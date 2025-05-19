require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path'); // Necesario para servir HTML

const app = express();

const pedidoRoutes = require('./routes/pedido.routes');

// Middleware para parsear JSON
app.use(express.json());

// Rutas de API
app.use('/api/pedidos', pedidoRoutes);

// Servir archivos estáticos (como HTML) desde la carpeta "public"
app.use(express.static(path.join(__dirname, '..', 'public')));

// Conexión a MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado a MongoDB Atlas'))
  .catch(err => console.error('Error en conexión MongoDB:', err));

// Escucha en el puerto configurado
app.listen(process.env.PORT, () => {
  console.log(`Microservicio CREAR PEDIDO en puerto ${process.env.PORT}`);
});
