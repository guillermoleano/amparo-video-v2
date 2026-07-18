# Auditoría de assets existentes — `resourcesAmparo/`

**Fecha:** 2026-07-18
**Auditor:** director de arte (rol `art-director-amparo`)
**Fuente de verdad:** `Identidad-de-Marca-Amparo.md` — secciones "Paleta de colores — Tinta & Oro" y "Personalidad de marca"
**Método:** inspección visual de los 5 PNG con la herramienta de lectura de imágenes + muestreo cuantitativo de color (script Python/Pillow sobre los píxeles opacos de cada archivo, agrupando por bins de color, para confirmar objetivamente si un área que se ve "plana" realmente lo es o tiene degradado).

**Reglas duras contra las que se audita:**
1. Tinta `#0B1B3D` = identidad, Oro `#FAD83C` = un solo CTA por pantalla.
2. Texto tinta encima del oro, nunca blanco.
3. Color plano en bloques — sin degradados suaves, sin sombreado "peluche".
4. Sin proporciones de bebé (cabeza gigante, cuerpo diminuto).
5. Geometría: pill (999px) en botones/chips, esquinas generosas (12–16px) en cards, nada de esquina dura.
6. (Complementaria, de la misma sección de paleta) Nada de rojos/verdes/azules sueltos fuera de los semánticos — el único acento saturado es el oro.

---

## Hallazgo transversal (afecta a los 5 assets)

**Los 5 renders están hechos con sombreado 3D suave (luz, sombra, oclusión ambiental) — no con color plano en bloques.** Esto no es una impresión subjetiva: el muestreo de color lo confirma. En cada imagen, la zona que a simple vista se lee como "el tinta del cuerpo del oso" en realidad se reparte en 8–10 tonos de azul marino distintos y cercanos entre sí (de `#001828` a `#203048`, pasando por `#081830`, `#102038`, `#182840`...), cada uno cubriendo entre 1% y 13% del área — es decir, un degradado continuo, no un bloque sólido de `#0B1B3D`. Lo mismo pasa con el oro: en vez de un único `#FAD83C`, aparecen variantes como `#F8C058`, `#E8B850`, `#F8D048`.

Esto **incumple directamente la regla dura #3** ("color plano en bloques, sin degradados suaves ni sombreado peluche") en los 5 assets. Es consistente con lo que ya señala el propio guion de producción en la escena 6 (pide explícitamente que la nueva taza de café "quede en color plano... sin brillo de cerámica, sin vapor fotorrealista, para no romper la regla") — el guion ya intuía este problema para assets nuevos; esta auditoría confirma que también está presente en los assets ya generados.

No se recomienda regenerar los 5 assets existentes como parte de esta tarea (son renders ya en uso y el pedido del usuario es curaduría, no producción), pero **cualquier asset nuevo debe corregir este punto explícitamente** — ver briefs.

---

## 1. `bear-wave.png` — escena 5 (El encuentro)

**Veredicto: no cumple** (parcialmente, en el punto de color plano).

| Regla | Resultado |
|---|---|
| Oro = único acento CTA | N/A — no hay UI ni CTA en este render, solo el personaje. |
| Texto tinta sobre oro, nunca blanco | N/A — no hay texto en el asset. |
| Color plano, sin degradados/peluche | **No cumple.** Cuerpo, cara y almohadilla de la pata tienen sombreado 3D con luz direccional (ver hallazgo transversal). |
| Sin proporciones de bebé | Cumple razonablemente — es un plano medio/cerrado (busto), no se ve proporción de cuerpo completo para evaluar cabeza/cuerpo. |
| Geometría pill / esquinas generosas | N/A — no hay elementos de UI (botones, cards) en este render. |
| Rojos/verdes/azules sueltos | Cumple — solo tinta y oro en pantalla. |

**Nota adicional:** el gesto (mano/pata levantada en saludo) es el match más directo del set con el guion de escena 5 tal como ya señala `00-resumen.md`. Sin incumplimientos de contenido, solo de tratamiento de color.

---

## 2. `bear-tablet-chat.png` — referencia para escenas 6 y 7

**Veredicto: no cumple.**

