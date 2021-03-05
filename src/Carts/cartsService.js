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

const cartsService = {

  createCartItems (knex, newCartItem) {
    return knex
      .insert(newCartItem)
      .into('carts')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },
  
  getCartItems (knex, userId){
    return knex('carts').where({userId: userId});
  },

  updateCartItems (knex, items){
    return knex('carts').where({ id: items.id })
      .update(items)
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },
  
  deleteCartItems(knex, id) {
    return knex('carts')
      .where({ id: id})
      .del();
  },


};

module.exports = cartsService;