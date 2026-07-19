import React from 'react';
import {AbsoluteFill, Img, Sequence, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {colors, font, radii} from '../theme';
import {ClientVignette} from '../components/ClientVignette';
import {PlaceholderTag} from '../components/PlaceholderTag';
import {AdvisorSilhouette, DeskSurface, WindowBlock} from './shared';

/**
 * Escena 8 — "Clientes felices" (6s, 180 frames @ 30fps) — espejo narrativo
 * directo de la escena 2 (mismos clientes placeholder, dirección invertida).
 * Guion: guion/produccion/08-clientes-felices.md
 *
 * El oso puede aparecer desenfocado de fondo (el guion lo permite
 * explícitamente, apoyándose en `bear-tools.png` solo como referencia de
 * ambiente, sin ser protagonista) — se compone acá con blur + opacidad baja
 * en el último beat, nunca como foco del cuadro.
 */

const ResolvedCard: React.FC = () => {
  const frame = useCurrentFrame();
  const pop = interpolate(frame, [0, 10], [0.9, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const opacity = interpolate(frame, [0, 8], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return (
    <AbsoluteFill style={{background: colors.cream}}>
      <PlaceholderTag label="insert UI: certificado resuelto" x={64} y={64} />
      <div
        style={{
          position: 'absolute',
          left: 660,
          top: 340,
          width: 600,
          opacity,
          transform: `scale(${pop})`,
          background: colors.surface,
          border: `1px solid ${colors.hairline}`,
          borderRadius: radii.cardLg,
          padding: '36px 40px',
        }}
      >
        <div
          style={{
            fontFamily: font.family,
            fontWeight: font.weight.medium,
            fontSize: 20,
            color: colors.textMuted,
            marginBottom: 14,
          }}
        >
          Certificado de póliza
        </div>
        <div
          style={{
            fontFamily: font.family,
            fontWeight: font.weight.bold,
            fontSize: 32,
            color: colors.text,
            letterSpacing: font.tracking.headline,
            marginBottom: 18,
          }}
        >
          Enviado en 3 segundos.
        </div>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            background: colors.successSoft,
            color: colors.success,
            borderRadius: radii.pill,
            padding: '10px 20px',
            fontFamily: font.family,
            fontWeight: font.weight.bold,
            fontSize: 18,
          }}
        >
          {'✓ Resuelto'}
        </div>
      </div>
    </AbsoluteFill>
  );
};

const CalmConversation: React.FC = () => {
  return (
    <AbsoluteFill style={{background: colors.cream}}>
      <PlaceholderTag label="fondo oficina (orden) + oso desenfocado de fondo" x={64} y={64} />
      <WindowBlock x={140} y={90} w={460} h={340} />
      <DeskSurface />
      <AdvisorSilhouette x={1180} y={860} scale={1.1} />
      <div
        style={{
          position: 'absolute',
          left: 90,
          top: 150,
          width: 220,
          opacity: 0.35,
          filter: 'blur(6px)',
        }}
      >
        <Img src={staticFile('bear-tools.png')} style={{width: '100%', height: 'auto', display: 'block'}} />
      </div>
    </AbsoluteFill>
  );
};

export const ClientesFelices: React.FC = () => {
  return (
    <AbsoluteFill style={{background: colors.cream, fontFamily: font.family}}>
      {/* 0:00–0:02 — Cliente A, alivio, guarda el teléfono */}
      <Sequence from={0} durationInFrames={30} name="A — Cliente A, alivio">
        <ClientVignette
          message="Gracias, ya tengo mi certificado."
          gesture="relieved-pocket"
          tone={colors.tinta}
          resolved
          placeholderLabel="viñeta cliente A, alivio (talento real pendiente)"
        />
      </Sequence>

      {/* 0:02–0:04 → dividido en dos: cliente B (0:02–0:03) + insert UI (0:03–0:04) */}
      <Sequence from={30} durationInFrames={30} name="B — Cliente B, alivio">
        <ClientVignette
          message="Todo claro, gracias."
          gesture="relieved-pocket"
          tone={colors.textMuted}
          resolved
          placeholderLabel="viñeta cliente B, alivio (talento real pendiente)"
          silhouetteX={900}
        />
      </Sequence>
      <Sequence from={60} durationInFrames={60} name="C — Insert certificado resuelto">
        <ResolvedCard />
      </Sequence>

      {/* 0:04–0:06 — asesor, conversación cálida y calmada */}
      <Sequence from={120} durationInFrames={60} name="D — Asesor, conversación calmada">
        <CalmConversation />
      </Sequence>
    </AbsoluteFill>
  );
};
