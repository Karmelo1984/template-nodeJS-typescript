import winston, { createLogger, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import dotenv from 'dotenv';
dotenv.config(); // Carga las variables de entorno desde el archivo .env

const PATH_LOG = process.env.PATH_LOG;

// Define una función de formato personalizada
const customFormat = winston.format.printf(({ timestamp, level, message }) => {
   // Combina las tres variables en una cadena
   const formattedTimestamp = new Date(timestamp).toLocaleString();
   return `[${formattedTimestamp}] [${level}]: ${message}`;
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
         level: 'info',
         format: winston.format.combine(winston.format.colorize(), customFormat),
      }),
      new transports.File({
         level: 'info',
         format: customFormat,
         filename: `${PATH_LOG}/app_info.log`,
      }),
      new transports.File({
         level: 'error',
         format: customFormat,
         filename: `${PATH_LOG}/app_error.log`,
      }),
      new DailyRotateFile({
         level: 'debug',
         filename: `${PATH_LOG}/diary/app_%DATE%.log`,
         format: customFormat,
         datePattern: 'YYYY-MM-DD',
         zippedArchive: true,
         maxSize: '750m',
         maxFiles: '14d',
         createSymlink: true,
      }),
   ],
});

export default logger;
