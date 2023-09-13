import winston, { createLogger, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import dotenv from 'dotenv';
dotenv.config(); // Carga las variables de entorno desde el archivo .env

const PATH_LOG = process.env.PATH_LOG;

// Define una función de formato personalizada
const customFormat = winston.format.printf(({ timestamp, level, message }) => {
   const dateObj = new Date(timestamp);
   const day = dateObj.getDate().toString().padStart(2, '0');
   const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
   const year = dateObj.getFullYear();
   const hours = dateObj.getHours().toString().padStart(2, '0');
   const minutes = dateObj.getMinutes().toString().padStart(2, '0');
   const seconds = dateObj.getSeconds().toString().padStart(2, '0');
   const milliseconds = dateObj.getMilliseconds();

   const formattedTimestamp = `${month}/${day}/${year} ${hours}:${minutes}:${seconds}.${milliseconds}`;

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
