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

//Gets Randomized Items to Display on Front Page

function getRandom (knex) {
  let items = [];
  return knex.from('items').count().then(x => {
    let length = x[0].count;
    console.log(length);
    for(let i = 0; i < 6; i++){
      let number = Math.floor(Math.random() * length);
      while(items.includes(number)){
        number = Math.floor(Math.random() * length);
      }
      items.push(number);
    } 
    console.log(items);
    return knex('items').whereIn('id', items);
  });
}

const itemsService = {

  //Item displayed on Item Page
  getOneItem (knex, id){
    return knex.from('items').select('items.id', 'items.name', 'items.desc', 'items.price', 'items.category', 'items.shop', 'items.picUrl', 'shops.id as shopId').join('shops', {'items.shop': 'shops.name'}).where({'items.id': id});
  },

  //Items in a store displayed on store page
  getShopItems (knex, shopId){
    return knex.from('items').select('items.id', 'items.name', 'items.desc', 'items.price', 'items.category', 'items.shop', 'items.picUrl').join('shops', {'items.shop': 'shops.name'}).where({'shops.id': shopId});
  },

  getRandom: getRandom,

  //All Items of a category displayed on shop page
  getAllItems (knex, category) {
    return knex('items').where({category: category});
  },


};

module.exports = itemsService;