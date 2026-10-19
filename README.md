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

## Portada
- "Jay es ___": la palabra es una rueda. Scroll o arrastre sobre la frase, o flechas ↑ ↓, la giran. Al cambiar, las letras que se repiten viajan a su nueva posición; las que sobran salen y las que faltan entran.
- Índice a la derecha (01–06). Al pasar el cursor, el fondo adelanta esa faceta.
- Fondo: un shader WebGL por faceta en la retícula de 24px (terminal, retícula suiza, renglones, barras, damero VJ, mitad y mitad). Cambia con disolución por celdas; el mouse desplaza celdas en ángulo recto.

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
- 75 s sin tocar nada: salvapantallas con el juego de la vida. Al volver se rebobina hasta la generación 0, que era la frase "Nadie te está viendo. Hazlo igual." escrita en celdas. Probar con `?idle=3`.
- De noche en Cuenca y los domingos aparece un aviso.
- Terminal: `neofetch`, `top`, `history`, `uptime`, `codigo`, `seis`.
- Diseñador: "Rompe el diseño". Escritor: el borrador se tacha solo y cuenta las palabras eliminadas. Líder: "Cómo decido".

## Locuras
- Física real (Rapier) en "Rompe el diseño": las cajas caen, chocan y se arrastran; "Ordenar" las devuelve a la cuadrícula.
- Secuenciador de 16 pasos (Tone.js) en VJ: bombo, hat, bajo y blip; los visuales siguen el patrón; el enlace guarda el patrón en `?seq=`.
- Espejo en creador: la cámara convierte tu cara en Geist Mono en vivo y la puedes capturar. Todo local. Comando `espejo`.
- La web envejece: lee el último push público de Jaywrkr en GitHub. Desde 2 días sin código aparece polvo sobre la página y un aviso arriba; el cursor lo limpia solo para quien mira. Probar con `?age=15`.
- Tu vida en semanas (creador): fecha de nacimiento → 4.160 cuadrados, la semana actual parpadea.
- Modo Jay (creador o comando `modojay`): un marcador que se arrastra a la barra y pone cualquier web en negro, blanco, Geist Mono y "simple.".
- Fondo de la portada: retícula de puntos cada 24px. El cursor ilumina un cuadrado; un clic en el fondo manda un pulso cuadrado. A veces cruza un paquete por las líneas girando en ángulo recto: si lo atrapas con un clic o toque, enciende una letra de "simple." en la retícula. A los 7 se lee la palabra completa (se guarda en el navegador).
- Portada: al pasar el cursor por una faceta, la palabra cambia y aparece una sola línea o cuadro en movimiento propio de esa faceta; "jaywrkr" se abre en "jay + worker"; el reloj muestra el día.

## Hallazgos
Todo lo escondido vive en un solo sistema: 26 hallazgos con contador arriba ("hallazgos 3/26"). El primero se gana al entrar, para que la gente vea que existe. El panel muestra cada hallazgo como ??? con una pista; al encontrarlo se invierte en blanco. Se guarda en el navegador. Botón para compartir "Encontré X de 24". Comando `hallazgos` en la terminal.
Para agregar uno: id en `FIDS`, texto en `I18N.<lang>.fnd` (mismo orden) y `found('id')` donde ocurre.

## Idiomas
Español, inglés, italiano, francés y japonés. Selector arriba a la derecha; se guarda en el navegador. También `?lang=en|it|fr|ja`. Si no hay elección, usa el idioma del navegador.
Todos los textos están en `I18N` dentro de `index.html`; cada idioma tiene las mismas claves.

## Brand style
- Monocromo: negro y blanco puros. El acento es la inversión.
- Geist Mono en 300 y 400. Nunca bold. Máximo 56px.
- Solo ángulos rectos. Mucho vacío.
- Cierra con "simple."

## Editar contenido
Todo vive en el bloque `datos` del script de `index.html`:
- `P`: proyectos (nombre, etapa 0–3, url). Tipo y descripción por idioma en `I18N.<lang>.proj`.
- `STACK`: tecnologías del modo ingeniero.
- Párrafos del modo escritor en `I18N.<lang>.paras` (`~~texto~~` = borrador tachado).

## Stack
HTML, CSS y JavaScript sin dependencias ni build. Web Audio y Canvas para el modo VJ.

## Deploy
Vercel como proyecto **Other**, sin comando de build, salida `.`.
