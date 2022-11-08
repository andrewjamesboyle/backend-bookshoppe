const setup = require('../data/setup');
const app = require('../lib/app');
const request = require('supertest');
const pool = require('../lib/utils/pool');

describe('author routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
    
  it('should return a list of authors', async () => {
    const res = await request(app).get('/authors');
    expect(res.status).toEqual(200);
  });
    
  afterAll(() => {
    pool.end();
  });
});

