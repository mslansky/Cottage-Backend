'use strict';
const express = require('express');
const shopsService = require('./shopsService');
const shopsRouter = express.Router();


//gets shop to display when shop is selected
shopsRouter
  .route('/:shopsid')
  .get((req, res, next) => {
    shopsService.getOneShop(req.app.get('db'), req.params.shopsid)
      .then((shops) => {
        res.json(shops);
      });
  });
  


module.exports = shopsRouter;