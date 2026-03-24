# Se necesita mongodb-tools para ejecutar este script
mongoimport --uri "mongodb+srv://hairol:hairol@cineplexcluster.xeej5kl.mongodb.net/cineplex_db" \
  --collection cadenas --file cadenas.json --jsonArray

mongoimport --uri "mongodb+srv://hairol:hairol@cineplexcluster.xeej5kl.mongodb.net/cineplex_db" \
  --collection complejos --file complejos.json --jsonArray

mongoimport --uri "mongodb+srv://hairol:hairol@cineplexcluster.xeej5kl.mongodb.net/cineplex_db" \
  --collection salas --file salas.json --jsonArray

mongoimport --uri "mongodb+srv://hairol:hairol@cineplexcluster.xeej5kl.mongodb.net/cineplex_db" \
  --collection peliculas --file peliculas.json --jsonArray