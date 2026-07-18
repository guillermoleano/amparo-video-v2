import React from 'react';
import {AbsoluteFill, Sequence, interpolate, useCurrentFrame} from 'remotion';
import {colors, font, radii} from '../theme';
import {ChatBubble} from '../components/ChatBubble';
import {CounterBadge} from '../components/CounterBadge';
import {CallChip} from '../components/CallChip';
import {PlaceholderTag} from '../components/PlaceholderTag';

/**
 * Escena 1 — "Un día imposible" (0:00–0:10, 300 frames @ 30fps).
 * Guion: guion/produccion/01-dia-imposible.md
 *
 * El oso Amparo NO aparece (entra recién en escena 4, según el guion y
 * 00-resumen.md). Esta escena no requiere ningún render de resourcesAmparo/.
 *
 * Dos assets pedidos por el guion todavía no existen como imagen/render real:
 *   - Entorno de oficina del asesor (resourcesAmparo/briefs/fondo-oficina-asesor.md)
 *   - Plantilla de UI de chat/notificaciones (resourcesAmparo/briefs/ui-chat-notificaciones.md)
 * Ambos se resuelven acá como PLACEHOLDER en código: formas/color plano con
 * la paleta de marca, tipografía Inter y geometría pill/esquina generosa —
 * nada de imágenes inventadas ni URLs externas. Buscar `PlaceholderTag` y los
 * comentarios "PLACEHOLDER" para ubicar qué reemplazar más adelante sin tocar
 * el timing. El personaje humano del asesor tampoco tiene brief/asset propio
 * todavía: se representa de forma abstracta (silueta de color plano, sin
 * rasgos faciales inventados) en vez de fabricar una cara que nadie definió.
 */

// ---------------------------------------------------------------------------
// Bloques de entorno (placeholder de "fondo-oficina-asesor.md", estado "caos")
// ---------------------------------------------------------------------------

