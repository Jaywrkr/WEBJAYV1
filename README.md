# Jay es ___

Web personal de Jay Jaramillo (jaywrkr). Una persona, seis formas de leerla: el mismo contenido se reescribe según la faceta elegida.

| # | Faceta | Forma |
|---|---|---|
| 01 | ingeniero | terminal: whoami, stack, `ls proyectos/`, `git log` |
| 02 | diseñador | el sistema expuesto: tipografía, color, reglas, cuadrícula con medidas reales |
| 03 | escritor | solo texto |
| 04 | líder | tablero: frentes, etapas, principios |
| 05 | VJ | 20 escenas GLSL con estela, micrófono del visitante, auto-VJ y MIDI |
| 06 | creador | las 7 series semanales, jugables, y "Ahora tú": tu frase como post |

Al entrar, la web recorre las facetas sola hasta que la persona interactúa. Atajos: teclas `1`–`6`, flechas sobre las facetas, `g` para las guías en diseñador. Cada faceta tiene URL propia (`#ingeniero`, `#disenador`, `#escritor`, `#lider`, `#vj`, `#creador`).

## Brand style
- Monocromo: negro y blanco puros. El acento es la inversión.
- Geist Mono en 300 y 400. Nunca bold. Máximo 56px.
- Solo ángulos rectos. Mucho vacío.
- Cierra con "simple."

## Editar contenido
Todo vive en el bloque `datos` del script de `index.html`:
- `P`: proyectos (nombre, tipo, descripción, etapa 0–3, url).
- `STACK`: tecnologías del modo ingeniero.
- `MANTRAS`: frases del modo creador.
- Párrafos del modo escritor en `mountEscritor`.

## Stack
HTML, CSS y JavaScript sin dependencias ni build. Web Audio y Canvas para el modo VJ.

## Deploy
Vercel como proyecto **Other**, sin comando de build, salida `.`.
