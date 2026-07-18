# Amparo — Video Comercial (v2)

Repo dedicado exclusivamente a producir el video comercial de Amparo ("Todos necesitamos un Amparo"). Es un reinicio limpio: no depende del código de `../amparo-video` (proyecto Remotion previo, se dejó como está, sin tocar).

## Contenido de referencia

- [`Identidad-de-Marca-Amparo.md`](Identidad-de-Marca-Amparo.md) — fuente de verdad de marca: qué es Amparo, personalidad, voz y tono, paleta "Tinta & Oro", tipografía, geometría, logo. **Toda escena y todo asset se valida contra este documento.**
- [`guion/storytelling-guide.md`](guion/storytelling-guide.md) — estructura narrativa aprobada de 10 escenas (fuente: Notion). Punto de partida para el guion de producción, no se reinventa desde cero.
- [`resourcesAmparo/`](resourcesAmparo/) — renders actuales del oso Amparo (assets de marca, extraídos de Notion).

## Cómo se orquesta el trabajo

Claude Code (sesión principal) actúa como **orquestador**: parte el video en escenas/tareas y despacha a subagentes especializados definidos en `.claude/agents/`, en el orden que corresponda según dependencias:

1. **`guion-amparo`** — convierte el storytelling guide en guion de producción escena por escena (timing, diálogo, asset requerido).
2. **`art-director-amparo`** — cura/organiza/valida assets visuales por escena.
3. **`motion-engineer-amparo`** — implementa cada escena (Remotion/React por defecto) y corre el typecheck/preview.
4. **`audio-engineer-amparo`** — voz, música, captions, sincronizados al timing ya estable de la escena.
5. **`qa-reviewer-amparo`** — audita cada escena contra las reglas de marca antes de aprobarla para el render final.

Etapas independientes (ej. arte de la escena 4 mientras motion trabaja la escena 1) se despachan en paralelo; etapas dependientes (audio espera timing estable de motion) se corren en secuencia.

## Convención de git (para poder revertir con confianza)

- **Un commit por unidad de trabajo de agente** — una escena, un lote de assets, una revisión de guion. Nunca un commit gigante con "todo el video".
- Prefijo de commit por etapa: `script:`, `assets:`, `scene(<nombre>):`, `audio(<escena>):`, `qa(<escena>):`, `render:`.
- **Una rama por intento creativo grande** (ej. `take/oso-bosque-nublado`) cuando se prueba una dirección distinta a la ya aprobada en `main`. Si no convence, se descarta la rama entera sin ensuciar el historial principal.
- `git tag` antes de cualquier cambio grande hecho por un agente sobre contenido ya aprobado, como punto de rollback adicional.
- Los `.mp4`/`.mov` renderizados **no se versionan** (ver `.gitignore`) — el historial versiona guion, assets fuente y código, no binarios de salida. Los preview/stills chicos sí pueden versionarse si ayudan a la revisión.
- Confirmar con el usuario antes de crear el remoto de GitHub o hacer push — el historial local se arma libremente, pero la sincronización con GitHub es una acción explícita, no automática.

## Stack (por defecto, a confirmar)

Remotion + React + TypeScript, siguiendo el patrón ya usado en `amparo-video` (no se copia su código, sí se reutiliza el criterio). Si se decide otro motor de video, actualizar esta sección y la definición de `motion-engineer-amparo`.
