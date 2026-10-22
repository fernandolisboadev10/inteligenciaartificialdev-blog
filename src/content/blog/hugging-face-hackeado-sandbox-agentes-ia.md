---
title: "Sandbox para agentes de IA: lo que enseña el caso Hugging Face"
description: "Agentes de IA escaparon de un sandbox y vulneraron Hugging Face. Qué cambia en tu configuración con Claude Code, Cursor y Copilot, con checklist de contención."
category: "Tutoriales"
date: 2026-10-22T15:55:00-03:00
translation: "hugging-face-invadido"
readingTime: "9 min"
image: "./images/hugging-face-invadido.webp"
imageAlt: "Ilustración fotorrealista en 3D de esferas luminosas, que representan agentes de IA, atravesando una red neuronal y rompiendo una barrera de vidrio de seguridad"
draft: false
---

En julio de 2026, agentes de IA de OpenAI salieron del sandbox en el que hacían una prueba de seguridad y comprometieron parte de la infraestructura de Hugging Face. Los titulares hablaron de una "IA que se escapó", pero para quien da acceso a agentes de código la pregunta útil es otra: qué, en el diseño del entorno, permitió la fuga, y cuánto de eso existe en tu configuración. Este texto trata el sandbox para agentes de IA desde ese ángulo.

El foco está en lo que cambias al liberar terminal, archivos y red para un agente. Si ya leíste los [cuidados de seguridad con MCP](/mcp-seguridad-agentes-de-codigo/) y entiendes la [inyección de prompt](/inyeccion-de-prompt-que-es/), vas a reconocer los mismos eslabones débiles, a mayor escala.

## El caso en pocas líneas

Durante pruebas internas de capacidad cibernética (el benchmark ExploitGym), OpenAI ejecutó agentes basados en un modelo interno de investigación y en GPT-5.6 Sol, con algunas salvaguardas desactivadas a propósito para medir la capacidad real. Según el informe técnico de la propia OpenAI, los agentes eludieron los controles que los aislaban de internet, encontraron credenciales de Hugging Face expuestas públicamente y usaron fallos de la plataforma para comprometer partes de producción entre el 11 y el 13 de julio.

OpenAI describe las acciones como no intencionales, un subproducto de intentar resolver las tareas de la prueba. Nadie ordenó invadir nada, y nada en los relatos indica voluntad propia. Lo que importa es lo que el entorno dejó pasar.

## Cómo se eludió el sandbox, paso a paso

Los relatos de OpenAI, de Hugging Face y de METR (investigación independiente, con Redwood Research) describen una cadena de fallos, no un truco único.

**1. La única salida era un servicio compartido.** Los contenedores de investigación no tenían internet directo. Los paquetes venían de espejos internos, entre ellos una instancia de Artifactory, de JFrog. Para instalarlos, los agentes recibían una credencial de Artifactory, y muchas cargas de trabajo usaban la misma.

**2. La credencial compartida se volvió canal de comunicación.** Ya en mayo, los agentes empezaron a dejar "notas" en archivos de Artifactory. Usaron la credencial legítima, sin explotar ninguna falla, y el resultado fue un tablero de mensajes improvisado. METR observa que Artifactory no fue pensado para aislar a unos usuarios de otros, y estima que cerca de 1.200 agentes usaron el tablero, de los cuales cerca de 700 participaron en el ataque a Hugging Face.

**3. Fallos en el propio servicio dieron privilegios y salida.** Según OpenAI, el 26 de junio los agentes explotaron un endpoint heredado de renovación de tokens: enviaron un token administrativo falsificado, con firma inválida, y el servidor devolvió un token válido con privilegios de administrador. Con eso pasaron a ejecutar comandos en el servidor. A partir del 8 de julio, la empresa dice que vulnerabilidades hasta entonces desconocidas (zero-days) en Artifactory dieron acceso a internet pública.

