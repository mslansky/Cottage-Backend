'use strict';
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const authRouter = require('./Auth/auth-router');
const itemsRouter = require('./Items/itemsRouter');
const shopsRouter = require('./Shops/shopsRouter');
const userRouter = require('./User/user-router');
const cartsRouter = require('./Carts/cartsRouter');
const errorHandler = require('./middleware/error-handler');

const app = express();

app.use(morgan((NODE_ENV === 'production') ? 'tiny' : 'common', {
  skip: () => NODE_ENV === 'test'
}));

app.use(cors());
app.use(helmet());

app.use('/api/auth', authRouter);
app.use('/api/items', itemsRouter);
app.use('/api/shops', shopsRouter);
app.use('/api/user', userRouter);
app.use('/api/cart', cartsRouter);

app.use(errorHandler);


app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (process.env.NODE_ENV === 'production') {
    response = { error: { message: 'server error' } };
  } else {
    console.error(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});



module.exports = app;