import React from 'react';
import {AbsoluteFill, Sequence, interpolate, useCurrentFrame} from 'remotion';
import {colors, font, radii} from '../theme';
import {PlaceholderTag} from '../components/PlaceholderTag';
import {AdvisorSilhouette, DeskSurface, LaptopShape, WindowBlock} from './shared';

/**
 * Escena 3 — "Burnout (agotamiento)" (6s, 180 frames @ 30fps).
 * Guion: guion/produccion/03-burnout.md
 *
 * Sin diálogo, sin música con letra — el guion es explícito: el silencio es
 * la escena. No se agrega ningún texto/efecto de relleno.
 *
 * El oso no aparece. Fondo de oficina de noche: mismo criterio de la escena 1
 * (PLACEHOLDER de código), ahora en estado "vacío/noche" — una sola fuente de
 * luz (lámpara), resto en sombra. El "apagón" se logra con overlays planos de
 * opacidad (mismo recurso que el overlay final de la escena 1), nunca con un
 * degradado CSS: el brillo de la lámpara se simula apilando círculos planos
 * de opacidad decreciente (misma técnica que el vapor de `CoffeeCup`), no con
 * un gradiente radial.
 */

const LampGlow: React.FC<{x: number; y: number}> = ({x, y}) => (
  <>
    {[240, 170, 100].map((r, i) => (
      <div
        key={i}
        style={{
          position: 'absolute',
          left: x - r / 2,
          top: y - r / 2,
          width: r,
          height: r,
          borderRadius: radii.pill,
          background: colors.oro,
          opacity: 0.06 + i * 0.035,
        }}
      />
    ))}
  </>
);

const TaskListScroll: React.FC<{x: number; y: number; w: number; h: number}> = ({
  x,
  y,
  w,
  h,
}) => {
  const frame = useCurrentFrame();
  const rows = 14;
  const rowH = 58;
  const translateY = interpolate(frame, [0, 60], [0, -(rows * rowH - h)], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: w,
        height: h,
        overflow: 'hidden',
        background: colors.surface,
        borderRadius: radii.cardLg,
        border: `1px solid ${colors.hairline}`,
      }}
    >
      <div style={{transform: `translateY(${translateY}px)`, padding: '20px 24px'}}>
        {Array.from({length: rows}).map((_, i) => (
          <div key={i} style={{display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18}}>
            <span
              style={{
                width: 16,
                height: 16,
                borderRadius: radii.pill,
                background: colors.sunkenStrong,
                display: 'inline-block',
              }}
            />
            <span
              style={{
                width: 240 + (i % 3) * 60,
                height: 12,
                borderRadius: radii.pill,
                background: colors.row,
                display: 'inline-block',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Segmento A (0:00–0:02) — Plano general, oficina de noche, vacía
// ---------------------------------------------------------------------------

const NightEstablishing: React.FC = () => {
  const frame = useCurrentFrame();
  const nightOpacity = interpolate(frame, [0, 20], [0.2, 0.82], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return (
    <AbsoluteFill style={{background: colors.cream}}>
      <PlaceholderTag label="fondo oficina (noche, vacía)" x={64} y={64} />
      <WindowBlock x={140} y={90} w={460} h={340} />
      <DeskSurface />
      <AdvisorSilhouette x={1240} y={860} scale={1.15} />
      <LaptopShape x={880} y={760} openProgress={1} />
      <AbsoluteFill style={{background: colors.tinta, opacity: nightOpacity}} />
      <LampGlow x={1010} y={800} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------------------
// Segmento B (0:02–0:04) — Primer plano, lista interminable, suspira
// ---------------------------------------------------------------------------

const EndlessTaskList: React.FC = () => {
  const frame = useCurrentFrame();
  const sigh = interpolate(frame, [0, 30, 60], [0, -6, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return (
    <AbsoluteFill style={{background: colors.cream}}>
      <AbsoluteFill style={{background: colors.tinta, opacity: 0.78}} />
      <LampGlow x={1010} y={620} />
      <div style={{transform: `translateY(${sigh}px)`}}>
        <TaskListScroll x={760} y={300} w={420} h={420} />
      </div>
      <AdvisorSilhouette x={1240} y={860} scale={1.15} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------------------
// Segmento C (0:04–0:06) — Cabeza sobre el escritorio, se duerme, silencio
// ---------------------------------------------------------------------------

const FallsAsleep: React.FC = () => {
  const frame = useCurrentFrame();
  const slump = interpolate(frame, [0, 45], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const darken = interpolate(frame, [0, 60], [0.78, 0.93], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return (
    <AbsoluteFill style={{background: colors.cream}}>
      <DeskSurface />
      <AdvisorSilhouette x={1240} y={860} scale={1.15} slump={slump} />
      <AbsoluteFill style={{background: colors.tinta, opacity: darken}} />
      <LampGlow x={1010} y={800} />
    </AbsoluteFill>
  );
};

export const Burnout: React.FC = () => {
  return (
    <AbsoluteFill style={{background: colors.cream, fontFamily: font.family}}>
      <Sequence from={0} durationInFrames={60} name="A — Oficina de noche, vacía">
        <NightEstablishing />
      </Sequence>
      <Sequence from={60} durationInFrames={60} name="B — Lista interminable, suspira">
        <EndlessTaskList />
      </Sequence>
      <Sequence from={120} durationInFrames={60} name="C — Se duerme, silencio">
        <FallsAsleep />
      </Sequence>
    </AbsoluteFill>
  );
};
