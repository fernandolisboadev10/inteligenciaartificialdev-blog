---
title: "12 comandos personalizados que convierten a ChatGPT en una herramienta de productividad en el trabajo"
description: "Configura 12 comandos al estilo slash una sola vez y ChatGPT deja de escribir correos genéricos y arma agendas, resúmenes de reuniones y hojas de cálculo bajo demanda. Listos para copiar y pegar."
category: "Prompts"
date: 2026-09-18
translation: "chatgpt-comandos-produtividade"
updated: 2026-10-12
readingTime: "6 min"
image: "./images/chatgpt-comandos-produtividade.webp"
imageAlt: "Foto editorial en primer plano del escritorio de oficina de un profesional, con la pantalla del portátil mostrando una interfaz de chat desenfocada, notas adhesivas de colores con nombres de comandos de productividad escritos a mano, una taza de café y un cuaderno cerca, con luz natural de día por la ventana de la oficina"
---

Escribir un prompt nuevo cada vez que necesitas el resumen de una reunión, un correo de cobro educado o una agenda ordenada consume un tiempo que nadie tiene de sobra en medio de la jornada. El mismo patrón que circula entre estudiantes, enseñarle al modelo un puñado de comandos cortos una sola vez, funciona igual de bien para el trabajo, solo que con formatos pensados para la rutina de oficina en lugar del examen.

La idea es la misma. Pegas un mensaje de configuración que define qué significa cada comando. A partir de ahí, escribir `/recap [tus notas]` te devuelve decisiones, pendientes y responsables ya organizados, en lugar de releer tú mismo toda la transcripción.

Abajo tienes un prompt de configuración funcional con 12 comandos, más un ejemplo de uso para cada uno. Pega la configuración una vez al inicio de una conversación (o guárdala como instrucción personalizada o instrucción de Proyecto, si tu plan lo permite) y usa los comandos cortos el resto de tu jornada.

## El prompt de configuración

Pega esto una sola vez, al inicio de una conversación nueva:

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">setup.txt</span>
    <button class="copy-btn" data-copy-target="prompt-setup">Copiar</button>
  </div>
  <pre id="prompt-setup"><code>Eres mi asistente de productividad personal. A partir de ahora, siempre que un mensaje empiece con uno de los comandos de abajo, responde usando exactamente ese formato en lugar de una respuesta normal. Ignora esta instrucción en cualquier mensaje que no empiece con un comando.

/email [contexto] -> Borrador de correo profesional: asunto sugerido, saludo, cuerpo directo en un máximo de 3 párrafos cortos y un cierre con un próximo paso claro.
/recap [notas o transcripción] -> Resumen de reunión en tres bloques: Decisiones, Pendientes (con responsable si se mencionó) y Próximos pasos.
/agenda [tema u objetivo de la reunión] -> Agenda estructurada con 4 a 6 puntos, cada uno con tiempo estimado en minutos, sumando el total al final.
/followup [reunión o conversación] -> Correo de seguimiento posterior a la reunión: agradecimiento breve, lista de lo acordado y plazo de cada punto.
/brief [proyecto o iniciativa] -> Resumen ejecutivo de una página: objetivo, alcance, principales riesgos y plazo, en viñetas cortas.
/decision [situación] -> Tabla de pros y contras con al menos 4 criterios de cada lado, que termine con una recomendación de una frase.
/sheet [finalidad] -> Estructura de hoja de cálculo: lista de columnas sugeridas, tipo de dato de cada una y 1 o 2 fórmulas útiles para ese caso.
/pitch [idea] -> Dos versiones: un elevator pitch de 3 frases y una versión de un párrafo para correo o mensaje.
/objections [propuesta o situación] -> Enumera las 4 objeciones más probables que plantearía un jefe, cliente o colega, cada una con una respuesta lista.
/okr [objetivo] -> Divídelo en 1 Objective claro y de 2 a 4 Key Results medibles con una cifra objetivo.
/standup [actividades] -> Formato de daily standup: Qué hice ayer, Qué haré hoy, Bloqueos (o "ninguno").
/delegate [tarea compleja] -> Convierte la tarea en una checklist de pasos más pequeños, cada uno lo bastante claro como para pasárselo a otra persona sin explicación extra.

Mantén cada respuesta enfocada y lista para usar, sin introducciones ni explicaciones largas, salvo que yo lo pida explícitamente.</code></pre>
</div>

Con eso configurado, esto es para lo que sirve cada comando.

## /email

Úsalo cuando necesitas mandar un correo rápido pero no quieres sonar seco ni gastar 10 minutos eligiendo las palabras correctas: un cobro, un pedido, la respuesta a un cliente.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">ejemplo</span>
    <button class="copy-btn" data-copy-target="prompt-email">Copiar</button>
  </div>
  <pre id="prompt-email"><code>/email Pedirle al proveedor que confirme el plazo de entrega, que ya lleva 3 días de retraso, manteniendo un tono educado</code></pre>
</div>

## /recap

El comando más útil de la lista para quien pasa de reunión en reunión. Pega las notas en bruto o la transcripción automática y recibe de vuelta solo lo que importa.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">ejemplo</span>
    <button class="copy-btn" data-copy-target="prompt-recap">Copiar</button>
  </div>
  <pre id="prompt-recap"><code>/recap [pega aquí la transcripción o tus notas de la reunión de alineación con el equipo de marketing]</code></pre>
</div>

## /agenda

