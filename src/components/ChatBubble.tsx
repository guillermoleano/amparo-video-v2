import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {colors, font, radii} from '../theme';

/**
 * Burbuja de mensaje entrante — plantilla reutilizable pedida en
 * resourcesAmparo/briefs/ui-chat-notificaciones.md (escenas 1, 2, 7, 8).
 * Color plano puro (superficie blanca u hairline), nunca el verde/gris
 * por defecto de WhatsApp, nunca degradados.
 */
export const ChatBubble: React.FC<{
  text: string;
  /** Frame relativo (0 = frame en que debe empezar a aparecer la burbuja). */
  appearAt: number;
  x: number;
  y: number;
  width?: number;
  /** Variante "resuelto" (escena 8) — badge de éxito superpuesto. */
  resolved?: boolean;
}> = ({text, appearAt, x, y, width = 420, resolved = false}) => {
  const frame = useCurrentFrame();
  const local = frame - appearAt;

  if (local < 0) return null;

  const pop = interpolate(local, [0, 8], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const opacity = interpolate(local, [0, 6], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const scale = interpolate(pop, [0, 1], [0.85, 1]);
  const translateY = interpolate(pop, [0, 1], [12, 0]);

  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width,
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
        transformOrigin: 'top left',
      }}
    >
      <div
        style={{
          background: colors.surface,
          border: `1px solid ${colors.hairline}`,
          borderRadius: radii.cardLg,
          padding: '18px 22px',
          fontFamily: font.family,
          fontWeight: font.weight.medium,
          fontSize: 26,
          lineHeight: font.lineHeight.body,
          color: colors.text,
        }}
      >
        {text}
      </div>
      {resolved ? (
        <div
          style={{
            position: 'absolute',
            top: -14,
            right: -14,
            background: colors.successSoft,
            color: colors.success,
            borderRadius: radii.pill,
            width: 32,
            height: 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: font.family,
            fontWeight: font.weight.bold,
            fontSize: 18,
          }}
        >
          {'✓'}
        </div>
      ) : null}
    </div>
  );
};
