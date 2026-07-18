import React from 'react';
import {font, radii, colors} from '../theme';

/**
 * Badge numérico de bandeja de entrada (escena 1) — pedido en
 * resourcesAmparo/briefs/ui-chat-notificaciones.md.
 * Un solo acento oro por pantalla: si ya hay otro elemento en oro en el
 * mismo cuadro, usar accent="tinta" (texto blanco sobre tinta) en su lugar.
 */
export const CounterBadge: React.FC<{
  value: number;
  x: number;
  y: number;
  accent?: 'oro' | 'tinta';
}> = ({value, x, y, accent = 'oro'}) => {
  const background = accent === 'oro' ? colors.oro : colors.tinta;
  const color = accent === 'oro' ? colors.tinta : colors.surface;

  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        minWidth: 64,
        height: 64,
        padding: '0 20px',
        borderRadius: radii.pill,
        background,
        color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: font.family,
        fontWeight: font.weight.bold,
        fontSize: 30,
        letterSpacing: font.tracking.headline,
      }}
    >
      {value}
    </div>
  );
};
