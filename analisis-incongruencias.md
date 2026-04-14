# Análisis breve de incongruencias

- `funciones.cadena_id` es redundante con `sala_id` -> `salas.complejo_id` -> `complejos.cadena_id`.
- `clientes.historial_reservas` duplica datos que ya existen en `reservas`.
- `horarios` y `funciones` repiten fechas/horas, lo que puede causar inconsistencias.
- Arrays complejos en `promociones` y `cadenas` son difíciles de consultar y escalar.
