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

const itemsService = {

  //Item displayed on Item Page
  getOneItem (knex, id){
    return knex('items').where({id: id});
  },

  //Items in a store displayed on store page
  getShopItems (knex, shopId){
    return knex.from('items').select('items.id', 'items.name', 'items.desc', 'items.price', 'items.category', 'items.shop', 'items.picUrl').join('shops', {'items.shop': 'shops.name'}).where({'shops.id': shopId});
  },


  //All Items of a category displayed on shop page
  getAllItems (knex, category) {
    return knex('items').where({category: category});
  },


};

module.exports = itemsService;