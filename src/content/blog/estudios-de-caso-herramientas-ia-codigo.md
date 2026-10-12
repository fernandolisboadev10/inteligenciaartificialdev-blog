---
title: "Investigamos los estudios de caso de Claude Code, Codex, Copilot y Antigravity. Cuáles realmente se sostienen"
description: "Anthropic, OpenAI, Microsoft y Google publican estudios de caso brillantes para sus propias herramientas de IA para código. Fuimos a ver qué se mide de verdad, quién lo publicó y si existe investigación independiente detrás de los números."
category: "Estudios de caso"
date: 2026-09-27
updated: 2026-10-12
translation: "estudos-de-caso-ferramentas-ia-codigo"
readingTime: "9 min"
image: "./images/estudos-de-caso-ferramentas-ia-codigo.webp"
imageAlt: "Foto editorial del escritorio de un desarrollador con un portátil que muestra un editor de código desenfocado junto a una pila de informes impresos cubiertos de marcas de resaltador y notas adhesivas, luz suave de ventana, poca profundidad de campo"
draft: false
---

Toda herramienta grande de IA para código ya tiene su estudio de caso. Anthropic tiene clientes que reportan una productividad 10 veces mayor. OpenAI tiene fundadores que convierten la incorporación de nuevos empleados en un flujo de trabajo de agente. GitHub muestra el tiempo de ciclo de un pull request cayendo días. Google tiene una aerolínea que genera la mitad de su código de QA de forma automática. Leyéndolos uno tras otro, parece que todo el sector ya resolvió el problema.

Pero la cifra del título no es la parte interesante. La parte interesante es *quién la midió, cómo la midió y si alguien ajeno a la empresa que vende la herramienta lo verificó*. Fuimos a ver los estudios de caso públicos de los cuatro nombres más grandes del sector, Claude Code, Codex de OpenAI, GitHub Copilot y Antigravity de Google, y separamos lo que es evidencia de verdad de lo que es solo texto de marketing bien escrito.

## Claude Code (Anthropic): cifras fuertes, todas autodeclaradas

