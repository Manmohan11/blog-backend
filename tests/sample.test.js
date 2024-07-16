const request = require('supertest');
const app = require('../src/app');

describe('GET /api', () => {
  it('should return API is working', async () => {
    const res = await request(app).get('/api');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('API is working');
  });
});
