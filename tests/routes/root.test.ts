import request from 'supertest';
import express, { Request, Response } from 'express';
import { router } from '../../src/routes/root'; // Asegúrate de que la ruta sea importada desde la ubicación correcta

// Crear una instancia de Express
const app = express();
app.use('/', router); // Usa el router en la raíz de la aplicación
const testPort = 3001; // Puerto para pruebas

// Ejemplo de prueba
describe('GET /', () => {
  it('should return a response with status 200 and a message', async () => {
    const response = await request(app).get('/');

    expect(response.status).toBe(200);
    expect(response.text).toBe('✅ http://localhost:3000');
  });
});
