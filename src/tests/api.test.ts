import request from 'supertest';
import { app } from '../index';

describe('API Tests', () => {
  it('should return 200 for GET /api/example', async () => {
    const response = await request(app).get('/api/example');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
  });

  it('should handle errors correctly', async () => {
    const response = await request(app).get('/api/nonexistent');
    expect(response.status).toBe(404); // This should now pass
  });  
})