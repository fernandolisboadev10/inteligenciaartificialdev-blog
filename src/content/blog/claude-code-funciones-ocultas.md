---
title: "5 funciones de Claude Code que la mayoría de los devs nunca activa"
description: "Plan mode, memoria automática, subagentes, skills y hooks convierten a Claude Code de una ventana de chat en un flujo de trabajo de verdad. Cómo funciona cada uno en la práctica, con configuración real."
category: "Tutoriales"
date: 2026-09-12
updated: 2026-10-12
translation: "claude-code-recursos-ocultos"
readingTime: "8 min"
image: "./images/claude-code-recursos-ocultos.webp"
imageAlt: "Foto editorial en primer plano del portátil de un desarrollador por la noche, con una sesión de agente de código de IA en una terminal oscura, y un segundo monitor suavemente desenfocado al fondo que muestra un editor de código"
---

La mayoría de los desarrolladores que prueba Claude Code lo usa del mismo modo: abre una terminal, escribe un pedido, lee el diff, aprueba, repite. Es una forma válida de sacarle valor a la herramienta, y es exactamente como se vende en una guía rápida. También es solo una fracción de lo que realmente hay ahí.

Por debajo del bucle de chat hay un conjunto de funciones construidas específicamente para las partes de programar con IA que se vuelven tediosas a escala: revisar un plan antes de que toque el disco, no volver a explicar la misma preferencia en cada sesión, impedir que una tarea grande de exploración inunde tu ventana de contexto y aplicar una regla de modo que no se pueda saltar por accidente. Ninguna exige un plugin ni un parche. Ya vienen listas, documentadas y, la mayoría de las veces, desactivadas por defecto o sin usar simplemente porque nadie fue a buscarlas.

Aquí van cinco: qué resuelve cada una realmente y la configuración concreta para activarla.

## 1. Plan Mode: revisar antes de que nada toque el disco

El flujo predeterminado deja que Claude lea archivos, decida un enfoque y empiece a editar en un solo movimiento, pidiendo aprobación herramienta por herramienta a medida que avanza. El plan mode lo divide en dos: Claude lee el código y propone primero un plan completo, en texto plano, sin ninguna edición de archivos, y solo empieza a cambiar algo después de que lo apruebes.

Esto importa más en cambios donde el riesgo no es "el código quedó correcto" sino "entendió la tarea como yo quería decir". Un pedido vago como "limpia el flujo de autenticación" puede interpretarse de una docena de formas razonables. Revisar el plan cuesta 30 segundos; revisar (y revertir) una implementación equivocada repartida en ocho archivos cuesta mucho más.

Actívalo para la sesión actual pulsando `Shift+Tab` hasta que la barra de estado muestre `⏸ plan mode on`, o inicia una sesión ya en ese modo:

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">terminal</span>
    <button class="copy-btn" data-copy-target="plan-mode-cmd">Copiar</button>
  </div>
  <pre id="plan-mode-cmd"><code>claude --permission-mode plan</code></pre>
</div>

Después de que apruebas un plan, Claude lo ejecuta bajo tus ajustes normales de permisos. También puedes abrir el plan en tu propio editor de texto y editarlo a mano antes de aprobar, lo que es más rápido que escribir correcciones de vuelta en el chat para cualquier cosa mayor que una frase.

## 2. Memoria automática: deja de reaprender lo mismo en cada sesión

Cada sesión de Claude Code empieza con una ventana de contexto vacía. Sin memoria, eso significa volver a explicar "usamos pnpm, no npm" o "el entorno de staging necesita un Redis local" cada vez que sale el tema, para siempre.

La memoria automática lo resuelve haciendo que Claude escriba sus propias anotaciones mientras trabajas, basándose en las correcciones que le das y en patrones que no puede derivar solo del código. Guarda cuatro tipos de anotaciones, marcadas por categoría: tu rol y preferencias, el feedback que diste (correcciones y confirmaciones), contexto continuo del proyecto como plazos o decisiones, y referencias a dónde viven las cosas fuera del repositorio (un proyecto en Linear, un dashboard en Grafana).

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">~/.claude/projects/&lt;proyecto&gt;/memory/</span>
    <button class="copy-btn" data-copy-target="memory-tree">Copiar</button>
  </div>
  <pre id="memory-tree"><code>memory/
├── MEMORY.md            # índice, una línea por memoria, se carga en cada sesión
├── feedback_testing.md  # "no mockear la base de datos en pruebas de integración"
├── project_deadline.md  # "el congelamiento de staging empieza el 5 de marzo para el release móvil"
└── reference_tracker.md # "los bugs se registran en el proyecto INGEST de Linear"</code></pre>
</div>

Viene activada por defecto, es local a la máquina y se comparte entre todos los worktrees del mismo repositorio. Ejecuta `/memory` dentro de una sesión para navegar, editar o borrar lo que se guardó; es todo markdown plano, no hay nada oculto. Si Claude empieza a asumir algo erróneo sobre tu flujo de trabajo, normalmente es un archivo de memoria desactualizado que vale la pena abrir y corregir directamente, en lugar de corregirlo en el chat cada vez.

