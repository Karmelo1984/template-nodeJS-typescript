# nodeJS Typescript skeleton

Proyecto base para desarrollar pequeñas API's con typescript.

Parte de `nodeJS` y `express`, y se ha optado por `yarn` como gestor de paquetes.

# PRIMEROS PASOS: Instalación básica.

Comprueba que tienes intalado en tu sistema nodeJS, npm, yarn y typescript.

```bash
    node --version  --> `v18.17.1`
    npm --version   --> `v9.6.7`
    yarn --version  --> `v1.22.19`
    tsc --version   --> `v5.2.2`
```

En linux (debian) puedes instalarlo siguiendo los siguientes pasos:

```bash
    sudo apt-get -y update
    sudo apt-get -y install nodejs npm
    sudo npm install --global yarn
    sudo npm i typescript -g
    sudo npm i ts-node -g
```

Para que funcione los formateadores automáticos de código, debes tener instalado en Visual Studio Code, Prettier.

# EJECUCIÓN.

Los modos de ejecución son los siguientes:

-  `dev`: Inicia el servidor en modo de desarrollo utilizando Nodemon y establece la variable de entorno NODE_ENV en
   "development".
-  `start`: Inicia el servidor utilizando Nodemon.
-  `test`: Ejecuta pruebas utilizando Jest.
-  `test:coverage`: Ejecuta pruebas con generación de informe de cobertura utilizando Jest.

# ESTRUCTURA DEL PROYECTO

```text
    nodeJS-typescript-skeleton/
    ├── node_modules/        # Carpeta de módulos de NodeJS (generada por npm o Yarn)
    ├── src/
    │   ├── bot.ts               # Archivo principal del bot
    │   ├── comandos/            # Carpeta para manejar comandos
    │   │   ├── comando1.ts      # Lógica del comando 1
    │   │   ├── comando2.ts      # Lógica del comando 2
    │   │   └── ...
    │   ├── eventos/             # Carpeta para manejar eventos
    │   │   ├── evento1.ts       # Lógica del evento 1
    │   │   ├── evento2.ts       # Lógica del evento 2
    │   │   └── ...
    │   ├── utilidades/          # Carpeta para utilidades compartidas
    │   │   ├── traductor.ts     # Lógica para traducir texto
    │   │   ├── baseDeDatos.ts   # Lógica para interactuar con una base de datos
    │   │   └── ...
    │   ├── integraciones/       # Carpeta para integraciones con servicios externos
    │   │   ├── clima.ts         # Lógica para obtener pronósticos del clima
    │   │   ├── noticias.ts      # Lógica para obtener noticias
    │   │   └── ...
    │   ├── entretenimiento/         # Carpeta para juegos y entretenimiento
    │   │   ├── adivinanzas.ts       # Lógica para juegos de adivinanzas
    │   │   ├── trivia.ts            # Lógica para juegos de trivia
    │   │   └── ...
    │   ├── gestionGrupos/           # Carpeta para gestión de grupos y canales
    │   │   ├── moderacion.ts        # Lógica de moderación de grupos
    │   │   ├── bienvenida.ts        # Lógica de bienvenida a nuevos miembros
    │   │   └── ...
    │   ├── inteligenciaArtificial/  # Carpeta para inteligencia artificial y procesamiento de lenguaje natural
    │   │   ├── chatbot.ts           # Lógica de un chatbot basado en IA
    │   │   └── ...
    │   ├── encuestas/                # Carpeta para manejar encuestas y votaciones
    │   │   ├── encuestas.ts          # Lógica para crear y gestionar encuestas
    │   │   └── ...
    │   ├── alertas/                  # Carpeta para enviar alertas y recordatorios
    │   │   ├── alertas.ts            # Lógica para enviar alertas programadas
    │   │   └── ...
    │   ├── generacionContenido/      # Carpeta para la generación de contenido dinámico
    │   │   ├── contenido.ts          # Lógica para generar contenido dinámico
    │   │   └── ...
    │   └── ...
    ├── package.json         # Archivo de configuración de npm con las dependencias y scripts
    ├── package-lock.json    # Archivo generado por npm para asegurar versiones específicas de paquetes
    ├── tsconfig.json        # Configuración de TypeScript
    ├── README.md            # Documentación del proyecto
    └── .gitignore           # Archivo de configuración para ignorar archivos/directorios en Git

```

# Contenido .prettier.json

```json
{
   "arrowParens": "always", // Siempre utiliza paréntesis alrededor de los parámetros de funciones flecha.
   "bracketSpacing": true, // Coloca espacios en blanco alrededor de las llaves en objetos.
   "endOfLine": "lf", // Usa saltos de línea Unix (LF) en lugar de saltos de línea Windows (CRLF).
   "jsxBracketSameLine": false, // Coloca el corchete de apertura de JSX en una línea nueva.
   "jsxSingleQuote": false, // Utiliza comillas dobles en lugar de comillas simples en JSX.
   "printWidth": 120, // Establece la longitud máxima de línea en 120 caracteres.
   "proseWrap": "always", // Envuelve siempre el texto en markdown y comentarios.
   "quoteProps": "as-needed", // Cita las propiedades de los objetos solo cuando sea necesario.
   "requirePragma": false, // No requiere un comentario especial para formatear.
   "semi": true, // Siempre añade punto y coma al final de las declaraciones.
   "singleQuote": true, // Utiliza comillas simples en lugar de comillas dobles.
   "tabWidth": 2, // Establece el tamaño de la sangría en 2 espacios.
   "trailingComma": "all", // Coloca comas finales en objetos y arrays multilinea.
   "useTabs": false // Utiliza espacios en lugar de tabuladores.
}
```

# Uso del logger

La aplicación implementa un logger llamado Winston.

Ofrece varios niveles de registro que permiten controlar la gravedad de los mensajes que se registran. Estos niveles son
estándar en la mayoría de los sistemas de registro y se utilizan para indicar la importancia de un mensaje.

Aquí están los niveles de registro predeterminados en Winston, junto con sus descripciones:

-  `error:` El nivel más alto de gravedad. Se utiliza para mensajes de error críticos que pueden causar un fallo en la
   aplicación.

-  `warn:` Se utiliza para mensajes que indican posibles problemas o advertencias, pero que no son críticos.

-  `info:` Se utiliza para mensajes informativos que proporcionan detalles sobre el funcionamiento de la aplicación.

-  `http:` Se utiliza para mensajes relacionados con solicitudes HTTP y respuestas. Es menos común y no se usa en todos
   los proyectos.

-  `verbose:` Se utiliza para mensajes detallados que pueden ser útiles para depurar la aplicación.

-  `debug:` Se utiliza para mensajes de depuración que proporcionan información detallada para el desarrollo y la
   depuración.

-  `silly:` El nivel más bajo de gravedad. Se utiliza para mensajes extremadamente detallados y a menudo se usa solo
   durante el desarrollo y la depuración.

Más información en [github - winston](https://github.com/winstonjs/winston).
