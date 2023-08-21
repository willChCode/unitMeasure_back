const { Schema, model } = require('mongoose');

const unidadSchema = new Schema({
  nombre: String,
  abreviatura: String,
  equivalente: Number
});

const Unidad = model('Unidad', unidadSchema);

module.exports = {
  Unidad
};
