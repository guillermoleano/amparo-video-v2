import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {colors, radii} from '../theme';

/**
 * Formas de entorno reutilizables entre escenas 3, 5, 6, 8, 9, 10.
 *
 * `WindowBlock`, `DeskSurface`, `LaptopShape`, `CoffeeCup` y `AdvisorSilhouette`
 * son copias — no imports — de las formas ya validadas en
 * `src/scenes/DiaImposible.tsx` (escena 1, ya aprobada). Se copian en vez de
 * refactorizar ese archivo para no tocar una Composition ya registrada; si
 * más adelante se decide de-duplicar, hacerlo en un commit propio que incluya
 * un diff explícito de DiaImposible.tsx para que quede claro qué cambió.
 *
 * `AdvisorSilhouette` acá SÍ tiene una prop nueva (`slump`) que no existe en
 * la copia de la escena 1 — se usa para la pose "dormido sobre el escritorio"
 * de la escena 3 y su reverso (despertar) en la escena 6. No se agregó a la
 * copia de la escena 1 porque esa escena no la necesita y no hace falta
 * tocarla.
 *
 * `ForestBackground` es nuevo — bosque nublado en placeholder de código para
 * la escena 4 (primera aparición del oso) y 5 (el encuentro), ver
 * resourcesAmparo/briefs/fondo-bosque-nublado.md. Los tonos de verde/niebla
 * son de ambiente de escena, no tokens de marca — se definen localmente acá,
 * apagados a propósito (el brief permite esto explícitamente: la regla de
 * "un solo acento saturado" aplica a UI/marca, no al fondo ambiental).
 */

export const WindowBlock: React.FC<{x: number; y: number; w: number; h: number}> = ({
  x,
  y,
  w,
  h,
}) => (
  <div
    style={{
      position: 'absolute',
      left: x,
      top: y,
      width: w,
      height: h,
      background: colors.sunkenStrong,
      borderRadius: radii.cardLg,
      border: `1px solid ${colors.hairline}`,
    }}
  >
    <div
      style={{
        position: 'absolute',
        left: w / 2 - 2,
        top: 0,
        width: 4,
        height: h,
        background: colors.hairline,
      }}
    />
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: h / 2 - 2,
        width: w,
        height: 4,
        background: colors.hairline,
      }}
    />
  </div>
);

export const DeskSurface: React.FC<{tone?: string}> = ({tone = colors.sunken}) => (
  <div
    style={{
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 360,
      background: tone,
      borderTopLeftRadius: radii.cardLg,
      borderTopRightRadius: radii.cardLg,
    }}
  />
);

export const LaptopShape: React.FC<{
  x: number;
  y: number;
  openProgress: number;
}> = ({x, y, openProgress}) => {
  const lidAngle = interpolate(openProgress, [0, 1], [92, 0]);
  return (
    <div style={{position: 'absolute', left: x, top: y, perspective: 800}}>
      <div
        style={{
          width: 260,
          height: 16,
          background: colors.tinta,
          borderRadius: radii.cardSm,
        }}
      />
      <div
        style={{
          width: 260,
          height: 168,
          background: colors.tinta,
          borderRadius: radii.cardSm,
          transform: `rotateX(${lidAngle}deg)`,
          transformOrigin: 'bottom center',
          position: 'absolute',
          top: -168,
          left: 0,
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 10,
            background: colors.sunkenStrong,
            borderRadius: radii.cardSm - 4,
            opacity: interpolate(openProgress, [0.6, 1], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            }),
          }}
        />
      </div>
    </div>
  );
};

export const CoffeeCup: React.FC<{x: number; y: number; steaming: number; scale?: number}> = ({
  x,
  y,
  steaming,
  scale = 1,
}) => {
  const frame = useCurrentFrame();
  const steamOpacity = interpolate(steaming, [0, 1], [0, 0.55]);
  return (
    <div style={{position: 'absolute', left: x, top: y, transform: `scale(${scale})`, transformOrigin: 'bottom left'}}>
      {[0, 1, 2].map((i) => {
        const drift = Math.sin(frame / 10 + i * 2) * 6;
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: 10 + i * 14 - 14,
              top: -30 - i * 4,
              width: 6,
              height: 34,
              borderRadius: radii.pill,
              background: colors.textFaint,
              opacity: steamOpacity * (1 - i * 0.25),
              transform: `translateX(${drift}px) rotate(6deg)`,
            }}
          />
        );
      })}
      {/* Taza — color plano, sin brillo cerámico (ver nota de marca escena 6) */}
      <div
        style={{
          width: 64,
          height: 44,
          background: colors.tinta,
          borderBottomLeftRadius: radii.cardSm,
          borderBottomRightRadius: radii.cardSm,
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: -16,
          top: 8,
          width: 20,
          height: 20,
          border: `6px solid ${colors.tinta}`,
          borderRadius: radii.pill,
          background: 'transparent',
        }}
      />
    </div>
  );
};

