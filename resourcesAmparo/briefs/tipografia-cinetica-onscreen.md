# Brief — Tratamiento de tipografía cinética en pantalla

**Para escena(s):** 7 — La transformación (`07-transformacion.md`), 0:51–0:58, texto opcional "En segundos, no en horas."; 9 — Una nueva oficina (`09-nueva-oficina.md`), 1:04–1:10, texto "Mensajes. Tareas. Recordatorios. Agenda."
**Asset de referencia existente:** ninguno — ambas escenas piden texto en pantalla pero no hay ninguna plantilla tipográfica definida en `resourcesAmparo/`.
**Tipo de necesidad:** nuevo — especificación de tratamiento tipográfico (no es un render del oso ni un fondo).

## Qué debe mostrar exactamente

- Texto corto en pantalla, apareciendo con animación tipo "tipografía cinética" (kinetic typography) — palabras o frases cortas que entran y salen en sincronía con el corte de montaje.
- Escena 7: "En segundos, no en horas." — **uso opcional**, solo si el montaje visual no comunica el contraste antes/ahora con suficiente claridad por sí solo (el guion prioriza que la imagen hable antes que el texto).
- Escena 9: "Mensajes. Tareas. Recordatorios. Agenda." — lista de 4 palabras, presentadas mientras el oso interactúa con una lista/checklist en pantalla; tomadas directamente de la lista del storytelling guide, sin agregar nada.

## Paleta a usar

- Tipografía: Inter, único tipo de letra de marca — nunca mezclar con otra familia.
- Color de texto: Tinta `#0B1B3D` sobre fondo crema `#FAFAF7` o blanco `#FFFFFF` (el caso más simple y seguro); si el texto va superpuesto sobre un fondo oscuro/tinta de escena, usar blanco solo ahí (no es el caso prohibido: el caso prohibido es específicamente texto blanco **sobre oro**, no texto blanco sobre tinta).
- Si se quiere dar énfasis a una palabra puntual dentro de la frase, usar Oro `#FAD83C` como color de texto de énfasis (no como fondo) — evita el problema de "texto blanco sobre oro" porque no hay fondo oro involucrado, y mantiene el oro como único acento por pantalla.

## Qué evitar explícitamente

- Cadenas de signos de exclamación o tono de sobreventa — coherente con "Voz y tono" del brand doc: frases cortas, directas, sin exclamación en cadena.
- Vaguedades: si se usa una cifra (como en escena 7), que sea real y concreta ("en segundos"), nunca una promesa vaga — regla explícita del brand doc ("usar números reales... en vez de vaguedades").
- Mezclar tipografías — solo Inter.
- Animaciones de entrada/salida tipo "brillo" o destello con degradado (glow, motion blur con aspecto de brillo plástico) — mantener la animación en movimiento/posición (entra, sale, cambia de peso) sin introducir efectos de luz que rompan la regla de color plano.
- Volver esta escena (7 en particular) un listado de funciones — el propio guion advierte del riesgo de que el texto en pantalla empuje la escena hacia "feature list" en vez de emoción; el texto es un recurso de apoyo, no el protagonista del cuadro.

## Formato / orientación sugerida

- Horizontal 16:9. Duración de aparición en pantalla breve (coherente con los cortes de menos de 1 segundo de ambas escenas) — el motion-engineer define el timing exacto en Remotion; este brief solo fija la especificación visual (tipografía, color, qué evitar), no la animación.
