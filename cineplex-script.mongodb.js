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


// 5. FUNCIONES
db.funciones.deleteMany({});
db.funciones.insertMany([
  {
    _id: ObjectId("665f000000000000000000e1"),
    pelicula_id: ObjectId("665f000000000000000000d1"),
    sala_id: ObjectId("665f000000000000000000c1"),
    complejo_id: ObjectId("665f000000000000000000b1"),
    cadena_id: ObjectId("665f000000000000000000a1"),
    fecha: new Date("2026-04-15"),
    hora_inicio: "19:00",
    hora_fin: "21:46",
    formato: "IMAX",
    idioma: "Subtitulada",
    estado: "Programada",
    control_asientos: {
      disponibles: 287,
      reservados: 35,
      vendidos: 28,
      porcentaje_ocupacion: 17.71
    }
  },
  {
    _id: ObjectId("665f000000000000000000e2"),
    pelicula_id: ObjectId("665f000000000000000000d2"),
    sala_id: ObjectId("665f000000000000000000c2"),
    complejo_id: ObjectId("665f000000000000000000b2"),
    cadena_id: ObjectId("665f000000000000000000a2"),
    fecha: new Date("2026-04-15"),
    hora_inicio: "15:30",
    hora_fin: "17:15",
    formato: "3D",
    idioma: "Doblada",
    estado: "Programada",
    control_asientos: {
      disponibles: 108,
      reservados: 8,
      vendidos: 4,
      porcentaje_ocupacion: 10
    }
  }
]);
print("Funciones insertadas:", db.funciones.countDocuments());


// 6. HORARIOS
db.horarios.deleteMany({});
db.horarios.insertMany([
  {
    _id: ObjectId("665f000000000000000000f1"),
    funcion_id: ObjectId("665f000000000000000000e1"),
    pelicula_id: ObjectId("665f000000000000000000d1"),
    sala_id: ObjectId("665f000000000000000000c1"),
    fecha_hora_inicio: new Date("2026-04-15T19:00:00"),
    hora_finalizacion: new Date("2026-04-15T21:46:00"),
    duracion_total_minutos: 166,
    tipo_funcion: "Regular"
  },
  {
    _id: ObjectId("665f000000000000000000f2"),
    funcion_id: ObjectId("665f000000000000000000e2"),
    pelicula_id: ObjectId("665f000000000000000000d2"),
    sala_id: ObjectId("665f000000000000000000c2"),
    fecha_hora_inicio: new Date("2026-04-15T15:30:00"),
    hora_finalizacion: new Date("2026-04-15T17:15:00"),
    duracion_total_minutos: 105,
    tipo_funcion: "Matinee"
  }
]);
print("Horarios insertados:", db.horarios.countDocuments());


// 7. TARIFAS
db.tarifas.deleteMany({});
db.tarifas.insertMany([
  {
    _id: ObjectId("665f0000000000000000001"),
    cadena_id: ObjectId("665f000000000000000000a1"),
    complejo_id: ObjectId("665f000000000000000000b1"),
    tipo_sala: "IMAX",
    dia_semana: "Miércoles",
    franja_horaria: "Nocturna",
    categoria_cliente: "Adulto",
    precio_base: 7500,
    impuestos: 1237.50,
    precio_total: 8737.50
  },
  {
    _id: ObjectId("665f0000000000000000002"),
    cadena_id: ObjectId("665f000000000000000000a2"),
    complejo_id: ObjectId("665f000000000000000000b2"),
    tipo_sala: "Cine convencional",
    dia_semana: "Miércoles",
    franja_horaria: "Matinee",
    categoria_cliente: "Niño",
    precio_base: 3500,
    impuestos: 577.50,
    precio_total: 4077.50
  }
]);
print("Tarifas insertadas:", db.tarifas.countDocuments());


