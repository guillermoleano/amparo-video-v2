# Identidad de marca — Amparo

## Qué es Amparo

Amparo es el **agente de inteligencia artificial de WhatsApp** que responde, en nombre de una corredora de seguros colombiana, las preguntas de sus asegurados sobre sus pólizas (coberturas, vigencias, estado) — las 24 horas, en segundos, y cumpliendo la Ley 1581 de protección de datos.

**Para quién es:** el producto lo usan corredoras de seguros; el público de toda comunicación de marca son los **asesores** de la corredora (no el asegurado final). El mensaje central: Amparo absorbe las preguntas repetitivas para que el asesor recupere tiempo de vender, en vez de contestar siempre lo mismo por teléfono o WhatsApp.

**Lo que resuelve:**
- El equipo de la corredora "apaga incendios": ~80% de las consultas son siempre sobre vigencias y coberturas.
- Gestionar pólizas en Excel no escala y es un riesgo de cumplimiento.
- Un asegurado sin respuesta rápida empieza a comparar con la competencia — la demora cuesta renovaciones.

**Cómo funciona (resumen):** el asesor carga las pólizas (PDF + extracción automática) → el asegurado pregunta por WhatsApp y Amparo responde al instante con datos reales → el asesor supervisa todo desde un backoffice con trazas inmutables.

**Diferenciales de confianza:** datos sensibles (salud) enmascarados por defecto; auditoría inalterable (cada evento encadenado por hash, nadie puede editar ni borrar historial); verificación de identidad por OTP de email (nunca por WhatsApp); multi-aseguradora (Sura, Bolívar, Liberty, Allianz, Mapfre, HDI, etc. — un solo canal).

---

## Personalidad de marca

**Seria, plana, premium — nunca infantil.** Es una herramienta profesional para un sector regulado (seguros), no una app de consumo divertida. La referencia de estilo es el propio logo: un oso geométrico y plano.

- Postura confiada, expresión serena — no sonrisa de caricatura.
- Color plano en bloques: sin degradados suaves, sin brillos plásticos, sin sombreado "peluche".
- Geometría limpia y curvas firmes; sin proporciones de bebé (cabeza gigante, cuerpo diminuto).
- Composición centrada, fondo limpio cuando aparece el personaje.

Este mismo criterio aplica al tono de cualquier pieza: confianza y seriedad profesional, sin humor forzado ni infantilización.

---

## Voz y tono

- Español, **directo, humano, en segunda persona** ("tus asesores", "tú tienes el control").
- Sin jerga técnica ni anglicismos hacia el asesor.
- Frases cortas y concretas; usar números reales cuando existan (3 segundos de respuesta, 80% de consultas repetitivas, 24/7) en vez de vaguedades.
- Sin sobre-venta: nada de signos de exclamación en cadena; emojis solo los que ya usa el producto (🔒 ✅ 👋) y con moderación.

---

## Paleta de colores — "Tinta & Oro"

Dos colores, dos roles. **Nunca se invierten.**

| Color | Hex | Rol |
|---|---|---|
| **Tinta** (azul marino oscuro) | `#0B1B3D` | **Identidad** — logo, titulares, links, navegación activa, énfasis |
| **Oro** (amarillo dorado) | `#FAD83C` | **Acción** — CTA principal, foco. Un solo botón oro por pantalla. Texto siempre en tinta encima, **nunca blanco** (falla el contraste) |
| Oro hover | `#F0C820` | Estado hover del CTA |
| Fondo crema | `#FAFAF7` | Fondo cálido — evita la fatiga del blanco puro |
| Superficie | `#FFFFFF` | Cards y paneles |
| Hundido (sunken) | `#F3F2EC` | Inputs, botones secundarios, superficies hundidas |
| Hundido fuerte | `#ECE8DD` | Barra de título sobre superficies hundidas |
| Fila (row) | `#F7F6F0` | Filas de tabla dentro de cards |
| Hairline | `#E2DBCC` | Único borde permitido — discreto y cálido |
| Texto | `#0F172A` | Texto principal |
| Texto muted | `#5B6573` | Texto secundario |
| Texto faint | `#8C94A1` | Datos enmascarados, headers de tabla |
| Éxito / éxito suave | `#065F46` / `#D9F2E6` | Estados positivos |
| Advertencia / suave | `#7A5410` / `#FCEDCB` | Estados de atención |
| Peligro / suave | `#8C2318` / `#FADCD9` | Estados negativos |

**Reglas no negociables:**
1. El oro es *movimiento*: solo para el CTA principal de cada pantalla — un oro por pantalla.
2. El oro siempre lleva texto **tinta** encima. Nunca blanco sobre oro.
3. Nada de rojos/verdes/azules sueltos fuera de los semánticos — el único acento saturado es el oro.
4. Sin bordes duros: las superficies se diferencian por relleno/contraste, no por línea (la única excepción es el hairline para separaciones muy discretas).

---

## Tipografía

**Inter** (variable) — la única familia tipográfica de la marca.

- Titulares: negrita (700–800), tracking apretado (-0.02em a -0.03em según tamaño).
- Cuerpo: peso 400–500, line-height generoso (≥1.3) — el texto "respira".
- Nunca mezclar con otra familia tipográfica.

---

## Geometría

- Botones, chips, inputs y navegación: **pill** (radio 999px).
- Cards y paneles: esquinas generosas (12–16px).
- Nada de rectángulos de esquina dura.

---

## Logotipo

Una cabeza de oso cuya silueta inferior remata en punta — se lee simultáneamente como **escudo** (amparo = protección) y como **pin de ubicación**. La cara (ojos y hocico) se forma con espacio negativo, por lo que funciona sobre cualquier fondo de la paleta.

- **Tinta sobre transparente** — uso primario sobre fondos claros (crema, blanco, oro).
- **Blanco sobre transparente** — para fondos oscuros (secciones en tinta).
- **Tinta sobre cuadrado redondeado oro** — ícono de app / favicon.

No deformar, no recolorear fuera de estas tres variantes, no reconstruir el trazo a mano ni añadir el wordmark dentro del ícono (la palabra "amparo" se compone aparte, en Inter bold).

---

*Documento de referencia — mantenido junto al código del proyecto de video en* `amparo-video/BRAND.md`. *Si la identidad cambia, actualizar ambos.*
