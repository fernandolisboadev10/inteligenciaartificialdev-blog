---
title: "GPT-6 Astra explicado: el nuevo buque insignia de OpenAI, benchmarks y precio"
description: "GPT-6 Astra de OpenAI se lanzó en septiembre de 2026 con capacidades de uso de computador y una afirmación de AGI de Greg Brockman. Qué hace, cuánto cuesta y el compromiso de seguridad."
category: "Chatbots"
date: 2026-09-07
updated: 2026-10-12
translation: "gpt-6-astra"
readingTime: "8 min"
image: "./images/gpt-6-astra.webp"
imageAlt: "Foto editorial en primer plano de la pantalla de un portátil mostrando una ventana de navegador desenfocada en medio de una acción automatizada con un cursor visible, la mano de un desarrollador cerca del trackpad, un escritorio minimalista moderno, con luz de día suave por la ventana"
---

OpenAI anunció GPT-6 Astra el 3 de septiembre de 2026, llamándolo "el modelo más inteligente y alineado del mundo". Un día después empezó a desplegarse para los usuarios de pago de ChatGPT. Es el primer modelo de OpenAI que el presidente Greg Brockman planteó públicamente como un posible primer vistazo de la AGI, lo cual es o el titular de IA más importante del año o la frase más desgastada del sector, según a quién le preguntes.

Esto es lo que realmente se lanzó, separado del hype.

## Qué hace diferente a Astra: opera un computador

Todo lanzamiento anterior de GPT mejoró en responder preguntas y escribir código. El gran cambio de Astra es que fue construido para operar un computador como lo haría una persona.

OpenAI dice que Astra es el estado del arte en uso de computador, navegación, ingeniería de software, ciberseguridad, ciencia, trabajo profesional y tareas de estilo 3D/CAD. En la práctica, eso significa que puede inspeccionar lo que hay en pantalla, construir un sitio web funcional, generar un documento, ejecutar sus propias pruebas de QA, trabajar dentro de un entorno de código, analizar datos científicos y, en uno de los ejemplos de la propia OpenAI, modelar una casa en Blender y convertirla en una escena navegable de Unreal Engine 5 sin que una persona haga los pasos manuales intermedios.

Es un planteamiento significativamente distinto de "chatbot más inteligente". Astra se posiciona como algo a lo que le entregas un objetivo, no solo un prompt.

## La afirmación de AGI, en contexto

Greg Brockman dijo que Astra podría llegar a verse como la llegada de la inteligencia artificial general. La propia OpenAI describió el lanzamiento como un "salto generacional" en ciberseguridad, trabajo profesional, ingeniería de software y ciencia.

Es una afirmación que vale la pena tratar como marketing hasta que una evaluación independiente la alcance, no como un hecho consolidado. Lo que es medible ahora son los datos de benchmark y de seguridad que OpenAI publicó junto con el modelo, que ya son sustanciales por sí solos, sin necesidad del encuadre de AGI.

## El compromiso de ciberseguridad

Esta es la parte que recibió tanta cobertura como las afirmaciones de capacidad. Astra es el primer modelo de OpenAI en alcanzar el nivel **Crítico** de capacidad en ciberseguridad según el Preparedness Framework de la empresa.

En términos prácticos, OpenAI dice que, con las herramientas y el acceso adecuados, Astra puede encontrar fallos de seguridad previamente desconocidos y desarrollar nuevas formas de explotarlos en sistemas bien protegidos, sin que una persona guíe cada paso individual. Es un salto significativo de "ayuda a un investigador de seguridad a trabajar más rápido" a "puede operar semiindependientemente en tareas ofensivas de seguridad".

Por eso, la versión pública de Astra está deliberadamente restringida: rechaza ciertos prompts en áreas sensibles de ciberseguridad, y la versión completa con capacidad cibernética queda detrás de un programa de acceso de confianza para organizaciones verificadas, similar en espíritu a cómo Anthropic maneja Claude Mythos 5.1.

## Ventana de contexto y precio

Astra funciona con una ventana de contexto de 1.050.000 tokens, con una salida máxima de 128.000 tokens, espacio suficiente para un repositorio grande o un documento largo de una sola pasada.

El precio es escalonado:

- **Estándar**: $10 por millón de tokens de entrada, $50 por millón de tokens de salida
- **Entrada en caché**: $1 por millón de tokens
- **Procesamiento por lotes**: la mitad de la tarifa estándar
- **Modo rápido**: 2x la tarifa estándar
- **Por encima de 272.000 tokens de entrada**: el precio sube a $20 por millón de entrada y $75 por millón de salida

Esa tarifa estándar es cerca de 2,5 veces lo que cuesta GPT-5.6 Sol, lo que encaja con un modelo que OpenAI posiciona como el más capaz, no el más eficiente.

## Lanzamiento: quién recibe primero

El acceso es escalonado, no instantáneo para todos:

1. Un conjunto limitado de organizaciones de confianza recibió acceso el primer día (3 de septiembre)
2. Los suscriptores de ChatGPT Plus, Pro, Business y Enterprise vinieron después, a lo largo de los días siguientes
3. La API de OpenAI y la disponibilidad en AWS se lanzaron junto con los niveles de consumidor
4. Las capacidades sensibles en ciberseguridad quedan detrás de un programa de acceso de confianza separado, de forma indefinida

