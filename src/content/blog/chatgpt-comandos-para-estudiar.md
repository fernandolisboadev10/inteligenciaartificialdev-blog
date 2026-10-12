---
title: "12 comandos personalizados que convierten a ChatGPT en una herramienta de estudio"
description: "Configura 12 comandos al estilo slash una sola vez y ChatGPT deja de dar respuestas genéricas y arma mapas mentales, flashcards y palacios de la memoria bajo demanda. Listos para copiar y pegar."
category: "Prompts"
date: 2026-09-07
updated: 2026-10-12
translation: "chatgpt-comandos-para-estudar"
readingTime: "5 min"
image: "./images/chatgpt-comandos-para-estudar.webp"
imageAlt: "Foto editorial en primer plano del escritorio de un estudiante por la noche, con la pantalla del portátil mostrando una interfaz de chat desenfocada, notas adhesivas de colores con nombres de comandos de estudio escritos a mano, libros de texto apilados y un resaltador cerca, con la luz cálida de una lámpara de escritorio"
---

Escribir un prompt nuevo y detallado cada vez que quieres que ChatGPT te haga preguntas o resuma un capítulo cansa rápido. Existe un patrón más simple que circula entre estudiantes en las redes sociales: enseñarle al modelo un puñado de comandos cortos una sola vez, y después activarlos con una línea durante el resto de tu sesión de estudio.

La idea es directa. Pegas un mensaje de configuración que define qué significa cada comando. A partir de ahí, escribir algo como `/flashcards Mitosis vs Meiosis` te da un conjunto de flashcards formateado en lugar de una pared de texto que tienes que reorganizar tú mismo.

Abajo tienes un prompt de configuración funcional con 12 comandos, más un ejemplo de uso para cada uno. Pega la configuración una vez al inicio de una conversación (o guárdala como instrucción personalizada o instrucción de Proyecto, si tu plan lo permite) y después usa los comandos cortos en cada tema que estudies.

## El prompt de configuración

Pega esto una sola vez, al inicio de una conversación nueva:

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">setup.txt</span>
    <button class="copy-btn" data-copy-target="prompt-setup">Copiar</button>
  </div>
  <pre id="prompt-setup"><code>Eres mi asistente de estudio personal. A partir de ahora, siempre que un mensaje empiece con uno de los comandos de abajo, responde usando exactamente ese formato en lugar de una respuesta normal. Ignora esta instrucción en cualquier mensaje que no empiece con un comando.

/mindmap [tema] -> Arma un mapa mental en texto: una idea central, de 4 a 6 ramas principales, de 2 a 3 subpuntos en cada rama.
/cheatsheet [tema] -> Resumen de una página: solo definiciones clave, fórmulas y datos. Sin explicaciones largas.
/explodedview [tema] -> Divide el tema en sus partes individuales, explicando qué hace cada una y cómo se conecta con el resto.
/blueprint [tema] -> Ruta de aprendizaje paso a paso para dominar ese tema desde cero, en el orden correcto, con estimaciones de tiempo aproximadas.
/flowchart [tema] -> Convierte el proceso en un diagrama de flujo en texto usando flechas: Inicio -> Paso -> Decisión -> Fin.
/flashcards [tema] -> Genera 10 flashcards de pregunta y respuesta, un par por línea, con el formato P: / R:.
/diagram [tema] -> Describe un diagrama rotulado que muestre cómo se relacionan entre sí las partes de ese tema.
/timeline [tema] -> Lista los eventos o etapas principales en orden cronológico, con una línea de contexto cada uno.
/comparison [A] vs [B] -> Tabla comparativa con al menos 5 criterios, mostrando diferencias y semejanzas.
/conceptmap [tema] -> Mapea cómo se conectan y se influyen los conceptos dentro de ese tema.
/memorypalace [tema] -> Convierte los datos principales en un palacio de la memoria: asocia cada uno con un lugar vívido de una casa imaginaria, en orden.
/quizboard [tema] -> Autoevaluación de 10 preguntas que mezcle opción múltiple, verdadero/falso y respuesta corta, con las respuestas al final.

Mantén cada respuesta enfocada en el estudio y la memorización, no en explicaciones generales, salvo que yo pida una explícitamente.</code></pre>
</div>

Con eso configurado, esto es para lo que sirve cada comando.

## /mindmap

Úsalo cuando necesitas el panorama general antes de los detalles: cómo se ramifica un tema y dónde encaja cada cosa respecto al resto.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">ejemplo</span>
    <button class="copy-btn" data-copy-target="prompt-mindmap">Copiar</button>
  </div>
  <pre id="prompt-mindmap"><code>/mindmap Fotosíntesis</code></pre>
</div>

## /cheatsheet

Ideal la noche antes de un examen, cuando ya entiendes la materia y solo necesitas cada fórmula y definición en un solo lugar, sin rodeos.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">ejemplo</span>
    <button class="copy-btn" data-copy-target="prompt-cheatsheet">Copiar</button>
  </div>
  <pre id="prompt-cheatsheet"><code>/cheatsheet Reacciones de Química Orgánica</code></pre>
</div>

## /explodedview

