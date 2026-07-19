import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {colors, font, radii} from '../theme';

/**
 * Línea de diálogo hablado (Amparo / Asesor) — distinta de `ChatBubble`
 * (que es para mensajes tipo WhatsApp superpuestos). Se usa en escenas con
 * diálogo actuado: 5 (el encuentro), 6 (el despertar), 10 (cierre).
 * Color plano puro: card crema/superficie, texto tinta — nunca oro de fondo
 * acá (el oro ya está reservado como acento único por pantalla donde aplique).
 */
export const DialogueCaption: React.FC<{
  speaker: string;
  text: string;
  /** Frame absoluto (relativo al composition/Sequence donde se monta). */
  appearAt: number;
  durationInFrames: number;
  align?: 'left' | 'center' | 'right';
}> = ({speaker, text, appearAt, durationInFrames, align = 'center'}) => {
  const frame = useCurrentFrame();
  const local = frame - appearAt;

  if (local < 0 || local > durationInFrames) return null;

  const fadeEdge = Math.min(6, Math.floor(durationInFrames / 3));
  const opacity = interpolate(
    local,
    [0, fadeEdge, durationInFrames - fadeEdge, durationInFrames],
    [0, 1, 1, 0],
    {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}
  );
  const translateY = interpolate(local, [0, fadeEdge], [10, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const justify =
    align === 'center' ? 'center' : align === 'left' ? 'flex-start' : 'flex-end';

  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 120,
        display: 'flex',
        justifyContent: justify,
        paddingLeft: align === 'left' ? 160 : 0,
        paddingRight: align === 'right' ? 160 : 0,
        opacity,
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div
        style={{
          background: colors.surface,
          border: `1px solid ${colors.hairline}`,
          borderRadius: radii.cardLg,
          padding: '20px 34px',
          maxWidth: 1140,
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontFamily: font.family,
            fontWeight: font.weight.bold,
            fontSize: 17,
            letterSpacing: font.tracking.headline,
            color: colors.textMuted,
            textTransform: 'uppercase',
            marginBottom: 8,
          }}
        >
          {speaker}
        </div>
        <div
          style={{
            fontFamily: font.family,
            fontWeight: font.weight.medium,
            fontSize: 32,
            lineHeight: font.lineHeight.body,
            color: colors.text,
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
};