## 3. Subagentes: saca la exploración grande y desordenada de tu hilo principal

Pídele a Claude "averigua cómo funciona la renovación de tokens en este código" y la respuesta honesta exige leer una docena de archivos, la mayoría callejones sin salida. Hazlo en tu conversación principal y tu ventana de contexto se llena de contenido de archivos que nunca vas a volver a mirar, desplazando lo que de verdad importa para la tarea.

Los subagentes lo resuelven ejecutando esa exploración en una ventana de contexto completamente separada, con sus propias herramientas e incluso su propio modelo, y reportando de vuelta solo un resumen. Los tres ya incluidos, Explore, Plan y general-purpose, cubren la mayoría de los casos sin ninguna configuración. También puedes definir los tuyos para un trabajo repetido, como un revisor de código de solo lectura que únicamente recibe `Read`, `Grep` y `Glob`, nunca `Write` ni `Edit`.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">.claude/agents/security-auditor.md</span>
    <button class="copy-btn" data-copy-target="subagent-example">Copiar</button>
  </div>
  <pre id="subagent-example"><code>---
name: security-auditor
description: Audit code for security vulnerabilities
tools: Read, Grep, Glob
model: opus
---

You are a security expert. Review code for vulnerabilities, injection
risks, authentication issues, and compliance concerns.</code></pre>
</div>

La ganancia práctica además de una ventana de contexto más limpia: puedes enviar la exploración a un modelo más barato y rápido como Haiku mientras mantienes tu conversación principal en un modelo más fuerte, y ejecutar varios subagentes en partes independientes de una tarea al mismo tiempo, en lugar de en serie.

## 4. Skills: empaqueta un flujo de trabajo una vez y deja de explicarlo

Las instrucciones de CLAUDE.md se cargan en cada sesión, las necesites o no, lo cual es excelente para un puñado de reglas fijas pero un desperdicio para un procedimiento de varios pasos que usas solo de vez en cuando, como "cómo cortamos un release" o "nuestra plantilla de descripción de PR". Las skills cubren esa brecha: son archivos markdown que se cargan solo cuando se invocan, ya sea por nombre o automáticamente cuando tu pedido coincide con su descripción.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">.claude/skills/pr-summary/SKILL.md</span>
    <button class="copy-btn" data-copy-target="skill-example">Copiar</button>
  </div>
  <pre id="skill-example"><code>---
description: Summarize a pull request's diff and flag anything risky
---

PR diff:
!`gh pr diff`

Summarize the changes above in 2-3 bullet points, then list anything
that looks risky: missing error handling, untested paths, or breaking
changes to a public API.</code></pre>
</div>

Esa sintaxis de `!` seguido de un comando entre acentos graves ejecuta el comando de shell una vez y pega el resultado directamente en el prompt antes de que Claude lo vea, lo cual es una forma barata de traer datos en vivo (un diff, el final de un log, el resultado de una prueba) sin un viaje de ida y vuelta extra. Un equipo que empaqueta sus cinco procedimientos más comunes como skills obtiene un resultado consistente de cualquier persona que ejecute `/pr-summary`, en lugar de cinco pedidos ligeramente distintos escritos en el chat.

## 5. Hooks: reglas que Claude no puede esquivar en la conversación

CLAUDE.md y la memoria son ambos contexto, no cumplimiento forzado. Claude los lee e intenta seguirlos, pero un pedido vago o inusual todavía puede escaparse de una instrucción que solo existe en un archivo markdown. Los hooks son distintos: son comandos de shell que se disparan automáticamente en puntos específicos de la sesión, como antes de que una herramienta se ejecute o después de que se edite un archivo, y se ejecutan independientemente de lo que Claude decida hacer.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">.claude/settings.json</span>
    <button class="copy-btn" data-copy-target="hooks-example">Copiar</button>
  </div>
  <pre id="hooks-example"><code>{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "${CLAUDE_PROJECT_DIR}/.claude/hooks/check-style.sh",
            "timeout": 30
          }
        ]
      }
    ]
  }
}</code></pre>
</div>

El ejemplo de arriba ejecuta un script de lint automáticamente después de cada edición de archivo, de modo que las desviaciones de estilo se detectan en el momento en lugar de solo en la revisión de código. El mismo mecanismo, en el evento `PreToolUse`, puede bloquear por completo un comando peligroso, como un script que inspecciona un comando de shell antes de que se ejecute y se niega a ejecutar cualquier cosa que se parezca a `rm -rf`. Esa es la diferencia real con una instrucción: una instrucción pide con cortesía, un hook ni siquiera pide.

## Cuál resuelve lo que te molesta

