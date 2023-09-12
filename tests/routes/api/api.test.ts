import request from 'supertest';
import express, { Request, Response } from 'express';
import { router } from '../../../src/routes/api/api'; // Asegúrate de que la ruta sea importada desde la ubicación correcta

// Crear una instancia de Express
const app = express();
app.use('/api', router); // Usa el router en la ruta '/api'
const testPort = 3001; // Puerto para pruebas

describe('GET /api', () => {
  it('should return a response with status 200 and a message', async () => {
    const response = await request(app).get('/api');

    expect(response.status).toBe(200);
    expect(response.text).toBe('✅ http://localhost:3000/api');
  });

  // Puedes agregar más pruebas según la funcionalidad de tu ruta '/api'
});