const WindowBlock: React.FC<{x: number; y: number; w: number; h: number}> = ({
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
    {/* Cruz de mullion — flat, sin vidrio brillante ni degradado */}
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

const DeskSurface: React.FC = () => (
  <div
    style={{
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 360,
      background: colors.sunken,
      borderTopLeftRadius: radii.cardLg,
      borderTopRightRadius: radii.cardLg,
    }}
  />
);

const LaptopShape: React.FC<{
  x: number;
  y: number;
  openProgress: number; // 0 = cerrada, 1 = abierta
}> = ({x, y, openProgress}) => {
  const lidAngle = interpolate(openProgress, [0, 1], [92, 0]);
  return (
    <div style={{position: 'absolute', left: x, top: y, perspective: 800}}>
      {/* Base / teclado */}
      <div
        style={{
          width: 260,
          height: 16,
          background: colors.tinta,
          borderRadius: radii.cardSm,
        }}
      />
      {/* Pantalla (bisagra en la base) */}
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

const CoffeeCup: React.FC<{x: number; y: number; steaming: number}> = ({
  x,
  y,
  steaming,
}) => {
  const frame = useCurrentFrame();
  const steamOpacity = interpolate(steaming, [0, 1], [0, 0.55]);
  return (
    <div style={{position: 'absolute', left: x, top: y}}>
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
      {/* Taza — color plano, sin brillo cerámico */}
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

/** Silueta plana del asesor — sin rasgos faciales inventados. */
const AdvisorSilhouette: React.FC<{
  x: number;
  y: number;
  scale?: number;
  handToFace?: number; // 0..1, solo para el beat final
}> = ({x, y, scale = 1, handToFace = 0}) => {
  // La cabeza y la "mano" comparten el mismo tinta plano que los hombros, así
  // que una mano superpuesta de frente sobre la cara sería invisible (mismo
  // color sobre mismo color). En vez de eso, el gesto se lee por postura —la
  // cabeza cae/se inclina hacia adelante— y una forma de mano en un tono
  // neutro distinto (texto muted, ya parte de la paleta) apoyada al costado
  // del rostro, visible contra el fondo crema.
  const headTilt = interpolate(handToFace, [0, 1], [0, 11]); // grados
  const headDrop = interpolate(handToFace, [0, 1], [0, 22]); // px hacia abajo
  const handX = interpolate(handToFace, [0, 1], [230, 146]); // left
  const handY = interpolate(handToFace, [0, 1], [40, 6]); // top

  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        transform: `scale(${scale})`,
        transformOrigin: 'bottom center',
      }}
    >
      {/* Hombros */}
      <div
        style={{
          width: 220,
          height: 130,
          background: colors.tinta,
          borderTopLeftRadius: 110,
          borderTopRightRadius: 110,
        }}
      />
      {/* Cabeza — cae/se inclina hacia adelante en el beat final */}
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
      {/* Mano al costado del rostro — tono neutro distinto para que se lea
          contra el fondo en vez de fundirse con la cabeza */}
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
// Segmento A (0:00–0:02) — Plano general, calma, laptop se abre
// ---------------------------------------------------------------------------

const EstablishingShot: React.FC = () => {
  const frame = useCurrentFrame();
  const fadeIn = interpolate(frame, [0, 14], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const laptopOpen = interpolate(frame, [8, 40], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{background: colors.cream, opacity: fadeIn}}>
      <WindowBlock x={140} y={90} w={460} h={340} />
      <DeskSurface />
      <AdvisorSilhouette x={1240} y={860} scale={1.15} />
      <LaptopShape x={880} y={760} openProgress={laptopOpen} />
      <CoffeeCup x={1560} y={860} steaming={1} />
      <PlaceholderTag label="fondo oficina (día, calma)" x={64} y={64} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------------------
// Segmento B (0:02–0:06) — Montaje acelerado, cortes < 1s
// ---------------------------------------------------------------------------

const MessageSkeletonPill: React.FC<{appearAt: number; x: number; y: number}> = ({
  appearAt,
  x,
  y,
}) => {
  const frame = useCurrentFrame();
  const local = frame - appearAt;
  if (local < 0) return null;
  const opacity = interpolate(local, [0, 6], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const scale = interpolate(local, [0, 6], [0.8, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        opacity,
        transform: `scale(${scale})`,
        transformOrigin: 'left center',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        background: colors.surface,
        border: `1px solid ${colors.hairline}`,
        borderRadius: radii.cardSm,
        padding: '10px 16px',
      }}
    >
      <span
        style={{
          width: 12,
          height: 12,
          borderRadius: radii.pill,
          background: colors.tinta,
          display: 'inline-block',
        }}
      />
      <span
        style={{width: 120, height: 10, borderRadius: radii.pill, background: colors.sunkenStrong}}
      />
    </div>
  );
};

const PhoneMessagesCut: React.FC = () => (
  <AbsoluteFill style={{background: colors.cream}}>
    <PlaceholderTag label="UI chat / WhatsApp" x={64} y={64} />
    <ChatBubble text="¿Ya revisaste mi póliza?" appearAt={0} x={620} y={300} />
    <ChatBubble text="Necesito mi certificado." appearAt={10} x={620} y={430} />
  </AbsoluteFill>
);

const InboxCounterCut: React.FC = () => {
  const frame = useCurrentFrame();
  const value = Math.round(interpolate(frame, [0, 24], [3, 18], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  }));
  return (
    <AbsoluteFill style={{background: colors.cream}}>
      <PlaceholderTag label="contador bandeja de entrada" x={64} y={64} />
      <div
        style={{
          position: 'absolute',
          left: 700,
          top: 380,
          fontFamily: font.family,
          fontWeight: font.weight.bold,
          fontSize: 32,
          color: colors.textMuted,
          letterSpacing: font.tracking.headline,
        }}
      >
        Bandeja de entrada
      </div>
      <CounterBadge value={value} x={860} y={470} accent="oro" />
    </AbsoluteFill>
  );
};

const IncomingCallsCut: React.FC = () => {
  const frame = useCurrentFrame();
  const value = Math.round(interpolate(frame, [0, 26], [18, 27], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  }));
  return (
    <AbsoluteFill style={{background: colors.cream}}>
      <PlaceholderTag label="llamadas entrantes" x={64} y={64} />
      <DeskSurface />
      <CallChip label="Llamada entrante" x={560} y={640} phase={0} />
      <CallChip label="Llamada entrante" x={1080} y={700} phase={9} />
      <CounterBadge value={value} x={1660} y={100} accent="tinta" />
    </AbsoluteFill>
  );
};

const PhoneMessagesCut2: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{background: colors.cream}}>
      <PlaceholderTag label="UI chat / WhatsApp" x={64} y={64} />
      <ChatBubble text="¿Me puedes responder?" appearAt={0} x={520} y={260} />
      <ChatBubble text="Es urgente." appearAt={8} x={900} y={400} width={280} />
      <MessageSkeletonPill appearAt={12} x={560} y={560} />
      <MessageSkeletonPill appearAt={16} x={780} y={620} />
      <CounterBadge
        value={Math.round(
          interpolate(frame, [0, 22], [27, 41], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          })
        )}
        x={1660}
        y={100}
        accent="tinta"
      />
    </AbsoluteFill>
  );
};

const ChaosPeakCut: React.FC = () => {
  const frame = useCurrentFrame();
  const zoom = interpolate(frame, [0, 22], [1, 1.06], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const value = Math.round(interpolate(frame, [0, 22], [41, 63], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  }));
  return (
    <AbsoluteFill style={{background: colors.cream, transform: `scale(${zoom})`}}>
      <PlaceholderTag label="caos: chat + contador + llamadas" x={64} y={64} />
      <ChatBubble text="¿Ya revisaste mi póliza?" appearAt={-40} x={140} y={200} width={340} />
      <ChatBubble text="Necesito mi certificado." appearAt={-40} x={140} y={330} width={340} />
      <ChatBubble text="¿Me puedes responder?" appearAt={-40} x={140} y={460} width={340} />
      <ChatBubble text="Es urgente." appearAt={-40} x={140} y={590} width={260} />
      <CallChip label="Llamada entrante" x={1120} y={280} phase={2} />
      <CallChip label="Llamada entrante" x={1300} y={420} phase={14} />
      <CounterBadge value={value} x={1200} y={640} accent="oro" />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------------------
// Segmento C (0:06–0:09) — Primer plano, no da abasto, café ya frío
// ---------------------------------------------------------------------------

const CloseUpOverwhelmed: React.FC = () => {
  const frame = useCurrentFrame();
  const steaming = interpolate(frame, [0, 60], [0.15, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{background: colors.cream}}>
      <PlaceholderTag label="fondo oficina (primer plano) + UI chat" x={64} y={64} />
      <DeskSurface />
      <AdvisorSilhouette x={1300} y={880} scale={1.4} />
      <LaptopShape x={860} y={760} openProgress={1} />
      {/* Insert: la taza dejó de humear — el tiempo pasó sin que lo note */}
      <CoffeeCup x={1560} y={860} steaming={steaming} />

      {/* Los 4 mensajes ya recibidos quedan apilados a un costado */}
      <ChatBubble text="¿Ya revisaste mi póliza?" appearAt={-60} x={70} y={120} width={320} />
      <ChatBubble text="Necesito mi certificado." appearAt={-60} x={70} y={230} width={320} />
      <ChatBubble text="¿Me puedes responder?" appearAt={-60} x={70} y={340} width={320} />
      <ChatBubble text="Es urgente." appearAt={-60} x={70} y={450} width={240} />

      {/* "Responde uno, llegan cinco más" — sin inventar diálogo nuevo */}
      <MessageSkeletonPill appearAt={14} x={70} y={540} />
      <MessageSkeletonPill appearAt={22} x={70} y={584} />
      <MessageSkeletonPill appearAt={30} x={70} y={628} />
      <MessageSkeletonPill appearAt={38} x={70} y={672} />
      <MessageSkeletonPill appearAt={46} x={70} y={716} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------------------
// Segmento D (0:09–0:10) — Se pasa la mano por la cara, sube la intensidad
// ---------------------------------------------------------------------------

const FinalBeat: React.FC = () => {
  const frame = useCurrentFrame();
  const handToFace = interpolate(frame, [0, 18], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const intensity = interpolate(frame, [0, 30], [0, 0.22], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{background: colors.cream}}>
      <DeskSurface />
      <AdvisorSilhouette x={1180} y={860} scale={1.5} handToFace={handToFace} />
      {/* Overlay plano de tinta (transparencia, no degradado) para la subida
          de intensidad musical — hard cut a escena 2 ocurre fuera de este still */}
      <AbsoluteFill style={{background: colors.tinta, opacity: intensity}} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------------------
// Escena completa
// ---------------------------------------------------------------------------

export const DiaImposible: React.FC = () => {
  return (
    <AbsoluteFill style={{background: colors.cream, fontFamily: font.family}}>
      <Sequence from={0} durationInFrames={62} name="A — Establishing (calma)">
        <EstablishingShot />
      </Sequence>

      <Sequence from={60} durationInFrames={26} name="B1 — Mensajes 1 y 2">
        <PhoneMessagesCut />
      </Sequence>
      <Sequence from={86} durationInFrames={24} name="B2 — Contador de bandeja">
        <InboxCounterCut />
      </Sequence>
      <Sequence from={110} durationInFrames={26} name="B3 — Llamadas simultáneas">
        <IncomingCallsCut />
      </Sequence>
      <Sequence from={136} durationInFrames={22} name="B4 — Mensajes 3 y 4">
        <PhoneMessagesCut2 />
      </Sequence>
      <Sequence from={158} durationInFrames={22} name="B5 — Pico de caos">
        <ChaosPeakCut />
      </Sequence>

      <Sequence from={180} durationInFrames={90} name="C — Primer plano, no da abasto">
        <CloseUpOverwhelmed />
      </Sequence>

      <Sequence from={270} durationInFrames={30} name="D — Se pasa la mano por la cara">
        <FinalBeat />
      </Sequence>
    </AbsoluteFill>
  );
};
