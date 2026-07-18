# Brief — Entorno de oficina del asesor (3 estados)

**Para escena(s):** 1 — Un día imposible (0:00–0:10, oficina de día, en caos creciente), 3 — Burnout (0:16–0:22, oficina de noche, vacía y en silencio), 6 — El despertar (0:45–0:51, mismo escritorio donde el asesor se durmió en escena 3, ahora con el oso presente), 9 — Una nueva oficina (1:04–1:10, oficina de día, ordenada — contraste "antes/ahora" directo con escena 1).
**Asset de referencia existente:** ninguno. **Este es un hallazgo propio de esta auditoría, no algo que `00-resumen.md` marque explícitamente como "falta generar"** — el guion de producción documenta qué falta del oso y de UI para estas escenas, pero no señala que tampoco existe ningún fondo/entorno de oficina en `resourcesAmparo/`. Las 4 escenas comparten la misma locación narrativa en 3 estados distintos (día-caos / noche-vacía / día-orden), y hoy no hay ningún asset visual de esa oficina, ni siquiera de referencia.
**Tipo de necesidad:** nuevo — fondo/entorno, no un render del oso.

## Qué debe mostrar exactamente

Un mismo espacio de oficina (escritorio del asesor) en 3 estados coherentes entre sí (mismo layout de escritorio, misma ventana, mismos muebles — para que se lea como el mismo lugar):

1. **Estado "caos" (escena 1, día):** luz natural de mañana entrando por la ventana, laptop abierta, celular sobre el escritorio, progresión hacia papeles/objetos acumulándose a medida que avanza la escena.
2. **Estado "vacío/noche" (escena 3):** una sola fuente de luz cálida (lámpara de escritorio encendida), el resto del cuadro en sombra; props de escritorio (laptop, papeles apilados) coherentes con el desorden acumulado de las escenas 1–2 — oficina vacía, silencio.
3. **Estado "despertar" (escena 6):** mismo escritorio de la escena 3 (donde el asesor se quedó dormido), ahora de día/mañana otra vez, con el oso sentado junto al asesor (ver brief `oso-cafe-escritorio.md` para el render del oso en este contexto).
4. **Estado "orden" (escena 9):** mismo layout de escritorio, ahora limpio y ordenado, ambiente calmado — para el split screen comparativo directo contra el estado 1.

## Paleta a usar

- Ambos extremos del contraste antes/ahora (escenas 1 y 9) deben usar la **misma paleta de marca** — Tinta `#0B1B3D` / Oro `#FAD83C` / Fondo crema `#FAFAF7` en cualquier elemento de marca visible (laptop con UI de producto, por ejemplo), superficies en `#FFFFFF` o `#F3F2EC`. El contraste se construye por **cantidad de clutter en cuadro**, no por un cambio de paleta — la nota de marca de escena 9 lo señala de forma explícita: "el 'antes' no debe volverse gris o desaturado (sucio) ni el 'ahora' un azul corporativo distinto al de la marca."
- Estado "vacío/noche" (escena 3): permitir que el resto del cuadro quede en sombra/oscuridad propia de una escena nocturna con una sola fuente de luz — esto es dirección de iluminación de escena, no un cambio de paleta de marca; no confundir "oficina a oscuras" con "grading desaturado que rompe Tinta & Oro" en los elementos que sí sean de marca (pantalla de laptop, si se ve encendida).

## Qué evitar explícitamente

- Grading sucio, desaturado o "grunge" en el estado de caos (escena 1) — la tensión se construye con objetos en cuadro y ritmo de montaje, nunca degradando el color de la marca.
- Un azul corporativo genérico distinto al Tinta de marca en el estado de orden (escena 9) — si aparece cualquier pantalla, UI o elemento de marca en el fondo "ordenado", debe ser Tinta & Oro, no un azul de stock photo.
- Inconsistencia de layout entre los 3 estados (que no se lea como el mismo escritorio/oficina) — comprometería la lectura de "antes/ahora" que pide el guion.
- Elementos de escritorio con degradados/brillos plásticos que rompan la regla de color plano si se renderiza el entorno en el mismo tratamiento ilustrado que el oso (a definir: este fondo puede resolverse como fotografía real de un set, no necesariamente como ilustración 3D — si se opta por ilustración, aplican las mismas reglas de color plano que al personaje).

## Formato / orientación sugerida

- Horizontal 16:9, coherente con el resto del guion de producción.
- Si escena 9 usa split screen antes/ahora, entregar los 2 estados (1 y 9) encuadrados de forma idéntica (mismo ángulo de cámara/lente) para que el corte comparativo funcione sin reencuadrar en montaje.
