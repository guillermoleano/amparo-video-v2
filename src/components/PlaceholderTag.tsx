import React from 'react';
import {colors, font, radii} from '../theme';

/**
 * Marca visual sutil y discreta para assets que todavía no existen como
 * imagen/render real (ver resourcesAmparo/briefs/fondo-oficina-asesor.md y
 * ui-chat-notificaciones.md) y se resolvieron acá como placeholder de
 * formas/color plano en código. Objetivo: que QA y el orquestador puedan
 * identificar de un vistazo qué reemplazar, sin tocar timing ni layout.
 * Baja opacidad a propósito — no debe leerse como parte del diseño final.
 */
export const PlaceholderTag: React.FC<{
  label: string;
  x: number;
  y: number;
}> = ({label, x, y}) => (
  <div
    style={{
      position: 'absolute',
      left: x,
      top: y,
      background: colors.sunkenStrong,
      color: colors.textFaint,
      borderRadius: radii.pill,
      padding: '6px 14px',
      fontFamily: font.family,
      fontWeight: font.weight.medium,
      fontSize: 15,
      letterSpacing: '0.01em',
      opacity: 0.55,
    }}
  >
    {`PLACEHOLDER · ${label}`}
  </div>
);
