# Brief — Oso sentado en escritorio con café (El despertar)

**Para escena(s):** 6 — El despertar (`06-despertar.md`), 0:45–0:51.
**Asset de referencia existente:** `bear-tablet-chat.png` — usar como **referencia de postura y actitud** (atenta, competente, frente a un dispositivo), no como asset final: el guion pide explícitamente cambiar el contexto de fondo (oficina real del asesor, no un fondo de producto genérico) y agregar el prop de la taza de café.
**Tipo de necesidad:** nuevo render del oso.

## Qué debe mostrar exactamente

- El oso sentado junto a un escritorio de oficina (el mismo escritorio del asesor, ver `fondo-oficina-asesor.md`, estado "despertar").
- Sostiene una taza de café en una mano/pata.
- Con la otra mano/pata apoyada en una tablet o laptop, respondiendo mensajes (pantalla con UI de chat visible, ver `ui-chat-notificaciones.md` para el tratamiento de esa UI en pantalla).
- Postura atenta y competente, sin urgencia — es la primera vez que el asesor lo ve "instalado" en su propia oficina real, después del sueño de las escenas 4–5.

## Paleta a usar

- Oso: Tinta `#0B1B3D` / Oro `#FAD83C`, igual a los renders existentes — sin recolorear.
- Taza de café: colores planos y simples (ej. un bloque tinta o crema para el vaso, un bloque de un tono café/tostado para el líquido/tapa si hace falta diferenciarlo) — **sin** que el marrón del café se convierta en un acento saturado que compita con el oro; tratarlo como un neutro más, similar en espíritu a los grises/beiges ya definidos en la paleta (`Hundido #F3F2EC`, `Hundido fuerte #ECE8DD`) aunque no sean exactamente esos hex.
- Pantalla de la tablet/laptop: si se ve contenido, usar la paleta de marca (crema/tinta/oro) para la UI, nunca una interfaz genérica con colores fuera de marca.

## Qué evitar explícitamente

- **Brillo de cerámica o plástico en la taza** — la nota de marca de esta escena en el guion de producción es explícita: "la taza de café es un detalle cálido y humano... debe quedar como un bloque de color plano simple (sin brillo de cerámica, sin vapor fotorrealista)". La auditoría de assets existentes (`00-auditoria.md`) encontró exactamente este problema en `bear-siempre-aqui-testimonial.png` — no repetirlo acá.
- **Vapor fotorrealista** saliendo de la taza — si se quiere sugerir "recién servido", usar como máximo 1–2 líneas simples de color plano, nunca un efecto de humo/vapor con degradado o transparencia realista.
- Degradados/sombreado "peluche" en el cuerpo del oso (mismo problema transversal que el resto del set — ver auditoría).
- Marca de dispositivo de tercero visible (logo de Apple u otro) en la tablet/laptop — usar un dispositivo genérico, a diferencia de `bear-tablet-chat.png` que sí muestra un logo de Apple (señalado como riesgo en la auditoría).
- Cualquier gesto de urgencia o estrés — la escena pide justamente el contraste con el agotamiento de la escena 3: postura calmada.

## Formato / orientación sugerida

- Plano medio, horizontal 16:9, con espacio suficiente en el encuadre para el escritorio y el fondo de oficina real (ver `fondo-oficina-asesor.md`).
- Entregar con canal alfa (recorte transparente) para permitir composición sobre el fondo de oficina en Remotion, siguiendo el mismo patrón que los 5 assets existentes.
