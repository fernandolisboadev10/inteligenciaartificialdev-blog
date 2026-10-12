---
title: "Claude Code, Antigravity o Copilot: cuál elegir según tu tipo de trabajo (y cuánto cuesta cada uno)"
description: "Los tres cobran de formas distintas: cuota por ventana de cinco horas, cuota semanal y créditos por token. Precio, límites y qué herramienta de IA para código tiene más sentido para cada perfil de dev."
category: "Herramientas de IA"
date: 2026-09-28
translation: "claude-code-vs-antigravity-vs-copilot"
updated: 2026-10-12
readingTime: "7 min"
image: "./images/claude-code-vs-antigravity-vs-copilot.webp"
imageAlt: "Foto editorial de un escritorio de desarrollador con tres portátiles lado a lado, cada uno mostrando un editor de código desenfocado con un tema de colores distinto, junto a una taza y un cuaderno, con luz cálida de fin de tarde"
draft: false
---

Elegir una herramienta de IA para código se volvió más confuso de lo que parece, y el motivo no es la calidad del modelo. Es la facturación. Claude Code entrega una cuota que se renueva cada cinco horas. Antigravity, de Google, viene integrado en los planes Google AI. GitHub Copilot cambió, el 1 de junio de 2026, las "solicitudes premium" por créditos calculados por token. Tres herramientas, tres lógicas de precio, y un precio de lista que no dice cuánto vas a poder usar de verdad.

Reunimos los planes oficiales de las tres, separamos lo confirmado de lo que solo aparece en sitios de terceros, y armamos una guía de decisión por perfil. Si quieres saber si las promesas de cada una se sostienen, vale la pena leer también el [análisis de los estudios de caso de las cuatro herramientas](/estudios-de-caso-herramientas-ia-codigo).

## Claude Code: incluido en el plan de pago, con cuota por ventana

