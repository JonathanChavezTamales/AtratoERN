# Atrato ERN

## Servidor

- Para probarlo se debe crear la base de datos `atratoDB` en MySQL. Se puede usar el cliente Sequel Pro. El usuario debe ser `atrato` y la contraseña debe ser la que sea.

- Declarar la contraseña como la _environment variable_ `DB_PASSWORD`.

- Corra el servidor con `npm start` en la carpeta /server/, correrá un nodemon. Ya funciona el API. Usted puede ahora crear pruebas con Postman. Corre por defecto en el puerto 4000, sin embargo usted lo puede cambiar con la environment variable /PORT/.

## Cliente

- Para correr el cliente vaya a /client/ y haga `npm start`, este corre por defecto en el puerto 3000.