// 8. ASIENTOS
db.asientos.deleteMany({});
db.asientos.insertMany([
  {
    _id: ObjectId("665f0000000000000000003"),
    sala_id: ObjectId("665f000000000000000000c1"),
    fila: "A",
    numero_butaca: 1,
    zona: "Preferencial",
    estado_actual: "Vendido",
    precio_asociado: 9500,
    tipo_butaca: "Estándar"
  },
  {
    _id: ObjectId("665f0000000000000000004"),
    sala_id: ObjectId("665f000000000000000000c1"),
    fila: "B",
    numero_butaca: 5,
    zona: "VIP",
    estado_actual: "Reservado",
    precio_asociado: 13737.50,
    tipo_butaca: "Reclinable"
  },
  {
    _id: ObjectId("665f0000000000000000005"),
    sala_id: ObjectId("665f000000000000000000c2"),
    fila: "D",
    numero_butaca: 8,
    zona: "General",
    estado_actual: "Disponible",
    precio_asociado: 4077.50,
    tipo_butaca: "Estándar"
  },
  {
    _id: ObjectId("665f0000000000000000006"),
    sala_id: ObjectId("665f000000000000000000c2"),
    fila: "C",
    numero_butaca: 3,
    zona: "Preferencial",
    estado_actual: "Vendido",
    precio_asociado: 5077.50,
    tipo_butaca: "Estándar"
  }
]);
print("Asientos insertados:", db.asientos.countDocuments());


// 9. CLIENTES
db.clientes.deleteMany({});
db.clientes.insertMany([
  {
    _id: ObjectId("665f0000000000000000007"),
    identificacion: "402751234",
    tipo_identificacion: "Cédula Nacional",
    nombre_completo: "Carlos Eduardo Rodríguez Mora",
    correo: "carlos.rodriguez@email.com",
    telefono: "86754321",
    fecha_nacimiento: new Date("1985-07-12"),
    genero: "M",
    programa_lealtad: {
      puntos_acumulados: 4850,
      nivel_membresия: "Oro",
      fecha_afiliacion: new Date("2023-06-15"),
      historial_compras: [
        {
          reserva_id: ObjectId("665f0000000000000000008"),
          fecha: new Date("2026-03-20"),
          monto: 8737.50,
          peliculas: ["Dune: Parte Tres"]
        },
        {
          reserva_id: ObjectId("665f0000000000000000009"),
          fecha: new Date("2026-02-14"),
          monto: 17475,
          peliculas: ["The Batman 3", "Aquaman 3"]
        }
      ],
      generos_preferidos: ["Ciencia ficción", "Acción", "Aventura"],
      complejo_habitual: ObjectId("665f000000000000000000b1")
    }
  },
  {
    _id: ObjectId("665f000000000000000000a"),
    identificacion: "607654321",
    tipo_identificacion: "Cédula Nacional",
    nombre_completo: "María José López Vásquez",
    correo: "maria.lopez@email.com",
    telefono: "87123456",
    fecha_nacimiento: new Date("1992-11-28"),
    genero: "F",
    programa_lealtad: {
      puntos_acumulados: 1200,
      nivel_membresia: "Plata",
      fecha_afiliacion: new Date("2025-09-10"),
      historial_compras: [
        {
          reserva_id: ObjectId("665f000000000000000000b"),
          fecha: new Date("2026-04-10"),
          monto: 4077.50,
          peliculas: ["Vaiana 3"]
        }
      ],
      generos_preferidos: ["Animación", "Aventura", "Fantasía"],
      complejo_habitual: ObjectId("665f000000000000000000b2")
    }
  }
]);
print("Clientes insertados:", db.clientes.countDocuments());


