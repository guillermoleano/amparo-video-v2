import React from 'react';
import {AbsoluteFill, Img, Sequence, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {colors, font} from '../theme';
import {DialogueCaption} from '../components/DialogueCaption';
import {PlaceholderTag} from '../components/PlaceholderTag';
import {AdvisorSilhouette, CoffeeCup, DeskSurface, WindowBlock} from './shared';

/**
 * Escena 6 — "El despertar" (6s, 180 frames @ 30fps).
 * Guion: guion/produccion/06-despertar.md
 *
 * Mismo escritorio donde el asesor se durmió en la escena 3, ahora de día.
 * `bear-tablet-chat.png` se usa como referencia de postura/actitud (atenta,
 * competente frente a un dispositivo) — el guion pide explícitamente cambiar
 * el fondo (oficina real, no genérico) y agregar el prop de café, que el
 * render no trae. Se resuelve componiendo el render real + un `CoffeeCup`
 * plano (mismo componente de la escena 1/3) superpuesto junto a la mano del
 * oso, en vez de inventar una pose "sentada" que no existe en ningún asset.
 */

const WakingUp: React.FC = () => {
  const frame = useCurrentFrame();
  const slump = interpolate(frame, [0, 24], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  // Se frota la cara: sube y baja la mano (gesto de "rub"), no un simple fundido.
  const rub = interpolate(frame, [0, 15, 32], [0, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{background: colors.cream}}>
      <PlaceholderTag label="fondo oficina (despertar, día)" x={64} y={64} />
      <WindowBlock x={140} y={90} w={460} h={340} />
      <DeskSurface />
      <AdvisorSilhouette x={1240} y={860} scale={1.15} slump={slump} handToFace={rub} />
    </AbsoluteFill>
  );
};

const CallsOut: React.FC = () => {
  const frame = useCurrentFrame();
  // Sobresalto contenido: pequeño rebote de escala al darse vuelta, sin
  // caricatura — un solo pulso breve.
  const startle = interpolate(frame, [0, 6, 16], [1, 1.06, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{background: colors.cream}}>
      <WindowBlock x={140} y={90} w={460} h={340} />
      <DeskSurface />
      <div style={{position: 'absolute', left: 1240, top: 860, transform: `scale(${startle})`, transformOrigin: 'bottom center'}}>
        <AdvisorSilhouette x={0} y={0} scale={1.15} />
      </div>
      <DialogueCaption speaker="Amparo" text="Buenos días." appearAt={8} durationInFrames={44} />
    </AbsoluteFill>
  );
};

const AmparoInstalled: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 16], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return (
    <AbsoluteFill style={{background: colors.cream}}>
      <PlaceholderTag label="bear-tablet-chat.png (postura de referencia) + café compuesto" x={64} y={64} />
      <WindowBlock x={140} y={90} w={460} h={340} />
      <DeskSurface />
      <AdvisorSilhouette x={1500} y={880} scale={1.05} />
      <div style={{position: 'absolute', left: 700, top: 210, width: 480, opacity}}>
        <Img src={staticFile('bear-tablet-chat.png')} style={{width: '100%', height: 'auto', display: 'block'}} />
      </div>
      {/* Prop de café compuesto junto a la mano del oso — bloque plano, sin
          brillo cerámico ni vapor fotorrealista, tal como pide la nota de
          marca. Posición ajustada para leerse cerca del brazo/mano del oso
          en vez de flotar suelta sobre el escritorio (verificado contra el
          still de esta escena). */}
      <CoffeeCup x={790} y={430} steaming={0.6} scale={0.85} />
    </AbsoluteFill>
  );
};

export const Despertar: React.FC = () => {
  return (
    <AbsoluteFill style={{background: colors.cream, fontFamily: font.family}}>
      <Sequence from={0} durationInFrames={60} name="A — Abre los ojos, cree que fue un sueño">
        <WakingUp />
      </Sequence>
      <Sequence from={60} durationInFrames={60} name="B — Voz en off, se da vuelta sorprendido">
        <CallsOut />
      </Sequence>
      <Sequence from={120} durationInFrames={60} name="C — Amparo instalado, café + tablet">
        <AmparoInstalled />
      </Sequence>
    </AbsoluteFill>
  );
};
