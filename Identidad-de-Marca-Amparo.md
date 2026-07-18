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

**Seria, premium — nunca infantil.** Es una herramienta profesional para un sector regulado (seguros), no una app de consumo divertida.

- Postura confiada, expresión serena — no sonrisa de caricatura.
- **Personaje (el oso Amparo):** renderizado 3D con sombreado suave (luz, sombra, oclusión ambiental) — es el estilo ya establecido en los renders base de `resourcesAmparo/` y se mantiene como oficial. No aplanar el personaje en producciones nuevas; igualar la técnica de sombreado ya existente para que todos los renders del oso se vean consistentes entre sí.
- **Interfaz (chat, botones, cards, tipografía on-screen):** color plano en bloques, sin degradados ni brillos — la regla de planitud aplica a la UI, no al personaje. No mezclar ambos lenguajes dentro del mismo elemento (ej. un botón no lleva sombreado 3D aunque esté junto al oso).
- Geometría limpia y curvas firmes; sin proporciones de bebé (cabeza gigante, cuerpo diminuto).
- Composición centrada, fondo limpio cuando aparece el personaje.
- Nunca incluir logos de marcas de terceros reconocibles (dispositivos, apps, etc.) dentro de un asset del personaje — usar props/dispositivos genéricos.

Este mismo criterio aplica al tono de cualquier pieza: confianza y seriedad profesional, sin humor forzado ni infantilización.

> **Nota (2026-07-18):** la auditoría de `resourcesAmparo/` (ver `resourcesAmparo/briefs/00-auditoria.md`) encontró que los 5 renders base del oso usan sombreado 3D, no color plano puro como decía la versión anterior de esta sección. Se decidió mantener ese estilo como oficial —es material ya validado y evita retrabajo— en vez de forzar un rediseño completo. La auditoría también encontró, y quedan pendientes de corregir en la próxima regeneración de esos assets puntuales: un logo de Apple visible en `bear-tablet-chat.png` (cambiar a dispositivo genérico), un prop con rojo/verde saturado suelto en `bear-tools.png` (viola la regla de "el oro es el único acento saturado"), y un typo de copy en `bear-siempre-aqui-testimonial.png` ("¡Siempre aqui!" → "¡Siempre aquí!").

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
5. El sombreado 3D del personaje y la planitud de la UI son dos lenguajes que no se mezclan: el oso lleva luz/sombra/oclusión ambiental (ver nota más abajo), los elementos de interfaz van en color plano puro.

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