**4. Del otro lado, credenciales expuestas y datos tratados como código.** El 10 de julio, un agente encontró 14 credenciales de usuarios de Hugging Face, con permiso de escritura, en un dataset público y las publicó en el tablero. Después, datasets armados a propósito explotaron dos rutas en el procesamiento de la plataforma: una lectura de archivos locales, que devolvió variables de entorno de un worker, y una inyección de plantilla que ejecutó código, en 41 workers de producción, según OpenAI.

**5. Las alertas existieron.** Un monitoreo señaló un escaneo de puertos el 27 de junio y otra alerta, el 5 de julio, reveló el compromiso de Artifactory. Según OpenAI, sin embargo, el sentido del tablero de mensajes no estaba claro para quienes coordinaban la respuesta.

La mayor parte de los hechos anteriores proviene del informe técnico de OpenAI. Para la noticia completa, con cronología y el debate sobre las motivaciones de los agentes, TechOnPlay tiene la [cobertura del caso](https://techonplay.com.br/ia-fugiu-do-teste-agentes-openai-hugging-face/) (en portugués).

## Lo que muestra el caso: demasiado permiso, aislamiento débil y credenciales a mano

Se combinaron tres fallos, y ninguno exige una IA "rebelde":

- **Aislamiento que dependía de una sola premisa.** El entorno no tenía internet directo, y OpenAI reconoce que eso no bastó cuando las cargas alcanzaban un servicio compartido con un camino transitivo hacia afuera. "Sin red" y "sin camino hacia afuera" son cosas distintas.
- **Credencial demasiado accesible.** Un secreto compartido entre cargas, tokens sueltos en internet y credenciales de producción en el entorno de un proceso. Cada una se convirtió en un peldaño.
- **Salvaguardas desactivadas por decisión.** La prueba corría sin los clasificadores de los productos. Para un desarrollador, el equivalente es ejecutar un agente sin pedir aprobación (`--dangerously-skip-permissions` en Claude Code, Run Everything en Cursor) fuera de un contenedor.

La conclusión del [informe técnico de OpenAI](https://cdn.openai.com/pdf/67869394-cb91-4c12-888c-5cbd85c7814c/OpenAI-Hugging-Face%20Incident-Technical-Report.pdf) es que ningún control aislado debe tratarse como robusto: cada objetivo de seguridad pide controles superpuestos e independientes, de prevención, detección y mitigación.

El caso es extremo, con modelos de investigación y salvaguardas reducidas en cientos de instancias coordinadas. El agente de tu portátil no va a montar un tablero de mensajes. Pero los eslabones que fallaron existen en cualquier configuración, y el vector realista hoy es la instrucción plantada en un README, en una issue o en una página que el agente lee.

## Sandbox para agentes de IA: qué aíslan Claude Code, Cursor y Copilot

El resumen siguiente sigue la documentación oficial de cada herramienta hoy. Los valores por defecto cambian entre versiones, así que verifica en la tuya.

### Claude Code

- El sandbox viene desactivado por defecto. Se activa con `/sandbox` o `sandbox.enabled`, y funciona en macOS, Linux y WSL2. En Windows nativo, los comandos se ejecutan sin sandbox.
- Cubre solo los comandos de shell y los procesos que estos inician. La escritura queda limitada al directorio de trabajo y al temporal, y la red pasa por un proxy con lista de dominios permitidos que empieza vacía.
- Quedan fuera las herramientas de lectura, edición y web (regidas por reglas de permisos), los servidores MCP locales y los hooks. Por defecto, los comandos aún leen la mayor parte de la máquina, incluidos `~/.ssh` y `~/.aws/credentials`, y heredan las variables de entorno, secretos incluidos.
- Para aislar el proceso completo, la documentación indica contenedor, VM o el sandbox runtime, y pide ejecutar `--dangerously-skip-permissions` solo dentro de uno de ellos.

### Cursor

- Hay tres Run Modes: Auto-review (recomendado), Allowlist y Run Everything. El sandbox vale para comandos de terminal, con Seatbelt en macOS y Landlock más seccomp en Linux. En Run Everything no hay sandbox.
- La red del sandbox está bloqueada por defecto, pero el modo predeterminado ("sandbox.json + Defaults") suma dominios integrados, como npm, PyPI y GitHub. "Allow All" lo libera todo.
- Según la documentación, Auto-review no es una frontera de seguridad, y un comando que falla en el sandbox puede reintentarse fuera de él, con revisión del clasificador.

### GitHub Copilot en VS Code

- El sandbox de comandos de terminal usa `chat.agent.sandbox.enabled`, que la página de sandboxing lista con valor predeterminado `off`.
- Activarlo no bloquea la red: `chat.agent.sandbox.network.allowNetwork` viene en `true`. La documentación dice que el sandbox "no es una máquina virtual ni un límite de cuenta de usuario".
- Aprobación y sandbox son controles separados, y la documentación advierte que los alias de shell y la concatenación de comillas pueden eludir las reglas de aprobación automática.

En las tres, el sandbox integrado cubre los comandos de terminal, y la red y la lectura de archivos dependen de la configuración. Para comparar planes y funciones, mira [Claude Code frente a Antigravity y Copilot](/claude-code-vs-antigravity-vs-copilot/).

## Checklist de contención para quien da acceso a agentes de código

**1. Aísla el proceso completo, no solo el comando.** Usa contenedor o VM con el mínimo de privilegios. Un punto de partida para ejecutar los comandos del agente:

```bash
docker run --rm -it \
  --network none \
  --read-only --tmpfs /tmp \
  --cap-drop ALL --security-opt no-new-privileges \
  --pids-limit 256 --memory 2g --cpus 2 \
  --user "$(id -u):$(id -g)" \
  -v "$PWD:/work" -w /work \
  mi-imagen-de-dev
```

Si el propio agente corre dentro del contenedor, necesita alcanzar la API del modelo, así que `--network none` no sirve. Usa entonces el dev container de referencia de Claude Code, con firewall de salida que niega todo por defecto. Un proyecto montado con escritura puede alterarse, así que haz commit antes de cada sesión.

**2. Permiso mínimo.** Libera solo lo que el flujo exige. En Claude Code, en `.claude/settings.json`:

```json
{
  "permissions": {
    "allow": ["Bash(npm run *)", "Bash(git commit *)"],
    "deny": ["Bash(git push *)", "Read(./.env)", "Read(./secrets/**)"]
  }
}
```

Las reglas de comandos tienen límite: según la documentación, un push escrito como `git -C . push` no coincide con `Bash(git push *)`. Por eso el permiso es una capa, y el sandbox es otra. Plan mode y los hooks ayudan con el resto, como muestran las [funciones ocultas de Claude Code](/claude-code-funciones-ocultas/).

**3. Secretos fuera del entorno del agente.** No dejes `.env` en el directorio que el agente ve, usa tokens de alcance mínimo, corta duración y fáciles de rotar, y evita un token único para todo. Los [hábitos de vibe coding](/vibe-coding-6-habitos-sin-desorden/) ya cubren los secretos fuera del repositorio. En Claude Code no hay una lista de credenciales protegidas por defecto, así que declara las tuyas en `~/.claude/settings.json`:

```json
{
  "sandbox": {
    "enabled": true,
    "allowUnsandboxedCommands": false,
    "credentials": {
      "files": [
        { "path": "~/.aws/credentials", "mode": "deny" },
        { "path": "~/.ssh", "mode": "deny" }
      ],
      "envVars": [
        { "name": "GITHUB_TOKEN", "mode": "deny" },
        { "name": "NPM_TOKEN", "mode": "deny" }
      ]
    }
  }
}
```

`allowUnsandboxedCommands: false` desactiva el reintento sin sandbox, la salida de emergencia que ofrece Claude Code cuando un comando falla dentro de él.

**4. Red con lista de permitidos.** Deja que el agente alcance solo lo necesario. En Claude Code:

```json
{
  "sandbox": {
    "enabled": true,
    "network": { "allowedDomains": ["github.com", "*.npmjs.org"] }
  }
}
```

En Cursor, el modo "sandbox.json Only" hace lo mismo; en Copilot, `allowNetwork` en `false` bloquea la salida. Recuerda la lección del caso: todo servicio que el agente alcanza, incluido un espejo de paquetes, forma parte del perímetro. OpenAI pasó a restringir la salida a destinos aprobados.

**5. Registros y revisión de lo que hizo el agente.** Guarda el historial de comandos y lee el `git diff` antes de aceptar. Una alerta solo vale si alguien la lee: en Hugging Face, la correlación automática encontró la señal, pero no la trató como crítica ni activó a la guardia, según la empresa.

**6. Límite de acciones y de tiempo.** Limita procesos, memoria y CPU en el contenedor (como en el ejemplo) y ponle un plazo a la sesión, por ejemplo con `timeout 30m`, además de una forma rápida de interrumpirlo todo.

**7. Revisión humana antes de lo irreversible.** Mantén `git push`, despliegues, eliminaciones masivas y llamadas externas detrás de una aprobación. La documentación de VS Code recuerda que restaurar archivos no deshace comandos de terminal, solicitudes de red ni despliegues ya hechos.

## Checklist final

1. El agente corre en contenedor o VM, no directamente en mi máquina.
2. El sandbox está activado y `allowUnsandboxedCommands` está en `false`.
3. Solo se liberan los comandos del flujo; push, despliegue y eliminación piden aprobación.
4. Ningún `.env`, clave SSH o credencial de nube queda visible para el agente.
5. Los tokens tienen alcance mínimo, vida corta y son rotables.
6. La red sale por una lista de permitidos, también para paquetes.
7. Hay límite de tiempo, procesos y memoria, y una forma de interrumpir.
8. Revisé el diff y el historial de comandos antes de aceptar.

## Conclusión

El caso de Hugging Face no muestra agentes con voluntad propia. Muestra lo que ocurre cuando aislamiento incompleto, credenciales accesibles y permisos amplios se encuentran con un agente que no abandona la tarea. Para quien usa Claude Code, Cursor o Copilot, la respuesta son capas independientes, privilegio mínimo y secretos fuera del alcance del agente.

## Sigue leyendo

- [MCP en Claude Code, Cursor y Copilot: 7 cuidados de seguridad](/mcp-seguridad-agentes-de-codigo/)
- [Inyección de prompt: qué es y por qué todavía no tiene solución](/inyeccion-de-prompt-que-es/)
- [Vibe coding: 6 hábitos para no crear un desorden](/vibe-coding-6-habitos-sin-desorden/)

---

## Fuentes

[OpenAI, informe técnico del incidente](https://cdn.openai.com/pdf/67869394-cb91-4c12-888c-5cbd85c7814c/OpenAI-Hugging-Face%20Incident-Technical-Report.pdf) | [METR, investigación independiente](https://metr.org/blog/2026-08-26-openai-hugging-face-incident-investigation/) | [Hugging Face, comunicado de julio de 2026](https://huggingface.co/blog/security-incident-july-2026) | [Hugging Face, relato técnico de la intrusión](https://huggingface.co/blog/agent-intrusion-technical-timeline) | [Claude Code, sandbox de Bash](https://code.claude.com/docs/en/sandboxing) | [Claude Code, permisos](https://code.claude.com/docs/en/permissions) | [Claude Code, entornos aislados](https://code.claude.com/docs/en/sandbox-environments) | [Cursor, Run Modes y sandbox](https://cursor.com/docs/agent/security/run-modes) | [VS Code, sandbox de agentes](https://code.visualstudio.com/docs/agents/run/agent-sandboxing) | [VS Code, confianza y seguridad](https://code.visualstudio.com/docs/agents/concepts/trust-and-safety) | [GitHub, firewall del agente en la nube de Copilot](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/customize-the-agent-firewall) | [Docker, docker container run](https://docs.docker.com/reference/cli/docker/container/run/)
