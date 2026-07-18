import React from 'react';
import {Composition} from 'remotion';
import {DiaImposible} from './scenes/DiaImposible';

const FPS = 30;

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Escena 1 — "Un día imposible" (10s). Composition standalone para
          poder previsualizar/renderizar la escena sola mientras el resto
          del guion (escenas 2–10) todavía no está implementado. */}
      <Composition
        id="DiaImposible"
        component={DiaImposible}
        durationInFrames={10 * FPS}
        fps={FPS}
        width={1920}
        height={1080}
      />
    </>
  );
};
