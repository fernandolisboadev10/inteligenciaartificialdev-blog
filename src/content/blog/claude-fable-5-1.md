---
title: "Claude Fable 5.1 explicado: benchmarks, precios y novedades"
description: "Claude Fable 5.1 de Anthropic llega con una puntuación casi perfecta en SWE-bench y un precio más bajo. Qué cambió, qué es Mythos 5.1 y cuánto cuesta."
category: "Chatbots"
date: 2026-09-07
updated: 2026-10-12
translation: "claude-fable-5-1"
readingTime: "7 min"
image: "./images/claude-fable-5-1.webp"
imageAlt: "Foto editorial en primer plano de la pantalla del portátil de un desarrollador mostrando un gráfico desenfocado de comparación de benchmarks de chatbots de IA, con un cuaderno abierto lleno de anotaciones de precios a mano y una taza de café caliente sobre una mesa de madera, con luz de día suave"
---

Anthropic lanzó Claude Fable 5.1 el 1 de septiembre de 2026, y la cifra destacada es difícil de ignorar: 95,0% en SWE-bench Verified, una de las puntuaciones más altas que cualquier modelo haya registrado en ese benchmark. Ya está disponible de forma general en la API de Claude, AWS, Google Cloud y Microsoft Azure, accesible como `claude-fable-5-1`.

Si todavía estás en Fable 5, o solo viste circular el nombre "Mythos 5.1" y no sabías bien cómo se relaciona, aquí va el resumen en lenguaje claro.

## Qué es realmente Claude Fable 5.1

Fable 5.1 es el nuevo buque insignia de Anthropic, construido para avanzar aún más en código, trabajo de conocimiento y resolución de problemas de larga duración. Anthropic dice que iguala o supera a Fable 5 con un esfuerzo de razonamiento bajo y medio, y abre una ventaja clara en los niveles de esfuerzo más altos, el ajuste que usarías en una tarea genuinamente difícil, no en una pregunta rápida.

Viene con una ventana de contexto de 1 millón de tokens y puede generar hasta 128.000 tokens por respuesta, espacio suficiente para mantener una base de código grande o un documento de investigación largo en una sola conversación.

## Fable 5.1 vs. Mythos 5.1: ¿cuál es la diferencia?

Esta es la parte que confunde a la gente: Fable 5.1 y Mythos 5.1 son el mismo modelo por debajo, con dos ropajes distintos.

**Fable 5.1** es la versión que recibe todo el mundo, con las barreras de seguridad de producción de Anthropic totalmente activas. **Mythos 5.1** es el mismo modelo con protecciones cibernéticas y biológicas más laxas, y es solo por invitación, restringido a organizaciones verificadas de ciberseguridad y ciencias de la vida que tienen una necesidad legítima de capacidades que las protecciones estándar, de otro modo, restringirían.

Esa diferencia no es solo teórica. En Terminal-Bench 4.0, Mythos 5.1 puntúa 60,9% frente al 55,8% de Fable 5.1, un costo de rendimiento real que viene de mantener el modelo público más seguro por defecto.

## El salto de benchmark respecto a Fable 5

Los números avanzan bastante en este lanzamiento, no solo en los bordes:

- **Terminal-Bench-Science**: 24,7% → 52,6%, más del doble de la puntuación de Fable 5
- **Terminal-Bench 4.0** (código): 42,0% → 55,8%
- **SWE-bench Verified**: 95,0%
- **SWE-bench Pro**: 81,2, una ventaja discreta sobre Fable 5 y Opus 5
- **ProofBench v1.1** (demostraciones matemáticas formales): 100% perfecto

Los saltos en ciencia y código son los que más llaman la atención. Duplicar una puntuación de benchmark en un solo lanzamiento es inusual, y señala que Anthropic ajustó esta generación específicamente para trabajo técnico largo y de múltiples pasos, en lugar de solo pulir la conversación general.

## Precio: más barato aunque más inteligente

Fable 5.1 cuesta $10 por millón de tokens de entrada y $50 por millón de tokens de salida, cerca de un 25% más barato que Fable 5 en general, y hasta un 45% más barato en cargas de trabajo fuertemente agénticas, en las que el modelo se la pasa llamando herramientas e iterando repetidamente.

El cambio mayor está en el precio de la caché. Los tokens de entrada en caché ahora cuestan $0,25 por millón, una caída desde los $1,00 de Fable 5, un recorte del 75%. Para cualquier cosa que reutilice un prompt de sistema largo o contexto de una base de código en varias solicitudes, esa diferencia suma rápido.

## Fable 5.1 de un vistazo

