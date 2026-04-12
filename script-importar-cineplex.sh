# Se necesita mongodb-tools para ejecutar este script
mongoimport --uri "mongodb+srv://user:password@cineplexcluster.xeej5kl.mongodb.net/cineplex_db" \
  --collection cadenas --file cadenas.json --jsonArray

mongoimport --uri "mongodb+srv://user:password@cineplexcluster.xeej5kl.mongodb.net/cineplex_db" \
  --collection complejos --file complejos.json --jsonArray

mongoimport --uri "mongodb+srv://user:password@cineplexcluster.xeej5kl.mongodb.net/cineplex_db" \
  --collection salas --file salas.json --jsonArray

mongoimport --uri "mongodb+srv://user:password@cineplexcluster.xeej5kl.mongodb.net/cineplex_db" \
  --collection peliculas --file peliculas.json --jsonArray

# Avance 2
mongoimport --uri "mongodb+srv://user:password@cineplexcluster.xeej5kl.mongodb.net/cineplex_db" \
  --collection funciones --file funciones.json --jsonArray

mongoimport --uri "mongodb+srv://user:password@cineplexcluster.xeej5kl.mongodb.net/cineplex_db" \
  --collection horarios --file horarios.json --jsonArray

mongoimport --uri "mongodb+srv://user:password@cineplexcluster.xeej5kl.mongodb.net/cineplex_db" \
  --collection tarifas --file tarifas.json --jsonArray

mongoimport --uri "mongodb+srv://user:password@cineplexcluster.xeej5kl.mongodb.net/cineplex_db" \
  --collection asientos --file asientos.json --jsonArray

mongoimport --uri "mongodb+srv://user:password@cineplexcluster.xeej5kl.mongodb.net/cineplex_db" \
  --collection promociones --file promociones.json --jsonArray

mongoimport --uri "mongodb+srv://user:password@cineplexcluster.xeej5kl.mongodb.net/cineplex_db" \
  --collection clientes --file clientes.json --jsonArray

mongoimport --uri "mongodb+srv://user:password@cineplexcluster.xeej5kl.mongodb.net/cineplex_db" \
  --collection reservas --file reservas.json --jsonArray

mongoimport --uri "mongodb+srv://user:password@cineplexcluster.xeej5kl.mongodb.net/cineplex_db" \
  --collection boletos --file boletos.json --jsonArray