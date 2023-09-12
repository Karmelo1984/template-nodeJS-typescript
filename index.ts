import { app } from './src/server';

/**
 * Función principal que inicializa el servidor.
 *
 * @public
 * @static
 * @async
 */
export async function main(): Promise<void> {

   // Inicializa el servidor en el puerto 3000
   const PORT = process.env.PORT || 3000;
   const URL_DEV = process.env.URL_DEV || "http://localhost";
   const URL_PROD = process.env.URL_PROD || `${URL_DEV}:${PORT}`;

   app.listen(PORT, () => {
      // Obtiene la URL del servidor según si está en modo pruebas o en producción
      const url: string =
         process.env.NODE_ENV === "development" ? `${URL_DEV}:${PORT}` : URL_PROD;

      // Imprime la URL del servidor en la consola
      console.log(`\n✅ El servidor se está ejecutando en: ${url}`);
   });
}

// Ejecuta la función principal
main();