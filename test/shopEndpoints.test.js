'use strict';
const { expect } = require('chai');
const { default: contentSecurityPolicy } = require('helmet/dist/middlewares/content-security-policy');
const knex = require('knex');
const supertest = require('supertest');
const app = require('../src/app');
const { createShop } = require('./fixtures');
const { API_TOKEN } = require('../src/config');

describe('Shop Endpoints', function () {
  let db;

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL,
    });
    app.set('db', db);
  });
  after('disconnect from db', () => db.destroy());

  before('clean the table', () => db('shops').truncate());

  afterEach('cleanup', () => db('shops').truncate());

  describe('GET /api/shops/:shopid', () => {
    context('Given no shops', () => {
      it('responds with empty array', () => {
        const shopId = 123456;
        return supertest(app)
          .get(`/api/shops/${shopId}`)
          .set({ 'Authorization': `Bearer ${API_TOKEN}` })
          .expect(200, []);
      });
    });
    context('Given there are shops in the database', () => {
      const testShop = createShop();

      beforeEach('insert shops', () => {
        return db.into('shops').insert(testShop);
      });

      it('responds with 200 and the specified shop', () => {
        const shopId = 101;
        const expectedShop = testShop[0];
        return supertest(app)
          .get(`/api/shops/${shopId}`)
          .set({ 'Authorization': `Bearer ${API_TOKEN}` })
          .expect(200, [expectedShop]);
      });
    });
  });
});