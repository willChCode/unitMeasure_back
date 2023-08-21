const productoR = require('express').Router();

const { Producto } = require('../models/producto');

productoR.get('/', async (req, res) => {
  const productos = await Producto.find({}).populate('unidades');
  res.status(200).json(productos);
});

/**POST */
productoR.post('/', async (req, res) => {
  try {
    const { nombre, unidades, stock } = req.body;
    const producto = await Producto.create({ nombre, unidades, stock });
    res.status(201).json(producto);
  } catch (err) {
    console.log(err);
  }
});

module.exports = { productoR };
