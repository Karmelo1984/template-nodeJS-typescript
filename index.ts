import dotenv from 'dotenv';
dotenv.config();

// Es importante cargar al inicio de la ejecución el paquete 'dotenv' para que esté disponible desde el principio
import logger from './src/logger';
import { app } from './src/server';

const PORT = process.env.PORT;
const URL = process.env.URL;

/**
 * Función principal para iniciar el servidor.
 *
 * @returns {Promise<void>} Una promesa que se resuelve cuando el servidor se inicia correctamente.
 */
export async function main(): Promise<void> {
   const server = app.listen(PORT, () => {
      const url: string = `${URL}:${PORT}`;

      logger.info(`✅ El servidor se está ejecutando en: ${url}`);
   });

   server.on('error', (error: any) => {
      logger.info(`❌ Error al iniciar el servidor: ${error.message}`);
      server.close(() => {
         process.exit(1); // Salir de la aplicación con un código de error
      });
   });
}

main();