Claude Code no tiene un plan propio. Viene incluido en los planes de pago de Anthropic, y el plan Free no lo incluye. Según la [página de precios de Anthropic](https://claude.com/pricing), Pro cuesta US$ 20 al mes (o US$ 17 en el plan anual), y Max cuesta desde US$ 100 al mes, con opciones de 5x o 20x más uso que Pro.

Lo más importante es que Claude Code y la app de Claude comparten la misma cuota. Todos los planes usan una ventana móvil de cinco horas, y los planes de pago tienen un límite semanal por encima. Anthropic no publica una cantidad exacta de tokens o mensajes: su propio sitio dice que lo que puedes hacer depende del tamaño y la complejidad de las conversaciones, del modelo elegido y de las funciones usadas.

**En la práctica:** el costo es predecible (una mensualidad fija), pero el límite es opaco. Quien usa Claude Code todo el día en tareas largas y autónomas suele chocar con la cuota de Pro y termina mirando Max.

## Google Antigravity: viene en los planes Google AI, con capa gratuita

Antigravity funciona distinto: no es una suscripción aparte, es una capa de los planes Google AI. Según la [documentación oficial](https://antigravity.google/docs/plans/), existen tres niveles:

- **Base (gratuito):** cuota que se renueva cada semana, solo con modelos Gemini.
- **Google AI Pro:** cuota mayor, renovada cada cinco horas hasta alcanzar el límite semanal, también solo con modelos Gemini.
- **Google AI Ultra:** la mayor cuota, con acceso a modelos de terceros además de Gemini.

Todos los niveles incluyen autocompletado ilimitado. Quien agota la cuota en Pro o Ultra puede comprar créditos de IA para seguir usándolo.

La documentación oficial no trae valores en dólares. Sitios de terceros, como [CloudZero](https://www.cloudzero.com/blog/google-antigravity-pricing/), listan cerca de US$ 19,99 para Pro, US$ 99,99 para Ultra 5x y US$ 199,99 para Ultra 20x, pero confirma el precio actual en la página de Google antes de suscribirte.

**En la práctica:** es la única de las tres con una capa gratuita de verdad para el agente, lo que facilita probarlo. El detalle es que los modelos de terceros, como los de Anthropic, solo aparecen en el nivel más alto. Y, como vimos en el análisis de estudios de caso, todavía tiene la base de evidencia pública más superficial del grupo.

## GitHub Copilot: créditos por token y autocompletado gratis

Copilot es el que más cambió. Según el [anuncio de GitHub](https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/), desde el 1 de junio de 2026 todos los planes usan créditos de IA en lugar de solicitudes premium. El consumo se calcula por tokens (entrada, salida y caché), con base en los precios de API de cada modelo.

Los precios de lista no cambiaron:

- **Pro:** US$ 10 al mes, con US$ 10 en créditos mensuales.
- **Pro+:** US$ 39 al mes, con US$ 39 en créditos mensuales.
- **Business:** US$ 19 por usuario, con US$ 19 en créditos.
- **Enterprise:** US$ 39 por usuario, con US$ 39 en créditos.

El autocompletado y las sugerencias de siguiente edición siguen incluidos en todos los planes y **no gastan créditos**. Los que gastan crédito son el chat, el modo agente, la revisión de código y Copilot CLI. Las organizaciones también pueden juntar los créditos no usados en una reserva común.

**En la práctica:** Copilot es el más barato para entrar y el mejor para quien solo quiere autocompletado dentro del editor. Pero, en uso agéntico intensivo, el crédito mensual se acaba rápido, porque ahora cada tarea larga consume tokens al precio de API.

## Lado a lado

<div style="max-width:900px;margin:24px auto;overflow-x:auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table style="width:100%;border-collapse:collapse;background:#ffffff;color:#1a1a1a;box-shadow:0 1px 4px rgba(0,0,0,0.08);border-radius:8px;overflow:hidden;">
    <thead>
      <tr style="background:var(--ink-deep);color:#ffffff;">
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Herramienta</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">💰 Entrada de pago</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">📏 Cómo funciona el límite</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">🆓 Capa gratuita</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;font-weight:600;">Claude Code</td>
        <td style="padding:12px 16px;">US$ 20/mes (Pro)</td>
        <td style="padding:12px 16px;">Ventana de 5 horas + límite semanal, cuota no publicada</td>
        <td style="padding:12px 16px;">No incluye Claude Code</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;font-weight:600;">Antigravity</td>
        <td style="padding:12px 16px;">Google AI Pro (cerca de US$ 20, confirma)</td>
        <td style="padding:12px 16px;">Ventana de 5 horas hasta el límite semanal, créditos extra</td>
        <td style="padding:12px 16px;">Sí, cuota renovada cada semana</td>
      </tr>
      <tr>
        <td style="padding:12px 16px;font-weight:600;">GitHub Copilot</td>
        <td style="padding:12px 16px;">US$ 10/mes (Pro)</td>
        <td style="padding:12px 16px;">Créditos mensuales gastados por token, autocompletado gratis</td>
        <td style="padding:12px 16px;">Sí, con límites</td>
      </tr>
    </tbody>
  </table>
</div>

## Cuál elegir según tu perfil

![Primer plano de dos manos sosteniendo tres tarjetas blancas en abanico sobre una mesa, con un portátil que muestra un editor de código desenfocado al fondo](./images/claude-code-vs-antigravity-vs-copilot-perfis.webp)

**Estás empezando o solo quieres probar sin gastar:** Antigravity en el nivel gratuito o el plan gratuito de Copilot. Claude Code exige un plan de pago, así que no es la puerta de entrada más barata.

**Programas todo el día y quieres sobre todo autocompletado:** Copilot Pro. Por US$ 10 tienes autocompletado sin consumir crédito, y el agente queda como extra ocasional.

**Delegas tareas largas y autónomas (migraciones, refactorizaciones grandes):** Claude Code en Pro para probar, con Max en el radar si se acaba la cuota. Es el caso en que más importa la cuota por ventana de cinco horas, y en el que más conviene probar en tu propio código antes de suscribirte al plan caro.

**Ya pagas Google AI y quieres un agente incluido:** Antigravity, sabiendo que la vista previa pública y la falta de certificaciones de cumplimiento documentadas pesan para el uso corporativo.

**Decides por un equipo:** Copilot Business o Enterprise es el más fácil de administrar, con presupuesto por usuario y reserva común de créditos. Solo no trates ninguna de las tres como una elección definitiva: prueba en tu código, con tu propio criterio de éxito.

## Preguntas frecuentes

### ¿Claude Code es gratuito?

No. Según la página de precios de Anthropic, Claude Code está incluido en los planes de pago (Pro, Max, Team y Enterprise), sin costo extra, pero el plan Free no lo incluye.

### ¿Google Antigravity tiene plan gratuito?

Sí. El nivel base es gratuito, con una cuota que se renueva cada semana y acceso a los modelos Gemini. Los planes de pago renuevan la cuota cada cinco horas.

### ¿Qué cambió en el precio de GitHub Copilot en 2026?

Desde el 1 de junio de 2026, Copilot cambia las solicitudes premium por créditos de IA calculados por token. Los precios mensuales de lista siguieron iguales, pero el uso de chat y agente pasó a gastar créditos al precio de API de cada modelo.

### ¿El autocompletado de Copilot gasta créditos?

No. El autocompletado y las sugerencias de siguiente edición están incluidos en todos los planes y no consumen créditos. Solo gastan el chat, el modo agente, la revisión de código y Copilot CLI.

### ¿Cuál de los tres es el más barato?

Según la tabla, Copilot Pro, a US$ 10 al mes. Pero el más barato de verdad depende del uso: con agente intensivo, el crédito de Copilot se acaba rápido, y una mensualidad con mayor cuota puede salir más barata.

## Conclusión

Ninguna de las tres es la mejor en todo, y el precio de lista casi no ayuda a decidir. Copilot es la entrada más barata y la mejor para autocompletado. Antigravity es la que te deja probar gratis. Claude Code es la que más sentido tiene para delegar trabajo largo, siempre que aceptes una cuota que no se publica. El camino más seguro es empezar por la capa más barata de la herramienta que encaje con tu tipo de trabajo, medir durante una semana cuánta cuota gastas de verdad y solo entonces subir de plan.

## Sigue leyendo

- [Reseña de Claude Code en 2026: ¿vale el precio?](/claude-code-review-vale-el-precio/)
- [Google Antigravity explicado](/google-antigravity/)
- [MCP en Claude Code, Cursor y Copilot: 7 cuidados de seguridad](/mcp-seguridad-agentes-de-codigo/)
- [5 funciones de Claude Code que la mayoría de los devs nunca activa](/claude-code-funciones-ocultas/)

---

*Fuentes: [Anthropic, planes y precios](https://claude.com/pricing), [Google Antigravity, documentación de planes](https://antigravity.google/docs/plans/), [GitHub, Copilot pasa a cobrar por uso](https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/), [CloudZero, precios de Google Antigravity](https://www.cloudzero.com/blog/google-antigravity-pricing/).*
