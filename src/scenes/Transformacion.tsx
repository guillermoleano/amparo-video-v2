import React from 'react';
import {AbsoluteFill, Img, Sequence, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {colors, font, radii} from '../theme';
import {ChatBubble} from '../components/ChatBubble';
import {KineticWord} from '../components/KineticText';
import {PlaceholderTag} from '../components/PlaceholderTag';
import {AdvisorSilhouette} from './shared';

/**
 * Escena 7 — "La transformación" (7s, 210 frames @ 30fps).
 * Guion: guion/produccion/07-transformacion.md
 *
 * Riesgo señalado por el propio guion: volverse listado de funciones. Se
 * mantienen los inserts de UI/producto por debajo de 1s cada uno (según
 * pide la nota de marca) y el peso visual en el lenguaje corporal del
 * asesor (siluetas placeholder, ya que no hay talento/actuación real
 * todavía). `bear-tablet-chat.png` es el único uso "match directo" de este
 * guion completo — inserts breves de Amparo resolviendo chats.
 */

const NotificationsMontage: React.FC = () => {
  const frame = useCurrentFrame();
  const bearOpacity = interpolate(frame, [24, 34, 50, 58], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return (
    <AbsoluteFill style={{background: colors.cream}}>
      <PlaceholderTag label="notificaciones resueltas casi al instante" x={64} y={64} />
      <ChatBubble text="Certificado enviado." appearAt={0} x={120} y={200} width={340} resolved />
      <ChatBubble text="Vigencia confirmada." appearAt={12} x={1240} y={280} width={340} resolved />
      <ChatBubble text="Cobertura al día." appearAt={22} x={200} y={560} width={320} resolved />
      {/* Insert breve — Amparo resolviendo en tablet (match directo del asset) */}
      <div style={{position: 'absolute', left: 1300, top: 620, width: 300, opacity: bearOpacity}}>
        <Img src={staticFile('bear-tablet-chat.png')} style={{width: '100%', height: 'auto', display: 'block'}} />
      </div>
    </AbsoluteFill>
  );
};

/** Cortes cortos (<1s) del asesor — placeholder de actuación real. */
const AdvisorBeat: React.FC<{label: string; prop?: 'phone' | 'plate' | 'family'}> = ({label, prop}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 5, 17, 22], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return (
    <AbsoluteFill style={{background: colors.cream, opacity}}>
      <PlaceholderTag label={label} x={64} y={64} />
      <AdvisorSilhouette x={860} y={860} scale={1.3} />
      {prop === 'phone' ? (
        <div
          style={{
            position: 'absolute',
            left: 1060,
            top: 640,
            width: 44,
            height: 78,
            background: colors.textMuted,
            borderRadius: radii.cardSm,
          }}
        />
      ) : null}
      {prop === 'plate' ? (
        <div
          style={{
            position: 'absolute',
            left: 1020,
            top: 900,
            width: 160,
            height: 34,
            background: colors.sunkenStrong,
            borderRadius: radii.pill,
          }}
        />
      ) : null}
      {prop === 'family' ? (
        <div
          style={{
            position: 'absolute',
            left: 1080,
            top: 900,
            width: 140,
            height: 90,
            background: colors.textMuted,
            borderTopLeftRadius: 70,
            borderTopRightRadius: 70,
          }}
        />
      ) : null}
    </AbsoluteFill>
  );
};

const RelaxedClose: React.FC = () => {
  const frame = useCurrentFrame();
  const walk = Math.sin(frame / 10) * 10;
  return (
    <AbsoluteFill style={{background: colors.cream}}>
      <AdvisorSilhouette x={960 + walk} y={860} scale={1.25} />
      <KineticWord text="En" appearAt={10} durationInFrames={44} x={620} y={220} fontSize={54} />
      <KineticWord text="segundos," appearAt={10} durationInFrames={44} x={740} y={220} fontSize={54} emphasis />
      <KineticWord text="no en horas." appearAt={10} durationInFrames={44} x={1040} y={220} fontSize={54} />
    </AbsoluteFill>
  );
};

export const Transformacion: React.FC = () => {
  return (
    <AbsoluteFill style={{background: colors.cream, fontFamily: font.family}}>
      {/* 0:00–0:02 — notificaciones que llegan y se resuelven casi al instante */}
      <Sequence from={0} durationInFrames={60} name="A — Notificaciones resueltas">
        <NotificationsMontage />
      </Sequence>

      {/* 0:02–0:05 — cortes < 1s: venta, llamada, almuerzo, familia */}
      <Sequence from={60} durationInFrames={22} name="B1 — Cierra una venta">
        <AdvisorBeat label="cierra una venta por teléfono" prop="phone" />
      </Sequence>
      <Sequence from={82} durationInFrames={22} name="B2 — Llama a un prospecto">
        <AdvisorBeat label="llama a un prospecto" prop="phone" />
      </Sequence>
      <Sequence from={104} durationInFrames={22} name="B3 — Almuerza con calma">
        <AdvisorBeat label="sale a almorzar con calma" prop="plate" />
      </Sequence>
      <Sequence from={126} durationInFrames={24} name="B4 — Momento en familia">
        <AdvisorBeat label="momento breve en familia" prop="family" />
      </Sequence>

      {/* 0:05–0:07 — cierre relajado, texto en pantalla opcional */}
      <Sequence from={150} durationInFrames={60} name="C — Relajado, en movimiento">
        <RelaxedClose />
      </Sequence>
    </AbsoluteFill>
  );
};
