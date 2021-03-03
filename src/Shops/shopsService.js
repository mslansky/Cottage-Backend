'use strict';

function clean(obj) {
  //exclude all empty attributes
  for (var propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined || obj[propName] === '') {
      delete obj[propName];
    }
  }
  return obj;
}

const shopsService = {

  //gets one shop
  getOneShop (knex, id){
    return knex('shops').where({id: id});
  },

};

module.exports = shopsService;