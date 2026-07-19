import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {colors, radii} from '../theme';
import {ChatBubble} from './ChatBubble';
import {PlaceholderTag} from './PlaceholderTag';

/**
 * Viñeta de cliente — escenas 2 (frustración) y 8 (alivio), espejo narrativo.
 * Ver resourcesAmparo/briefs/vinetas-clientes.md: el guion pide "talento real
 * o actuado", no un render del oso — hoy no existe ese casting, así que se
 * resuelve como PLACEHOLDER (silueta plana abstracta, sin rasgos faciales
 * inventados, mismo criterio que `AdvisorSilhouette`). `tone` varía apenas
 * (tinta / texto muted) para distinguir clientes sin introducir ningún color
 * saturado nuevo fuera del oro.
 */
export type ClientGesture =
  | 'checking-phone'
  | 'typing'
  | 'brusque-typing'
  | 'relieved-pocket';

const ClientSilhouette: React.FC<{
  x: number;
  y: number;
  scale?: number;
  tone?: string;
  gesture: ClientGesture;
}> = ({x, y, scale = 1, tone = colors.tinta, gesture}) => {
  const frame = useCurrentFrame();

  // Fase de "escritura" del pulgar — más rápida y errática en brusque-typing.
  const typeSpeed = gesture === 'brusque-typing' ? 2.6 : 1.4;
  const thumbBob = Math.sin(frame * typeSpeed) * (gesture === 'brusque-typing' ? 7 : 4);
  const jitterX = gesture === 'brusque-typing' ? Math.sin(frame * 3.1) * 3 : 0;

  // relieved-pocket: el teléfono se aleja (se guarda) a lo largo del clip.
  const pocketProgress = interpolate(frame, [0, 26], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const phoneY =
    gesture === 'relieved-pocket'
      ? interpolate(pocketProgress, [0, 1], [-60, 40])
      : gesture === 'checking-phone'
      ? -70
      : -30;
  const phoneOpacity = gesture === 'relieved-pocket' ? interpolate(pocketProgress, [0, 1], [1, 0.15]) : 1;

  // checking-phone: cabeza inclinada hacia abajo mirando el teléfono.
  const headTilt = gesture === 'checking-phone' ? 14 : gesture === 'relieved-pocket' ? -4 : 6;

  return (
    <div
      style={{
        position: 'absolute',
        left: x + jitterX,
        top: y,
        transform: `scale(${scale})`,
        transformOrigin: 'bottom center',
      }}
    >
      {/* Hombros */}
      <div
        style={{
          width: 200,
          height: 118,
          background: tone,
          borderTopLeftRadius: 100,
          borderTopRightRadius: 100,
        }}
      />
      {/* Cabeza */}
      <div
        style={{
          position: 'absolute',
          top: -80,
          left: 56,
          width: 90,
          height: 90,
          background: tone,
          borderRadius: radii.pill,
          transform: `rotate(${headTilt}deg)`,
          transformOrigin: '50% 100%',
        }}
      />
      {/* Teléfono — bloque plano, pantalla más clara, sin brillo */}
      <div
        style={{
          position: 'absolute',
          left: 116,
          top: phoneY,
          opacity: phoneOpacity,
          width: 40,
          height: 74,
          background: colors.textMuted,
          borderRadius: radii.cardSm,
          padding: 4,
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            background: colors.sunkenStrong,
            borderRadius: radii.cardSm - 3,
          }}
        />
      </div>
      {/* Pulgar — pill chico animado, para "escribe rápido" / "escribe" */}
      {gesture === 'typing' || gesture === 'brusque-typing' ? (
        <div
          style={{
            position: 'absolute',
            left: 108,
            top: phoneY + 55 + thumbBob,
            width: 22,
            height: 22,
            borderRadius: radii.pill,
            background: colors.oro,
            opacity: 0.9,
          }}
        />
      ) : null}
    </div>
  );
};

export const ClientVignette: React.FC<{
  message: string;
  gesture: ClientGesture;
  tone?: string;
  resolved?: boolean;
  placeholderLabel: string;
  silhouetteX?: number;
  silhouetteY?: number;
  bubbleX?: number;
  bubbleY?: number;
}> = ({
  message,
  gesture,
  tone = colors.tinta,
  resolved = false,
  placeholderLabel,
  silhouetteX = 760,
  silhouetteY = 900,
  bubbleX = 560,
  bubbleY = 260,
}) => {
  return (
    <AbsoluteFill style={{background: colors.cream}}>
      <PlaceholderTag label={placeholderLabel} x={64} y={64} />
      <ClientSilhouette x={silhouetteX} y={silhouetteY} scale={1.35} tone={tone} gesture={gesture} />
      <ChatBubble text={message} appearAt={6} x={bubbleX} y={bubbleY} resolved={resolved} />
    </AbsoluteFill>
  );
};