Si estás en un plan de pago de ChatGPT y todavía no ves Astra, es lo esperado. Es un lanzamiento por fases, no una función rota.

## GPT-6 Astra vs. GPT-5.6 Sol

<div style="max-width:900px;margin:24px auto;overflow-x:auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table style="width:100%;border-collapse:collapse;background:#ffffff;box-shadow:0 1px 4px rgba(0,0,0,0.08);border-radius:8px;overflow:hidden;">
    <thead>
      <tr style="background:var(--ink-deep);color:#ffffff;">
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Característica</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">🚀 GPT-6 Astra</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">☀️ GPT-5.6 Sol</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;font-weight:600;">📅 Lanzamiento</td>
        <td style="padding:12px 16px;">3 de septiembre de 2026</td>
        <td style="padding:12px 16px;">2026 (generación GPT-5.6 anterior)</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;font-weight:600;">📊 Ventana de contexto</td>
        <td style="padding:12px 16px;">1,05M tokens</td>
        <td style="padding:12px 16px;">1,05M tokens</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;font-weight:600;">🖥️ Uso de computador / navegación</td>
        <td style="padding:12px 16px;">✅ Fortaleza principal</td>
        <td style="padding:12px 16px;">Limitado</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;font-weight:600;">🔐 Nivel de ciberseguridad</td>
        <td style="padding:12px 16px;">Crítico (Preparedness Framework)</td>
        <td style="padding:12px 16px;">Nivel más bajo</td>
      </tr>
      <tr>
        <td style="padding:12px 16px;font-weight:600;">💰 Precio estándar</td>
        <td style="padding:12px 16px;">$10 entrada / $50 salida por millón de tokens</td>
        <td style="padding:12px 16px;">~2,5x más barato</td>
      </tr>
    </tbody>
  </table>
</div>

## Preguntas frecuentes

### ¿GPT-6 Astra ya está disponible?

Se está lanzando por fases. Las organizaciones de confianza lo recibieron primero el 3 de septiembre de 2026, con los planes ChatGPT Plus, Pro, Business y Enterprise, más la API y AWS, llegando en los días siguientes.

### ¿Cuánto cuesta GPT-6 Astra?

$10 por millón de tokens de entrada y $50 por millón de tokens de salida en la tarifa estándar, cerca de 2,5x el precio de GPT-5.6 Sol. Las solicitudes por encima de 272.000 tokens de entrada se cobran en un nivel más alto de $20/$75, y el modo rápido cuesta el doble de la tarifa estándar.

### ¿GPT-6 Astra es realmente AGI?

Ningún consenso independiente lo afirma. Greg Brockman, de OpenAI, planteó la posibilidad públicamente, pero es una afirmación de la empresa, no un resultado de benchmark verificado. Trátalo como un encuadre de marketing audaz en torno a un modelo genuinamente capaz, no como una clasificación consolidada.

### ¿Por qué la capacidad de ciberseguridad de GPT-6 Astra es una preocupación?

Es el primer modelo de OpenAI en alcanzar el nivel Crítico según el Preparedness Framework de la empresa, lo que significa que puede encontrar y explotar fallos de seguridad desconocidos con mínima orientación humana. Por eso el lanzamiento público es restringido y la capacidad completa queda detrás de un programa de acceso de confianza.

## Conclusión

GPT-6 Astra trata menos de mejores respuestas y más de delegar tareas enteras: operar software, verificar su propio trabajo en un navegador y manejar flujos de trabajo profesionales y científicos de punta a punta. Ese salto de capacidad es real, y el compromiso de seguridad que vino con él también lo es, por eso es el primer lanzamiento de modelo de OpenAI que suena tanto a historia de seguridad como a lanzamiento de producto.

Si merece la etiqueta de AGI es una cuestión aparte de si es útil. Para quien hace trabajo serio agéntico o de uso de computador, vale la pena probarlo en tus propias tareas antes de decidir, sin importar cómo lo enmarque el marketing.

## Sigue leyendo

- [OpenAI DevDay 2026 para quienes programan: GPT-6.1 Sol, Codex Cloud y Dots](/openai-devday-2026/)
- [Claude Fable 5.1 explicado: benchmarks y precios](/claude-fable-5-1/)
- [API de Grok vs GPT-6 Astra y Claude Opus 5: las cuentas](/grok-api-precio/)
- [Modelos Sol, Terra y Luna de ChatGPT: con quién hablas](/chatgpt-modelos-sol-terra-luna/)

---

*Fuentes: [OpenAI — GPT-6 Astra: A new generation of intelligence](https://openai.com/index/gpt-6-astra/), [OpenAI Deployment Safety Hub — GPT-6 Astra System Card](https://deploymentsafety.openai.com/gpt-6-astra), [CNBC — OpenAI announces rollout of GPT-6 Astra model](https://www.cnbc.com/2026/09/03/open-ai-astra-gpt-6-cyber.html), [Axios — OpenAI releases new model GPT-6 Astra, says it may represent AGI](https://www.axios.com/2026/09/03/openai-astra-gpt-6-agi-brockman), [Yotta Labs — GPT-6 Astra: Release Date, Pricing, Benchmarks, and Rollout](https://www.yottalabs.ai/post/gpt-6-release-date-rumors-what-is-known-2026).*
