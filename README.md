# Proyecto CINEPLEX - Modelo de Base de Datos MongoDB

Este proyecto documenta el diseño y la implementación de una base de datos NoSQL para un sistema de reservaciones de cines.

## Qué aprendí

- A diseñar colecciones en MongoDB para representar datos de cines sin usar tablas relacionales, aprovechando documentos y subdocumentos.
- A usar MongoDB Atlas y herramientas como Compass para crear, visualizar y validar el modelo de datos.
- Que en bases de datos no relacionales es importante cuidar la redundancia y estructurar los arrays correctamente para consultas eficientes.
- Que los datos transaccionales (reservas, asientos, boletos) deben separarse de los datos de catálogo (películas, salas, cadenas) para mantener claridad.
- Que definir formatos claros para estados y horarios facilita el uso de MongoDB y previene inconsistencias.

## Qué se entregó

- Modelo en `cineplex-dbdiagram.dbml` con las colecciones necesarias para el sistema.
- Diseño de colecciones para `cadenas`, `complejos`, `salas`, `películas`, `funciones`, `horarios`, `tarifas`, `asientos`, `reservas`, `boletos`, `clientes` y `promociones`.
- Análisis de posibles inconsistencias y recomendaciones para un esquema MongoDB más limpio.

## Por qué es útil este enfoque

Este enfoque muestra cómo crear una base de datos NoSQL práctica en MongoDB, pensando en la escalabilidad y en facilitar el trabajo con Atlas y Compass en lugar de modelos relacionales tradicionales.
