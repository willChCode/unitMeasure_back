const unidadR = require('express').Router();
const { Unidad } = require('../models/unidad');

unidadR.get('/', async (req, res) => {
  const unidades = await Unidad.find({});
  res.status(200).json(unidades);
});

/**POST*/
unidadR.post('/', async (req, res) => {
  const { nombre, abreviacion, equivalente } = req.body;
  const unidad = await Unidad.create({ nombre, abreviacion, equivalente });
  res.status(201).json(unidad);
});

module.exports = { unidadR };
