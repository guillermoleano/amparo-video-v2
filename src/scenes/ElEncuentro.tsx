import React from 'react';
import {AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {font} from '../theme';
import {DialogueCaption} from '../components/DialogueCaption';
import {PlaceholderTag} from '../components/PlaceholderTag';
import {AdvisorSilhouette, ForestBackground} from './shared';

/**
 * Escena 5 — "El encuentro" (13s, 390 frames @ 30fps) — la de mayor duración
 * de todo el video, concentra casi todo el diálogo de presentación de Amparo.
 * Guion: guion/produccion/05-el-encuentro.md
 *
 * Decisión de escena tomada acá (documentada, no asumida en silencio): entre
 * las dos opciones que dejaba abierta el guion de producción — saludo con la
 * mano (wave, sin contacto) vs. apretón de manos — se elige la OPCIÓN 1
 * (wave), que es la que el propio guion recomienda para no requerir un
 * render nuevo ("esta segunda opción reduce el trabajo de generación de
 * asset nuevo"). Por eso se usa `bear-wave.png` (match directo) tal cual,
 * sin recortar ni recolorear — es el primer uso del oso en render real en
 * todo el video (la escena 4 usó silueta placeholder).
 *
 * La sonrisa "serena y contenida" que pide la nota de marca ya está resuelta
 * por el render mismo (boca cerrada) — no se le agrega ninguna animación
 * facial nueva.
 */

export const ElEncuentro: React.FC = () => {
  const frame = useCurrentFrame();

  // 0:00–0:02 (0–60): el asesor se detiene, sorprendido, mira al oso de frente.
  const bearEnterOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // 0:02–0:04 (60–120): el oso se acerca, ofrece/levanta la mano en saludo.
  const bearX = interpolate(frame, [60, 120], [980, 860], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const bearScale = interpolate(frame, [60, 120], [0.92, 1.05], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const finalBearX = frame < 60 ? 980 : bearX;
  const finalBearScale = frame < 60 ? 0.92 : bearScale;

  return (
    <AbsoluteFill style={{fontFamily: font.family}}>
      <ForestBackground />
      <PlaceholderTag label="fondo bosque nublado (placeholder) — oso: render real bear-wave.png" x={64} y={64} />

      {/* x empujado más a la derecha a propósito: a esta escala, las líneas
          de diálogo más largas ("Y dejarte tiempo para hacer lo que
          realmente importa.") arman una tarjeta centrada ancha que, con el
          asesor a x=1320, quedaba tapado detrás del caption — se verificó
          contra el still de esta escena y se corrigió acá. */}
      <AdvisorSilhouette x={1560} y={760} scale={1.05} />

      <div
        style={{
          position: 'absolute',
          left: finalBearX,
          top: 360,
          width: 620,
          opacity: bearEnterOpacity,
          transform: `scale(${finalBearScale})`,
          transformOrigin: 'bottom center',
        }}
      >
        <Img src={staticFile('bear-wave.png')} style={{width: '100%', height: 'auto', display: 'block'}} />
      </div>

      {/* 0:04–0:06 — Amparo: "Hola." / "Soy Amparo." / "He venido porque..." */}
      <DialogueCaption speaker="Amparo" text="Hola." appearAt={120} durationInFrames={13} />
      <DialogueCaption speaker="Amparo" text="Soy Amparo." appearAt={133} durationInFrames={17} />
      <DialogueCaption
        speaker="Amparo"
        text="He venido porque ya no tienes que hacerlo todo solo."
        appearAt={150}
        durationInFrames={30}
      />

      {/* 0:06–0:07 — Asesor: "¿Quién eres?" */}
      <DialogueCaption speaker="Asesor" text="¿Quién eres?" appearAt={180} durationInFrames={30} />

      {/* 0:07–0:13 — Amparo enumera, tono calmado, sin apuro (5 líneas cortas) */}
      <DialogueCaption
        speaker="Amparo"
        text="Soy el secretario que siempre necesitaste."
        appearAt={210}
        durationInFrames={51}
      />
      <DialogueCaption
        speaker="Amparo"
        text="Yo puedo atender a tus clientes."
        appearAt={261}
        durationInFrames={36}
      />
      <DialogueCaption speaker="Amparo" text="Responder sus preguntas." appearAt={297} durationInFrames={28} />
      <DialogueCaption speaker="Amparo" text="Acompañarlos." appearAt={325} durationInFrames={15} />
      <DialogueCaption
        speaker="Amparo"
        text="Y dejarte tiempo para hacer lo que realmente importa."
        appearAt={340}
        durationInFrames={50}
      />
    </AbsoluteFill>
  );
};
