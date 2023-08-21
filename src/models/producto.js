const { Schema, model } = require('mongoose');

const productoSchema = new Schema({
  nombre: String,
  unidades: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Unidad'
    }
  ],
  stock: {
    gramos: Number,
    kilos: Number
  }
});

const Producto = model('Producto', productoSchema);

module.exports = {
  Producto
};
