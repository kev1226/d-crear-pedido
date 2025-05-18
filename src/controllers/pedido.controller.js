const Pedido = require('../models/pedido.model');

const crearPedido = async (req, res) => {
  try {
    const nuevoPedido = new Pedido(req.body);
    const pedidoGuardado = await nuevoPedido.save();
    res.status(201).json(pedidoGuardado);
  } catch (err) {
    res.status(500).json({ mensaje: 'Error al crear pedido', error: err });
  }
};

module.exports = { crearPedido };
