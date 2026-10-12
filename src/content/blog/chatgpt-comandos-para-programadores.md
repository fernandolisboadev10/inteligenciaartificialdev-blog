---
title: "12 comandos personalizados que convierten a ChatGPT (o Claude) en un compañero de código"
description: "Configura 12 comandos al estilo slash una sola vez y la IA deja de responder con testamentos y pasa a explicar errores, revisar código, generar pruebas y escribir mensajes de commit bajo demanda. Listos para copiar y pegar."
category: "Prompts"
date: 2026-09-28
updated: 2026-10-12
translation: "chatgpt-comandos-para-programadores"
readingTime: "7 min"
image: "./images/chatgpt-comandos-para-programadores.webp"
imageAlt: "Foto editorial en primer plano del escritorio de un desarrollador, con la pantalla del portátil mostrando un editor de código desenfocado junto a una ventana de chat, notas adhesivas de colores en el borde del monitor con nombres de comandos escritos a mano, luz de fin de tarde"
draft: false
---

Quien programa con ayuda de IA termina escribiendo los mismos prompts todo el día: "explica este error", "revisa este fragmento", "escribe las pruebas de esto". Cada vez vuelves a explicar el formato que quieres, y cada vez la respuesta llega con un párrafo de introducción que nadie pidió.

La salida es la misma de nuestros artículos de [comandos para estudiar](/chatgpt-comandos-para-estudiar) y de [comandos para el trabajo](/chatgpt-comandos-productividad): enseñarle al modelo un puñado de comandos cortos una sola vez. Después de eso, escribir `/bug [error]` te devuelve causa, corrección y cómo evitarlo, directo al grano.

Abajo tienes un prompt de configuración con 12 comandos pensados para la rutina de quien escribe código, más un ejemplo de uso para cada uno. Pega la configuración una vez al inicio de una conversación (o guárdala como instrucción personalizada, si tu plan lo permite) y usa los comandos el resto del día.

## El prompt de configuración

Pega esto una sola vez, al inicio de una conversación nueva:

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">setup.txt</span>
    <button class="copy-btn" data-copy-target="prompt-setup">Copiar</button>
  </div>
  <pre id="prompt-setup"><code>Eres mi compañero de programación. A partir de ahora, siempre que un mensaje empiece con uno de los comandos de abajo, responde usando exactamente ese formato en lugar de una respuesta normal. Ignora esta instrucción en cualquier mensaje que no empiece con un comando.

/explain [código] -> Explica qué hace el código en lenguaje simple: resumen de una frase, luego paso a paso en viñetas cortas y, por último, cualquier trampa o comportamiento sorprendente.
/bug [error + código] -> Diagnóstico en tres bloques: Causa probable, Corrección (con el código corregido) y Cómo evitarlo de nuevo. Si falta información para estar seguro, di cuál.
/review [código] -> Revisión de código en tres listas: Problemas (bugs y riesgos), Mejoras (legibilidad y rendimiento) y Puntos positivos. Ordena por gravedad y cita la línea o el fragmento.
/test [función o código] -> Escribe pruebas unitarias que cubran el camino feliz, los casos límite y las entradas inválidas. Pregunta qué framework de pruebas uso si no lo he dicho.
/refactor [código] -> Refactoriza para que quede más legible sin cambiar el comportamiento. Muestra el código nuevo y una lista corta de qué cambió y por qué.
/commit [diff o descripción] -> Mensaje de commit en formato Conventional Commits: título de hasta 72 caracteres y, si hace falta, un cuerpo corto que explique el porqué.
/pr [diff o descripción] -> Descripción de pull request con: Resumen, Qué cambió (viñetas), Cómo probarlo y Riesgos o puntos de atención.
/docs [código] -> Documentación del código: comentario de encabezado en el formato adecuado al lenguaje, con parámetros, retorno y un ejemplo de uso.
/regex [descripción] -> Una expresión regular que resuelva el pedido, una explicación de cada parte y 3 ejemplos que coinciden y 3 que no.
/sql [descripción de la consulta y de las tablas] -> La consulta SQL pedida, una explicación corta y una observación sobre índices o rendimiento si importa.
/security [código] -> Señala vulnerabilidades (inyección, exposición de datos, autenticación débil, entradas sin validar), con gravedad y la corrección sugerida para cada una.
/rubber [problema] -> No lo resuelvas. Hazme de 3 a 5 preguntas que me ayuden a encontrar la respuesta por mi cuenta, una a la vez, empezando por la más reveladora.

