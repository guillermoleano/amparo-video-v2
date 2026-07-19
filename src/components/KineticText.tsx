import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {colors, font} from '../theme';

/**
 * Palabra/frase de tipografía cinética en pantalla — escenas 7 (opcional,
 * "En segundos, no en horas.") y 9 ("Mensajes. Tareas. Recordatorios.
 * Agenda."). Ver resourcesAmparo/briefs/tipografia-cinetica-onscreen.md.
 *
 * Entra/sale por posición y opacidad únicamente — nunca con brillo/glow con
 * degradado (regla explícita del brief). `emphasis` colorea el texto en oro
 * (nunca el fondo), para dar énfasis puntual sin romper "un solo oro por
 * pantalla" ya que no hay ningún fondo oro involucrado.
 */
export const KineticWord: React.FC<{
  text: string;
  appearAt: number;
  durationInFrames: number;
  x: number;
  y: number;
  fontSize?: number;
  emphasis?: boolean;
  align?: 'left' | 'center';
}> = ({text, appearAt, durationInFrames, x, y, fontSize = 60, emphasis = false, align = 'left'}) => {
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
  const translateX = interpolate(local, [0, fadeEdge], [align === 'left' ? 24 : -24, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        opacity,
        transform: `translateX(${translateX}px)`,
        fontFamily: font.family,
        fontWeight: font.weight.black,
        fontSize,
        letterSpacing: font.tracking.headlineTight,
        color: emphasis ? colors.oro : colors.tinta,
        textAlign: align,
      }}
    >
      {text}
    </div>
  );
};