// 10. RESERVAS
db.reservas.deleteMany({});
db.reservas.insertMany([
  {
    _id: ObjectId("665f0000000000000000008"),
    cliente_id: ObjectId("665f0000000000000000007"),
    cadena_id: ObjectId("665f000000000000000000a1"),
    complejo_id: ObjectId("665f000000000000000000b1"),
    pelicula_id: ObjectId("665f000000000000000000d1"),
    funcion_id: ObjectId("665f000000000000000000e1"),
    asientos_apartados: [
      {
        asiento_id: ObjectId("665f0000000000000000003"),
        fila: "A",
        numero_butaca: 1,
        zona: "Preferencial",
        precio_unitario: 8737.50
      }
    ],
    estado_reserva: "Confirmada",
    fecha_reserva: new Date("2026-04-12T14:30:00"),
    fecha_confirmacion: new Date("2026-04-12T14:35:00"),
    datos_pago: {
      metodo_pago: "Tarjeta de crédito",
      numero_tarjeta: "4532XXXXXXXX5678",
      nombre_titular: "Carlos Rodríguez Mora",
      fecha_vencimiento: "12/28",
      entidad_bancaria: "Banco Nacional de Costa Rica",
      tipo_tarjeta: "Visa"
    },
    monto_total: 8737.50,
    descuento_aplicado: 0,
    promocion_utilizada: null,
    confirmacion_pago: {
      numero_autorizacion: "AUTH123456",
      timestamp_pago: new Date("2026-04-12T14:35:00"),
      estado_transaccion: "Aprobada"
    }
  },
  {
    _id: ObjectId("665f0000000000000000009"),
    cliente_id: ObjectId("665f000000000000000000a"),
    cadena_id: ObjectId("665f000000000000000000a2"),
    complejo_id: ObjectId("665f000000000000000000b2"),
    pelicula_id: ObjectId("665f000000000000000000d2"),
    funcion_id: ObjectId("665f000000000000000000e2"),
    asientos_apartados: [
      {
        asiento_id: ObjectId("665f0000000000000000005"),
        fila: "D",
        numero_butaca: 8,
        zona: "General",
        precio_unitario: 3900
      }
    ],
    estado_reserva: "Pendiente",
    fecha_reserva: new Date("2026-04-12T09:15:00"),
    fecha_confirmacion: null,
    datos_pago: {
      metodo_pago: "Tarjeta de débito",
      numero_tarjeta: "5412XXXXXXXX9876",
      nombre_titular: "María José López Vásquez",
      fecha_vencimiento: "06/29",
      entidad_bancaria: "BCR",
      tipo_tarjeta: "MasterCard"
    },
    monto_total: 4077.50,
    descuento_aplicado: 0,
    promocion_utilizada: ObjectId("665f000000000000000000c"),
    confirmacion_pago: null
  }
]);
print("Reservas insertadas:", db.reservas.countDocuments());


// 11. BOLETOS
db.boletos.deleteMany({});
db.boletos.insertMany([
  {
    _id: ObjectId("665f000000000000000000d"),
    reserva_id: ObjectId("665f0000000000000000008"),
    codigo_verificacion: "DN-2026-0001-QR",
    cadena_complejo: "Cinemark Multiplaza Escazú",
    titulo_pelicula: "Dune: Parte Tres",
    fecha_hora_funcion: new Date("2026-04-15T19:00:00"),
    sala: "Sala IMAX 1",
    asientos: ["A-1"],
    precio_pagado: 8737.50,
    cliente_id: ObjectId("665f0000000000000000007"),
    marca_temporal_compra: new Date("2026-04-12T14:35:00"),
    modalidad_entrega: "Digital",
    codigo_qr: "CINEPLEX-DN-2026-0001",
    estado_boleto: "Activo"
  },
  {
    _id: ObjectId("665f000000000000000000e"),
    reserva_id: ObjectId("665f0000000000000000009"),
    codigo_verificacion: "MN-2026-0002-PDF",
    cadena_complejo: "Cinemagic Ciudad Neily",
    titulo_pelicula: "Vaiana 3",
    fecha_hora_funcion: new Date("2026-04-15T15:30:00"),
    sala: "Sala 1 - Convencional",
    asientos: ["D-8"],
    precio_pagado: 4077.50,
    cliente_id: ObjectId("665f000000000000000000a"),
    marca_temporal_compra: new Date("2026-04-12T09:15:00"),
    modalidad_entrega: "Impreso en taquilla",
    codigo_qr: "CINEPLEX-MN-2026-0002",
    estado_boleto: "Pendiente de confirmación"
  }
]);
print("Boletos insertados:", db.boletos.countDocuments());


