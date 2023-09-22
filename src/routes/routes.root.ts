import { Request, Response } from 'express';
import express from 'express';
const router = express.Router();
export { router };

/**
 * Manejador de ruta GET.
 *
 * @function '/'
 * @description Muestra un mensaje que indica que la aplicación está activa.
 * @param {Request} req Petición HTTP.
 * @param {Response} res Respuesta HTTP.
 */
router.get('/', (req: Request, res: Response) => {
   res.status(200).send('✅ http://localhost:3000');
});
