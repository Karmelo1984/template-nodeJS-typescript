import { Request, Response } from 'express';
import express from 'express';
const router = express.Router();
export { router };

/**
 * Manejador de ruta GET.
 *
 * @function '/api'
 * @description Muestra información sobre la api.
 * @param {Request} req Petición HTTP.
 * @param {Response} res Respuesta HTTP.
 */
router.get('/', (req: Request, res: Response) => {
   res.send('✅ http://localhost:3000/api');
});