// 12. PROMOCIONES
db.promociones.deleteMany({});
db.promociones.insertMany([
  {
    _id: ObjectId("665f000000000000000000c"),
    codigo: "MIERCOLES20",
    nombre: "Miércoles de Descuento",
    descripcion: "20% de descuento en todas las películas los miércoles",
    tipo_descuento: "Porcentaje",
    valor_descuento: 20,
    fecha_inicio: new Date("2026-01-01"),
    fecha_fin: new Date("2026-12-31"),
    estado: "Activa",
    restricciones: {
      peliculas_aplicables: [],
      tipos_sala_validos: [],
      dias_permitidos: ["Miércoles"],
      franjas_horarias: [],
      cadenas_complejos: [],
      solo_lealtad: false
    },
    control_uso: {
      cantidad_maxima_total: 500,
      cantidad_maxima_por_cliente: 2,
      monto_minimo_compra: 0,
      acumulable_otras_promociones: false,
      usos_realizados: 45
    },
    historial_redencion: [
      {
        cliente_id: ObjectId("665f0000000000000000007"),
        reserva_id: ObjectId("665f0000000000000000008"),
        fecha_uso: new Date("2026-03-20T19:00:00"),
        monto_descontado: 1600,
        estado_redencion: "Aplicada"
      }
    ]
  },
  {
    _id: ObjectId("665f000000000000000000f"),
    codigo: "LEALTAD15",
    nombre: "Descuento Miembros Lealtad",
    descripcion: "15% de descuento exclusivo para miembros del programa de lealtad",
    tipo_descuento: "Porcentaje",
    valor_descuento: 15,
    fecha_inicio: new Date("2025-06-01"),
    fecha_fin: new Date("2027-12-31"),
    estado: "Activa",
    restricciones: {
      peliculas_aplicables: [],
      tipos_sala_validos: [],
      dias_permitidos: [],
      franjas_horarias: [],
      cadenas_complejos: [],
      solo_lealtad: true
    },
    control_uso: {
      cantidad_maxima_total: 1000,
      cantidad_maxima_por_cliente: 1,
      monto_minimo_compra: 5000,
      acumulable_otras_promociones: true,
      usos_realizados: 234
    },
    historial_redencion: [
      {
        cliente_id: ObjectId("665f000000000000000000a"),
        reserva_id: ObjectId("665f0000000000000000009"),
        fecha_uso: new Date("2026-04-12T09:15:00"),
        monto_descontado: 611.63,
        estado_redencion: "Aplicada"
      }
    ]
  }
]);
print("Promociones insertadas:", db.promociones.countDocuments());

print("\n--- RESUMEN FINAL DE LA BASE DE DATOS cineplex_db ----");
print("   cadenas:      ", db.cadenas.countDocuments());
print("   complejos:    ", db.complejos.countDocuments());
print("   salas:        ", db.salas.countDocuments());
print("   peliculas:    ", db.peliculas.countDocuments());
print("   funciones:    ", db.funciones.countDocuments());
print("   horarios:     ", db.horarios.countDocuments());
print("   tarifas:      ", db.tarifas.countDocuments());
print("   asientos:     ", db.asientos.countDocuments());
print("   clientes:     ", db.clientes.countDocuments());
print("   reservas:     ", db.reservas.countDocuments());
print("   boletos:      ", db.boletos.countDocuments());
print("   promociones:  ", db.promociones.countDocuments());