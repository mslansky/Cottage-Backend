'use strict';
const { expect } = require('chai');
const { default: contentSecurityPolicy } = require('helmet/dist/middlewares/content-security-policy');
const knex = require('knex');
const supertest = require('supertest');
const app = require('../src/app');
const { createItems, createShop, createUser } = require('./fixtures');
const { API_TOKEN } = require('../src/config');

describe('Carts Endpoints', function () {
  let db;

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL,
    });
    app.set('db', db);
  });
  after('disconnect from db', () => db.destroy());

  before('clean the table', () => db('items').truncate());
  before('clean the table', () => db('shops').truncate());
  before('clean the table', () => db('carts').truncate());
  before('clean the table', () => db('users').truncate());

  afterEach('cleanup', () => db('items').truncate());
  afterEach('cleanup', () => db('shops').truncate());
  afterEach('cleanup', () => db('carts').truncate());
  afterEach('cleanup', () => db('users').truncate());

  describe('Cart Order Flow', () => {
    context('Given there are items and shops in database', () => {

      beforeEach('insert items', () => {
        return db.into('items').insert(createItems());
      });

      beforeEach('insert shops', () => {
        return db.into('shops').insert(createShop());
      });

      beforeEach('insert users', () => {
        return db.into('users').insert(createUser());
      });

      it('Starts with an empty cart', () => {
        return supertest(app)
          .get('/api/cart/1')
          .set({ 'Authorization': `Bearer ${API_TOKEN}` })
          .expect(200, []);
      });

      it('Adds item to cart', () => {
        const cartUpdate = {
          itemId: 1,
          userId: 1,
          quantity: 1
        };
        return supertest(app)
          .post('/api/cart/')
          .set({ 'Authorization': `Bearer ${API_TOKEN}` })
          .send(cartUpdate)
          .expect(200);
      });


      it('Shows item in cart', () => {
        return supertest(app)
          .get('/api/cart/1')
          .set({ 'Authorization': `Bearer ${API_TOKEN}` })
          .expect(200, []);
      });

      it('Updates item in cart', () => {
        const cartUpdate = {
          itemId: 1,
          userId: 1,
          quantity: 2
        };
        return supertest(app)
          .post('/api/cart/cartItem/1')
          .set({ 'Authorization': `Bearer ${API_TOKEN}` })
          .send(cartUpdate)
          .expect(200);
      });

      it('Shows updated item in cart', () => {
        return supertest(app)
          .get('/api/cart/1')
          .set({ 'Authorization': `Bearer ${API_TOKEN}` })
          .expect(200, []);
      });

      it('Removes item from cart', () => {
        return supertest(app)
          .delete('/api/cart/cartItem/1')
          .set({ 'Authorization': `Bearer ${API_TOKEN}` })
          .expect(200);
      });

      it('Shows empty cart', () => {
        return supertest(app)
          .get('/api/cart/1')
          .set({ 'Authorization': `Bearer ${API_TOKEN}` })
          .expect(200, []);
      });
    });
  });
});