| Regla | Resultado |
|---|---|
| Oro = único acento CTA | N/A — no hay CTA; el globo de chat es un indicador de "escribiendo" (3 puntos), no un botón. |
| Texto tinta sobre oro, nunca blanco | N/A — no hay texto, solo puntos de color en el globo. |
| Color plano, sin degradados/peluche | **No cumple.** Mismo problema transversal (sombreado 3D en cuerpo y cara). |
| Sin proporciones de bebé | Observación menor — proporción de cuerpo completo visible: cabeza grande, vientre redondo prominente, brazos y piernas cortos. Es el diseño de personaje ya establecido (igual en los 5 assets), no un error puntual de este render — se señala como tensión sistémica del modelo 3D, no como algo para "arreglar" en este asset en particular. |
| Geometría pill / esquinas generosas | Cumple — el globo de chat tiene esquinas redondeadas generosas y forma de burbuja con cola, sin bordes duros. |
| Rojos/verdes/azules sueltos | Cumple — la paleta se mantiene en tinta/oro/crema. |

**Hallazgo adicional (fuera de las 5 reglas duras, pero relevante para producción):** la tablet está renderizada como un iPad de Apple reconocible (logo de la manzana visible en el reverso). Esto es una marca de tercero dentro de un asset de marca propia — riesgo de imagen/derechos si el video se usa en pauta paga. Recomendación: en cualquier render nuevo que incluya una tablet, usar un dispositivo genérico sin logo de marca real.

---

## 3. `bear-banner-halo.png` — referencia parcial para escena 4

**Veredicto: no cumple.**

| Regla | Resultado |
|---|---|
| Oro = único acento CTA | N/A — no hay CTA, el oro se usa como halo/luz de fondo. |
| Texto tinta sobre oro, nunca blanco | N/A — no hay texto. |
| Color plano, sin degradados/peluche | **No cumple, y de forma más marcada que los otros 4 assets.** Además del sombreado 3D del oso (mismo problema transversal), el halo dorado en sí **es un degradado radial** (de oro brillante a tinta) — es decir, el elemento central del asset (el halo/contraluz) está construido con la técnica que la regla prohíbe explícitamente. |
| Sin proporciones de bebé | Mismo comentario sistémico que en `bear-tablet-chat.png`. |
| Geometría pill / esquinas generosas | N/A — no hay UI en este asset. |
| Rojos/verdes/azules sueltos | Cumple. |

**Nota:** el archivo es un formato banner (2352×1567) con grandes áreas transparentes arriba y abajo (solo ~3.6% de los píxeles totales tienen contenido opaco) — es decir, el contenido real ocupa una franja horizontal angosta en el centro, no el lienzo completo. Esto ya es coherente con lo que señala `00-resumen.md` y la escena 4: este asset **no sirve tal cual**, es solo referencia conceptual de contraluz, y ya está previsto reemplazarlo (ver brief `fondo-bosque-nublado.md`). No se trata de un hallazgo nuevo, sino de una confirmación cuantitativa de por qué el guion ya lo marcó como insuficiente.

---

## 4. `bear-siempre-aqui-testimonial.png` — escena 10 (Cierre)

**Veredicto: no cumple.**

| Regla | Resultado |
|---|---|
| Oro = único acento CTA | N/A — no hay CTA; el oro aparece en el marco circular de la foto del cliente y en el cuerpo del oso. |
| Texto tinta sobre oro, nunca blanco | N/A directo — el texto ("¡Siempre aqui!") va sobre globos color crema/blanco con texto oscuro, no sobre oro. Cumple por no tener el caso prohibido. |
| Color plano, sin degradados/peluche | **No cumple.** Mismo sombreado 3D transversal. Además, la taza de café tiene un brillo tipo plástico/cerámico en la tapa y vapor dibujado con aspecto semi-fotorrealista — **exactamente** el tipo de detalle que el propio guion de producción (escena 6) pide evitar para el próximo render nuevo con taza de café. Es decir, el asset existente ya tiene el problema que el guion advierte para el asset futuro. |
| Sin proporciones de bebé | Mismo comentario sistémico. |
| Geometría pill / esquinas generosas | Cumple — los globos de chat y el marco circular de foto tienen geometría redondeada, sin esquina dura. |
| Rojos/verdes/azules sueltos | Cumple — la única foto (retrato del cliente) trae sus propios colores realistas (piel, blazer gris), pero al ser una fotografía y no un ícono/UI, no aplica la regla de "acento saturado único"; no hay rojo/verde/azul saturado suelto en el ilustrado. |

