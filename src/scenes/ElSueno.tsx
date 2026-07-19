import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {colors, font, radii} from '../theme';
import {PlaceholderTag} from '../components/PlaceholderTag';
import {AdvisorSilhouette, ForestBackground} from './shared';

/**
 * Escena 4 — "El sueño" (10s, 300 frames @ 30fps).
 * Guion: guion/produccion/04-el-sueno.md
 *
 * Giro emocional: de la oficina real al bosque nublado, primera aparición
 * del oso. Ningún render real del oso sirve todavía para esta escena
 * (`bear-banner-halo.png` es solo referencia conceptual de luz, no de fondo —
 * ver resourcesAmparo/briefs/00-auditoria.md y la instrucción explícita de no
 * usarlo tal cual acá). Se resuelve con una silueta/forma abstracta simple
 * del oso en color plano oscuro (tinta), sin rasgos faciales ni pose
 * específica inventada — mismo criterio que `AdvisorSilhouette`. El halo de
 * contraluz se simula apilando círculos planos de oro a opacidad decreciente
 * (misma técnica ya usada en `CoffeeCup`/`Burnout`), nunca un degradado CSS
 * real, aunque el brief permite luz de escena como única excepción a la
 * regla de color plano — se prefiere mantener la técnica 100% flat por
 * consistencia con el resto del proyecto.
 */

const BearSilhouette: React.FC<{x: number; y: number; scale?: number; haloStrength?: number}> = ({
  x,
  y,
  scale = 1,
  haloStrength = 0,
}) => (
  <div
    style={{
      position: 'absolute',
      left: x,
      top: y,
      transform: `scale(${scale})`,
      transformOrigin: 'bottom center',
    }}
  >
    {haloStrength > 0
      ? [280, 200, 130].map((r, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: 90 - r / 2,
              top: 40 - r / 2,
              width: r,
              height: r,
              borderRadius: radii.pill,
              background: colors.oro,
              opacity: haloStrength * (0.05 + i * 0.035),
            }}
          />
        ))
      : null}
    {/* Cuerpo — geometría simple, proporciones consistentes con los renders
        ya validados (sin cabeza gigante), sin rasgos faciales inventados */}
    <div style={{position: 'relative', width: 180, height: 230, background: colors.tinta, borderRadius: radii.cardLg}} />
    <div
      style={{
        position: 'absolute',
        top: -96,
        left: 34,
        width: 112,
        height: 112,
        background: colors.tinta,
        borderRadius: radii.pill,
      }}
    />
    <div style={{position: 'absolute', top: -122, left: 34, width: 34, height: 34, background: colors.tinta, borderRadius: radii.pill}} />
    <div style={{position: 'absolute', top: -122, left: 112, width: 34, height: 34, background: colors.tinta, borderRadius: radii.pill}} />
  </div>
);

export const ElSueno: React.FC = () => {
  const frame = useCurrentFrame();

  // 0:00–0:03 (0–90): el asesor camina, desorientado pero en calma.
  const advisorX = interpolate(frame, [0, 90], [1440, 1180], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const advisorBob = Math.sin(frame / 9) * 6;

  // 0:03–0:07 (90–210): el oso aparece entre los árboles, a contraluz, se acerca.
  const bearOpacity = interpolate(frame, [90, 110], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const bearX = interpolate(frame, [90, 210], [560, 760], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const bearScale = interpolate(frame, [90, 210], [0.85, 1.05], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const haloStrength = interpolate(frame, [90, 140], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // 0:07–0:10 (210–300): plano medio, niebla se asienta, se sostiene el cuadro.
  const bearScaleClose = interpolate(frame, [210, 260], [1.05, 1.3], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const fogSettle = interpolate(frame, [210, 300], [1, 1.4], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const finalBearScale = frame < 210 ? bearScale : bearScaleClose;
  const finalBearX = frame < 210 ? bearX : interpolate(frame, [210, 300], [760, 880], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill style={{fontFamily: font.family}}>
      <ForestBackground />
      <PlaceholderTag label="oso (placeholder silueta) + fondo bosque nublado" x={64} y={64} />

      <AdvisorSilhouette x={advisorX} y={880 + advisorBob} scale={1.1} />

      {frame >= 90 ? (
        <div style={{opacity: bearOpacity}}>
          <BearSilhouette
            x={finalBearX}
            y={880}
            scale={finalBearScale}
            haloStrength={haloStrength}
          />
        </div>
      ) : null}

      {/* Niebla adicional que se asienta hacia el final del beat */}
      <AbsoluteFill
        style={{
          background: '#C7CDD1',
          opacity: 0.05 * fogSettle,
          pointerEvents: 'none',
        }}
      />
    </AbsoluteFill>
  );
};
