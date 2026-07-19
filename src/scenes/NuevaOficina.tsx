import React from 'react';
import {AbsoluteFill, Img, Sequence, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {colors, font, radii} from '../theme';
import {ChatBubble} from '../components/ChatBubble';
import {CallChip} from '../components/CallChip';
import {KineticWord} from '../components/KineticText';
import {PlaceholderTag} from '../components/PlaceholderTag';
import {AdvisorSilhouette, DeskSurface, WindowBlock} from './shared';

/**
 * Escena 9 — "Una nueva oficina" (6s, 180 frames @ 30fps).
 * Guion: guion/produccion/09-nueva-oficina.md
 *
 * El contraste "antes/ahora" se construye por cantidad de clutter en cuadro,
 * nunca por cambio de paleta (nota de marca explícita) — ambos lados del
 * split usan Tinta & Oro / fondo crema. `bear-tools.png` es match directo
 * para el beat de organización.
 */

const SplitBeforeAfter: React.FC = () => {
  return (
    <AbsoluteFill>
      {/* Antes — mismo desorden de la escena 1, misma paleta */}
      <div style={{position: 'absolute', left: 0, top: 0, width: 960, height: 1080, overflow: 'hidden', background: colors.cream}}>
        <PlaceholderTag label="antes (escena 1)" x={64} y={64} />
        <WindowBlock x={100} y={90} w={340} h={260} />
        <DeskSurface />
        <AdvisorSilhouette x={520} y={860} scale={1} />
        <ChatBubble text="¿Ya revisaste mi póliza?" appearAt={0} x={70} y={420} width={280} />
        <ChatBubble text="Es urgente." appearAt={0} x={70} y={520} width={220} />
        <CallChip label="Llamada entrante" x={560} y={640} phase={0} />
      </div>
      {/* Ahora — mismo layout, ordenado y calmado */}
      <div style={{position: 'absolute', left: 960, top: 0, width: 960, height: 1080, overflow: 'hidden', background: colors.cream}}>
        <PlaceholderTag label="ahora (ordenado)" x={64} y={64} />
        <WindowBlock x={140} y={90} w={340} h={260} />
        <DeskSurface />
        <AdvisorSilhouette x={560} y={860} scale={1} />
      </div>
      <div style={{position: 'absolute', left: 958, top: 0, width: 4, height: 1080, background: colors.hairline}} />
    </AbsoluteFill>
  );
};

const OrganizesWithTools: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 14], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return (
    <AbsoluteFill style={{background: colors.cream}}>
      <PlaceholderTag label="bear-tools.png (match directo)" x={64} y={64} />
      <div style={{position: 'absolute', left: 160, top: 240, width: 620, opacity}}>
        <Img src={staticFile('bear-tools.png')} style={{width: '100%', height: 'auto', display: 'block'}} />
      </div>
      <KineticWord text="Mensajes." appearAt={4} durationInFrames={15} x={1100} y={300} fontSize={58} />
      <KineticWord text="Tareas." appearAt={19} durationInFrames={15} x={1100} y={380} fontSize={58} />
      <KineticWord text="Recordatorios." appearAt={34} durationInFrames={15} x={1100} y={460} fontSize={58} />
      <KineticWord text="Agenda." appearAt={49} durationInFrames={15} x={1100} y={540} fontSize={58} emphasis />
    </AbsoluteFill>
  );
};

const OrderedWideShot: React.FC = () => {
  const frame = useCurrentFrame();
  const walk = Math.sin(frame / 12) * 14;
  return (
    <AbsoluteFill style={{background: colors.cream}}>
      <PlaceholderTag label="fondo oficina (orden, día)" x={64} y={64} />
      <WindowBlock x={140} y={90} w={460} h={340} />
      <WindowBlock x={660} y={90} w={300} h={340} />
      <DeskSurface />
      <AdvisorSilhouette x={1180 + walk} y={860} scale={1.15} />
    </AbsoluteFill>
  );
};

export const NuevaOficina: React.FC = () => {
  return (
    <AbsoluteFill style={{background: colors.cream, fontFamily: font.family}}>
      <Sequence from={0} durationInFrames={60} name="A — Split antes/ahora">
        <SplitBeforeAfter />
      </Sequence>
      <Sequence from={60} durationInFrames={60} name="B — Amparo organiza (bear-tools.png)">
        <OrganizesWithTools />
      </Sequence>
      <Sequence from={120} durationInFrames={60} name="C — Plano general, oficina ahora">
        <OrderedWideShot />
      </Sequence>
    </AbsoluteFill>
  );
};
