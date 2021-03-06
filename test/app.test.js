'use strict';
const { expect } = require('chai');
const app = require('../src/app');
const supertest = require('supertest');
const { API_TOKEN } = require('../src/config');

describe('Express App', () => {
  it('GET / responds with 200 containing "Hello, world!"', () => {
    return supertest(app)
      .get('/')
      .set({ 'Authorization': `Bearer ${API_TOKEN}` })
      .expect(200, 'Hello, world!');
  });
});