Mantén cada respuesta enfocada y lista para usar, sin introducciones ni explicaciones largas, salvo que yo lo pida explícitamente. Nunca inventes funciones, bibliotecas u opciones que no existen: si no estás seguro, dilo.</code></pre>
</div>

Con eso configurado, esto es para lo que sirve cada comando.

## /explain

Úsalo cuando heredaste código que nadie documentó, o cuando abriste una biblioteca y quieres entenderla antes de tocarla. El bloque final, de trampas, suele ser el más valioso.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">ejemplo</span>
    <button class="copy-btn" data-copy-target="prompt-explain">Copiar</button>
  </div>
  <pre id="prompt-explain"><code>/explain [pega aquí la función que no entiendes]</code></pre>
</div>

## /bug

El comando más usado de la lista para quien programa. Pega el mensaje de error completo junto con el fragmento de código, porque la causa casi siempre está en la combinación de los dos.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">ejemplo</span>
    <button class="copy-btn" data-copy-target="prompt-bug">Copiar</button>
  </div>
  <pre id="prompt-bug"><code>/bug TypeError: Cannot read properties of undefined (reading 'map')
[pega aquí el componente donde ocurre el error]</code></pre>
</div>

## /review

Bueno para ejecutar antes de abrir un pull request, como una primera lectura crítica. El orden por gravedad evita que un problema serio quede escondido entre sugerencias de estilo.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">ejemplo</span>
    <button class="copy-btn" data-copy-target="prompt-review">Copiar</button>
  </div>
  <pre id="prompt-review"><code>/review [pega aquí el archivo o la función que acabas de escribir]</code></pre>
</div>

## /test

Para cuando escribiste la función y todavía no tienes ganas de escribir las pruebas. Los casos límite y las entradas inválidas son justo los que olvidamos.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">ejemplo</span>
    <button class="copy-btn" data-copy-target="prompt-test">Copiar</button>
  </div>
  <pre id="prompt-test"><code>/test Usando Jest, la función calcularDescuento(precio, porcentaje) que devuelve el precio final con el descuento aplicado</code></pre>
</div>

## /refactor

Úsalo en código que funciona pero da vergüenza mostrar. La regla de "no cambiar el comportamiento" está en el comando a propósito: refactorizar y alterar la lógica al mismo tiempo es receta para un bug.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">ejemplo</span>
    <button class="copy-btn" data-copy-target="prompt-refactor">Copiar</button>
  </div>
  <pre id="prompt-refactor"><code>/refactor [pega aquí la función de 80 líneas llena de if anidados]</code></pre>
</div>

## /commit

Elimina el "fix stuff" y el "ajustes" del historial. Pega el resultado de `git diff` y recibe un mensaje que tenga sentido dentro de seis meses.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">ejemplo</span>
    <button class="copy-btn" data-copy-target="prompt-commit">Copiar</button>
  </div>
  <pre id="prompt-commit"><code>/commit [pega aquí el resultado de git diff --staged]</code></pre>
</div>

## /pr

Para descripciones de pull request que el revisor realmente pueda seguir. El bloque "Cómo probarlo" es el que más tiempo le ahorra a quien va a revisar.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">ejemplo</span>
    <button class="copy-btn" data-copy-target="prompt-pr">Copiar</button>
  </div>
  <pre id="prompt-pr"><code>/pr Agregué paginación al listado de pedidos, con 20 elementos por página, y una prueba para el caso de página vacía</code></pre>
</div>

## /docs

