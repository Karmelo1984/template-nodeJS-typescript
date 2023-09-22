import dotenv from 'dotenv';
dotenv.config();

import TelegramBot from 'node-telegram-bot-api';
import logger from './logger';
import axios from 'axios';

import { CustomError, isCustomError } from './types/apiSearchResponse/CustomError';
import { SearchResponse, isSearchResponse } from './types/apiSearchResponse/SearchResponse';

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const token = process.env.TOKEN;

if (token === undefined) {
   logger.error('El token de acceso no está configurado en las variables de entorno.');
   process.exit(1);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const bot = new TelegramBot(token, { polling: true });

const comandosDisponibles = {
   '/start': 'Iniciar la conversación',
   '/ayuda': 'Mostrar ayuda',
   '/menu': 'Abrir el menú principal',
   // Agrega más comandos y descripciones aquí
};

// Escucha y responde a cualquier tipo de mansaje
// bot.on('message', (msg) => {
//    const chatId = msg.chat.id;
//
//    bot.sendMessage(chatId, 'Received your message');
// });

bot.onText(/\/echo (.+)/, (msg, match) => {
   const chatId = msg.chat.id;

   if (match) {
      const resp = match[1];

      bot.sendMessage(chatId, resp);
   }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

bot.onText(/\/busca (.+)/, async (msg, match) => {
   const chatId = msg.chat.id;
   console.log('asdf');
   if (match) {
      const query = match[1];
      // URL de la API que deseas consultar
      const apiUrl = `http://localhost:3000/api/search?lang=es&query=${query}`;

      console.log(apiUrl);

      // Realizar una solicitud GET a la API
      await axios
         .get(apiUrl)
         .then((response) => {
            const responseData: CustomError | SearchResponse = response.data;

            if (isSearchResponse(responseData)) {
               responseData.map((pelicula: { titulo: string; link: string; anyo: number }, index: number) => {
                  bot.sendMessage(chatId, `(${pelicula.anyo}). [${pelicula.titulo}](${pelicula.link}`);
               });
            } else if (isCustomError(responseData)) {
               console.log(responseData.message);

               bot.sendMessage(chatId, `${responseData.message}`);
            }
         })
         .catch((error) => {
            // Manejar errores en caso de que la solicitud a la API falle
            console.error(error);
         });
      console.log('termine');
   }
});

logger.info('El bot está funcionando...');
