import React from 'react';
import {AbsoluteFill, Sequence, interpolate, useCurrentFrame} from 'remotion';
import {colors, font} from '../theme';
import {ClientVignette} from '../components/ClientVignette';
import {AdvisorSilhouette, DeskSurface} from './shared';

/**
 * Escena 2 — "Los clientes se frustran" (6s, 180 frames @ 30fps).
 * Guion: guion/produccion/02-clientes-frustrados.md
 *
 * El oso no aparece. Los 3 clientes son PLACEHOLDER (silueta plana
 * abstracta vía `ClientVignette`) — el guion pide talento real/actuado que
 * todavía no existe (ver resourcesAmparo/briefs/vinetas-clientes.md).
 * Reutiliza la plantilla de burbuja de chat ya definida en la escena 1 para
 * dar continuidad visual, tal como pide la nota de asset del guion.
 */

const InternalThought: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 10, 24, 30], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 140,
        textAlign: 'center',
        opacity,
        fontFamily: font.family,
        fontWeight: font.weight.medium,
        fontSize: 34,
        fontStyle: 'italic',
        color: colors.textMuted,
        letterSpacing: font.tracking.headline,
      }}
    >
      {'"Necesito ayuda…"'}
    </div>
  );
};

const AdvisorLostGaze: React.FC = () => {
  const frame = useCurrentFrame();
  const settle = interpolate(frame, [0, 20], [0.3, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return (
    <AbsoluteFill style={{background: colors.cream}}>
      <DeskSurface />
      <AdvisorSilhouette x={860} y={880} scale={1.55} handToFace={settle * 0.35} />
      <InternalThought />
    </AbsoluteFill>
  );
};

export const ClientesFrustrados: React.FC = () => {
  return (
    <AbsoluteFill style={{background: colors.cream, fontFamily: font.family}}>
      {/* 0:00–0:02 — Cliente A espera, mira el teléfono, expresión que se agota */}
      <Sequence from={0} durationInFrames={60} name="A — Cliente A, espera">
        <ClientVignette
          message={'¿Sigues ahí?'}
          gesture="checking-phone"
          tone={colors.tinta}
          placeholderLabel="viñeta cliente A (talento real pendiente)"
        />
      </Sequence>

      {/* 0:02–0:04 — Cliente B escribe otro mensaje, impaciencia creciente */}
      <Sequence from={60} durationInFrames={60} name="B — Cliente B, escribe">
        <ClientVignette
          message={'No me respondes.'}
          gesture="typing"
          tone={colors.textMuted}
          placeholderLabel="viñeta cliente B (talento real pendiente)"
          silhouetteX={900}
        />
      </Sequence>

      {/* 0:04–0:05 — Cliente C, brusco, escribe rápido, fastidio (contenido, no caricaturesco) */}
      <Sequence from={120} durationInFrames={30} name="C — Cliente C, brusco">
        <ClientVignette
          message={'Voy a buscar otro asesor.'}
          gesture="brusque-typing"
          tone={colors.tinta}
          placeholderLabel="viñeta cliente C (talento real pendiente)"
          silhouetteX={700}
          bubbleY={230}
        />
      </Sequence>

      {/* 0:05–0:06 — Vuelta al asesor: primer plano, mirada perdida, agotado */}
      <Sequence from={150} durationInFrames={30} name="D — Asesor, mirada perdida">
        <AdvisorLostGaze />
      </Sequence>
    </AbsoluteFill>
  );
};
