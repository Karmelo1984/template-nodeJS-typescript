import winston, { createLogger, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

const PATH_LOG = process.env.PATH_LOG;
const LOG_NAME = process.env.LOG_NAME;
const HEAD_LEN = parseInt(process.env.HEAD_LEN ?? '25');

// Define una función de formato personalizada
const customFormat = winston.format.printf(({ timestamp, level, message }) => {
   const dateObj = new Date(timestamp);
   const formatter = new Intl.DateTimeFormat('es-ES', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
   });
   const formattedTimestamp = formatter.format(dateObj) + `.${dateObj.getMilliseconds().toString().padStart(3, '0')}`;

   const [cabecera, cuerpo] = dividirString(message, '  -->  ');

   level = centrarTexto(level, 16).replace(/\s+/g, ' ');

   message =
      cabecera.length == 0
         ? cuerpo
         : `[${centrarTexto(cabecera, HEAD_LEN)}]  -->  ${cuerpo.replace(/\s+/g, ' ').trim().slice(0, 500)}`;

   return formatLogEntry(formattedTimestamp, level, message);
});

// Configura el registro de Winston
const logger = createLogger({
   level: 'info',
   format: winston.format.combine(
      winston.format.timestamp(), // Agrega una marca de tiempo
      customFormat, // Utiliza la función de formato personalizada
   ),
   transports: [
      new transports.Console({
         level: 'debug',
         format: winston.format.combine(winston.format.colorize(), customFormat),
      }),
      new transports.File({
         level: 'info',
         format: customFormat,
         filename: `${PATH_LOG}/${LOG_NAME}_info.log`,
      }),
      new transports.File({
         level: 'error',
         format: customFormat,
         filename: `${PATH_LOG}/${LOG_NAME}_error.log`,
      }),
      new DailyRotateFile({
         level: 'debug',
         filename: `${PATH_LOG}/diary/${LOG_NAME}_%DATE%.log`,
         format: customFormat,
         datePattern: 'YYYY-MM-DD',
         zippedArchive: true,
         maxSize: '250m',
         maxFiles: '14d',
         createSymlink: false,
      }),
   ],
});

logger.error('* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *');
logger.error('* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *');
logger.error('* * * * * * * * * * * * * * NEW EXECUTION * * * * * * * * * * * * * *');
logger.error('* * * * * * * * * * * * * * NEW EXECUTION * * * * * * * * * * * * * *');
logger.error('* * * * * * * * * * * * * * NEW EXECUTION * * * * * * * * * * * * * *');
logger.error('* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *');
logger.error('* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *');
export default logger;

/**
 * Divide una cadena de texto en dos partes en función de la primera ocurrencia de un patrón.
 *
 * @param {string} texto         - La cadena de texto que se va a dividir.
 * @param {string} patron        - El patrón por el cual se va a dividir el texto.
 * @returns {[string, string]}   - Un arreglo con dos elementos: la primera parte antes del patrón y la segunda parte después del patrón.
 * Si el patrón no se encuentra en el texto, la primera parte será un string vacío y la segunda parte será el texto completo.
 */
function dividirString(texto: string, patron: string): [string, string] {
   const index = texto.indexOf(patron); // Encontrar la primera ocurrencia del patrón

   if (index !== -1) {
      const parte1 = texto.substring(0, index);
      const parte2 = texto.substring(index + patron.length);
      return [parte1, parte2];
   } else {
      // Si no se encuentra el patrón, parte[0] es un string vacío y parte[1] es el texto completo
      return ['', texto];
   }
}

/**
 * Centra un texto en una cadena de longitud total dada, añadiendo caracteres de relleno en los extremos.
 *
 * @param {string} texto         - El texto que se va a centrar.
 * @param {number} maxLen        - La longitud total deseada de la cadena centrada.
 * @param {string} [relleno=' '] - El carácter de relleno utilizado para completar la cadena.
 * @returns {string} Una cadena centrada con el texto original y caracteres de relleno en los extremos.
 * Si la longitud total es igual o menor que la longitud del texto original, el texto original se devuelve sin cambios.
 */
function centrarTexto(texto: string, maxLen: number, relleno: string = ' '): string {
   const espacioExtra = maxLen - texto.length;
   if (espacioExtra <= 0) {
      return texto;
   }

   const espacioIzquierda = Math.floor(espacioExtra / 2);

   const textoCentrado = texto.padStart(texto.length + espacioIzquierda, relleno).padEnd(maxLen, relleno);

   return textoCentrado;
}

/**
 * Formatea una entrada de registro con un formato específico.
 *
 * @param {string} timestamp     - El timestamp de la entrada de registro.
 * @param {string} level         - El nivel de registro (por ejemplo, "info", "error").
 * @param {string} message       - El mensaje de la entrada de registro.
 * @returns {string} La entrada de registro formateada con el formato que tendrá el log.
 */
function formatLogEntry(timestamp: string, level: string, message: string): string {
   const formattedTimestamp = timestamp.padEnd(26, ' ');
   const formattedLevel = level.padEnd(7, ' ');

   return `[${formattedTimestamp}] [${formattedLevel}] ${message}`;
}