/**
 * Silueta plana del asesor — sin rasgos faciales inventados.
 * `slump`: 0 = erguido, 1 = derrumbado hacia adelante (cabeza sobre el
 * escritorio, escena 3) — pivotea desde la base del bloque de hombros.
 */
export const AdvisorSilhouette: React.FC<{
  x: number;
  y: number;
  scale?: number;
  handToFace?: number;
  slump?: number;
}> = ({x, y, scale = 1, handToFace = 0, slump = 0}) => {
  const headTilt = interpolate(handToFace, [0, 1], [0, 11]);
  const headDrop = interpolate(handToFace, [0, 1], [0, 22]);
  const handX = interpolate(handToFace, [0, 1], [230, 146]);
  const handY = interpolate(handToFace, [0, 1], [40, 6]);
  const slumpRotate = interpolate(slump, [0, 1], [0, 58]);
  const slumpTranslateY = interpolate(slump, [0, 1], [0, 8]);

  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        transform: `scale(${scale}) rotate(${slumpRotate}deg) translateY(${slumpTranslateY}px)`,
        transformOrigin: 'bottom center',
      }}
    >
      <div
        style={{
          width: 220,
          height: 130,
          background: colors.tinta,
          borderTopLeftRadius: 110,
          borderTopRightRadius: 110,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: -86 + headDrop,
          left: 60,
          width: 100,
          height: 100,
          background: colors.tinta,
          borderRadius: radii.pill,
          transform: `rotate(${headTilt}deg)`,
          transformOrigin: '50% 100%',
        }}
      />
      {handToFace > 0 ? (
        <div
          style={{
            position: 'absolute',
            top: handY,
            left: handX,
            width: 52,
            height: 52,
            background: colors.textMuted,
            borderRadius: radii.pill,
            opacity: handToFace,
          }}
        />
      ) : null}
    </div>
  );
};

// ---------------------------------------------------------------------------
// Bosque nublado (escenas 4 y 5) — ver resourcesAmparo/briefs/fondo-bosque-nublado.md
// ---------------------------------------------------------------------------

/** Tonos de ambiente de bosque — no son tokens de marca, ver nota de archivo. */
const FOREST_BASE = '#20281F';
const TREE_TONES = ['#37463F', '#48584F', '#2C3934'];
const FOG_TONE = '#C7CDD1';

export const ForestBackground: React.FC = () => {
  const frame = useCurrentFrame();
  const drift = Math.sin(frame / 90) * 6;

  return (
    <AbsoluteFill style={{background: FOREST_BASE}}>
      {/* Troncos — desenfocados (profundidad de campo), tal como pide el brief
          explícitamente: "troncos en primer plano pueden ir desenfocados".
          El blur es óptico (ablanda bordes de un mismo color plano), no un
          degradado de color — no rompe la regla de "color plano en bloques". */}
      <div style={{position: 'absolute', inset: 0, filter: 'blur(3px)'}}>
        {Array.from({length: 7}).map((_, i) => {
          const w = 30 + (i % 3) * 14;
          const h = 640 + (i % 4) * 80;
          const left = i * 300 - 40 + drift * 0.4 * (i % 2 === 0 ? 1 : -1);
          const tone = TREE_TONES[i % TREE_TONES.length];
          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                left,
                bottom: 0,
                width: w,
                height: h,
                background: tone,
                opacity: 0.85,
                borderRadius: radii.cardSm,
              }}
            />
          );
        })}
      </div>
      {/* Niebla — capas planas muy desenfocadas (blur fuerte) para que se lea
          como bruma suave y no como bandas duras; sin degradado CSS real. */}
      <div style={{position: 'absolute', inset: -80, filter: 'blur(70px)'}}>
        {[
          {bottom: -40, h: 260, op: 0.5},
          {bottom: 120, h: 220, op: 0.32},
          {bottom: 340, h: 200, op: 0.2},
        ].map((band, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: band.bottom,
              height: band.h,
              background: FOG_TONE,
              opacity: band.op,
            }}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};
