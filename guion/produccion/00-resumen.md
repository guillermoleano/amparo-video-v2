# Guion de producción — Resumen

**Proyecto:** Amparo — "Todos necesitamos un Amparo"
**Fuente narrativa:** `guion/storytelling-guide.md` (10 escenas, ya aprobadas)
**Fuente de marca:** `Identidad-de-Marca-Amparo.md`
**Referencia visual del oso:** `resourcesAmparo/` (5 renders: `bear-wave.png`, `bear-tablet-chat.png`, `bear-banner-halo.png`, `bear-siempre-aqui-testimonial.png`, `bear-tools.png`)

Cada escena tiene su propio archivo en esta carpeta para poder revertir o ajustar una escena puntual sin tocar las demás.

---

## Tabla de escenas

| # | Escena | Duración | Archivo |
|---|---|---|---|
| 1 | Un día imposible | 10 s | [`01-dia-imposible.md`](./01-dia-imposible.md) |
| 2 | Los clientes se frustran | 6 s | [`02-clientes-frustrados.md`](./02-clientes-frustrados.md) |
| 3 | Burnout (agotamiento) | 6 s | [`03-burnout.md`](./03-burnout.md) |
| 4 | El sueño | 10 s | [`04-el-sueno.md`](./04-el-sueno.md) |
| 5 | El encuentro | 13 s | [`05-el-encuentro.md`](./05-el-encuentro.md) |
| 6 | El despertar | 6 s | [`06-despertar.md`](./06-despertar.md) |
| 7 | La transformación | 7 s | [`07-transformacion.md`](./07-transformacion.md) |
| 8 | Clientes felices | 6 s | [`08-clientes-felices.md`](./08-clientes-felices.md) |
| 9 | Una nueva oficina | 6 s | [`09-nueva-oficina.md`](./09-nueva-oficina.md) |
| 10 | Cierre | 10 s | [`10-cierre.md`](./10-cierre.md) |
| | **Total** | **80 s** | |

80 segundos cae dentro de la ventana de 60–90 segundos pedida. El peso está repartido para dar más tiempo a las escenas 1, 4, 5 y 10 (10 s, 10 s, 13 s y 10 s respectivamente — un promedio de ~10.75 s) frente al resto (6–7 s, promedio ~6.2 s), siguiendo la instrucción de priorizar las escenas de mayor carga emocional: apertura del conflicto (1), giro hacia el sueño (4), presentación de Amparo con casi todo el diálogo de la marca (5), y cierre emocional + logo (10).

## Asignación de assets existentes (`resourcesAmparo/`)

| Asset | Escena principal | Uso |
|---|---|---|
| `bear-wave.png` | 5 — El encuentro | Match directo: gesto de saludo/mano ofrecida |
| `bear-banner-halo.png` | 4 — El sueño | Referencia parcial: concepto de contraluz/halo para la aparición del oso; falta fondo de bosque |
| `bear-tablet-chat.png` | 6 y 7 — Despertar / Transformación | Referencia de postura (6, con nuevo prop de café) y match directo (7, inserts de chat resuelto) |
| `bear-tools.png` | 9 — Nueva oficina | Match directo: oso organizando con herramientas/checklist |
| `bear-siempre-aqui-testimonial.png` | 10 — Cierre | Match directo: "siempre aquí" = traducción visual de "Para eso estoy" |

Las escenas 1, 2, 3 y 8 no requieren ningún asset del oso (Amparo aún no aparece en la historia, o la escena está centrada en los clientes) — ahí lo que falta generar es tratamiento de UI (chat/notificaciones) y viñetas de clientes, no renders del personaje.

## Tensiones marca vs. storytelling guide resueltas

Cada escena donde el oso aparece resuelve, en su propio archivo (sección "Nota de marca"), la tensión ya señalada por el propio storytelling guide entre la calidez humana con la que describe a Amparo (sonrisas, gestos, props tipo corbata/portafolio/anteojos) y la regla del brand doc de "serio, plano, premium — nunca infantil" con geometría de color plano. Puntos más relevantes:

- **Escena 4 (El sueño):** la tensión más marcada — se resuelve transmitiendo la calidez por actuación/luz/música, no rediseñando al personaje; si se usa un prop, uno solo (corbata *o* portafolio), tratado como bloque de color plano.
- **Escena 5 (El encuentro):** "sonríe" se acota a una sonrisa serena y contenida, nunca una sonrisa de caricatura.
- **Escena 6 (El despertar):** el prop de la taza de café debe quedar en color plano, sin brillo cerámico ni vapor fotorrealista.
- **Escena 10 (Cierre):** el gesto "ajusta sus anteojos" del storytelling guide no está documentado en ningún render existente ni en el brand doc — se marca como punto abierto para el director de arte, con una alternativa de gesto ya cubierto por los assets existentes.
- **Escenas 1, 2 y 9:** el caos/orden se debe construir por ritmo de montaje y composición, nunca rompiendo la paleta Tinta & Oro (nada de grading sucio en el caos, nada de azul corporativo distinto en el orden).
- **Escena 7:** riesgo de volverse listado de funciones en vez de escena emocional — se resuelve acotando los inserts de UI a menos de 1 segundo cada uno.
- **Escena 8:** las actuaciones de clientes felices deben mantenerse en registro adulto, no "cute" de app de consumo.
