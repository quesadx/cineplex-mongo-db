# Se necesita mongodb-tools para ejecutar este script
# IMPORTANTE: Set your MongoDB URI with credentials before running this script
# You can export it as: export MONGODB_URI="mongodb+srv://<user>:<password>@cineplexcluster.xeej5kl.mongodb.net/cineplex_db"

mongoimport --uri "${MONGODB_URI}" \
  --collection cadenas --file cadenas.json --jsonArray

mongoimport --uri "${MONGODB_URI}" \
  --collection complejos --file complejos.json --jsonArray

mongoimport --uri "${MONGODB_URI}" \
  --collection salas --file salas.json --jsonArray

mongoimport --uri "${MONGODB_URI}" \
  --collection peliculas --file peliculas.json --jsonArray

# Avance 2
mongoimport --uri "${MONGODB_URI}" \
  --collection funciones --file funciones.json --jsonArray

mongoimport --uri "${MONGODB_URI}" \
  --collection horarios --file horarios.json --jsonArray

mongoimport --uri "${MONGODB_URI}" \
  --collection tarifas --file tarifas.json --jsonArray

mongoimport --uri "${MONGODB_URI}" \
  --collection asientos --file asientos.json --jsonArray

mongoimport --uri "${MONGODB_URI}" \
  --collection promociones --file promociones.json --jsonArray

mongoimport --uri "${MONGODB_URI}" \
  --collection clientes --file clientes.json --jsonArray

mongoimport --uri "${MONGODB_URI}" \
  --collection reservas --file reservas.json --jsonArray

mongoimport --uri "${MONGODB_URI}" \
  --collection boletos --file boletos.json --jsonArray