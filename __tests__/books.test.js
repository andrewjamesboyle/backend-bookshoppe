const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('book routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/:id should return details about a book', async () => {
    const res = await request(app).get('/books/1');
    const bookDetail = {
      id: '1',
      title: 'I Will Teach You To Be Rich',
      released: 2011,
      authors: [{ id: 2, dob: 1989, pob: 'England', name: 'Harry Potter' }] 
    };

    expect(res.body).toEqual(bookDetail);
  });

  it('should return a list of books', async () => {
    const res = await request(app).get('/books');
    expect(res.status).toEqual(200);
    expect(res.body.length).toEqual(3);
  });

  afterAll(() => {
    pool.end();
  });
});

