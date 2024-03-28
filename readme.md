# Repository Pattern for SAP

## Descripción

El proyecto establece un marco de Clean Architecture para abstraer las consultas a SAP utilizando el patrón Repository.
Se utiliza la capa de servicios de SAP Service Layer, por lo cual esta debe estar habilitada en primera instancia por el lado de SAP.
Se utiliza como lenguaje base TypeScript 
Se realizan pruebas unitarias con Jest

## Environment

Para configurar el entorno de desarrollo, crea el archivo .env en la raíz del proyecto con las siguientes variables de entorno:

```sh
SL_HOST=https://your-instance.service-layer.com:50000
SL_COMPANY_DB=YOUR_COMPANY_DB_NAME
SL_USER=YOUR_USERNAME
SL_PASSWORD=YOUR_PASSWORD
SL_LANGUAGE=25
```

Asegúrate de reemplazar your-instance.service-layer.com con la URL de tu instancia de SAP Service Layer, YOUR_COMPANY_DB_NAME con el nombre de tu base de datos de empresa, YOUR_USERNAME con tu nombre de usuario de SAP, y YOUR_PASSWORD con tu contraseña de SAP. La variable SL_LANGUAGE especifica el código de idioma para las solicitudes al servicio de SAP.

## Testing

Para ejecutar las pruebas con Jest, utiliza el siguiente comando:

```sh
npm test
```

Este comando ejecutará todas las pruebas unitarias definidas en el proyecto y proporcionará resultados detallados sobre la cobertura y el estado de las pruebas. Asegúrate de tener Jest instalado en tu entorno de desarrollo antes de ejecutar las pruebas.