# Brief — Plantilla de UI de chat / notificaciones

**Para escena(s):** 1 — Un día imposible, 2 — Los clientes se frustran (definición original de la plantilla, ver `01-dia-imposible.md` y `02-clientes-frustrados.md`); reutilizada en 7 — La transformación (inserts breves) y 8 — Clientes felices (variante "resuelto"); referencia de estilo también para el texto en pantalla de 9 (ver brief `tipografia-cinetica-onscreen.md` para ese caso puntual).
**Asset de referencia parcial existente:** el globo de "escribiendo" (3 puntos) de `bear-tablet-chat.png` y los globos de texto de `bear-siempre-aqui-testimonial.png` dan una pista de tratamiento de burbuja, pero ninguno de los 5 renders es una plantilla de UI pensada para pantalla completa / overlay de escena.
**Tipo de necesidad:** nuevo — plantilla reutilizable de UI, no un render del oso.

## Qué debe mostrar exactamente

Una plantilla de burbuja de chat / notificación con al menos estas variantes:

1. **Burbuja de mensaje entrante** (escenas 1 y 2): burbuja con el texto del cliente/asegurado, para los mensajes superpuestos en pantalla:
   - Escena 1: "¿Ya revisaste mi póliza?", "Necesito mi certificado.", "¿Me puedes responder?", "Es urgente."
   - Escena 2: "¿Sigues ahí?", "No me respondes.", "Voy a buscar otro asesor."
2. **Contador de bandeja de entrada** (badge numérico creciente, escena 1) — indicador de mensajes/correos acumulándose.
3. **Indicador de llamada entrante** (insert de celular vibrando, escena 1).
4. **Variante "resuelto"** (escena 8): mismo tratamiento de burbuja pero con un badge de éxito superpuesto (ver paleta de estados abajo) para las respuestas de certificado/póliza ya resueltas.
5. Opcional: burbuja de "escribiendo…" (3 puntos) para inserts cortos de escena 7 — puede heredarse directamente del tratamiento ya visto en `bear-tablet-chat.png`, solo adaptado a esta plantilla de pantalla completa.

## Paleta a usar

- Burbujas: fondo Superficie `#FFFFFF` o Fondo crema `#FAFAF7`, texto en Texto `#0F172A` o Tinta `#0B1B3D` para énfasis — **nunca** el verde por defecto de WhatsApp.
- Contador/badge numérico: Oro `#FAD83C` de fondo con texto Tinta `#0B1B3D` encima (nunca blanco) — y solo si el contador funciona como el único acento/CTA de esa pantalla puntual; si hay más de un elemento oro en el mismo cuadro, usar Tinta como color de énfasis alternativo para no romper la regla de "un solo oro por pantalla".
- Variante "resuelto" (escena 8): badge de éxito en Éxito suave `#D9F2E6` de fondo con texto Éxito `#065F46`.
- Hairline si hace falta separar burbujas: `#E2DBCC` (único borde permitido, discreto).
- Tipografía: Inter, peso 400–500 para el cuerpo del mensaje, line-height ≥1.3.

## Qué evitar explícitamente

- El verde/gris por defecto de la interfaz real de WhatsApp — la marca nunca debe verse como una captura literal de WhatsApp.
- Degradados en el fondo de las burbujas o en el badge de contador — color plano sólido únicamente.
- Texto blanco sobre el badge oro — siempre tinta.
- Más de un elemento en oro por cuadro cuando conviven contador + burbuja + botón (si aplica) — un solo acento oro por pantalla.
- Bordes duros en las burbujas — deben usar geometría pill o esquina muy generosa (ver abajo), consistente con las burbujas ya vistas en `bear-tablet-chat.png` y `bear-siempre-aqui-testimonial.png`, que si cumplen esta regla.
- Actuación/tono de urgencia expresado mediante un grading sucio o desaturado de la UI — la nota de marca de la escena 1 es explícita: "el producto real nunca se ve grunge, y el video tampoco debería mostrarlo así solo porque la escena es tensa."
- Para la variante "resuelto" (escena 8): evitar iconografía tipo app de consumo (confetti, estrellas, checks animados exagerados) — el badge de éxito debe ser sobrio, coherente con "serio, plano, premium, nunca infantil".

## Formato / orientación sugerida

- Burbujas dimensionadas para overlay sobre metraje horizontal 16:9 (montaje de cortes de menos de 1 segundo en escena 1, según guion).
- Geometría: radio pill (999px) para el contador/badge circular o de chip; esquinas generosas (12–16px) para las burbujas de mensaje más grandes (rectangulares con texto largo) — nunca esquina dura en ningún elemento.
- Entregar como componentes separados (burbuja vacía + variantes de badge) para que motion-engineer pueda insertar el texto de cada escena en Remotion sin regenerar el asset gráfico cada vez.
