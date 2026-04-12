#!/bin/bash

# Se necesita mongodb-tools para ejecutar este script
# IMPORTANTE: La idea es exportar la URI con: export MONGODB_URI="mongodb+srv://<user>:<password>@cineplexcluster.xeej5kl.mongodb.net/cineplex_db"

# Verificar que MONGODB_URI esté configurada
if [ -z "${MONGODB_URI}" ]; then
  echo "Error: MONGODB_URI no está configurada. Por favor, ejecutar:"
  echo "export MONGODB_URI=\"mongodb+srv://<usuario>:<contraseña>@<cluster>.mongodb.net/cineplex_db\""
  exit 1
fi

# Obtener el directorio donde está el script
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
JSON_DIR="${SCRIPT_DIR}/json"

# Cambiar al directorio json
cd "${JSON_DIR}" || { echo "Error: No se puede acceder a ${JSON_DIR}"; exit 1; }

echo "Iniciando importación de colecciones CINEPLEX..."
echo "Base de datos: cineplex_db"
echo ""

# Avance 1
echo "Importando Avance 1..."
mongoimport --uri "${MONGODB_URI}" --collection cadenas --file cadenas.json --jsonArray
mongoimport --uri "${MONGODB_URI}" --collection complejos --file complejos.json --jsonArray
mongoimport --uri "${MONGODB_URI}" --collection salas --file salas.json --jsonArray
mongoimport --uri "${MONGODB_URI}" --collection peliculas --file peliculas.json --jsonArray

# Avance 2
echo ""
echo "Importando Avance 2..."
mongoimport --uri "${MONGODB_URI}" --collection funciones --file funciones.json --jsonArray
mongoimport --uri "${MONGODB_URI}" --collection horarios --file horarios.json --jsonArray
mongoimport --uri "${MONGODB_URI}" --collection tarifas --file tarifas.json --jsonArray
mongoimport --uri "${MONGODB_URI}" --collection asientos --file asientos.json --jsonArray
mongoimport --uri "${MONGODB_URI}" --collection promociones --file promociones.json --jsonArray
mongoimport --uri "${MONGODB_URI}" --collection clientes --file clientes.json --jsonArray
mongoimport --uri "${MONGODB_URI}" --collection reservas --file reservas.json --jsonArray
mongoimport --uri "${MONGODB_URI}" --collection boletos --file boletos.json --jsonArray

echo ""
echo "Hacer script de bash es hermoso jajaja"
echo "Las 12 colecciones de CINEPLEX están cargadas en MongoDB Atlas"