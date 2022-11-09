const setup = require('../data/setup');
const app = require('../lib/app');
const request = require('supertest');
const pool = require('../lib/utils/pool');

describe('author routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  
  it('should return details about an author', async () => {
    const res = await request(app).get('/authors/1');
    const author = {
      id: '1',
      name: 'J.R. Tolkien',
      dob: 1909,
      pob: 'Hogwarts',
      books: [{
        id: 3,
        title: 'Discipline Equals Freedom',
        released: 2014
      }]
    };
    expect(res.body).toEqual(author);
  });

  it('should return a list of authors', async () => {
    const res = await request(app).get('/authors');
    expect(res.status).toEqual(200);
    expect(res.body.length).toEqual(3);
  });
    
  afterAll(() => {
    pool.end();
  });
});

