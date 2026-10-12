---
title: "Le dimos el mismo prompt de Pomodoro a DeepSeek y a ChatGPT (gratis). Esto es lo que cada uno construyó distinto."
description: "El mismo prompt, palabra por palabra, los dos niveles gratuitos, cero ediciones después. Probamos a mano los dos temporizadores Pomodoro (pausar, reanudar, cambiar de pestaña) y encontramos diferencias reales en el manejo del retraso de tiempo, la accesibilidad y el alcance."
category: "Estudios de caso"
date: 2026-09-14
updated: 2026-10-12
translation: "deepseek-vs-chatgpt-timer-pomodoro"
readingTime: "6 min"
image: "./images/deepseek-vs-chatgpt-timer-pomodoro.webp"
imageAlt: "Foto editorial en primer plano de dos portátiles lado a lado sobre una mesa de madera, con cada pantalla mostrando una interfaz de cuenta regresiva desenfocada, y un pequeño temporizador de cocina en forma de tomate suavemente fuera de foco en primer plano"
---

Le dimos al nivel gratuito de DeepSeek y al nivel gratuito de ChatGPT el mismo prompt, exactamente igual, palabra por palabra, y no tocamos ninguno de los dos resultados después: sin edición de seguimiento, sin "arregla esto", sin segundo intento. Solo el primer resultado en bruto de un prompt para una app web de un solo archivo, probado a mano: iniciar, pausar, reanudar, reiniciar y cambiar de pestaña para ver qué se rompe.

Los dos widgets de abajo son el código real y sin editar que produjo cada modelo. Pruébalos tú mismo antes de leer nuestra opinión.

## El prompt

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">prompt.txt</span>
    <button class="copy-btn" data-copy-target="pomodoro-prompt">Copiar</button>
  </div>
  <pre id="pomodoro-prompt"><code>Build a Pomodoro timer web app. Requirements:
- 25 minute work session, 5 minute short break, automatically alternates between them
- Start, Pause, and Reset buttons
- Visible countdown timer (MM:SS)
- Clear indicator of whether it's currently "Work" or "Break"
- Play a sound or show a visual alert when a session ends
- Single self-contained HTML file: inline CSS and JS, no external libraries or CDN links
- Clean, minimal design

Give me the complete code in one HTML file, nothing else.</code></pre>
</div>

## Lo que construyó ChatGPT

<iframe src="/demos/pomodoro-chatgpt.html" title="Temporizador Pomodoro de ChatGPT, en vivo e interactivo" loading="lazy" style="width:100%;max-width:100%;height:560px;border:1px solid var(--line);border-radius:12px;background:#f5f5f5;"></iframe>

ChatGPT construyó exactamente lo que el prompt describía y se detuvo ahí. Un único `setInterval` cuenta el tiempo hacia atrás una vez por segundo, `Pause` lo interrumpe, `Start` crea uno nuevo, `Reset` lo devuelve todo a 25:00. Reproduce un sonido de tres notas con la Web Audio API cuando termina una sesión y actualiza el título de la pestaña del navegador en tiempo real, un detalle que nadie pidió pero que es genuinamente útil si haces Pomodoro en una pestaña en segundo plano.

Lo que no hizo: tocar nada fuera de los seis puntos de la lista. Sin barra de progreso, sin atajos de teclado, sin atributos de accesibilidad más allá de lo que un `<button>` simple ya da de regalo.

## Lo que construyó DeepSeek

<iframe src="/demos/pomodoro-deepseek.html" title="Temporizador Pomodoro de DeepSeek, en vivo e interactivo" loading="lazy" style="width:100%;max-width:100%;height:560px;border:1px solid var(--line);border-radius:12px;background:#f4f5f7;"></iframe>

DeepSeek respondió a los mismos seis puntos, y siguió. La cuenta regresiva no es un decremento ingenuo: recalcula el tiempo restante a partir de `Date.now()` comparado con una hora de término almacenada, cada 100 ms, lo que significa que no sufre retraso aunque la pestaña quede limitada en segundo plano, una clase de bug real del enfoque "solo hacer `timeLeft--` cada segundo" que usó ChatGPT. También trajo una barra de progreso, un cambio de color de rojo (trabajo) a verde (descanso), botones `Start`/`Pause` que se deshabilitan correctamente según el estado, regiones `aria-live` para lectores de pantalla, un respaldo para `prefers-reduced-motion`, vibración en el móvil al final de la sesión y atajos de teclado (Espacio para iniciar/pausar, R para reiniciar) que ni siquiera estaban en el prompt.