<div style="max-width:900px;margin:24px auto;overflow-x:auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table style="width:100%;border-collapse:collapse;background:#ffffff;box-shadow:0 1px 4px rgba(0,0,0,0.08);border-radius:8px;overflow:hidden;">
    <thead>
      <tr style="background:var(--ink-deep);color:#ffffff;">
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Si lo que te molesta es...</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Usa</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Dónde está</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;">Ediciones mal adivinadas en pedidos vagos</td>
        <td style="padding:12px 16px;font-weight:600;">Plan Mode</td>
        <td style="padding:12px 16px;"><code>Shift+Tab</code>, sin configuración</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;">Repetir la misma corrección en cada sesión</td>
        <td style="padding:12px 16px;font-weight:600;">Memoria automática</td>
        <td style="padding:12px 16px;">Activada por defecto, <code>/memory</code> para inspeccionar</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;">Ventana de contexto llenándose de lecturas sin salida</td>
        <td style="padding:12px 16px;font-weight:600;">Subagentes</td>
        <td style="padding:12px 16px;"><code>.claude/agents/*.md</code></td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;">Reescribir el mismo procedimiento de varios pasos</td>
        <td style="padding:12px 16px;font-weight:600;">Skills</td>
        <td style="padding:12px 16px;"><code>.claude/skills/*/SKILL.md</code></td>
      </tr>
      <tr>
        <td style="padding:12px 16px;">Una regla que nunca se puede saltar</td>
        <td style="padding:12px 16px;font-weight:600;">Hooks</td>
        <td style="padding:12px 16px;"><code>.claude/settings.json</code></td>
      </tr>
    </tbody>
  </table>
</div>

## Preguntas frecuentes

### ¿Estas funciones exigen un plan específico de Claude Code?

No. Plan mode, memoria automática, subagentes, skills y hooks forman parte del CLI principal y funcionan igual, ya sea que te autentiques con una suscripción de Claude o con una clave de API de Anthropic Console.

### ¿La memoria automática se comparte con mi equipo o entre máquinas?

No. La memoria automática es local a la máquina, guardada en tu propio directorio `~/.claude/`. Se comparte entre todos los worktrees de git del mismo repositorio en tu máquina, pero no con tus compañeros de equipo ni se sincroniza con otro ordenador. Los archivos CLAUDE.md, en cambio, están hechos para commitearse y compartirse mediante control de versiones.

### ¿Un hook realmente puede impedir que Claude haga algo?

Sí, y ese es el punto. Un hook de `PreToolUse` puede inspeccionar una llamada a una herramienta propuesta y devolver una decisión de denegar antes de que se ejecute, lo cual lo impone el propio Claude Code, no Claude eligiendo obedecer. Es el mecanismo correcto para cualquier cosa que CLAUDE.md no logró prevenir de forma confiable.

### ¿Cuál es la diferencia real entre una skill y un subagente?

Una skill carga instrucciones en tu conversación actual; un subagente se ejecuta en una ventana de contexto completamente separada y devuelve solo un resumen. Usa una skill para un procedimiento que debe guiar la conversación actual, y un subagente para exploración o trabajo que quieras aislar para que no consuma tu contexto principal.

### ¿Dónde veo qué está realmente cargado en una sesión?

Ejecuta `/context` dentro de una sesión. Lista cada CLAUDE.md, regla y archivo de memoria que realmente se cargó, que es la forma más rápida de depurar una instrucción que no parece surtir efecto.

## Conclusión

Plan mode, memoria automática, subagentes, skills y hooks resuelven cinco molestias específicas y nada glamorosas: adivinanzas erróneas en pedidos vagos, correcciones repetidas, una ventana de contexto saturada, procedimientos reescritos y reglas que se pueden esquivar en la conversación. Ninguno necesita un plugin, un upgrade de suscripción ni más que un archivo de configuración para activarse. Si hasta ahora solo usaste Claude Code como una caja de chat en una terminal, elegir uno de estos que resuelva un problema que tienes esta semana es un mejor uso de veinte minutos que leer el resto de la documentación de principio a fin.

## Sigue leyendo

- [Reseña de Claude Code en 2026: ¿vale el precio?](/claude-code-review-vale-el-precio/)
- [MCP en Claude Code, Cursor y Copilot: 7 cuidados de seguridad](/mcp-seguridad-agentes-de-codigo/)
- [Claude Code, Antigravity o Copilot: cuál elegir](/claude-code-vs-antigravity-vs-copilot/)
- [Vibe coding sin desorden: 6 hábitos](/vibe-coding-6-habitos-sin-desorden/)

---

*Fuentes: [Claude Code — Visión general](https://code.claude.com/docs/en/overview), [Claude Code — Cómo Claude recuerda tu proyecto](https://code.claude.com/docs/en/memory), [Claude Code — Subagentes](https://code.claude.com/docs/en/sub-agents), [Claude Code — Skills](https://code.claude.com/docs/en/skills), [Claude Code — Hooks](https://code.claude.com/docs/en/hooks), [Claude Code — Flujos de trabajo comunes](https://code.claude.com/docs/en/common-workflows).*