<div style="max-width:900px;margin:24px auto;overflow-x:auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table style="width:100%;border-collapse:collapse;background:#ffffff;box-shadow:0 1px 4px rgba(0,0,0,0.08);border-radius:8px;overflow:hidden;">
    <thead>
      <tr style="background:var(--ink-deep);color:#ffffff;">
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Métrica</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Fable 5</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Fable 5.1</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Mythos 5.1</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;font-weight:600;">🧪 Terminal-Bench-Science</td>
        <td style="padding:12px 16px;">24,7%</td>
        <td style="padding:12px 16px;">52,6%</td>
        <td style="padding:12px 16px;">—</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;font-weight:600;">💻 Terminal-Bench 4.0</td>
        <td style="padding:12px 16px;">42,0%</td>
        <td style="padding:12px 16px;">55,8%</td>
        <td style="padding:12px 16px;">60,9%</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;font-weight:600;">✅ SWE-bench Verified</td>
        <td style="padding:12px 16px;">—</td>
        <td style="padding:12px 16px;">95,0%</td>
        <td style="padding:12px 16px;">—</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;font-weight:600;">📤 Precio de lectura de caché</td>
        <td style="padding:12px 16px;">$1,00/M</td>
        <td style="padding:12px 16px;">$0,25/M</td>
        <td style="padding:12px 16px;">$0,25/M</td>
      </tr>
      <tr>
        <td style="padding:12px 16px;font-weight:600;">🔐 Acceso</td>
        <td style="padding:12px 16px;">General</td>
        <td style="padding:12px 16px;">General</td>
        <td style="padding:12px 16px;">Solo por invitación</td>
      </tr>
    </tbody>
  </table>
</div>

## Preguntas frecuentes

### ¿Qué es Claude Fable 5.1?

Es el modelo insignia más reciente de Anthropic, lanzado el 1 de septiembre de 2026, centrado en código, trabajo de conocimiento y resolución de problemas de larga duración. Está disponible por la API de Claude, AWS, Google Cloud y Microsoft Azure.

### ¿Claude Fable 5.1 es lo mismo que Mythos 5.1?

Son el mismo modelo por debajo. Fable 5.1 funciona con todas las protecciones de producción de Anthropic. Mythos 5.1 tiene restricciones cibernéticas y biológicas más laxas y es solo por invitación, limitado a organizaciones verificadas de ciberseguridad y ciencias de la vida.

### ¿Cuánto cuesta Claude Fable 5.1?

$10 por millón de tokens de entrada y $50 por millón de tokens de salida, con la entrada en caché a $0,25 por millón. Eso es cerca de un 25% más barato que Fable 5 en general, y hasta un 45% más barato en cargas de trabajo agénticas.

### ¿Cuál es la ventana de contexto de Claude Fable 5.1?

1 millón de tokens, con una salida máxima de 128.000 tokens por respuesta.

## Conclusión

Fable 5.1 no es un lanzamiento de punto menor. Duplicar un benchmark de ciencia, empujar las puntuaciones de código más allá del 95% en SWE-bench Verified y recortar los precios de caché en un 75%, todo en el mismo lanzamiento, es mucho para que ocurra de una vez. Si construyes agentes de código o investigación pesada sobre Claude, vale la pena migrar; la ganancia de rendimiento y el recorte de precio apuntan en la misma dirección.

## Sigue leyendo

- [OpenAI DevDay 2026 para quienes programan: GPT-6.1 Sol, Codex Cloud y Dots](/openai-devday-2026/)
- [GPT-6 Astra explicado: benchmarks y precio](/gpt-6-astra/)
- [API de Grok vs GPT-6 Astra y Claude Opus 5: las cuentas](/grok-api-precio/)
- [Reseña de Claude Code en 2026: ¿vale el precio?](/claude-code-review-vale-el-precio/)

---

*Fuentes: [Anthropic — Introducing Claude Fable 5.1 and Claude Mythos 5.1](https://www.anthropic.com/claude-fable-and-mythos-5-1), [VentureBeat — Claude Fable 5.1 and Mythos 5.1 arrive with a 75% cost reduction](https://venturebeat.com/technology/anthropics-claude-fable-5-1-and-mythos-5-1-arrive-with-a-75-cost-reduction-for-fable-cache-reads), [Vellum — Claude Fable 5.1 & Mythos 5.1 Benchmarks Explained](https://www.vellum.ai/blog/claude-fable-5-1-mythos-5-1-benchmarks-explained), [llm-stats.com — Claude Fable 5.1](https://llm-stats.com/models/claude-fable-5-1).*
