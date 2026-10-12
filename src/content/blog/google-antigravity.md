---
title: "Google Antigravity explicado: la herramienta de código de Gemini centrada en agentes"
description: "Google Antigravity reemplazó a Gemini CLI en 2026. Qué hace realmente, cuánto cuesta y cómo se compara con Gemini Code Assist y Jules."
category: "Herramientas de IA"
date: 2026-09-07
updated: 2026-10-12
translation: "google-antigravity"
readingTime: "7 min"
image: "./images/google-antigravity.webp"
imageAlt: "Foto gran angular de un monitor ultrawide curvo sobre un escritorio oscuro de desarrollador por la noche, mostrando un editor de código con varios paneles de color de chat de agentes de IA lado a lado, lo que sugiere varios agentes trabajando en paralelo, con la silueta desenfocada de unas manos escribiendo en un teclado mecánico en primer plano"
---

Si buscaste "herramienta de código de Gemini" hace poco y terminaste en un nombre que no esperabas, no fue un error. Google Antigravity es ahora el centro de la línea de IA para desarrolladores de Google, y absorbió discretamente una herramienta que mucha gente todavía usaba: Gemini CLI.

Antigravity no es un chatbot pegado a un editor. Es un replanteamiento completo de para qué sirve un IDE, construido alrededor de la idea de que ya no deberías escribir cada línea tú solo. Esto es lo que es, cómo llegó hasta aquí y si vale tu tiempo.

## De Gemini CLI a Antigravity: una línea de tiempo rápida

Google anunció Antigravity el 18 de noviembre de 2025, junto con el lanzamiento de Gemini 3. Al principio convivía con Gemini CLI como un producto aparte y más ambicioso: un IDE centrado en agentes, en lugar de una herramienta de terminal.

Eso no duró mucho. En Google I/O, el 19 de mayo de 2026, Google anunció que incorporaba Gemini CLI a un nuevo Antigravity CLI, dando a los desarrolladores una ventana de migración de 30 días. Gemini CLI dejó de funcionar oficialmente para los usuarios de Google AI Pro, Ultra y del nivel gratuito el 18 de junio de 2026. Si tu organización usa Gemini Code Assist Standard o Enterprise, o Code Assist for GitHub a través de Google Cloud, no te afectó y mantuviste el acceso que ya tenías.

El mensaje era claro: Antigravity, y no un CLI independiente, es donde Google quiere que los desarrolladores trabajen ahora.

## Qué es realmente Antigravity

Antigravity es un IDE centrado en agentes, construido como un fork modificado de VS Code, que cambia tu trabajo de escribir código línea por línea a dirigir agentes autónomos que planifican, ejecutan y verifican su propio trabajo.

La pieza central es el **Agent Manager**, una vista para orquestar varios agentes que se ejecutan en paralelo en distintos espacios de trabajo. En lugar de vigilar una sola sugerencia al estilo Copilot cada vez, delegas una tarea, un agente la divide en pasos y tú revisas el progreso después, como harías con el pull request de un compañero de verdad.

La otra función destacada es el control de navegador integrado. Un agente de Antigravity puede abrir una instancia real de Chromium, navegar hasta tu servidor de desarrollo local, recorrer el flujo de usuario que acabas de construir y capturar pantallas como prueba de que la función realmente funciona, no solo de que el código compila.

A mediados de 2026, Antigravity había crecido hasta cuatro superficies:

- **Antigravity IDE** — el fork de VS Code, para edición práctica junto a los agentes
- **Antigravity 2.0** — una aplicación de escritorio independiente
- **Antigravity CLI** — una herramienta de terminal basada en Go (sustituta de Gemini CLI) que ejecuta agentes en segundo plano sin trabar tu sesión
- **Antigravity SDK** — un SDK en Python para construir tus propios flujos de agentes sobre la plataforma

Antigravity CLI mantuvo las funciones con las que contaban los desarrolladores en Gemini CLI, incluidas Agent Skills, Hooks, Subagentes y Extensiones, solo reempaquetadas como plugins de Antigravity.

## Qué modelos lo impulsan

Antigravity no está atado solo a los modelos propios de Google. Soporta Gemini 3 Pro, Gemini 3 Deep Think y Gemini 3 Flash, además de opciones de terceros como Claude Sonnet 4.6, Claude Opus 4.6 y GPT-OSS 120B. Eliges el modelo por agente, así que una refactorización rápida puede ejecutarse en Flash mientras un bug complicado con varios archivos va a Gemini 3 Pro o a Claude Opus.

En SWE-bench Verified, un benchmark estándar para tareas de código del mundo real, tomado de issues reales de GitHub, se reportó que Antigravity puntúa en torno al 76,2%, competitivo con las otras principales herramientas de código agéntico del mercado en 2026.

## Cuánto cuesta

- 🆓 **Individual / Gratis** ($0/mes): límites semanales básicos, autocompletados de pestaña ilimitados, solicitudes de comando ilimitadas y acceso a los modelos listados de Google, Anthropic y OpenAI.
- 💰 **Google AI Pro** ($20/mes): límites de uso más altos en las superficies de Antigravity, incluido en el resto de la suscripción Google AI Pro.
- 🚀 **Google AI Ultra** ($100/mes): introducido para Antigravity el 19 de mayo de 2026, con los límites más altos para desarrolladores que ejecutan agentes constantemente a lo largo del día.

## Antigravity vs. Gemini Code Assist vs. Jules

