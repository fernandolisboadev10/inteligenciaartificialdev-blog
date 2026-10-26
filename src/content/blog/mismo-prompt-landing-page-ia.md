---
title: "Le dimos el mismo prompt de landing page a Claude, GPT-6 Luna, Gemini y DeepSeek. El más caro costó más de 30 veces el más barato."
description: "El mismo prompt, palabra por palabra, cuatro modelos, cero ediciones después. Abrimos los cuatro sitios en el móvil y en el computador, probamos el formulario a mano y comparamos accesibilidad, validación y costo por página."
category: "Estudios de caso"
date: 2026-09-28
translation: "mesmo-prompt-landing-page-ia"
updated: 2026-10-26T08:16:00-03:00
readingTime: "8 min"
image: "./images/mesmo-prompt-landing-page.webp"
imageAlt: "Cuatro monitores lado a lado sobre una mesa de madera, cada uno mostrando una versión distinta de la misma landing page de cafetería en marrón y crema"
draft: false
---

Pedirle a una IA que "cree una landing page" es una de las tareas más comunes que existen, y casi todo el mundo compara el resultado solo mirando la parte superior de la página. La parte superior es la que todos los modelos aciertan. La diferencia aparece más abajo: en el formulario, en la validación, en la accesibilidad y en lo que pasa cuando alguien escribe un correo equivocado.

Así que hicimos una prueba simple. Un único prompt, cuatro modelos, ninguna edición después. Abrimos los cuatro archivos, los probamos en el móvil y en el computador, llenamos el formulario bien y mal, y medimos lo que costó cada uno.

## Cómo se hizo la prueba

Antes de los resultados, tres avisos de honestidad, porque cambian cómo debes leer las cifras:

- **Lo ejecutamos por API, no por las apps de chat.** Eso significa que los modelos no usaron el prompt de sistema ni las herramientas de cada app, y que los planes gratuitos no entraron en la cuenta. Es una prueba de los modelos, no de la experiencia de usar ChatGPT, Claude o Gemini en el navegador.
- **Una sola ronda por modelo.** Los modelos de IA varían de una ejecución a otra. Una segunda prueba podría salir distinta, así que trátalo como una instantánea, no como un ranking definitivo.
- **Claude necesitó un segundo intento.** En el primero, el límite de salida que definimos (16 mil tokens) cortó el archivo por la mitad, y eso fue un error nuestro, no del modelo. Lo ejecutamos de nuevo con un límite mayor, y el resultado de abajo es el de la segunda ronda.
- **El prompt original estaba en portugués** (el teste se hizo para un público brasileño, con precios en reales). Lo reproducimos tal cual, sin traducirlo, para no alterar el experimento.

El prompt fue exactamente este:

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">prompt de la prueba</span>
    <button class="copy-btn" data-copy-target="prompt-landing">Copiar</button>
  </div>
  <pre id="prompt-landing"><code>Crie uma landing page completa para uma cafeteria fictícia chamada "Grão Nobre", em um único arquivo HTML com CSS e JavaScript embutidos, sem bibliotecas ou arquivos externos. A página precisa ter: cabeçalho com navegação, seção principal com chamada para ação, cardápio com pelo menos 6 itens e preços em reais, seção de depoimentos, formulário de reserva de mesa (nome, e-mail, data, número de pessoas) com validação e mensagem de confirmação, e rodapé. Deve funcionar bem no celular e no computador. Responda apenas com o código HTML.</code></pre>
</div>

En español, el pedido era: una landing page completa para una cafetería ficticia llamada "Grão Nobre", en un único archivo HTML con CSS y JavaScript incrustados, sin bibliotecas ni archivos externos; con encabezado y navegación, sección principal con llamada a la acción, carta con al menos 6 ítems y precios en reales, sección de testimonios, formulario de reserva de mesa (nombre, correo, fecha, número de personas) con validación y mensaje de confirmación, y pie de página; que funcione bien en móvil y en computador, respondiendo solo con el código HTML.

