'use strict';
const express = require('express');
const itemsService = require('./itemsService');
const itemsRouter = express.Router();


itemsRouter
  .route('/random')
  .get((req, res, next) => {
    itemsService.getRandom(req.app.get('db'))
      .then((items) => {
        res.json(items);
      });
  });

itemsRouter
  .route('/:itemsid')
  .get((req, res, next) => {
    itemsService.getOneItem(req.app.get('db'), req.params.itemsid)
      .then((items) => {
        res.json(items);
      });
  });


  
  

itemsRouter
  .route('/shop/:shopid')
  .get((req, res, next) => {
    console.log(req.params.shopid);
    itemsService.getShopItems(req.app.get('db'), req.params.shopid)
      .then((items) => {
        console.log(items);
        res.json(items);
      });
  });
  

itemsRouter
  .route('/category/:category')
  .get((req, res, next) => {
    console.log(req.params.category);
    itemsService.getAllItems(req.app.get('db'), req.params.category)
      .then((items) => {
        console.log(items);
        res.json(items);
      });
  });
  

module.exports = itemsRouter;
