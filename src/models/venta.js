const { model, schema } = require('mongoose');

const ventasSchema = new schema({
  productos: [
    {
      type: schema.Types.ObjectId,
      ref: 'Producto'
    }
  ]
});

const Venta = model('Venta', ventasSchema);

module.exports = {
  Venta
};