Los modelos fueron Claude Sonnet 5.5 (Anthropic), GPT-6 Luna (OpenAI), Gemini 3.8 Flash (Google) y DeepSeek V4.1 Flash. Elegimos una versión intermedia o rápida de cada empresa, no el modelo más caro, porque es lo que la mayoría de las personas usa en el día a día.

## Lo que todos hicieron igual

Antes de las diferencias, vale la pena registrar lo que los cuatro acertaron, porque es bastante:

- Página en portugués de Brasil (`lang="pt-BR"`), meta viewport y ninguna biblioteca externa, como se pidió.
- Ningún desplazamiento horizontal en el móvil (probamos a 375 píxeles de ancho).
- Formulario que rechaza correos inválidos y fechas en el pasado, y muestra una confirmación cuando todo está bien.
- Un tema visual casi idéntico: marrón oscuro, crema y caramelo. Con el mismo prompt, los cuatro llegaron a la misma idea de "cafetería".

O sea, nadie entregó una página rota. La pregunta útil es qué cambia después de eso.

## Costo, tiempo y tamaño

<div style="max-width:900px;margin:24px auto;overflow-x:auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table style="width:100%;border-collapse:collapse;background:#ffffff;color:#1a1a1a;box-shadow:0 1px 4px rgba(0,0,0,0.08);border-radius:8px;overflow:hidden;">
    <thead>
      <tr style="background:var(--ink-deep);color:#ffffff;">
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Modelo</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">💰 Costo</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">⏱️ Tiempo</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">📄 Tokens de salida</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;font-weight:600;">Claude Sonnet 5.5</td>
        <td style="padding:12px 16px;">US$ 0,170</td>
        <td style="padding:12px 16px;">96 s</td>
        <td style="padding:12px 16px;">16.927</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;font-weight:600;">GPT-6 Luna</td>
        <td style="padding:12px 16px;">US$ 0,005</td>
        <td style="padding:12px 16px;">56 s</td>
        <td style="padding:12px 16px;">9.526</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;font-weight:600;">Gemini 3.8 Flash</td>
        <td style="padding:12px 16px;">US$ 0,042</td>
        <td style="padding:12px 16px;">62 s</td>
        <td style="padding:12px 16px;">11.219</td>
      </tr>
      <tr style="background:#fafafa;">
        <td style="padding:12px 16px;font-weight:600;">DeepSeek V4.1 Flash</td>
        <td style="padding:12px 16px;">US$ 0,009</td>
        <td style="padding:12px 16px;">46 s</td>
        <td style="padding:12px 16px;">12.370</td>
      </tr>
    </tbody>
  </table>
</div>

El costo fue lo que más destacó. GPT-6 Luna generó la página entera por medio centavo de dólar. Claude costó 35 veces más por la misma tarea, y Gemini, 9 veces más que Luna. Los archivos finales quedaron todos entre 31 y 34 KB, así que el precio mayor no compró una página más grande. Compró otra cosa, que aparece en las pruebas de abajo.

## El formulario: donde los cuatro se separan

![Mano sosteniendo un móvil con el formulario de reserva de la cafetería Grão Nobre, con un error de correo en rojo, y un portátil al fondo](./images/mesmo-prompt-landing-page-formulario.webp)

Llenamos el formulario vacío, con un correo inválido, con una fecha en el pasado y, por último, con datos correctos.

- **Claude:** muestra un mensaje de error por campo ("Informe seu nome.", "Escolha a data da reserva."), marca los campos con `aria-invalid` y, en la confirmación, oculta el formulario y muestra "Reserva confirmada".
- **Gemini:** también valida campo por campo, con los mensajes más detallados de los cuatro ("Insira um e-mail válido (ex: nome@dominio.com)", "Selecione uma data a partir de hoje").
- **DeepSeek:** validación propia con un mensaje por campo, y una confirmación que repite el número de personas, la fecha y el correo escrito.
- **GPT-6 Luna:** usa solo la validación nativa del navegador. Funciona, y rechazó el correo inválido y la fecha pasada, pero no escribe ningún mensaje propio, así que el texto del error depende del navegador y de su idioma.