**Hallazgos adicionales (fuera de las 5 reglas duras):**
- **Error de copy:** el texto en los globos dice "¡Siempre aqui!" sin tilde en la í (debería ser "¡Siempre aquí!"), y uno de los dos globos muestra una "I" mayúscula suelta al final ("¡Siempre aquI!") — parece un artefacto de generación/render de texto. Si este asset se reutiliza en producción final, el texto debe corregirse.
- **Choque de estilo:** la foto del cliente es una fotografía realista de una persona (stock genérico), combinada con el oso ilustrado de sombreado 3D — mezcla de dos lenguajes visuales distintos en un mismo cuadro. No es una violación de las reglas de color/geometría, pero es una inconsistencia de tratamiento a tener en cuenta si se genera contenido nuevo con clientes (ver brief `vinetas-clientes.md`, que recomienda actuación real filmada en vez de fotos stock ilustradas, precisamente para no repetir este choque).

---

## 5. `bear-tools.png` — escena 9 (Nueva oficina)

**Veredicto: no cumple.**

| Regla | Resultado |
|---|---|
| Oro = único acento CTA | N/A — no hay CTA. |
| Texto tinta sobre oro, nunca blanco | N/A — no hay texto. |
| Color plano, sin degradados/peluche | **No cumple.** Sombreado 3D transversal en el oso. Además, los tres íconos flotantes (calculadora, base de datos/servidor, calendario) tienen su propio sombreado con brillo y sombra (especialmente el cilindro de base de datos, con degradado gris claro a blanco y sombra proyectada) — mismo problema, ahora también en elementos de UI/iconografía, no solo en el personaje. |
| Sin proporciones de bebé | Mismo comentario sistémico. |
| Geometría pill / esquinas generosas | Aceptable — la calculadora tiene esquinas redondeadas; el calendario también. Ninguno usa esquina dura marcada. |
| Rojos/verdes/azules sueltos | **No cumple.** El prop que el oso sostiene (lápiz o vela) tiene una punta con degradado rojo-amarillo y pequeñas líneas tipo chispa en verde — colores saturados sueltos (rojo y verde) fuera de la paleta semántica, violando la regla "el único acento saturado es el oro". |

**Hallazgo importante — resuelve un punto abierto de `guion/produccion/10-cierre.md`:** el oso en este render **ya lleva puestos anteojos redondos** (marco color oro/tostado). El archivo de escena 10 y el resumen (`00-resumen.md`) afirman que "no está documentado [el gesto de anteojos] en ningún render existente" y lo marcan como punto abierto para el director de arte, recomendando no introducir el elemento sobre la marcha si no existe ya. **Esto es incorrecto: sí existe** — está en `bear-tools.png`, que es justamente uno de los 5 assets ya validados y en uso (para la escena 9). Ver detalle en la sección de reporte final más abajo; no hace falta un brief nuevo para esto, es una corrección de dato para el equipo de guion/motion.

---

## Resumen ejecutivo

| Asset | Veredicto | Motivo principal |
|---|---|---|
| `bear-wave.png` | No cumple | Sombreado 3D / degradado (no color plano) |
| `bear-tablet-chat.png` | No cumple | Ídem + logo de Apple visible (marca de tercero) |
| `bear-banner-halo.png` | No cumple | Ídem + el halo mismo es un degradado radial (ya sabíamos que este asset no sirve tal cual) |
| `bear-siempre-aqui-testimonial.png` | No cumple | Ídem + brillo/vapor en la taza + typo de copy + choque de estilo foto-vs-ilustración |
| `bear-tools.png` | No cumple | Ídem + rojo/verde sueltos en el prop + íconos con degradado — pero **resuelve** el punto abierto de los anteojos de escena 10 |

Ningún asset incumple las reglas de "oro como único CTA" o "texto tinta sobre oro nunca blanco" porque ninguno de los 5 contiene un botón/CTA real — esas dos reglas quedan pendientes de verificación recién cuando se generen los assets de UI (chat, tarjeta final) especificados en los briefs de esta carpeta.
