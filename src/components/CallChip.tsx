import React from 'react';
import {useCurrentFrame} from 'remotion';
import {colors, font, radii} from '../theme';

/**
 * Indicador de llamada entrante (insert de celular vibrando, escena 1).
 * Usa tinta como acento — el oro ya está tomado por el contador de bandeja
 * en el mismo cuadro (regla de "un solo oro por pantalla").
 */
export const CallChip: React.FC<{
  label: string;
  x: number;
  y: number;
  /** Desfasa la fase de la vibración para que dos chips no vibren en espejo. */
  phase?: number;
}> = ({label, x, y, phase = 0}) => {
  const frame = useCurrentFrame();
  const wobble = Math.sin((frame + phase) * 1.6) * 3;

  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        transform: `translateX(${wobble}px)`,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        background: colors.tinta,
        color: colors.surface,
        borderRadius: radii.pill,
        padding: '14px 24px',
        fontFamily: font.family,
        fontWeight: font.weight.medium,
        fontSize: 22,
      }}
    >
      <span
        style={{
          width: 10,
          height: 10,
          borderRadius: radii.pill,
          background: colors.oro,
          display: 'inline-block',
        }}
      />
      {label}
    </div>
  );
};
