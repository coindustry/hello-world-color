const request = require('supertest');
const app = require('./index'); // Import the app instance

describe('GET /', () => {
    it('responds with Hello World', async () => {
        const response = await request(app).get('/');
        expect(response.text).toContain('Hello World');
    });
});