Ninguna de estas elecciones es errónea. Pero Luna entregó la validación más simple, y eso combina con su costo: lo que se ahorró en tokens apareció en el acabado.

## Accesibilidad: la diferencia más escondida

Aquí las cuatro páginas quedaron más distantes, y es el tipo de cosa que casi nadie revisa mirando la pantalla.

<div style="max-width:900px;margin:24px auto;overflow-x:auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table style="width:100%;border-collapse:collapse;background:#ffffff;color:#1a1a1a;box-shadow:0 1px 4px rgba(0,0,0,0.08);border-radius:8px;overflow:hidden;">
    <thead>
      <tr style="background:var(--ink-deep);color:#ffffff;">
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Característica</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Claude</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Luna</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Gemini</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">DeepSeek</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;font-weight:600;">Enlace "saltar al contenido"</td>
        <td style="padding:12px 16px;">Sí</td>
        <td style="padding:12px 16px;">No</td>
        <td style="padding:12px 16px;">No</td>
        <td style="padding:12px 16px;">No</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;font-weight:600;">Campos marcados con aria-invalid</td>
        <td style="padding:12px 16px;">Sí</td>
        <td style="padding:12px 16px;">No</td>
        <td style="padding:12px 16px;">No</td>
        <td style="padding:12px 16px;">Sí</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;font-weight:600;">Menú del móvil con aria-expanded</td>
        <td style="padding:12px 16px;">Sí</td>
        <td style="padding:12px 16px;">Sí</td>
        <td style="padding:12px 16px;">No</td>
        <td style="padding:12px 16px;">Sí</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;font-weight:600;">Respeta prefers-reduced-motion</td>
        <td style="padding:12px 16px;">Sí</td>
        <td style="padding:12px 16px;">Sí</td>
        <td style="padding:12px 16px;">No</td>
        <td style="padding:12px 16px;">Sí</td>
      </tr>
      <tr>
        <td style="padding:12px 16px;font-weight:600;">Atributos aria en el código (conteo)</td>
        <td style="padding:12px 16px;">50</td>
        <td style="padding:12px 16px;">32</td>
        <td style="padding:12px 16px;">6</td>
        <td style="padding:12px 16px;">44</td>
      </tr>
    </tbody>
  </table>
</div>

Claude fue el único en incluir el enlace para saltar la navegación, y junto con DeepSeek fue el que marcó los campos con error para los lectores de pantalla. Gemini fue el más escueto: cerca de seis atributos de accesibilidad en todo el archivo, el botón de menú sin indicar si está abierto o cerrado, y ninguna preocupación por quien desactiva las animaciones en su sistema. El conteo de atributos es una medida burda, y un número mayor no garantiza una página mejor, pero la diferencia de 50 a 6 se confirma en los ítems individuales de la tabla.

Esa es la lección que deja la prueba: la página de Gemini se ve tan bien como las otras cuando la miras, y es exactamente por eso que la diferencia pasa desapercibida.

## Lo visual: una diferencia menor de lo que parece

Mirando las cuatro páginas abiertas, las diferencias visuales son pequeñas y de gusto.

- **Claude y GPT-6 Luna** dibujaron una taza ilustrada en la sección principal, usando solo CSS y SVG. Es lo que le da más aspecto de "sitio de verdad".
- **DeepSeek** usó un círculo con una taza pequeña, más simple.
- **Gemini** dejó la sección principal solo con texto, sin ninguna ilustración. Limpia, pero la más genérica de las cuatro.

Sobre la carta: el pedido era "al menos 6 ítems". Luna entregó exactamente 6, Gemini 7, DeepSeek 8 y Claude 9 precios. Todos cumplieron el pedido, y los números solo indican cuánto se esforzó cada uno más allá del mínimo.

