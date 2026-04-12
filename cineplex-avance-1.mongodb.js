//  CINEPLEX - Avance 1
//  Colecciones: cadenas, complejos, salas, peliculas

use('cineplex_db');

// 1. CADENAS
db.cadenas.deleteMany({});
db.cadenas.insertMany([
  {
    _id: ObjectId("665f000000000000000000a1"),
    nombre_comercial: "Cinemark Costa Rica",
    razon_social: "Cinemark International LLC Sucursal Costa Rica",
    pais_origen: "Estados Unidos",
    empresa_matriz: "Cinemark Holdings Inc.",
    tipos_servicio: ["Cine convencional", "3D", "IMAX", "4DX", "VIP"],
    fecha_fundacion: new Date("1984-03-15"),
    fecha_inicio_CR: new Date("2000-07-20"),
    zonas_geograficas: ["San José", "Heredia", "Cartago", "Alajuela"],
    convenios: [
      {
        distribuidora: "Warner Bros. Pictures",
        fecha_inicio: new Date("2024-01-01"),
        estrenos_mensuales_programados: 3,
        porcentaje_taquilla: 52,
        generos_cubiertos: ["Acción", "Aventura", "Comedia", "Drama"],
        titulos_exclusivos: ["Aquaman 3", "The Batman 3"]
      },
      {
        distribuidora: "Universal Pictures",
        fecha_inicio: new Date("2024-03-01"),
        estrenos_mensuales_programados: 2,
        porcentaje_taquilla: 50,
        generos_cubiertos: ["Terror", "Ciencia ficción", "Animación"],
        titulos_exclusivos: []
      }
    ]
  },
  {
    _id: ObjectId("665f000000000000000000a2"),
    nombre_comercial: "Cinemagic",
    razon_social: "Entretenimiento Mágico S.A.",
    pais_origen: "Costa Rica",
    empresa_matriz: "Grupo Mágico Entretenimiento",
    tipos_servicio: ["Cine convencional", "3D", "VIP"],
    fecha_fundacion: new Date("1998-11-05"),
    fecha_inicio_CR: new Date("1998-11-05"),
    zonas_geograficas: ["San José", "Guanacaste", "Puntarenas", "Zona Sur"],
    convenios: [
      {
        distribuidora: "Sony Pictures",
        fecha_inicio: new Date("2024-02-01"),
        estrenos_mensuales_programados: 2,
        porcentaje_taquilla: 48,
        generos_cubiertos: ["Acción", "Animación", "Comedia"],
        titulos_exclusivos: ["Spider-Man: Beyond the Spider-Verse"]
      },
      {
        distribuidora: "Walt Disney Pictures",
        fecha_inicio: new Date("2023-06-01"),
        estrenos_mensuales_programados: 3,
        porcentaje_taquilla: 55,
        generos_cubiertos: ["Animación", "Aventura", "Fantasía"],
        titulos_exclusivos: ["Moana 3", "Frozen 3"]
      }
    ]
  }
]);
print("Cadenas insertadas:", db.cadenas.countDocuments());


// 2. COMPLEJOS
db.complejos.deleteMany({});
db.complejos.insertMany([
  {
    _id: ObjectId("665f000000000000000000b1"),
    codigo: "CMK-SJO-001",
    nombre: "Cinemark Multiplaza Escazú",
    cadena_id: ObjectId("665f000000000000000000a1"),
    ubicacion: {
      provincia: "San José",
      canton: "Escazú",
      distrito: "San Rafael",
      direccion_exacta: "Multiplaza Escazú, 3er piso, frente a la entrada principal"
    },
    centro_comercial: "Multiplaza Escazú",
    num_salas: 12,
    capacidad_estacionamiento: 1800,
    servicios_adicionales: {
      restaurante: true,
      confiteria: true,
      zona_juegos: false
    }
  },
  {
    _id: ObjectId("665f000000000000000000b2"),
    codigo: "CMG-PZ-001",
    nombre: "Cinemagic Ciudad Neily",
    cadena_id: ObjectId("665f000000000000000000a2"),
    ubicacion: {
      provincia: "Puntarenas",
      canton: "Corredores",
      distrito: "Ciudad Neily",
      direccion_exacta: "Centro Comercial El Parque, planta baja, costado norte del supermercado"
    },
    centro_comercial: "Centro Comercial El Parque",
    num_salas: 4,
    capacidad_estacionamiento: 250,
    servicios_adicionales: {
      restaurante: false,
      confiteria: true,
      zona_juegos: true
    }
  }
]);
print("Complejos insertados:", db.complejos.countDocuments());


