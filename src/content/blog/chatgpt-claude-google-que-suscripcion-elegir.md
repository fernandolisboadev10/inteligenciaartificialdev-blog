---
title: "Qué suscripción de IA elegir para programar en 2026: ChatGPT, Claude o Google"
description: "Codex en ChatGPT, Claude Code en Claude, Antigravity y Jules en Google: qué entrega cada plan para programar, cómo funcionan los límites de uso y cuál contratar según tu perfil."
category: "Herramientas de IA"
date: 2026-10-22T15:50:00-03:00
translation: "chatgpt-claude-google-qual-assinar"
readingTime: "7 min"
image: "./images/chatgpt-claude-google-qual-assinar.webp"
imageAlt: "Desarrolladora pensativa, con el mentón apoyado en la mano y un bolígrafo en la otra, frente a un monitor ultrawide con código y un panel de configuración, junto a un cuaderno de notas, en una oficina de startup con un colega al fondo dibujando en una pizarra y la vista de una ciudad por la ventana"
draft: false
---

Quien programa con IA necesita un agente que lea el proyecto, edite varios archivos, ejecute pruebas y aguante horas de trabajo sin trabarse. El precio de lista de los tres grandes es parecido, cerca de US$ 20 al mes, pero lo que decide la elección es el límite de uso y el entorno donde corre el agente.

Esta guía mira las suscripciones de ChatGPT, Claude y Google solo desde el ángulo de quien escribe código, desde principiante hasta profesional. La comparación por herramienta (Lovable, Cursor, Replit y compañía) queda para otro artículo. Aquí la pregunta es otra: qué plan pagar.

Los precios están en dólares, antes de impuestos, y se verificaron en las páginas oficiales el 22 de octubre de 2026. Según tu país, el cobro puede sumar IVA u otros impuestos y comisiones de tu tarjeta por pagar en moneda extranjera. Los planes y límites cambian rápido (este mes Cursor reorganizó los suyos), así que revisa los enlaces del final antes de suscribirte. No usamos los planes durante meses: lo que sigue es lectura de las páginas y de la documentación, no una prueba de largo plazo.

## Por qué programar cambia la cuenta

En un chat común, casi cualquier plan alcanza. En un agente de código, cada tarea envía el proyecto completo de vuelta al modelo, y una sesión larga gasta cuota como pocas cosas. Por eso las tres empresas miden el uso por ventanas de cinco horas, con un límite semanal por encima, y ninguna promete un número fijo de tareas.

Dos consecuencias prácticas:

- El plan de US$ 20 sirve para un uso moderado. Quien entrega código todos los días tiende a chocar con el límite, como detallamos en la [reseña de Claude Code](/claude-code-review-vale-el-precio/).
- Cuando se acaba la cuota, tienes tres salidas: esperar el reinicio, subir de plan o pagar por uso (créditos o API, cobrados por token).

## Los planes lado a lado, solo para código

| Plan | Precio/mes | Qué entrega para programar | Límite |
| --- | --- | --- | --- |
| ChatGPT Free | US$ 0 | Codex para tareas rápidas | Sin número publicado |
| ChatGPT Go | US$ 8 | Codex para tareas ligeras | Sin número publicado |
| ChatGPT Plus | US$ 20 | Codex con los modelos GPT-6.1 Sol y GPT-6 Luna | Por ventana de 5 h, más límite semanal; créditos extra |
| ChatGPT Pro | US$ 100, 200 o 500 | Más cuota; hoy sin límite de 5 h | Puede aplicar un límite semanal |
| Claude Free | US$ 0 | Sin Claude Code | Solo chat |
| Claude Pro | US$ 20 (US$ 17 en el plan anual) | Claude Code con Opus, Sonnet y Haiku | Ventana de 5 h y límite semanal, compartidos con el chat |
| Claude Max | US$ 100 (5x) o US$ 200 (20x) | Claude Code con cuota 5 o 20 veces la del Pro; Fable listado | Ventana de 5 h, semanal y un límite semanal aparte para Fable |
| Google AI Plus | US$ 4,99 | Acceso limitado a Jules y Antigravity | Limitado |
| Google AI Pro | US$ 19,99 | Antigravity (IDE y CLI), Jules, AI Studio y US$ 10 en créditos de Google Cloud | Ventana de 5 h hasta el límite semanal |
| Google AI Ultra | US$ 99,99 (5x) o US$ 199,99 (20x) | Mayor cuota; modelos de terceros en Antigravity | La mayor cuota |

## ChatGPT: Codex viene dentro de la suscripción

