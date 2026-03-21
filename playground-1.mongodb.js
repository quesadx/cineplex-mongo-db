/* global use, db */
// MongoDB Playground - Cineplex Database Setup

const database = 'cineplex_db';
use(database);

db.createCollection('cadenas');
db.createCollection('complejos');
db.createCollection('salas');
db.createCollection('peliculas');

console.log('Base de datos "cineplex_db" y 4 colecciones creadas exitosamente!');