// 3. SALAS
db.salas.deleteMany({});
db.salas.insertMany([
  {
    _id: ObjectId("665f000000000000000000c1"),
    numero_id: 1,
    nombre: "Sala IMAX 1",
    complejo_id: ObjectId("665f000000000000000000b1"),
    tipo_sala: "IMAX",
    capacidad_total: 350,
    pantalla: {
      ancho_metros: 26,
      alto_metros: 19,
      tipo: "Pantalla plana gigante con recubrimiento reflectivo"
    },
    sistema_sonido: "Dolby Atmos",
    tipo_proyector: "IMAX Laser GT",
    fecha_ultima_renovacion: new Date("2023-08-15"),
    configuracion_asientos: {
      filas: 20,
      columnas: 18,
      zonificacion: {
        preferencial: { filas: "A-E", precio_extra: 2000 },
        general: { filas: "F-P", precio_extra: 0 },
        vip: { filas: "Q-T", precio_extra: 5000 }
      },
      espacios_discapacidad: 8,
      butacas_reclinables: true
    }
  },
  {
    _id: ObjectId("665f000000000000000000c2"),
    numero_id: 1,
    nombre: "Sala 1 - Convencional",
    complejo_id: ObjectId("665f000000000000000000b2"),
    tipo_sala: "Cine convencional",
    capacidad_total: 120,
    pantalla: {
      ancho_metros: 12,
      alto_metros: 7,
      tipo: "Pantalla curva estándar con recubrimiento mate"
    },
    sistema_sonido: "Dolby Digital",
    tipo_proyector: "Christie CP2215",
    fecha_ultima_renovacion: new Date("2021-03-10"),
    configuracion_asientos: {
      filas: 12,
      columnas: 10,
      zonificacion: {
        preferencial: { filas: "A-C", precio_extra: 1000 },
        general: { filas: "D-L", precio_extra: 0 },
        vip: null
      },
      espacios_discapacidad: 4,
      butacas_reclinables: false
    }
  }
]);
print("Salas insertadas:", db.salas.countDocuments());


// 4. PELÍCULAS
db.peliculas.deleteMany({});
db.peliculas.insertMany([
  {
    _id: ObjectId("665f000000000000000000d1"),
    titulo_original: "Dune: Part Three",
    titulo_espanol: "Dune: Parte Tres",
    sinopsis: "Paul Atreides continúa su camino como líder de los Fremen mientras enfrenta una amenaza definitiva que podría destruir Arrakis y el suministro de la especia para siempre.",
    duracion_min: 166,
    generos: ["Ciencia ficción", "Aventura", "Drama"],
    clasificacion_edad: "PG-13",
    pais_origen: "Estados Unidos",
    idioma_original: "Inglés",
    director: ["Denis Villeneuve"],
    reparto_principal: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson", "Josh Brolin"],
    casa_productora: "Legendary Entertainment",
    distribuidora: "Warner Bros. Pictures",
    fecha_estreno_mundial: new Date("2026-11-20"),
    fecha_estreno_CR: new Date("2026-11-21"),
    estado_cartelera: "Próximamente",
    formatos_exhibicion: ["2D", "3D", "IMAX", "Subtitulada", "Doblada"],
    material_promocional: {
      poster_url: "https://www.themoviedb.org/movie/dune3/poster.jpg",
      trailer_url: "https://www.youtube.com/watch?v=dune3_trailer",
      puntuacion_critica: 9.1,
      calificacion_publico: 8.7
    }
  },
  {
    _id: ObjectId("665f000000000000000000d2"),
    titulo_original: "Moana 3",
    titulo_espanol: "Vaiana 3",
    sinopsis: "Moana emprende una nueva aventura oceánica para proteger a su isla de una fuerza antigua que amenaza el equilibrio entre el mundo de los vivos y el de los dioses del mar.",
    duracion_min: 105,
    generos: ["Animación", "Aventura", "Familiar"],
    clasificacion_edad: "G",
    pais_origen: "Estados Unidos",
    idioma_original: "Inglés",
    director: ["David Derrick Jr.", "Jason Hand"],
    reparto_principal: ["Auli'i Cravalho", "Dwayne Johnson", "Rachel House"],
    casa_productora: "Walt Disney Animation Studios",
    distribuidora: "Walt Disney Pictures",
    fecha_estreno_mundial: new Date("2026-11-25"),
    fecha_estreno_CR: new Date("2026-11-26"),
    estado_cartelera: "Próximamente",
    formatos_exhibicion: ["2D", "3D", "Doblada", "Subtitulada"],
    material_promocional: {
      poster_url: "https://www.themoviedb.org/movie/moana3/poster.jpg",
      trailer_url: "https://www.youtube.com/watch?v=moana3_trailer",
      puntuacion_critica: 8.4,
      calificacion_publico: 9.0
    }
  }
]);
print("Películas insertadas:", db.peliculas.countDocuments());


// VERIFICACIÓN FINAL
print("\nResumen de la base de datos cineplex_db:");
print("   cadenas:  ", db.cadenas.countDocuments());
print("   complejos:", db.complejos.countDocuments());
print("   salas:    ", db.salas.countDocuments());
print("   peliculas:", db.peliculas.countDocuments());