Bueno para cualquier reunión que estés organizando y no quieras que se convierta en una charla sin fin. Los tiempos estimados también sirven de excusa educada para cortar una discusión que se alargó.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">ejemplo</span>
    <button class="copy-btn" data-copy-target="prompt-agenda">Copiar</button>
  </div>
  <pre id="prompt-agenda"><code>/agenda Reunión de 30 minutos para decidir el presupuesto de anuncios del próximo trimestre</code></pre>
</div>

## /followup

Ejecútalo justo después de cualquier reunión con decisiones. Tener lo acordado por escrito, con plazo, evita el "no recuerdo haber aceptado eso" dos semanas después.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">ejemplo</span>
    <button class="copy-btn" data-copy-target="prompt-followup">Copiar</button>
  </div>
  <pre id="prompt-followup"><code>/followup Reunión con el cliente donde quedó acordado que ellos envían el briefing antes del viernes y nosotros entregamos la propuesta 5 días hábiles después</code></pre>
</div>

## /brief

Para cuando alguien por encima de ti pide "mándame un resumen de esto" y tienes 20 páginas de contexto en la cabeza, no en el papel. Obliga a que todo quepa en una pantalla.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">ejemplo</span>
    <button class="copy-btn" data-copy-target="prompt-brief">Copiar</button>
  </div>
  <pre id="prompt-brief"><code>/brief Migración del sistema de atención al cliente a una nueva plataforma de chat</code></pre>
</div>

## /decision

Siempre que una elección te deje sin saber qué hacer, esto te obliga a comparar criterio por criterio en lugar de seguir dando vueltas a los mismos dos argumentos en la cabeza.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">ejemplo</span>
    <button class="copy-btn" data-copy-target="prompt-decision">Copiar</button>
  </div>
  <pre id="prompt-decision"><code>/decision Contratar a una persona más para el equipo ahora vs esperar al próximo trimestre</code></pre>
</div>

## /sheet

Útil antes de abrir Excel o Google Sheets desde cero. Llegas a la hoja sabiendo ya qué columnas crear y qué fórmulas vas a necesitar, en lugar de rehacer la estructura a la fuerza después.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">ejemplo</span>
    <button class="copy-btn" data-copy-target="prompt-sheet">Copiar</button>
  </div>
  <pre id="prompt-sheet"><code>/sheet Controlar el flujo de caja mensual de un pequeño negocio</code></pre>
</div>

## /pitch

Para vender una idea en dos tamaños distintos: la versión de ascensor, para cuando tienes 15 segundos en el pasillo, y la versión de correo, para cuando alguien pide más detalle por escrito.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">ejemplo</span>
    <button class="copy-btn" data-copy-target="prompt-pitch">Copiar</button>
  </div>
  <pre id="prompt-pitch"><code>/pitch Crear un canal interno solo para compartir aprendizajes de proyectos que salieron mal</code></pre>
</div>

## /objections

Úsalo antes de una negociación o una presentación importante, para llegar con la respuesta lista en lugar de quedarte en blanco cuando alguien plantee el punto obvio en el que no habías pensado.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">ejemplo</span>
    <button class="copy-btn" data-copy-target="prompt-objections">Copiar</button>
  </div>
  <pre id="prompt-objections"><code>/objections Proponerle al jefe que el equipo trabaje en remoto los viernes</code></pre>
</div>

## /okr

Convierte una intención vaga como "mejorar la atención" en algo que se puede medir al final del trimestre, sin necesidad de saberte de memoria el formato correcto de Objective y Key Result.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">ejemplo</span>
    <button class="copy-btn" data-copy-target="prompt-okr">Copiar</button>
  </div>
  <pre id="prompt-okr"><code>/okr Reducir el tiempo medio de respuesta del soporte al cliente</code></pre>
</div>

## /standup

Para quien participa en daily meetings y siempre se traba al ordenar lo que hizo ayer en frases cortas en lugar de un relato entero.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">ejemplo</span>
    <button class="copy-btn" data-copy-target="prompt-standup">Copiar</button>
  </div>
  <pre id="prompt-standup"><code>/standup Terminé el análisis de los datos de ventas de agosto, hoy armaré el gráfico comparativo, pero sigo esperando acceso al dashboard actualizado</code></pre>
</div>

## /delegate

Úsalo cuando una tarea es demasiado grande para dársela a alguien tal cual. Esto la divide en piezas lo bastante pequeñas como para que otra persona las tome sin tener que llamarte con cada duda.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">ejemplo</span>
    <button class="copy-btn" data-copy-target="prompt-delegate">Copiar</button>
  </div>
  <pre id="prompt-delegate"><code>/delegate Organizar el evento de fin de año de la empresa</code></pre>
</div>

## Hacer que se mantenga

El prompt de configuración solo dura en la conversación actual, a menos que lo guardes en algún lugar permanente. Si tienes ChatGPT Plus, Team o Enterprise, pégalo en **Instrucciones personalizadas** (Configuración → Personalización) o en las instrucciones de un **Proyecto**, para que toda conversación nueva ya conozca los comandos. Claude y Gemini tienen la misma función a través de sus propias instrucciones persistentes o de "Proyectos" y "Gems". El prompt en sí no necesita cambiar, solo el lugar donde lo guardas.

No necesitas usar los 12. La mayoría de las personas se queda con tres o cuatro que encajan en su propia rutina: normalmente /recap y /followup para quien vive en reuniones, /email y /decision para quien trata con clientes y proveedores. Pruébalos en tu próxima semana de trabajo y quédate con los que de verdad te ahorren tiempo.

## Sigue leyendo

- [12 comandos personalizados de ChatGPT para estudiar](/chatgpt-comandos-para-estudiar/)
- [12 comandos personalizados para programadores](/chatgpt-comandos-para-programadores/)