Útil cuando el código está listo y la documentación quedó para "después". El ejemplo de uso incluido en el comando es lo que suele faltar en la documentación escrita a mano.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">ejemplo</span>
    <button class="copy-btn" data-copy-target="prompt-docs">Copiar</button>
  </div>
  <pre id="prompt-docs"><code>/docs [pega aquí la función pública que usarán otras personas del equipo]</code></pre>
</div>

## /regex

Nadie memoriza expresiones regulares. El comando obliga al modelo a mostrar ejemplos que coinciden y que no coinciden, que es la única forma confiable de saber si la regex hace lo que quieres.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">ejemplo</span>
    <button class="copy-btn" data-copy-target="prompt-regex">Copiar</button>
  </div>
  <pre id="prompt-regex"><code>/regex Validar un código postal de 5 dígitos, con o sin espacios alrededor</code></pre>
</div>

## /sql

Para consultas que sabes describir en español pero te trabas al escribir el JOIN. Pasa los nombres de las tablas y columnas; si no, el modelo va a adivinar.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">ejemplo</span>
    <button class="copy-btn" data-copy-target="prompt-sql">Copiar</button>
  </div>
  <pre id="prompt-sql"><code>/sql Tablas: clientes(id, nombre) y pedidos(id, cliente_id, valor, fecha). Quiero los 10 clientes que más gastaron el último mes</code></pre>
</div>

## /security

No reemplaza una auditoría de verdad, pero atrapa el error básico antes de que llegue a producción: una consulta armada con texto del usuario, una contraseña en un log, una ruta sin comprobación de permisos.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">ejemplo</span>
    <button class="copy-btn" data-copy-target="prompt-security">Copiar</button>
  </div>
  <pre id="prompt-security"><code>/security [pega aquí la ruta de login y la función que consulta la base de datos]</code></pre>
</div>

## /rubber

El comando más distinto de la lista: en lugar de darte la respuesta, te hace preguntas. Es la técnica del patito de goma, en la que explicar el problema en voz alta ya revela la solución. Sirve cuando quieres aprender, no solo resolver.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">ejemplo</span>
    <button class="copy-btn" data-copy-target="prompt-rubber">Copiar</button>
  </div>
  <pre id="prompt-rubber"><code>/rubber Mi formulario guarda los datos pero la lista no se actualiza hasta que recargo la página</code></pre>
</div>

## Hacer que se mantenga

El prompt de configuración solo dura en la conversación actual, a menos que lo guardes en algún lugar permanente. En ChatGPT, pégalo en **Instrucciones personalizadas** (Configuración, Personalización) o en las instrucciones de un **Proyecto**. En Claude, usa las instrucciones de un **Proyecto**. En Gemini, puedes crear un **Gem**. El texto no cambia, solo el lugar donde lo guardas.

Si usas Claude Code, existe un camino todavía más directo: comandos y skills que se guardan en tu proyecto. Explicamos cómo en [5 funciones de Claude Code que la mayoría de los devs nunca activa](/claude-code-funciones-ocultas).

Dos reglas valen para cualquier herramienta de IA para código. Primero, **nunca pegues claves de API, contraseñas ni datos de clientes** en un prompt, aunque tengas la instrucción personalizada activada. Segundo, **trata todo lo que devuelve la IA como un borrador**: ejecuta las pruebas, lee la corrección antes de aplicarla y comprueba que la función o la biblioteca que cita realmente exista. Vale la pena leer también [Vibe coding sin desorden](/vibe-coding-6-habitos-sin-desorden), que trata este cuidado con más profundidad.

No necesitas usar los 12. La mayoría de los devs se queda con cuatro o cinco: normalmente /bug, /review, /test y /commit. Pruébalos en tu próxima semana de trabajo y quédate con los que de verdad te ahorren tiempo.

## Sigue leyendo

- [MCP en Claude Code, Cursor y Copilot: 7 cuidados de seguridad](/mcp-seguridad-agentes-de-codigo/)
- [Claude Code, Antigravity o Copilot: cuál elegir](/claude-code-vs-antigravity-vs-copilot/)
