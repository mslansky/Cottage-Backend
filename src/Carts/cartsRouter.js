'use strict';
const express = require('express');
const cartsService = require('./cartsService');
const cartsRouter = express.Router();




cartsRouter
  .route('/:userId')
  .get((req, res, next) => {
    cartsService.getCartItems(req.app.get('db'), req.params.userId)
      .then((carts) => {
        res.json(carts);
      });
  })
  .post((req, res, next) => {
    cartsService.createCartItems(req.app.get('db'), req.body)
      .then((carts) => {
        res.json(carts);
      })
      .catch((error) => {
        res.json(error);
      });
  });
  

cartsRouter
  .route('/cartItem/:id')
  .delete((req, res, next) => {
    cartsService.deleteCartItems(req.app.get('db'), req.params.id)
      .then((carts) =>{
        res.json(carts);
      })
      .catch((error) => {
        res.json(error);
      });
  })
  .post((req, res, next) => {
    cartsService.updateCartItems(req.app.get('db'), req.body)
      .then((carts) => {
        res.json(carts);
      })
      .catch((error) => {
        res.json(error);
      });
  });
  

module.exports = cartsRouter;