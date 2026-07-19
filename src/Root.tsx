import React from 'react';
import {Composition} from 'remotion';
import {DiaImposible} from './scenes/DiaImposible';
import {ClientesFrustrados} from './scenes/ClientesFrustrados';
import {Burnout} from './scenes/Burnout';
import {ElSueno} from './scenes/ElSueno';
import {ElEncuentro} from './scenes/ElEncuentro';
import {Despertar} from './scenes/Despertar';
import {Transformacion} from './scenes/Transformacion';
import {ClientesFelices} from './scenes/ClientesFelices';
import {NuevaOficina} from './scenes/NuevaOficina';
import {Cierre} from './scenes/Cierre';

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

      {/* Escena 2 — "Los clientes se frustran" (6s). */}
      <Composition
        id="ClientesFrustrados"
        component={ClientesFrustrados}
        durationInFrames={6 * FPS}
        fps={FPS}
        width={1920}
        height={1080}
      />

      {/* Escena 3 — "Burnout" (6s). */}
      <Composition
        id="Burnout"
        component={Burnout}
        durationInFrames={6 * FPS}
        fps={FPS}
        width={1920}
        height={1080}
      />

      {/* Escena 4 — "El sueño" (10s). */}
      <Composition
        id="ElSueno"
        component={ElSueno}
        durationInFrames={10 * FPS}
        fps={FPS}
        width={1920}
        height={1080}
      />

      {/* Escena 5 — "El encuentro" (13s). */}
      <Composition
        id="ElEncuentro"
        component={ElEncuentro}
        durationInFrames={13 * FPS}
        fps={FPS}
        width={1920}
        height={1080}
      />

      {/* Escena 6 — "El despertar" (6s). */}
      <Composition
        id="Despertar"
        component={Despertar}
        durationInFrames={6 * FPS}
        fps={FPS}
        width={1920}
        height={1080}
      />

      {/* Escena 7 — "La transformación" (7s). */}
      <Composition
        id="Transformacion"
        component={Transformacion}
        durationInFrames={7 * FPS}
        fps={FPS}
        width={1920}
        height={1080}
      />

      {/* Escena 8 — "Clientes felices" (6s). */}
      <Composition
        id="ClientesFelices"
        component={ClientesFelices}
        durationInFrames={6 * FPS}
        fps={FPS}
        width={1920}
        height={1080}
      />

      {/* Escena 9 — "Una nueva oficina" (6s). */}
      <Composition
        id="NuevaOficina"
        component={NuevaOficina}
        durationInFrames={6 * FPS}
        fps={FPS}
        width={1920}
        height={1080}
      />

      {/* Escena 10 — "Cierre" (10s). */}
      <Composition
        id="Cierre"
        component={Cierre}
        durationInFrames={10 * FPS}
        fps={FPS}
        width={1920}
        height={1080}
      />
    </>
  );
};