La línea de IA para desarrolladores de Google no es un solo producto. Si eres suscriptor de Google AI Pro o Ultra, en realidad tienes tres herramientas de código distintas disponibles, y están pensadas para hábitos distintos.

<div style="max-width:900px;margin:24px auto;overflow-x:auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table style="width:100%;border-collapse:collapse;background:#ffffff;box-shadow:0 1px 4px rgba(0,0,0,0.08);border-radius:8px;overflow:hidden;">
    <thead>
      <tr style="background:var(--ink-deep);color:#ffffff;">
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Característica</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">🧠 Antigravity</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">🧩 Gemini Code Assist</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">📨 Jules</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;font-weight:600;">💡 Qué es</td>
        <td style="padding:12px 16px;">IDE, CLI y SDK centrados en agentes</td>
        <td style="padding:12px 16px;">Extensión de IA para tu editor actual</td>
        <td style="padding:12px 16px;">Agente de código asíncrono en segundo plano</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;font-weight:600;">🖥️ Dónde se ejecuta</td>
        <td style="padding:12px 16px;">Editor independiente, app de escritorio o terminal</td>
        <td style="padding:12px 16px;">Plugin dentro de VS Code o JetBrains</td>
        <td style="padding:12px 16px;">Se ejecuta en segundo plano, abre un PR al terminar</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;font-weight:600;">🤖 Orquestación multiagente</td>
        <td style="padding:12px 16px;">✅ Agent Manager ejecuta varios en paralelo</td>
        <td style="padding:12px 16px;">❌ Un solo asistente en línea</td>
        <td style="padding:12px 16px;">Cada tarea es su propio agente asíncrono</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;font-weight:600;">🌐 Verificación en navegador</td>
        <td style="padding:12px 16px;">✅ Integrada</td>
        <td style="padding:12px 16px;">❌</td>
        <td style="padding:12px 16px;">❌</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;font-weight:600;">🏢 Mejor encaje</td>
        <td style="padding:12px 16px;">Desarrolladores listos para delegar funciones completas</td>
        <td style="padding:12px 16px;">Equipos que quieren mantener su IDE y flujo actuales</td>
        <td style="padding:12px 16px;">Tareas de "delegar y olvidar" junto con otro trabajo</td>
      </tr>
      <tr>
        <td style="padding:12px 16px;font-weight:600;">💳 Precio</td>
        <td style="padding:12px 16px;">Gratis, $20/mes Pro, $100/mes Ultra</td>
        <td style="padding:12px 16px;">Individual gratis; Standard/Enterprise para organizaciones</td>
        <td style="padding:12px 16px;">Incluido en Google AI Pro/Ultra</td>
      </tr>
    </tbody>
  </table>
</div>

## Preguntas frecuentes

### ¿Google Antigravity es gratis?

Sí, existe un plan Individual de $0 con límites semanales de uso, autocompletados de pestaña ilimitados y acceso a modelos de Google, Anthropic y OpenAI. Los niveles de pago ($20/mes Pro, $100/mes Ultra) aumentan los límites de uso para un uso más pesado y de todo el día con agentes.

### ¿Qué pasó con Gemini CLI?

Fue descontinuado. Google anunció el cambio a Antigravity CLI el 19 de mayo de 2026, y Gemini CLI dejó de funcionar para los usuarios Pro, Ultra y del nivel gratuito el 18 de junio de 2026. Antigravity CLI es un sucesor basado en Go que mantiene la mayoría de las funciones de Gemini CLI como plugins.

### ¿Antigravity solo funciona con modelos Gemini?

No. Además de Gemini 3 Pro, Deep Think y Flash, también soporta Claude Sonnet 4.6, Claude Opus 4.6 y GPT-OSS 120B, así que puedes elegir un modelo por agente según la tarea.

### ¿Antigravity es lo mismo que Gemini Code Assist?

No. Gemini Code Assist es una extensión de IA que se conecta a un IDE que ya usas. Antigravity es una plataforma separada e independiente centrada en agentes, con su propio editor, CLI y SDK.

## Conclusión

Antigravity es la apuesta de Google de que el futuro de las herramientas de código se parece menos al autocompletado y más a la gestión: describes el resultado, un agente planifica y ejecuta, y tú verificas el resultado en lugar de escribir cada línea tú solo. La jubilación de Gemini CLI en favor de Antigravity CLI no fue un simple cambio de nombre, fue Google consolidando toda su estrategia de IA para desarrolladores en torno a esa única plataforma.

Si todavía tienes la memoria muscular de Gemini CLI, el nivel gratuito es la forma más fácil de ver qué cambió. Si estás eligiendo entre las tres herramientas de código de Google, la respuesta honesta es: Antigravity para todo lo que quieras resuelto de punta a punta, Gemini Code Assist si no quieres salir de tu IDE actual y Jules para las tareas que te alegra encolar y olvidar.

## Sigue leyendo

- [Claude Code, Antigravity o Copilot: cuál elegir](/claude-code-vs-antigravity-vs-copilot/)
- [MCP en Claude Code, Cursor y Copilot: 7 cuidados de seguridad](/mcp-seguridad-agentes-de-codigo/)

---

*Fuentes: [Google Developers Blog — Transitioning Gemini CLI to Antigravity CLI](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/), [Google Cloud — Gemini Code Assist overview](https://docs.cloud.google.com/gemini/docs/codeassist/overview), [AI Wiki — Antigravity](https://aiwiki.ai/wiki/antigravity), [Thinkpeak — Google Antigravity Pricing & Access 2026](https://thinkpeak.ai/google-antigravity-pricing-access-2026/).*
