# nodeJS Typescript skeleton

Proyecto base para desarrollar pequeñas API's con typescript.

Parte de `nodeJS` y `express`, y se ha optado por `yarn` como gestor de paquetes.


# PRIMEROS PASOS: Instalación básica.

Comprueba que tienes intalado en tu sistema nodeJS, npm, yarn y typescript.
``` bash
    node --version
    npm --version
    yarn --version
    tsc --version
```

En linux (debian) puedes instalarlo siguiendo los siguientes pasos:
``` bash
    sudo apt-get -y update
    sudo apt-get -y install nodejs npm
    sudo npm install --global yarn
    sudo npm i typescript -g
    sudo npm i ts-node -g
```

# EJECUCIÓN.

Los modos de ejecución son los siguientes:
- `dev`: Inicia el servidor en modo de desarrollo utilizando Nodemon y establece la variable de entorno NODE_ENV en "development".
- `start`: Inicia el servidor utilizando Nodemon.
- `test`: Ejecuta pruebas utilizando Jest.
- `test:coverage`: Ejecuta pruebas con generación de informe de cobertura utilizando Jest.


# ESTRUCTURA DEL PROYECTO
``` plaintext
    nodeJS-typescript-skeleton/
    ├── node_modules/        # Carpeta de módulos de NodeJS (generada por npm o Yarn)
    ├── src/                 # Código fuente de la aplicación
    │   ├── index.ts         # Punto de entrada principal de la aplicación
    │   ├── routes/          # Rutas de la aplicación
    │   │   ├── api.ts       # Rutas para API
    │   │   └── web.ts       # Rutas para la aplicación web
    │   ├── controllers/     # Controladores de la aplicación
    │   │   ├── api.ts       # Controladores para API
    │   │   └── web.ts       # Controladores para la aplicación web
    │   ├── models/          # Modelos de datos
    │   │   ├── user.ts      # Ejemplo de modelo de usuario
    │   │   └── ...
    │   ├── middleware/      # Middleware de la aplicación
    │   │   ├── auth.ts      # Middleware de autenticación
    │   │   └── ...
    │   ├── config/          # Configuración de la aplicación
    │   │   ├── database.ts  # Configuración de la base de datos
    │   │   └── ...
    ├── public/              # Archivos públicos (HTML, CSS, imágenes, etc.)
    │   ├── index.html       # Ejemplo de página HTML
    │   ├── styles/          # Estilos CSS
    │   ├── images/          # Imágenes
    ├── views/               # Plantillas de vistas (si estás utilizando un motor de plantillas)
    │   ├── home.hbs         # Ejemplo de plantilla Handlebars (o .ejs si usas EJS)
    │   ├── layout.hbs       # Plantilla de diseño (si aplicable)
    │   └── ...
    ├── tests/               # Pruebas unitarias y de integración
    │   ├── unit/            # Pruebas unitarias
    │   ├── integration/     # Pruebas de integración
    ├── package.json         # Archivo de configuración de npm con las dependencias y scripts
    ├── package-lock.json    # Archivo generado por npm para asegurar versiones específicas de paquetes
    ├── tsconfig.json        # Configuración de TypeScript
    ├── README.md            # Documentación del proyecto
    └── .gitignore           # Archivo de configuración para ignorar archivos/directorios en Git

```

