---
title: "DeepSeek V4.1 Flash-1017: qué cambió en la actualización y en la API de búsqueda"
description: "DeepSeek lanzó el 17 de octubre la actualización V4.1 Flash-1017, abrió su API de búsqueda y mantuvo precios bajos. Qué hay de nuevo, cuánto cuesta y qué no se puede confirmar aún."
category: "Chatbots"
date: 2026-10-22T15:55:00-03:00
translation: "deepseek-v4-1-atualizacao"
readingTime: "6 min"
image: "./images/deepseek-v4-1-atualizacao.webp"
imageAlt: "Portátil abierto sobre una mesa de madera con la pantalla mostrando el mensaje de bienvenida del chatbot DeepSeek, junto a una taza de café y un cuaderno de notas, con el atardecer sobre la ciudad al fondo"
---

DeepSeek no ha dejado de moverse desde que se volvió tema en todo el mundo. El sábado 17 de octubre de 2026, la empresa china publicó otra actualización de su chatbot, y llegó acompañada de una novedad que interesa a quien programa: el buscador propio de DeepSeek ya está abierto para cualquier desarrollador.

Reuní lo que quedó confirmado en el changelog oficial de la API y en reportajes como el de Investing.com (republicado por Yahoo Finance), y separé lo que todavía depende de verificación independiente. Si quieres ver a DeepSeek en acción en una prueba práctica, el [duelo del temporizador Pomodoro contra ChatGPT](/deepseek-vs-chatgpt-temporizador-pomodoro/) sigue vigente. Aquí el foco es otro: qué cambió en los últimos meses.

## La actualización del 17 de octubre: V4.1 Flash-1017

Según el changelog de DeepSeek, el nombre `deepseek-flash` ahora apunta a una versión mejorada de V4.1 Flash, llamada V4.1-Flash-1017. El sitio y la app también pasaron a usar esa versión. El precio y la forma de llamar a la API siguen igual.

La empresa describe la mejora como mejor desempeño en pruebas, tareas completadas más rápido y respuestas más cortas. Las respuestas más cortas importan porque la API cobra por el texto generado: si el modelo escribe menos para llegar al mismo resultado, la factura baja. DeepSeek lo llamó una mejora "Pareto", es decir, ganar en desempeño y en costo sin empeorar nada.

Las cifras publicadas, según Investing.com, son estas:

- **DeepSWE v1.1** (prueba de programación): 77,0, frente a 74,2 de la versión anterior.
- **Automation-Bench V1.0.6** (tareas de automatización): 60,5, frente a 54,8.

Una advertencia importante: son resultados informados por la propia DeepSeek. No encontré pruebas independientes de esta versión, así que toma las puntuaciones como una señal, no como un veredicto. Un benchmark de laboratorio tampoco garantiza que el modelo rinda igual en tu trabajo diario.

## Búsqueda y lectura de páginas abiertas al público

La segunda novedad es la API de Search y Fetch. Da a los desarrolladores acceso al buscador propio de DeepSeek y a la lectura del contenido de páginas web, lo que permite armar asistentes que consultan información actualizada. Investing.com informa que cada endpoint cuesta US$ 0,75 por mil llamadas. Ese precio no aparece en el changelog oficial, así que conviene revisar la página de DeepSeek antes de planificar nada; además, algunos reportes mencionan un periodo gratuito inicial que no pude confirmar.

Para el usuario común, esto es una señal de rumbo: DeepSeek quiere ser más que un chatbot de conversación y competir como pieza de agentes que investigan y ejecutan tareas.

## Cómo llegamos hasta aquí: agosto y septiembre

La actualización del 17 de octubre es el cuarto cambio relevante en dos meses. Según el changelog oficial:

- **13 de agosto:** V4-Pro pasó a disponibilidad general en la app, el sitio y la API. Los modos de razonamiento de Pro y Flash ganaron tres niveles de esfuerzo (bajo, alto y máximo) y la API incorporó soporte nativo para el formato Responses. También empezó el cobro diferenciado por horario: fuera de las horas pico, los precios valen la mitad.
- **21 de agosto:** salió una versión experimental con visión, V4-Flash-Vision-Exp.
- **10 de septiembre:** llegó V4.1 Flash, con comprensión nativa de imágenes. Los modelos V4 Flash anteriores se retiraron y se redirigieron temporalmente al nuevo, y los precios de la API bajaron.

En resumen: la app que abres hoy ya ve imágenes y tiene razonamiento ajustable, cosas que no existían a comienzos del verano boreal.

## Cuánto cuesta usarlo por API

Para quien desarrolla, la página oficial de precios muestra los valores por millón de tokens (una medida de texto) en dólares:

| Modelo | Entrada (fuera de pico) | Salida (fuera de pico) | Entrada (pico) | Salida (pico) |
|---|---|---|---|---|
| deepseek-flash | US$ 0,15 | US$ 0,60 | US$ 0,30 | US$ 1,20 |
| deepseek-v4-pro | US$ 0,66 | US$ 1,98 | US$ 1,32 | US$ 3,96 |

