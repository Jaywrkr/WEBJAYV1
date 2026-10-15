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

Al entrar hay una intro (una vez por sesión, se puede saltar): un contador de 000 a 100 mientras la palabra recorre las seis facetas. Después, la web recorre las facetas sola hasta que la persona interactúa. Atajos: teclas `1`–`6`, flechas sobre las facetas, `g` para las guías en diseñador. Cada faceta tiene URL propia (`#ingeniero`, `#disenador`, `#escritor`, `#lider`, `#vj`, `#creador`).

## Detalles
- Cursor propio: un cuadrado que invierte lo que tiene debajo y enmarca lo que se puede tocar.
- Sonido de interfaz opcional (apagado por defecto), en la barra superior.
- Título de la pestaña cambia con la faceta. Selección de texto invertida. Números tabulares.
- Terminal: Tab completa, ↑ ↓ historial, clic o Enter salta la intro.
- Diseñador: tokens leídos en vivo de la página. Escritor: barra de lectura. VJ: nombres de escenas, BPM detectado, ← → entre escenas.
- `og.png` (1200 × 630), `apple-touch-icon.png` y `404.html` propios.

## Sorpresas
- `0` o "míralas todas": las seis facetas a la vez, en columnas.
- Tocar la palabra de "Jay es ___" y escribir qué crees que es Jay.
- Escribir `simple` invierte la web. Escribir `codigo` (o el código Konami) abre el código de la página leyéndose a sí misma.
- Copiar texto lo firma: "— Jay Jaramillo · @jaywrkr · simple."
- Pasar el cursor por "simple." del pie apaga todo lo demás. El nombre de arriba se reduce a "J".
- 75 s sin tocar nada: salvapantallas con el juego de la vida en cuadrados.
- De noche en Cuenca y los domingos aparece un aviso.
- Terminal: `neofetch`, `top`, `history`, `uptime`, `codigo`, `seis`.
- Diseñador: "Rompe el diseño". Escritor: el borrador se tacha solo y cuenta las palabras eliminadas. Líder: "Cómo decido".

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