La página de clientes de Anthropic es la más específica de las cuatro. [Classmethod](https://claude.com/customers/classmethod), una integradora de nube japonesa, reporta ganancias de productividad de hasta 10 veces y dice que el 99% de un proyecto open source que construyó ("rulesync") se implementó usando Claude Code. [HubSpot](https://claude.com/customers/hubspot) dice que Claude Code aceleró una migración completa del frontend durante el rebranding de 2025 de la empresa, un trabajo que de otro modo habría llevado meses. Internamente, la propia Anthropic publicó la historia de un ingeniero que dejó que Claude Code funcionara de forma semiautónoma sobre toda una clase de errores de API en producción. El resultado: más de 800 correcciones individuales aplicadas y una tasa de errores reducida mil veces.

Son afirmaciones concretas y específicas, no ese vago "aumento de productividad" de siempre, y eso merece crédito. Pero todas vienen de la propia página de clientes de Anthropic o del blog de ingeniería de la empresa. No hay un estudio independiente de por medio, nadie ajeno auditando el "99%" o el "mil veces", y un estudio de caso de cliente es, por naturaleza, opt-in: una empresa con un resultado decepcionante no manda testimonio.

**Nota: B+.** Las especificaciones mejor documentadas de las cuatro herramientas, cero verificación independiente.

## Codex (OpenAI): nombres reales, pero la cifra principal es uso, no resultado

El estudio de caso de septiembre de OpenAI trae tres empresas nombradas, Basis, Clay y Exa Labs, cada una convirtiendo un proceso de negocio específico (incorporación de nuevos empleados, flujos de ventas, integraciones) en un flujo de trabajo de agente Codex bien delimitado, en lugar de un mandato genérico de "usen más IA". El CFO de Virgin Atlantic, por separado, atribuyó ganancias de productividad en varias áreas a Codex y ChatGPT Enterprise.

La cifra que OpenAI usa como estandarte, sin embargo, es una estadística de uso: Codex ya representa el 64% de los tokens combinados de Codex y ChatGPT generados por clientes empresariales. Es un número real, medible y probablemente correcto, pero muestra que la adopción está ocurriendo, no que el código resultante sea bueno. Una porción alta de tokens es consistente tanto con una herramienta que a la gente le encanta usar como con una herramienta que exige mucho ida y vuelta para salir bien. El estudio de caso no distingue entre las dos hipótesis.

**Nota: B-.** Clientes nombrados y específicos, pero la cifra destacada mide engagement, no calidad.

## GitHub Copilot (Microsoft): la evidencia más discutida, lo que la hace la más honesta

La propia investigación de GitHub, hecha en alianza con Accenture, reporta ganancias operativas reales: el tiempo medio hasta abrir un pull request cayó de 9,6 días a 2,4 días, el volumen de PR subió un 10,6% y el tiempo de ciclo cayó 3,5 horas. Los datos de encuestas, además, muestran una satisfacción alta: el 88% dice que completa las tareas más rápido, el 90% se siente más realizado en el trabajo, el 73% reporta pasar más tiempo en estado de flow.

Esto es lo que diferencia a Copilot de las otras tres herramientas: existe un [estudio de caso longitudinal independiente, con metodología mixta y sin financiación de proveedor, publicado en arXiv](https://arxiv.org/abs/2509.20353), que analizó la productividad de desarrolladores con y sin Copilot, y no encontró un cambio estadísticamente significativo en la actividad de commits después de la adopción. Esto contradice directamente las cifras de satisfacción, y es un dato genuinamente útil justamente porque nadie de Microsoft lo firmó. Que un desarrollador *sienta* que es más productivo y que *entregue* mensurablemente más están resultando ser dos afirmaciones distintas, y Copilot es la única de las cuatro herramientas en la que un estudio externo realmente probó esa brecha.

**Nota: A-.** No porque el resultado sea el mejor, sino porque es la única herramienta con investigación independiente de verdad para poner al lado de las cifras del propio proveedor.

## Antigravity (Google): la evidencia más débil y una bandera roja abierta

La cifra principal de Google es AirAsia generando más del 50% del código de QA en producción mediante Antigravity, publicada en el propio blog de Google. Aparte de eso, comparaciones independientes de la herramienta describen la base de estudios de caso como superficial: un análisis del sector señaló que Antigravity "aún está en las primeras etapas de madurez empresarial, con evidencia limitada de implementación pública", sigue en vista previa pública, no tiene certificaciones de cumplimiento documentadas hasta mediados de 2026, y tuvo una vulnerabilidad de RCE (ejecución remota de código) reportada públicamente. Gemini Code Assist, el otro producto de código de Google, está en una situación parecida, con un único estudio de caso referenciado (Dun & Bradstreet) y ninguna cifra específica asociada a él.

Parte de esto es simplemente cuestión de edad: Antigravity se lanzó en noviembre de 2025 y todavía no tuvo tiempo de acumular la biblioteca de estudios de caso que tienen las otras tres herramientas. Pero "todavía muy pronto para tener evidencia" y "tener evidencia" son estados distintos, y por ahora Antigravity está en el primero.

**Nota: C.** La base de estudios de caso más superficial de las cuatro, más una divulgación de seguridad sin resolver que conviene conocer antes de apostar flujos de trabajo de producción en ella.

## Calidad de la evidencia, lado a lado

<div style="max-width:900px;margin:24px auto;overflow-x:auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table style="width:100%;border-collapse:collapse;background:#ffffff;box-shadow:0 1px 4px rgba(0,0,0,0.08);border-radius:8px;overflow:hidden;">
    <thead>
      <tr style="background:var(--ink-deep);color:#ffffff;">
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Herramienta</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">🏆 Afirmación principal</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">🔍 ¿Estudio independiente?</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">📋 Nota</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;font-weight:600;">Claude Code</td>
        <td style="padding:12px 16px;">Productividad 10x, 99% de un código fuente (Classmethod)</td>
        <td style="padding:12px 16px;">No</td>
        <td style="padding:12px 16px;font-weight:600;color:var(--teal);">B+</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;font-weight:600;">Codex</td>
        <td style="padding:12px 16px;">64% de los tokens empresariales de Codex+ChatGPT</td>
        <td style="padding:12px 16px;">No</td>
        <td style="padding:12px 16px;">B-</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;font-weight:600;">GitHub Copilot</td>
        <td style="padding:12px 16px;">El tiempo de PR cayó de 9,6 a 2,4 días</td>
        <td style="padding:12px 16px;">Sí (arXiv, resultado mixto)</td>
        <td style="padding:12px 16px;font-weight:600;color:var(--teal);">A-</td>
      </tr>
      <tr style="background:#fafafa;">
        <td style="padding:12px 16px;font-weight:600;">Antigravity</td>
        <td style="padding:12px 16px;">50%+ del código de QA de AirAsia</td>
        <td style="padding:12px 16px;">No, más una divulgación de RCE abierta</td>
        <td style="padding:12px 16px;">C</td>
      </tr>
    </tbody>
  </table>
</div>

## El patrón que se repite en las cuatro

Tres cosas se mantienen ciertas sin importar qué herramienta mires, y seguirán siéndolo para cualquier herramienta que reemplace a estas cuatro dentro de uno o dos años.

**Un estudio de caso publicado por un proveedor es un techo, no un promedio.** Las empresas se ofrecen con los mejores resultados que tuvieron. Si un estudio de caso dice "10x", esa es la cifra del cliente que aceptó ser citado, no la mediana entre todos los que usan el producto.

**El volumen de uso y la calidad del código son métricas distintas, y los estudios de caso suelen mezclarlas.** "% del código escrito por IA" y "tokens generados" muestran que la gente está delegando trabajo en la herramienta. No muestran si ese trabajo necesitó retrabajo, introdujo bugs o realmente llegó a producción.

**La existencia de investigación independiente es, en sí misma, la señal más fuerte.** No es que el estudio académico sobre Copilot haga que la herramienta se vea mejor; su resultado fue, de hecho, menos favorable que la investigación del propio proveedor. Es que la existencia de un escrutinio externo significa que alguien tuvo acceso a datos reales de uso y ningún incentivo para que la herramienta se viera bien. Eso vale más que un testimonio más lleno de elogios.

## Cómo leer el estudio de caso de cualquier herramienta de IA para código

![Primer plano de una mano marcando una línea en un informe de investigación impreso con un resaltador, con un portátil que muestra un editor de código desenfocado al fondo](./images/estudos-de-caso-ferramentas-ia-codigo-checklist.webp)

Una checklist de cinco preguntas que sigue valiendo sin importar qué herramientas estén en la cima cuando leas esto:

1. **¿Quién lo publicó?** Una página de cliente alojada en el dominio del propio proveedor es, ante todo, texto de marketing. Trata cada cifra como el mejor escenario posible, no como el promedio.
2. **¿Qué se está midiendo realmente?** Porción de uso, encuesta de satisfacción y calidad del código entregado son tres cosas distintas. Ten claro cuál está detrás de la cifra destacada.
3. **¿Existe una base de comparación?** "El 88% dice que es más rápido" es una sensación. "El tiempo de apertura de un PR cayó de 9,6 a 2,4 días" es una medición. Solo una de las dos puede estar equivocada de una manera que notarías.
4. **¿Existe algún estudio independiente sobre esa herramienta?** Búscalo específicamente. La existencia importa más que la conclusión.
5. **¿Qué no se mencionó?** Ninguna divulgación de seguridad, ninguna certificación de cumplimiento, ningún caso de fallo, en un producto nuevo o de crecimiento acelerado, suele ser una laguna en la evidencia, no una prueba de que no haya nada que reportar.

## Preguntas frecuentes

### ¿Son confiables los estudios de caso de herramientas de IA para código?

Son confiables como evidencia de que *algo* funcionó para *alguien*, en las condiciones que el proveedor eligió publicar. Trata las cifras concretas como el mejor escenario posible, no como un promedio, a menos que una fuente independiente las confirme.

### ¿Qué herramienta de IA para código tiene más investigación independiente detrás?

GitHub Copilot, con diferencia, es la única de las cuatro con un estudio longitudinal publicado y sin financiación de proveedor, aunque las conclusiones de ese estudio complican en lugar de confirmar las cifras de marketing.

### ¿Un porcentaje alto de "código escrito por IA" significa que la herramienta es mejor?

No, por sí solo. Mide cuánto trabajo se está delegando en la herramienta, no si ese código llegó a producción sin retrabajo ni introduciendo más bugs. Combina esa cifra con una métrica de calidad o de defectos antes de tratarla como una victoria.

### ¿Google Antigravity está listo para uso empresarial en producción?

Está más atrás que las otras tres en evidencia pública: menos implementaciones documentadas, ninguna certificación de cumplimiento hasta mediados de 2026 y una vulnerabilidad de RCE reportada públicamente. Eso no descarta la herramienta, pero significa hacer tu propia evaluación en lugar de confiar en su biblioteca de estudios de caso.

### ¿Los estudios de caso por sí solos deben decidir qué herramienta de IA para código adopta un equipo?

No. Son un filtro inicial para saber qué herramientas valen una prueba de verdad, no un sustituto de probar en tu propio código, con tu propia definición de éxito.

## Conclusión

Poniendo lado a lado los estudios de caso de las cuatro mayores herramientas de IA para código, la diferencia real no está en cuál tiene la cifra más grande, sino en cuáles tienen alguna evidencia más allá de su propia página de marketing. Claude Code y Codex tienen clientes específicos y nombrados y ninguna verificación externa. Antigravity tiene el registro más superficial de las cuatro y una bandera de seguridad abierta. Copilot es el caso atípico: la única herramienta con escrutinio académico independiente, y ese escrutinio no se limitó a confirmar la historia del proveedor. Eso no es motivo para elegir Copilot por defecto; es motivo para buscar el mismo tipo de escrutinio, o su ausencia, antes de confiar en el estudio de caso de cualquier herramienta sobre sí misma.

---

*Fuentes: [Anthropic — Estudio de caso Classmethod](https://claude.com/customers/classmethod), [Anthropic — Estudio de caso HubSpot](https://claude.com/customers/hubspot), [Anthropic — How AI is transforming work at Anthropic](https://www.anthropic.com/research/how-ai-is-transforming-work-at-anthropic), [OpenAI — From assistance to execution: how enterprises put AI to work](https://openai.com/index/how-enterprises-put-ai-to-work/), [RuntimeWire — Basis, Clay y Exa sobre flujos de agente de Codex de OpenAI](https://runtimewire.com/article/basis-clay-exa-agent-workflows-openai-codex), [Blog de GitHub — Quantifying Copilot's impact with Accenture](https://github.blog/news-insights/research/research-quantifying-github-copilots-impact-in-the-enterprise/), [arXiv — Developer Productivity With and Without GitHub Copilot](https://arxiv.org/abs/2509.20353), [Blog de Google Cloud — Expanding Antigravity for enterprise](https://cloud.google.com/blog/products/ai-machine-learning/expanding-google-antigravity-for-enterprise-customers/), [Augment Code — Antigravity vs. Gemini Code Assist](https://www.augmentcode.com/tools/google-antigravity-vs-gemini-code-assist).*

## Sigue leyendo

- [Reseña de Claude Code en 2026: ¿vale el precio?](/claude-code-review-vale-el-precio/)
- [Claude Code, Antigravity o Copilot: cuál elegir](/claude-code-vs-antigravity-vs-copilot/)
- [El mismo prompt de landing page en cuatro modelos](/mismo-prompt-landing-page-ia/)