## Cuál elegir para este tipo de tarea

No existe un ganador único, sino un compromiso claro entre costo y acabado:

- **Si la accesibilidad y el cuidado con los detalles importan** (sitio de cliente, producto real): Claude entregó la página más completa, al costo de 35 veces el del más barato.
- **Si vas a iterar decenas de veces y solo necesitas un borrador funcional:** GPT-6 Luna o DeepSeek lo resuelven por centavos, y refinas después.
- **Si usas Gemini:** no es un problema de calidad visual, es de acabado invisible. Pide explícitamente accesibilidad en el prompt, como enlace para saltar la navegación, `aria-expanded` en el menú y soporte de movimiento reducido.

Este último punto vale para todos. Ningún modelo recibió el pedido "hazlo accesible", y el resultado muestra lo que cada uno hace por su cuenta. Con una línea más en el prompt, la distancia probablemente disminuye.

## Preguntas frecuentes

### ¿Qué IA crea la mejor landing page?

Depende de qué signifique "mejor". En esta prueba, Claude entregó la página más completa en validación y accesibilidad, GPT-6 Luna fue la más barata, y los cuatro llegaron a páginas funcionales y parecidas en lo visual. La prueba fue de una ronda por modelo, así que el resultado puede variar.

### ¿Cuánto cuesta generar una landing page con IA por API?

En esta prueba, de medio centavo (GPT-6 Luna) a 17 centavos de dólar (Claude Sonnet 5.5) por página. El costo depende del modelo y de cuánto escribe, no del tamaño final del archivo, ya que los cuatro quedaron entre 31 y 34 KB.

### ¿Esta prueba vale para los planes gratuitos de ChatGPT, Claude y Gemini?

No directamente. Ejecutamos los modelos por API, sin el prompt de sistema ni las herramientas de las apps de chat, así que la experiencia de usar cada uno en el navegador puede diferir.

### ¿Las páginas generadas por IA son accesibles?

Solo en parte, y varía mucho entre modelos. En esta prueba, una página tenía cerca de 50 atributos de accesibilidad y enlace para saltar la navegación, y otra tenía alrededor de 6. Siempre vale la pena pedir accesibilidad en el prompt y revisar el resultado.

### ¿Se puede usar el código generado directamente en producción?

Como punto de partida, sí: todas funcionaron en el móvil y en el computador. Pero el formulario de reserva no envía datos a ningún lado, solo muestra la confirmación en pantalla, así que necesita un backend antes de salir al aire.

## Conclusión

Con el mismo prompt, los cuatro modelos entregaron una página funcional y bonita, lo que ya es un resultado notable. Lo que los separa no está en lo que ves al abrir el archivo, está en lo que solo aparece cuando tocas el formulario o navegas con el teclado: validación con mensajes propios, enlace para saltar la navegación, menú que avisa si está abierto. Ese acabado costó de 9 a 35 veces más que Luna, y no siempre compensa. Si el objetivo es un borrador, el más barato lo resuelve. Si el objetivo es entregárselo a un cliente, vale la pena pagar más o, mejor aún, escribir en el prompt exactamente lo que esperas de accesibilidad y revisar el resultado.

## Sigue leyendo

- [DeepSeek vs ChatGPT: el mismo prompt de temporizador Pomodoro](/deepseek-vs-chatgpt-temporizador-pomodoro/)
- [API de Grok vs GPT-6 Astra y Claude Opus 5: las cuentas](/grok-api-precio/)
- [Vibe coding sin desorden: 6 hábitos](/vibe-coding-6-habitos-sin-desorden/)

---

*Fuentes: prueba propia, realizada el 28 de septiembre de 2026 por la API de OpenRouter, con una ejecución por modelo. Costos y tokens devueltos por la propia API. Prompt reproducido íntegramente arriba.*
