/**
 * Tokens de marca — Amparo ("Tinta & Oro").
 * Fuente de verdad: Identidad-de-Marca-Amparo.md (raíz del repo).
 * Todas las escenas importan de acá en vez de hardcodear hex/valores sueltos,
 * para que un cambio de marca se propague en un solo lugar.
 */

export const colors = {
  // Identidad
  tinta: '#0B1B3D',
  // Acción — un solo CTA/acento oro por pantalla, texto siempre en tinta encima
  oro: '#FAD83C',
  oroHover: '#F0C820',

  // Fondos y superficies
  cream: '#FAFAF7',
  surface: '#FFFFFF',
  sunken: '#F3F2EC',
  sunkenStrong: '#ECE8DD',
  row: '#F7F6F0',
  hairline: '#E2DBCC', // único borde permitido

  // Texto
  text: '#0F172A',
  textMuted: '#5B6573',
  textFaint: '#8C94A1',

  // Estados semánticos (únicos acentos de color permitidos fuera del oro)
  success: '#065F46',
  successSoft: '#D9F2E6',
  warning: '#7A5410',
  warningSoft: '#FCEDCB',
  danger: '#8C2318',
  dangerSoft: '#FADCD9',
} as const;

export const font = {
  family: 'Inter, system-ui, sans-serif',
  weight: {
    body: 400,
    medium: 500,
    bold: 700,
    black: 800,
  },
  tracking: {
    headline: '-0.02em',
    headlineTight: '-0.03em',
  },
  lineHeight: {
    body: 1.3,
  },
} as const;

export const radii = {
  // Botones, chips, inputs, navegación, badges de contador: pill completo.
  pill: 999,
  // Cards y paneles: esquinas generosas, nunca esquina dura.
  cardSm: 12,
  cardLg: 16,
} as const;

/**
 * Regla de marca no negociable (ver Identidad-de-Marca-Amparo.md):
 * el personaje (oso) va en 3D con sombreado suave — no aplica en esta escena
 * (Amparo no aparece hasta la escena 4). Cualquier UI armada en código
 * (burbujas, cards, badges, CTAs) va en color plano puro, sin degradados
 * ni brillos, incluso en escenas de tensión/caos.
 */
export const brand = {colors, font, radii} as const;
