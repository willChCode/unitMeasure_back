const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/pruebaUnidad';

const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log('Database connected');
  } catch (error) {
    console.log(error);
    console.log('Database NOT connected');
  }
};

module.exports = { connectDB };
