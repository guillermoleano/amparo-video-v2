import React from 'react';
import {AbsoluteFill, Img, Sequence, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {colors, font, radii} from '../theme';
import {DialogueCaption} from '../components/DialogueCaption';
import {PlaceholderTag} from '../components/PlaceholderTag';
import {AdvisorSilhouette, DeskSurface, WindowBlock} from './shared';

/**
 * Escena 10 — "Cierre" (10s, 300 frames @ 30fps) — cierra el video.
 * Guion: guion/produccion/10-cierre.md
 *
 * Decisión de escena documentada: el guion original pedía "ajusta sus
 * anteojos" para el beat de "Para eso estoy.", gesto no cubierto por ningún
 * asset ni por el brand doc (ver nota de marca del guion). Siguiendo la
 * recomendación explícita del propio guion de producción, se usa en su
 * lugar la calma ya cubierta por `bear-siempre-aqui-testimonial.png` (match
 * directo) sin gesto nuevo. El texto embebido en esa imagen ("¡Siempre
 * aqui!", con el typo ya documentado en la auditoría, más una foto de stock
 * de un cliente) NO se reutiliza como diálogo nuevo — el diálogo real de
 * esta escena se agrega aparte, como `DialogueCaption` de código con las
 * tildes correctas, tal como instruye la nota de asset.
 *
 * La tarjeta final de logo (0:08–0:10) no tiene todavía un isotipo real
 * (ver resourcesAmparo/briefs/tarjeta-final-logo-cta.md) — se resuelve como
 * PLACEHOLDER geométrico abstracto (círculo + remate en punta, sin ojos ni
 * hocico inventados), consistente con el criterio ya usado para el asesor:
 * ninguna forma final de marca se reconstruye a mano sin el asset real.
 */

const OfficeTogether: React.FC = () => {
  const frame = useCurrentFrame();
  // 0:00–0:05 estático, luego pull-back (dolly out) 0:05–0:08.
  const pullBack = interpolate(frame, [150, 240], [1, 0.82], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const bearOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  // Leve asentimiento de cabeza en vez del gesto de "ajustar anteojos".
  const nod = Math.max(0, Math.sin((frame - 90) / 10)) * (frame >= 90 && frame < 150 ? 1 : 0);

  return (
    <AbsoluteFill style={{background: colors.cream, transform: `scale(${pullBack})`, transformOrigin: '50% 60%'}}>
      <PlaceholderTag label="bear-siempre-aqui-testimonial.png (match directo)" x={64} y={64} />
      <WindowBlock x={140} y={90} w={460} h={300} />
      <WindowBlock x={660} y={90} w={300} h={300} />
      <DeskSurface />

      <AdvisorSilhouette x={1360} y={780} scale={1.05} />

      <div
        style={{
          position: 'absolute',
          left: 620,
          top: 260,
          width: 560,
          opacity: bearOpacity,
          transform: `translateY(${nod * 6}px)`,
        }}
      >
        <Img
          src={staticFile('bear-siempre-aqui-testimonial.png')}
          style={{width: '100%', height: 'auto', display: 'block'}}
        />
      </div>

      <DialogueCaption speaker="Asesor" text="No sé qué haría sin ti." appearAt={10} durationInFrames={65} />
      <DialogueCaption speaker="Amparo" text="Para eso estoy." appearAt={95} durationInFrames={55} />
    </AbsoluteFill>
  );
};

const LogoMarkPlaceholder: React.FC = () => (
  <div style={{position: 'relative', width: 140, height: 156}}>
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 140,
        height: 118,
        background: colors.tinta,
        borderRadius: radii.pill,
      }}
    />
    <div
      style={{
        position: 'absolute',
        top: 76,
        left: 30,
        width: 80,
        height: 80,
        background: colors.tinta,
        clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
      }}
    />
  </div>
);

const ClosingCard: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const rise = interpolate(frame, [0, 20], [18, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        background: colors.cream,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <PlaceholderTag label="isotipo real pendiente — ver Identidad-de-Marca-Amparo.md" x={64} y={64} />
      <div
        style={{
          opacity,
          transform: `translateY(${rise}px)`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 26,
        }}
      >
        <LogoMarkPlaceholder />
        <div
          style={{
            fontFamily: font.family,
            fontWeight: font.weight.black,
            fontSize: 56,
            color: colors.tinta,
            letterSpacing: font.tracking.headlineTight,
          }}
        >
          Amparo
        </div>
        <div
          style={{
            fontFamily: font.family,
            fontWeight: font.weight.medium,
            fontSize: 30,
            color: colors.text,
            textAlign: 'center',
            maxWidth: 1100,
            lineHeight: font.lineHeight.body,
          }}
        >
          Mientras tú proteges a tus clientes, Amparo cuida de tu tiempo.
        </div>
        <div
          style={{
            marginTop: 10,
            background: colors.oro,
            color: colors.tinta,
            borderRadius: radii.pill,
            padding: '18px 44px',
            fontFamily: font.family,
            fontWeight: font.weight.bold,
            fontSize: 24,
          }}
        >
          Conocé Amparo
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const Cierre: React.FC = () => {
  return (
    <AbsoluteFill style={{background: colors.cream, fontFamily: font.family}}>
      <Sequence from={0} durationInFrames={240} name="A+B — Lado a lado, diálogo, pull-back">
        <OfficeTogether />
      </Sequence>
      <Sequence from={240} durationInFrames={60} name="C — Tarjeta final de logo">
        <ClosingCard />
      </Sequence>
    </AbsoluteFill>
  );
};
