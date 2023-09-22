import express from 'express';
export const app = express();

import cors from 'cors';
app.use(cors());
app.use(express.json());

// Importa las rutas del servidor
import { router as root } from './routes/routes.root';
import { router as apiRoot } from './routes/api/routes.api';

// Asigna las rutas a la aplicación
app.use('/', root);
app.use('/api', apiRoot);