Bueno para cualquier cosa hecha de partes que interactúan: una célula, un motor, una ley. Obliga al modelo a nombrar cada componente en lugar de describir el tema como un bloque único.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">ejemplo</span>
    <button class="copy-btn" data-copy-target="prompt-explodedview">Copiar</button>
  </div>
  <pre id="prompt-explodedview"><code>/explodedview Cómo Funciona una Red Neuronal</code></pre>
</div>

## /blueprint

Para cuando empiezas un tema desde cero absoluto y no sabes en qué orden aprender las cosas. Te da un temario en lugar de una respuesta.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">ejemplo</span>
    <button class="copy-btn" data-copy-target="prompt-blueprint">Copiar</button>
  </div>
  <pre id="prompt-blueprint"><code>/blueprint Aprender Python desde Cero</code></pre>
</div>

## /flowchart

Ideal para procesos con pasos y puntos de decisión: ciclos, algoritmos, flujos de trabajo. Las flechas en texto bastan para ver la forma sin dibujar nada.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">ejemplo</span>
    <button class="copy-btn" data-copy-target="prompt-flowchart">Copiar</button>
  </div>
  <pre id="prompt-flowchart"><code>/flowchart El Ciclo del Agua</code></pre>
</div>

## /flashcards

El caballo de batalla de la repetición espaciada. Pídelo con regularidad sobre el mismo tema y recibirás ángulos ligeramente distintos cada vez, lo que resulta más útil que memorizar un conjunto fijo.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">ejemplo</span>
    <button class="copy-btn" data-copy-target="prompt-flashcards">Copiar</button>
  </div>
  <pre id="prompt-flashcards"><code>/flashcards Causas de la Revolución Francesa</code></pre>
</div>

## /diagram

Una versión más suelta de /explodedview: úsalo cuando te importan más las relaciones que una lista exhaustiva de partes.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">ejemplo</span>
    <button class="copy-btn" data-copy-target="prompt-diagram">Copiar</button>
  </div>
  <pre id="prompt-diagram"><code>/diagram El Sistema Inmunológico Humano</code></pre>
</div>

## /timeline

Aquí el orden importa: historia, fases de un proyecto, etapas biológicas. Evita que confundas secuencia con importancia.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">ejemplo</span>
    <button class="copy-btn" data-copy-target="prompt-timeline">Copiar</button>
  </div>
  <pre id="prompt-timeline"><code>/timeline Principales Eventos de la Segunda Guerra Mundial</code></pre>
</div>

## /comparison

Siempre que dos conceptos se te confundan entre sí, esto los pone lado a lado en lugar de describir cada uno en un párrafo separado que tienes que cruzar tú.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">ejemplo</span>
    <button class="copy-btn" data-copy-target="prompt-comparison">Copiar</button>
  </div>
  <pre id="prompt-comparison"><code>/comparison Mitosis vs Meiosis</code></pre>
</div>

## /conceptmap

Parecido a /mindmap, pero centrado en causa y efecto e influencia en lugar de jerarquía. Útil para temas como la economía, donde todo empuja a todo.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">ejemplo</span>
    <button class="copy-btn" data-copy-target="prompt-conceptmap">Copiar</button>
  </div>
  <pre id="prompt-conceptmap"><code>/conceptmap Oferta y Demanda</code></pre>
</div>

## /memorypalace

La técnica clásica de los loci, generada para ti. Excelente para listas ordenadas de datos difíciles de memorizar de forma mecánica: nombres de nervios, huesos, capitales.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">ejemplo</span>
    <button class="copy-btn" data-copy-target="prompt-memorypalace">Copiar</button>
  </div>
  <pre id="prompt-memorypalace"><code>/memorypalace Los 12 Nervios Craneales</code></pre>
</div>

## /quizboard

Ejecútalo después de todo lo demás para comprobar qué quedó de verdad. Los formatos de pregunta mezclados detectan lagunas que solo con flashcards suelen pasar desapercibidas.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">ejemplo</span>
    <button class="copy-btn" data-copy-target="prompt-quizboard">Copiar</button>
  </div>
  <pre id="prompt-quizboard"><code>/quizboard La Tabla Periódica</code></pre>
</div>

## Hacer que se mantenga

El prompt de configuración solo dura en la conversación actual, a menos que lo guardes en algún lugar permanente. Si tienes ChatGPT Plus, pégalo en **Instrucciones personalizadas** (Configuración → Personalización) o en las instrucciones de un **Proyecto**, para que toda conversación nueva dentro de ese proyecto ya conozca los comandos. Claude y Gemini tienen la misma función mediante sus propias instrucciones persistentes o sus funciones de "Proyectos": el prompt en sí no necesita cambiar, solo el lugar donde lo guardas.

No necesitas usar los 12. La mayoría de las personas se quedan con tres o cuatro que usan todo el tiempo: normalmente /flashcards, /cheatsheet y el que mejor encaje con su forma natural de pensar, mapas mentales para quien aprende de forma visual, líneas de tiempo para quien estudia historia o procesos. Pruébalos en tus próximos ejercicios de lectura y quédate con los que de verdad cambien la forma en que repasas.

## Sigue leyendo

- [Detectores de IA y falsos positivos en redacciones humanas](/chatgpt-detector-falsos-positivos/)
- [12 comandos personalizados para programadores](/chatgpt-comandos-para-programadores/)
