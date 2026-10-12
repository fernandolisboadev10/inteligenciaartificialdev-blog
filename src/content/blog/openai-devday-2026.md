---
title: "OpenAI DevDay 2026 para quienes programan: GPT-6.1 Sol, Codex Cloud y Dots frente a Claude Opus 5.5"
description: "Qué anunció OpenAI en el DevDay del 29 de septiembre y qué cambia para quien usa IA para programar: GPT-6.1 Sol a US$ 2 por millón de tokens, Codex Cloud, agentes Dots y la comparación de precio con Claude Opus 5.5."
category: "Herramientas de IA"
date: 2026-10-01
translation: "openai-devday-2026"
updated: 2026-10-12
readingTime: "7 min"
image: "./images/openai-devday-2026.webp"
imageAlt: "Foto editorial de un desarrollador visto de espaldas en un espacio de trabajo iluminado, con un portátil que muestra código desenfocado y un móvil en un soporte al lado con una lista de tareas, con compañeros desenfocados al fondo"
---

En una semana, los dos mayores laboratorios de IA movieron el precio del código. El 22 de septiembre, Anthropic lanzó **Claude Opus 5.5**. El 29 de septiembre, OpenAI respondió en el DevDay 2026 con **GPT-6.1 Sol**, **Codex Cloud** y los agentes **Dots**. Fueron más de 20 anuncios, pero solo algunos cambian la rutina de quien escribe código.

Este texto separa lo que importa para los desarrolladores y pone las cifras lado a lado. Si todavía no leíste el contexto, el [GPT-6 Astra explicado](/gpt-6-astra/) y el [Claude Fable 5.1 explicado](/claude-fable-5-1/) muestran de dónde partió cada lado.

## GPT-6.1 Sol: casi Astra por una quinta parte del precio

El anuncio más relevante para quien paga la factura de la API. OpenAI describe GPT-6.1 Sol como una inteligencia cercana a la de GPT-6 Astra, con alrededor de **una quinta parte del precio por token**.

Según la cobertura del evento, las cifras principales son:

- **Precio**: US$ 2 por millón de tokens de entrada y US$ 10 por millón de salida
- **Contexto**: cerca de 1 millón de tokens, con salida de hasta 128 mil tokens
- **Foco**: programación con agentes, uso de computador y flujos de trabajo largos
- **Calidad**: empata con Astra en DeepSWE 1.1, mejora OSWorld 2.0 en un 7% y reduce los errores factuales de 11,4% a 7,7%
- **Acceso**: API y planes ChatGPT Plus, Pro, Business, Enterprise y Edu

Para comparar: Astra cuesta US$ 10 por millón de entrada y US$ 50 por millón de salida, como detallamos en el artículo sobre [GPT-6 Astra](/gpt-6-astra/). El nuevo Sol entrega el mismo orden de magnitud de capacidad en código por el 20% de ese valor. Una advertencia: los benchmarks de arriba son los que divulgaron OpenAI y la prensa del evento. Pruébalo en tus propias tareas antes de migrar.

## Codex Cloud: tareas que corren con el portátil cerrado

Codex Cloud permite empezar y continuar tareas de código desde el escritorio, la web o el móvil. Cada tarea obtiene un **entorno aislado en la nube**, con los repositorios, herramientas y dependencias del proyecto, y sigue ejecutándose aunque tu computador entre en reposo.

Esto cambia el flujo en dos puntos:

1. **Delegar de verdad.** Describes la tarea, cierras el portátil y vuelves por el resultado. Es la idea del agente asíncrono, que ya aparece en los [estudios de caso de las herramientas de IA para código](/estudios-de-caso-herramientas-ia-codigo/).
2. **Seguridad por aislamiento.** Ejecutar en un entorno separado reduce el riesgo de que el agente toque tu máquina, un tema que cubrimos en [7 cuidados de seguridad con MCP](/mcp-seguridad-agentes-de-codigo/).

OpenAI también anunció **Codex Security Cloud**, que escanea repositorios de GitHub y propone correcciones, además de una vista `/agents` y controles por voz en Codex.

## Dots: agentes que no esperan el prompt

Los Dots son agentes "siempre encendidos". En lugar de responder solo cuando preguntas, se mantienen trabajando en tareas recurrentes, aprenden tus preferencias y se conectan a más de 4 mil aplicaciones, según la cobertura del evento. Cada Dot corre en su propio computador en la nube y se puede acceder a él desde ChatGPT, y OpenAI planea Slack, Teams y otros canales.

Para programadores, la utilidad inmediata es menor que la de Codex Cloud: piensa en dar seguimiento a pull requests, clasificar issues o resumir despliegues. Queda la pregunta de cuánta autonomía conviene darle a un agente que actúa sin que se lo pidas. Quien adopte un Dot debería aplicar las mismas reglas de permiso mínimo que valen para cualquier agente.

Los Dots empiezan a llegar a suscriptores de ChatGPT Pro y Business Premium, con beta para Enterprise, Edu y Salud. Hay además un nuevo plan **ChatGPT Pro 500, a US$ 500 al mes**, con acceso al nivel "Ultrafast", que OpenAI dice que genera tokens hasta 8 veces más rápido en Codex.

## La respuesta de Anthropic: Claude Opus 5.5

Una semana antes, Anthropic lanzó Opus 5.5 con la promesa de rendir al nivel de Fable 5.1 en la mayoría de las tareas, por menos de la mitad del precio. Según la documentación oficial, cuesta **US$ 4 por millón de entrada y US$ 20 por millón de salida**, con 1 millón de tokens de contexto y hasta 128 mil de salida. Fable 5.1 cuesta US$ 10 y US$ 50.