El horario pico va de 01:00 a 04:00 y de 06:00 a 10:00 (UTC), de lunes a viernes, salvo feriados chinos. En la Ciudad de México (UTC−6), por ejemplo, eso equivale a las noches de domingo a jueves (19:00 a 22:00) y a las madrugadas de lunes a viernes (00:00 a 04:00); en el resto de la región, ajusta según tu huso horario. Los dos modelos aceptan un contexto de 1 millón de tokens. Si quieres comparar con los planes de ChatGPT, nuestro análisis de los [modelos Sol, Terra y Luna de ChatGPT](/chatgpt-modelos-sol-terra-luna/) explica a qué modelo te da acceso cada suscripción, mientras que la app de DeepSeek es gratuita.

## Chips, Huawei y la pregunta sobre privacidad

Fuera de los lanzamientos, la noticia de hardware más comentada del periodo vino de Bloomberg, recogida por medios como TechTimes: DeepSeek habría encargado 160 mil aceleradores Ascend 950DT de Huawei para un centro de datos en Mongolia Interior, orientados a la inferencia, es decir, a responder a los usuarios, y no al entrenamiento. Es información basada en fuentes anónimas, la entrega completa es incierta y los rendimientos de los chips provienen de la propia Huawei. Por su parte, Tom's Hardware informó que un equipo liderado por Huawei afirma haber hecho el posentrenamiento de un modelo de DeepSeek de 1,6 billones de parámetros con unos mil chips Ascend 910C. Es una afirmación, todavía sin verificación independiente.

Sobre restricciones: no encontré ninguna prohibición nueva en los últimos meses. Lo que existe son medidas anteriores, como las de Nueva York, Texas y Virginia, que vetaron la app en dispositivos del gobierno estatal, y la de Australia, de 2025. Como la empresa es china, la pregunta de siempre sigue en pie: lo que escribes en un chatbot alojado en el extranjero puede quedar sujeto a leyes de otro país. No introduzcas datos personales, contraseñas ni documentos confidenciales de tu empresa en la app, algo que vale para cualquier chatbot.

## Qué cambia para quien lo usa

- **Si usas la app gratuita:** el chat ya corre la versión nueva. Respuestas más compactas y visión de imágenes es lo que deberías notar. Pruébalo con tus propias tareas.
- **Si estás conociendo DeepSeek ahora:** conviene empezar por lo básico (si es gratuito, qué cambió en V4 y qué considerar antes de usarlo). Este texto cubre solo lo que cambió en la actualización del 17 de octubre.
- **Si programas:** el costo bajo y el contexto largo vuelven atractivo a Flash para probarlo, sobre todo en tareas hechas de noche o en fines de semana, fuera del pico. La búsqueda propia abre espacio para asistentes que investigan.
- **Si trabajas con datos sensibles:** ten cuidado. El hecho de que los pesos del modelo sean abiertos, según Crypto Briefing, permite ejecutarlo por cuenta propia, pero eso exige infraestructura técnica y es otra conversación.
- **Si comparas chatbots:** no hay un ganador único. En nuestra [prueba de landing pages con cuatro modelos](/mismo-prompt-landing-page-ia/), DeepSeek V4.1 Flash compitió con Claude Sonnet 5.5, GPT-6 Luna y Gemini 3.8 Flash.

## Preguntas frecuentes

### ¿DeepSeek V4.1 Flash-1017 es gratuito?

La app y el sitio de DeepSeek tienen uso gratuito, y la versión nueva ya está en ellos. La API es de pago, por consumo.

### ¿Existe un "V4.1 Pro"?

Circulan rumores sobre un modelo así, pero el changelog oficial no registra nada. Considéralo no confirmado.

### ¿DeepSeek es mejor que ChatGPT o Claude?

Las puntuaciones publicadas son de la propia empresa y no hay prueba independiente de esta versión. Depende de la tarea. Lo mejor es probar el mismo pedido en ambos.

### ¿Es seguro usar DeepSeek?

Para preguntas generales, el riesgo es parecido al de otros chatbots en línea. Para datos personales o de tu empresa, evítalo, y confirma si tu empleador o tu entidad pública lo permite.

## Conclusión

La actualización del 17 de octubre es incremental: un modelo más compacto, precio sin cambios y una API de búsqueda nueva. Lo que llama la atención es el ritmo, con cambios relevantes en agosto, septiembre y octubre. Vale la pena seguirlo, pero con la vara correcta: confirma las promesas con tu propio uso antes de cambiar de herramienta.

---

*Fuentes: [changelog de la API de DeepSeek](https://api-docs.deepseek.com/updates/), [precios de la API de DeepSeek](https://api-docs.deepseek.com/quick_start/pricing), [Investing.com vía Yahoo Finance](https://uk.finance.yahoo.com/news/deepseek-releases-ai-model-opens-150410432.html), [Crypto Briefing](https://cryptobriefing.com/deepseek-v4-1-flash-update-openai-anthropic/), [TechTimes](https://www.techtimes.com/articles/326755/20260905/deepseeks-160000-chip-huawei-order-puts-prc-law-over-every-api-query.htm), [Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/huawei-led-team-claims-it-post-trained-deepseeks-1-6-trillion-parameter-models-on-ascend-910c-chips), [National Law Review](https://natlawreview.com/article/three-states-ban-deepseek-use-state-devices-and-networks).*
