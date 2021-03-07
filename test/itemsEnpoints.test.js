'use strict';
const { expect } = require('chai');
const { default: contentSecurityPolicy } = require('helmet/dist/middlewares/content-security-policy');
const knex = require('knex');
const supertest = require('supertest');
const app = require('../src/app');
const { createItems, createShop, itemJoin } = require('./fixtures');
const { API_TOKEN } = require('../src/config');

describe('items Endpoints', function () {
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

  afterEach('cleanup', () => db('items').truncate());
  afterEach('cleanup', () => db('shops').truncate());

  describe('GET /api/items/1', () => {
    context('Given no items', () => {
      it('responds with 200 and an empty list', () => {
        return supertest(app)
          .get('/api/items/1')
          .set({ 'Authorization': `Bearer ${API_TOKEN}` })
          .expect(200, []);
      });
    });
    context('Given there are items in the database', () => {
      const testitems = createItems();

      beforeEach('insert items', () => {
        return db.into('items').insert(testitems);
      });

      beforeEach('insert shops', () => {
        return db.into('shops').insert(createShop());
      });
      it('responds with 200 and given item', () => {
        return supertest(app)
          .get('/api/items/1')
          .set({ 'Authorization': `Bearer ${API_TOKEN}` })
          .expect(200, itemJoin());
      });
    });
  });

  describe('GET /api/items/shop/101', () => {
    context('Given there are items in the database', () => {
      const testitems = createItems();

      beforeEach('insert items', () => {
        return db.into('items').insert(testitems);
      });

      beforeEach('insert shops', () => {
        return db.into('shops').insert(createShop());
      });

      it('responds with 200 and given item', () => {
        return supertest(app)
          .get('/api/items/shop/101')
          .set({ 'Authorization': `Bearer ${API_TOKEN}` })
          .expect(200, testitems);
      });
    });
  });

  describe('GET /api/items/category/Satisfying', () => {
    context('Given there are items in the database', () => {
      const testitems = createItems();

      beforeEach('insert items', () => {
        return db.into('items').insert(testitems);
      });

      beforeEach('insert shops', () => {
        return db.into('shops').insert(createShop());
      });
      it('responds with 200 and given item', () => {
        return supertest(app)
          .get('/api/items/category/Satisfying')
          .set({ 'Authorization': `Bearer ${API_TOKEN}` })
          .expect(200, testitems);
      });
    });
  });
});