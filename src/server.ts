import express from 'express';
import cors from 'cors';

// Crea una instancia de la aplicación 'express'
export const app = express();

// Habilita el uso de 'CORS' en la aplicación
app.use(cors());

// Habilita el uso de JSON en la aplicación
app.use(express.json());

// Importa las rutas del servidor
import { router as root } from './routes/root';
import { router as apiRoot } from './routes/api/api';

// Asigna las rutas a la aplicación
app.use('/', root);
app.use('/api', apiRoot);
