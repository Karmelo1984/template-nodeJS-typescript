import { app } from './src/server';

/**
 * Función principal para iniciar el servidor.
 *
 * @returns {Promise<void>} Una promesa que se resuelve cuando el servidor se inicia correctamente.
 */
export async function main(): Promise<void> {
   const PORT = process.env.PORT || 3000;
   const URL_DEV = process.env.URL_DEV || 'http://localhost';
   const URL_PROD = process.env.URL_PROD || `${URL_DEV}:${PORT}`;

   app.listen(PORT, () => {
      const url: string = process.env.NODE_ENV === 'development' ? `${URL_DEV}:${PORT}` : URL_PROD;

      console.log(`\n✅ El servidor se está ejecutando en: ${url}`);
   });
}

main();
