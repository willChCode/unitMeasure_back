const express = require('express');
const { connectDB } = require('./config/mongo');
// const {un} = require('./routes/unidad_router');
const { unidadR } = require('./routes/unidad');
const { productoR } = require('./routes/producto');
const morgan = require('morgan');

const app = express();
/**CONFIG */
app.use(express.json());
app.use(morgan('dev'));

connectDB();

/**ROUTES */
app.use('/api/unidad', unidadR);
app.use('/api/producto', productoR);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

//hazme un listener
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
