/**
 * Pruebas de integración para la ruta principal.
 */
import request from 'supertest';
import express, { Request, Response } from 'express';
import { router } from '../../src/routes/root';

// Crear una instancia de Express para las pruebas
const app = express();
app.use('/', router);

/**
 * Describe las pruebas para la ruta GET '/'.
 */
describe('GET /', () => {
   /**
    * Prueba que debería devolver una respuesta con estado 200 y un mensaje.
    */
   it('should return a response with status 200 and a message', async () => {
      const response = await request(app).get('/');

      // Verificar que el estado de la respuesta sea 200
      expect(response.status).toBe(200);

      // Verificar que el texto de la respuesta sea el mensaje esperado
      expect(response.text).toBe('✅ http://localhost:3000');
   });
});