No existe una suscripción aparte de Codex. Está en los planes Free, Go, Plus, Pro y Business, y funciona en la app, en el editor y en la terminal. Según la [página de precios de Codex](https://learn.chatgpt.com/docs/pricing), Free y Go se describen para tareas rápidas y ligeras, sin límites publicados, y usan GPT-6 Luna en la app de escritorio.

Plus es donde empieza el uso serio. La página muestra rangos de mensajes locales por ventana de cinco horas que varían mucho según la tarea: de 15 a 160 en GPT-6.1 Sol y de 350 a 3.000 en GPT-6 Luna. Cada rango es amplio porque el gasto depende del tamaño del pedido. Si pasas el límite, puedes comprar créditos. Pro, desde US$ 100, hoy no tiene la ventana de cinco horas, aunque pueden aplicar límites semanales. Si quieres entender cómo se comportan los modelos Sol y Luna, lee [Los modelos Sol, Terra y Luna de ChatGPT](/chatgpt-modelos-sol-terra-luna/).

**Tiene sentido para:** quien ya usa ChatGPT a diario y quiere un agente de código con el mismo pago.

## Claude: Claude Code es su punto fuerte, y la cuota es el cuello de botella

Claude Code está incluido en todos los planes de pago y no existe en Free. Según la [página de precios de Anthropic](https://claude.com/pricing), Pro cuesta US$ 20 al mes (US$ 17 en el plan anual pagado de una vez), y Max parte de US$ 100, con 5 o 20 veces la cuota de Pro.

El detalle que sorprende a muchos: el chat, la app y Claude Code comparten el mismo fondo de cuota. Una conversación larga en el navegador consume la cuota que querías para la terminal. Además, Anthropic no publica cuántos mensajes caben en cada ventana. Cuando se acaba la cuota, las salidas oficiales son esperar, activar créditos de uso (cobrados a precio de API) o subir a Max.

Un cuidado de costos: si la variable `ANTHROPIC_API_KEY` está definida en tu computadora, Claude Code usa la clave y cobra por API en lugar de usar la suscripción.

**Tiene sentido para:** quien trabaja en proyectos con varios archivos, usa terminal o VS Code y acepta administrar la cuota.

## Google: Antigravity y Jules, y el fin del Gemini CLI gratis

Google organiza el código en tres frentes dentro de los planes AI: Antigravity (entorno de agentes, con versión de línea de comandos), Jules (agente que trabaja en segundo plano) y AI Studio. En Pro, la documentación de [Google Antigravity](/google-antigravity/) describe una cuota "generosa" que se renueva cada cinco horas hasta llegar al límite semanal. Sin Pro ni Ultra, la cuota es menor y se renueva cada semana. Los modelos de terceros quedan solo en Ultra.

Una advertencia para quien sigue tutoriales antiguos: desde el 18 de junio de 2026, Gemini CLI y las extensiones de Code Assist dejaron de atender cuentas individuales, incluidas Google AI Pro y Ultra. Google envía a esos usuarios a Antigravity CLI. Si una guía te manda a entrar a Gemini CLI con la cuenta Google gratuita, está desactualizada.

No encontramos límites numéricos oficiales de Antigravity: Google dice que la cuota depende de la capacidad disponible.

**Tiene sentido para:** quien quiere un plan barato con almacenamiento y extras de Google, o prefiere empezar con la cuota gratuita de Antigravity y AI Studio.

## Cuál contratar, según tu perfil

**Principiante, aprendiendo a programar.** Todavía no pagues. ChatGPT Free incluye Codex, Antigravity tiene cuota gratuita semanal y AI Studio es gratuito por defecto. Usa los tres hasta chocar con el límite y solo entonces suscríbete a uno. Antes de eso, lo que más ayuda es escribir buenos pedidos, como muestra la [guía de prompt engineering para devs](/prompt-engineering-para-devs/).

**Quien hace vibe coding y proyectos propios.** Un plan de unos US$ 20 resuelve. Elige según el entorno que más cómodo te resulte: terminal y VS Code (Claude Code), app y CLI de OpenAI (Codex) o el ecosistema Google (Antigravity). Más importante que la marca es el hábito de trabajar en pasos pequeños, como en los [6 hábitos de vibe coding sin desorden](/vibe-coding-6-habitos-sin-desorden/). Y cuando la app esté lista, mira [dónde alojarla](/vibe-coding-donde-alojar-tu-app/).

**Freelancer.** Empieza con un plan de US$ 20 y observa cuántas veces por semana se acaba la cuota en medio de una entrega. Si eso pasa y cobras por hora o por proyecto, el salto a US$ 100 (Claude Max 5x, Google Ultra 5x o ChatGPT Pro) puede pagarse rápido. Si pasa una vez al mes, comprar créditos sueltos sale más barato que subir de plan.

**Dev profesional o en una empresa.** El código de una empresa normalmente no puede pasar por una cuenta personal: revisa la política de tu equipo. Los planes de equipo existen para eso, como Claude Team (US$ 25 por asiento en el plan mensual y US$ 20 en el anual en el estándar) y ChatGPT Business (US$ 20 por usuario en el anual, US$ 25 en el mensual, mínimo de dos usuarios). Antes de dar a los agentes acceso al repositorio, lee los [7 cuidados de seguridad con servidores MCP](/mcp-seguridad-agentes-de-codigo/).

**Quien usa agentes todo el día.** Es el perfil donde la suscripción con ventana y el pago por token se encuentran. Pagar por API no tiene ventana de cinco horas, pero la cuenta varía con el uso y puede superar los US$ 100 al mes con facilidad (la documentación de costos de Anthropic cita promedios de US$ 150 a US$ 250 por desarrollador en implementaciones empresariales, como mostramos en la reseña). Para un uso intenso y predecible, los planes de US$ 100 o más suelen dar más control.

## Una regla simple para no pagar de más

1. Suscríbete a un solo plan de unos US$ 20 durante un mes.
2. Anota cuántas veces se acabó la cuota antes de terminar el trabajo.
3. Si nunca se acabó, vuelve a Go o al plan gratuito.
4. Si se acabó cada semana, sube de plan o activa créditos.

En cualquier plan, limpiar el contexto entre tareas sin relación y hacer pedidos específicos gasta bastante menos cuota.

## Preguntas frecuentes

### ¿Cuál es la mejor suscripción de IA para programar?

No existe una mejor para todos. Los tres planes de unos US$ 20 entregan un agente de código, y la elección depende del entorno que prefieras y de cuánto rinde la cuota en tu trabajo.

### ¿Claude Code está incluido en Claude Pro?

Sí. Viene en todos los planes de pago de Anthropic y comparte la cuota con el chat. El plan Free no lo incluye.

### ¿Codex se paga aparte?

No. Viene dentro de los planes de ChatGPT, de Free a Pro. Quien usa una clave de API paga el precio de API y no consume el límite del plan.

### ¿Gemini CLI todavía funciona gratis?

Para cuentas individuales, no: desde el 18 de junio de 2026, Google redirige a esos usuarios a Antigravity CLI.

### ¿Vale la pena pagar US$ 100 al mes?

Solo si la cuota de US$ 20 se acaba con frecuencia y eso cuesta tiempo o dinero de verdad. Para un uso moderado, no vale la pena.

### ¿Estos precios valen en moneda local?

No. Están en dólares. Lo que verás en tu tarjeta depende del tipo de cambio, de los impuestos de tu país y de las comisiones de tu banco por compras en el exterior, y algunos países tienen precios regionales distintos, así que confirma el monto final en la página de cada plan antes de pagar.

## Conclusión

Para programar, la pregunta útil no es qué IA es más lista, sino qué cuota aguanta tu ritmo. Empieza gratis, suscríbete a un plan de unos US$ 20, mide cuándo se acaba y solo sube si el límite entorpece el trabajo. El resto es preferencia de entorno. Para decidir también la herramienta y no solo el plan, vuelve al [comparativo entre Claude Code, Antigravity y Copilot](/claude-code-vs-antigravity-vs-copilot/).

## Sigue leyendo

- [Reseña de Claude Code en 2026: ¿vale el precio?](/claude-code-review-vale-el-precio/)
- [Claude Code, Antigravity o Copilot: cuál elegir](/claude-code-vs-antigravity-vs-copilot/)

---

*Fuentes (consultadas el 22 de octubre de 2026): [Anthropic, precios](https://claude.com/pricing) | [Anthropic, plan Max](https://support.claude.com/en/articles/11049741-what-is-the-max-plan) | [Anthropic, Claude Code en los planes Pro y Max](https://support.claude.com/en/articles/11145838-use-claude-code-with-your-pro-or-max-plan) | [OpenAI, precios de Codex](https://learn.chatgpt.com/docs/pricing) | [Google, planes Google AI](https://gemini.google/subscriptions/) | [Google, planes de Antigravity](https://antigravity.google/docs/plans/) | [Google, discontinuación de Gemini Code Assist para cuentas individuales](https://developers.google.com/gemini-code-assist/docs/deprecations/code-assist-individuals?hl=en) | [Engadget, precio de Google AI Ultra](https://www.engadget.com/2176060/the-google-ai-ultra-plan-now-starts-at-100-a-month/). Precios en dólares, sujetos a cambios.*
