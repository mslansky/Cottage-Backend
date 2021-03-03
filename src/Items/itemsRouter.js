'use strict';
const express = require('express');
const itemsService = require('./itemsService');
const itemsRouter = express.Router();




itemsRouter
  .route('/:itemsid')
  .get((req, res, next) => {
    itemsService.getOneItem(req.app.get('db'), req.params.itemsid)
      .then((items) => {
        res.json(items);
      });
  });
  
  

itemsRouter
  .route('/shopname/:shopname')
  .get((req, res, next) => {
    console.log(req.params.shopname);
    itemsService.getShopItems(req.app.get('db'), req.params.shopname)
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