## Lado a lado

<div style="max-width:900px;margin:24px auto;overflow-x:auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table style="width:100%;border-collapse:collapse;background:#ffffff;box-shadow:0 1px 4px rgba(0,0,0,0.08);border-radius:8px;overflow:hidden;">
    <thead>
      <tr style="background:var(--ink-deep);color:#ffffff;">
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Comportamiento</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">ChatGPT (gratis)</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">DeepSeek (gratis)</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;">Método del temporizador</td>
        <td style="padding:12px 16px;"><code>setInterval</code>, decrementa una vez/seg</td>
        <td style="padding:12px 16px;font-weight:600;"><code>Date.now()</code> recalculado cada 100 ms</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;">Pausar / reanudar</td>
        <td style="padding:12px 16px;">Correcto, sin retraso en nuestra prueba</td>
        <td style="padding:12px 16px;">Correcto, resistente al retraso por diseño</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;">Alerta de fin de sesión</td>
        <td style="padding:12px 16px;">Sonido de 3 notas, actualiza el título de la pestaña</td>
        <td style="padding:12px 16px;">Sonido + vibración en el móvil + destello en la tarjeta</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;">Estado de los botones</td>
        <td style="padding:12px 16px;">Siempre clicables</td>
        <td style="padding:12px 16px;font-weight:600;">Start/Pause se deshabilitan según el estado</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;">Accesibilidad</td>
        <td style="padding:12px 16px;">Ninguna más allá de los botones nativos</td>
        <td style="padding:12px 16px;font-weight:600;"><code>aria-live</code>, soporte de movimiento reducido</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;">Atajos de teclado</td>
        <td style="padding:12px 16px;">Ninguno</td>
        <td style="padding:12px 16px;">Espacio para iniciar/pausar, R para reiniciar</td>
      </tr>
      <tr>
        <td style="padding:12px 16px;">Alcance vs. el prompt</td>
        <td style="padding:12px 16px;font-weight:600;">Cumplió exactamente</td>
        <td style="padding:12px 16px;">Fue mucho más allá, sin que se lo pidieran</td>
      </tr>
    </tbody>
  </table>
</div>

## Lo que no pudimos verificar del todo

La interfaz de DeepSeek mostró un indicador visible de "pensó durante 17 segundos" antes de devolver el código; el nivel gratuito de ChatGPT no expone esa etapa, así que no existe una cifra equivalente para comparar. Subjetivamente, la respuesta de ChatGPT pareció más rápida de principio a fin, pero no usamos cronómetro para eso, así que tómalo como una impresión, no como una medición. Lo señalamos en lugar de disimularlo: un modelo muestra el razonamiento, el otro no, y vale la pena saberlo aunque no tengamos una cifra limpia de ambos lados.

## Conclusión

Ninguno de los dos modelos entregó código roto. Es el primer hallazgo que vale la pena detenerse a pensar: la historia de "la IA escribe código lleno de bugs" es fácil de repetir, y simplemente no ocurrió aquí, en una tarea lo bastante pequeña como para caber en la cabeza. La diferencia real fue el alcance. ChatGPT leyó seis puntos y entregó seis puntos, correctamente, sin nada más. DeepSeek leyó los mismos seis puntos y decidió que un temporizador Pomodoro también necesitaba un cronometraje resistente al retraso, soporte de accesibilidad y atajos de teclado; nada de eso se pidió.

Cuál es "mejor" depende de lo que hagas con él. ¿Prototipando una idea de interfaz que de todos modos vas a reescribir? La salida ajustada y literal de ChatGPT es más fácil de leer y de simplificar. ¿Lanzando algo que una persona de verdad va a usar durante un día entero de trabajo, cambiando de pestaña y dejándolo en segundo plano todo el tiempo? La atención no solicitada de DeepSeek al retraso y a la accesibilidad es la diferencia entre un juguete y una herramienta.

Los dos temporizadores siguen activos arriba. Pausa uno, cambia de pestaña por un minuto, vuelve y mira cuál de los dos todavía dice la verdad.

## Sigue leyendo

- [El mismo prompt de landing page en cuatro modelos](/mismo-prompt-landing-page-ia/)
- [Estudios de caso de Claude Code, Codex, Copilot y Antigravity](/estudios-de-caso-herramientas-ia-codigo/)
- [Vibe coding sin desorden: 6 hábitos](/vibe-coding-6-habitos-sin-desorden/)
