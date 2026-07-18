# Brief — Fondo de bosque nublado + oso a contraluz

**Para escena(s):** 4 — El sueño (`guion/produccion/04-el-sueno.md`), 0:22–0:32.
**Asset de referencia parcial existente:** `resourcesAmparo/bear-banner-halo.png` (sirve solo para el concepto de luz de borde/halo, no para el fondo — ver `00-auditoria.md`, el halo de ese asset es además un degradado radial que tampoco cumple la regla de color plano).
**Tipo de necesidad:** nuevo — fondo + render del oso integrado (un solo entregable, tal como ya lo plantea el guion de producción).

## Qué debe mostrar exactamente

- Bosque de niebla colombiano (páramo / bosque nublado o "bosque nublado andino"): troncos de árboles altos y delgados, vegetación difusa, niebla baja en el aire.
- El oso entra caminando entre los árboles, a **contraluz** — silueta legible, paso calmado y firme, nunca apurado ni juguetón. Expresión serena, sin sonrisa todavía (la sonrisa llega en escena 5).
- Encuadre en tres cuartos o de perfil, cuerpo completo o plano medio-largo (el guion permite ambos: "de perfil o en tres cuartos").
- Luz de borde suave tipo halo alrededor de la silueta del oso (concepto tomado de `bear-banner-halo.png`, pero resuelto como iluminación direccional de escena, no como un aro/glow decorativo detrás del personaje).
- Troncos en primer plano pueden ir desenfocados (profundidad de campo) para dar legibilidad a la silueta central.
- Si se usa un prop de vestuario (corbata *o* portafolio — nunca ambos), debe leerse como un bloque de color plano más, sin textura de tela ni brillo.

## Paleta a usar

- Oso: Tinta `#0B1B3D` (cuerpo) y Oro `#FAD83C` (cara/vientre/detalles), igual que en los renders existentes — no recolorear al personaje.
- Bosque/ambiente: permitir tonos de verde apagado y niebla gris-azulada propios de un bosque real (esto **no** es "color suelto fuera de semánticos" porque la regla de paleta aplica a acentos de marca/UI, no a un fondo ambiental fotográfico/ilustrado de escena — pero evitar verdes o azules saturados/neón; mantener todo en valores apagados y neutros para que el oso en Tinta & Oro sea lo único saturado del cuadro).
- Luz de contraluz: dorado cálido, coherente con `#FAD83C` / `#F0C820`, pero como **luz direccional** (fuente puntual detrás del personaje, degradé de intensidad físicamente justificado por la iluminación), no como relleno de color plano — este es el único punto de la marca donde un degradado es aceptable porque es luz de escena, no color de superficie del personaje ni de UI.

## Qué evitar explícitamente

- Degradados suaves o sombreado "peluche" **en el cuerpo del oso** (el personaje debe quedar en color plano en bloques, igual que el logo — a diferencia del fondo/luz de escena, donde la iluminación direccional sí es aceptable).
- Proporciones de bebé (cabeza gigante, cuerpo diminuto) — mantener las proporciones ya establecidas en los 5 renders existentes.
- Sonrisa amplia de caricatura — expresión serena únicamente, la sonrisa contenida es recién de la escena 5.
- Ambos props (corbata y portafolio) a la vez — máximo uno.
- Fondo hiperdetallado o fotorrealista más allá de lo que pide el guion ("silueta legible entre troncos desenfocados, niebla en el aire — sin más detalle de fondo que eso").
- Bordes duros en cualquier elemento gráfico que se agregue sobre el fondo (si se compone con overlay de marca).

## Formato / orientación sugerida

- El guion no especifica orientación de cuadro final del video (asumir horizontal 16:9, consistente con el resto del guion de producción salvo indicación contraria de motion-engineer).
- Entregar el render del oso como asset separado con canal alfa (recortado, fondo transparente) más el fondo de bosque como plano aparte, para permitir que motion-engineer controle el parallax/composición en Remotion — igual al patrón ya usado en `resourcesAmparo/` (los 5 assets existentes son todos recortes con alfa, no fondos integrados).
