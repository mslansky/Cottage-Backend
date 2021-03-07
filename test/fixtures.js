'use strict';
function createItems() {
  return [
    {
      'id': 1,
      'name': 'Strawberry Lime Kombucha',
      'desc': 'This bubbly kombucha has strong strawberry flavors and biting lime zest! If you like something strong to reach for on a hot day, this is it!',
      'price': '$14.99',
      'category': 'Satisfying',
      'shop': 'Maryanne Mixes',
      'picUrl': 'https://images.unsplash.com/photo-1497534446932-c925b458314e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZHJpbmtzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      'id': 2,
      'name': 'Strawberry Mint Lemonade',
      'desc': 'Minty fresh with plenty of strawberry! This is the perfect drink to take with you on a picnic.',
      'price': '$12.99',
      'category': 'Satisfying',
      'shop': 'Maryanne Mixes',
      'picUrl': 'https://images.unsplash.com/photo-1560508179-b2c9a3f8e92b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGRyaW5rc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      'id': 3,
      'name': 'Carrot Juice',
      'desc': 'Looking for something healthy to get your day started? Want to change up your Bloody Mary? Try this ultra fresh carrot juice, you wont be disappointed.',
      'price': '$12.99',
      'category': 'Satisfying',
      'shop': 'Maryanne Mixes',
      'picUrl': 'https://images.unsplash.com/photo-1555940726-1c297abcc1f1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTR8fGRyaW5rc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      'id': 4,
      'name': 'Classic Refreshing Lemonade',
      'desc': 'This lemonade is your entire childhood packed into one 12 oz. bottle. Sweet, tangy, and as refreshing as it comes.',
      'price': '$7.99',
      'category': 'Satisfying',
      'shop': 'Maryanne Mixes',
      'picUrl': 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fGRyaW5rc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ];
}

function itemJoin() {
  return [ {
    id: 1,
    name: 'Strawberry Lime Kombucha',
    desc: 'This bubbly kombucha has strong strawberry flavors and biting lime zest! If you like something strong to reach for on a hot day, this is it!',
    price: '$14.99',
    category: 'Satisfying',
    shop: 'Maryanne Mixes',
    picUrl: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZHJpbmtzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    shopId: 101
  } ];
}

function createShop() {
  return [
    {
      'id': 101,
      'name': 'Maryanne Mixes',
      'desc': 'Hi! Welcome to Maryanne Mixes, we are located in Seattle and we love a refreshing drink, dont you? All of our drinks are made fresh and on-location. They are all sold in 12 oz glass bottles! If you love your drink and you love the environment you can send the bottles back and receive two free drinks on your next order!',
      'picUrl': 'https://images.unsplash.com/photo-1592154016856-52ac296fc27a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fGp1aWNlfGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    }
  ];
}

function createUser() {
  return [
    {
      id: 1,
      username: 'Test',
      password: '',
      name: 'Test'
    }
  ];
}


module.exports = {
  createItems,
  itemJoin,
  createShop,
  createUser
};