Dos detalles técnicos importantes para quien usa la API: el pensamiento adaptativo de Opus 5.5 no se puede desactivar, y el control de profundidad se hace con el parámetro de esfuerzo, que viene en `medium` por defecto.

## Comparación de precio

<div style="max-width:900px;margin:24px auto;overflow-x:auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table style="width:100%;border-collapse:collapse;background:#ffffff;box-shadow:0 1px 4px rgba(0,0,0,0.08);border-radius:8px;overflow:hidden;">
    <thead>
      <tr style="background:var(--ink-deep);color:#ffffff;">
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Modelo</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Entrada (por millón)</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Salida (por millón)</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;font-weight:600;">GPT-6 Astra</td>
        <td style="padding:12px 16px;">US$ 10</td>
        <td style="padding:12px 16px;">US$ 50</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;font-weight:600;">Claude Fable 5.1</td>
        <td style="padding:12px 16px;">US$ 10</td>
        <td style="padding:12px 16px;">US$ 50</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;font-weight:600;">Claude Opus 5.5</td>
        <td style="padding:12px 16px;">US$ 4</td>
        <td style="padding:12px 16px;">US$ 20</td>
      </tr>
      <tr style="background:#fafafa;">
        <td style="padding:12px 16px;font-weight:600;">GPT-6.1 Sol</td>
        <td style="padding:12px 16px;">US$ 2</td>
        <td style="padding:12px 16px;">US$ 10</td>
      </tr>
    </tbody>
  </table>
</div>

Sobre el papel, Sol sale a la mitad del precio de Opus 5.5. Pero el precio por token no es el costo por tarea: un modelo que "piensa" más gasta más tokens, y uno que se equivoca obliga a repetir la tarea. Fue exactamente lo que vimos en la [prueba del mismo prompt de landing page en cuatro modelos](/mismo-prompt-landing-page-ia/), en la que el más caro costó más de 30 veces el más barato. Y si el precio es tu criterio principal, vale la pena revisar también la [API de Grok](/grok-api-precio/).

## Qué cambia en la práctica

**Si pagas por API:** revisa el modelo predeterminado de tus scripts y agentes. Ejecutar la misma tarea en Sol y en Opus 5.5 durante una semana y comparar costo y tasa de aciertos cuesta poco y puede recortar la factura de forma relevante.

**Si usas suscripción:** lo que más cambia es el límite de uso y la velocidad. Antes de cambiar de plan, mira la [comparación de ChatGPT Plus, Claude Pro y Google AI Pro](/chatgpt-claude-google-cual-suscribirse/) y la [comparación entre Claude Code, Antigravity y Copilot](/claude-code-vs-antigravity-vs-copilot/).

**Si todavía no usas agentes:** empieza por lo básico. Antes de encender un agente autónomo, conviene tener los hábitos del [vibe coding sin desorden](/vibe-coding-6-habitos-sin-desorden/) y conocer las [funciones de Claude Code que casi nadie activa](/claude-code-funciones-ocultas/).

## Preguntas frecuentes

### ¿GPT-6.1 Sol reemplaza a GPT-6 Astra?

Para la mayoría de las tareas de código, se acerca por una fracción del precio, según OpenAI. Astra sigue siendo el tope en capacidad bruta, y hay un nivel "Ultrafast" de Astra en el plan Pro 500. Pruébalo en tu caso antes de decidir.

### ¿Claude Opus 5.5 todavía vale la pena después de Sol?

Depende de la tarea. Opus 5.5 es el modelo predeterminado de Claude Code y fue pensado para trabajo largo con agentes. La diferencia de precio con Sol es real, pero lo que decide es cuántos intentos necesita cada uno para entregar código que funcione.

### ¿Los Dots sirven para programar?

Sirven para tareas alrededor del código, como dar seguimiento a PR e issues. Para escribir y modificar código de verdad, Codex Cloud es la pieza relevante del anuncio.

### ¿Necesito el plan de US$ 500?

Casi con certeza no. Pro 500 apunta a velocidad máxima y uso intensivo. La mayoría de los desarrolladores lo resuelve con los planes de cerca de US$ 20 o con la API.

## Conclusión

El DevDay confirmó la dirección del mercado: modelos casi tan buenos como los de la cima, bastante más baratos, y agentes que trabajan solos en entornos en la nube. Para quien programa, la decisión práctica es simple. Mide el costo por tarea completada en lugar del precio por token, empieza delegando tareas pequeñas y bien especificadas, y mantén los permisos del agente en el mínimo necesario.

---

*Fuentes: [Documentación Claude Opus 5.5](https://platform.claude.com/docs/en/models/opus-5-5/overview), [AlternativeTo, OpenAI launches GPT-6.1 Sol and Dots](https://alternativeto.net/news/2026/10/openai-launches-gpt-6-1-sol-and-dots-its-new-always-on-ai-agents-that-work-independently/), [Tool Junction, OpenAI DevDay 2026 announcements](https://www.tooljunction.io/blog/openai-devday-2026-announcements), [Business Standard, OpenAI DevDay 2026](https://www.business-standard.com/technology/tech-news/openai-devday-2026-dots-gpt-6-1-sol-codex-developer-tools-126093000396_1.html), [The New Stack, Claude Opus 5.5 vs. Fable 5.1](https://thenewstack.io/claude-opus-5-5-vs-fable-5-1/). Cifras del evento según la cobertura de la prensa; la página oficial de OpenAI no pudo consultarse directamente.*
