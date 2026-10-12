---
title: "MCP en Claude Code, Cursor y Copilot: 7 cuidados de seguridad antes de instalar cualquier servidor"
description: "MCP se volvió la forma estándar de conectar agentes de IA con herramientas, y también una de las mayores superficies de ataque del desarrollo en 2026. Tool poisoning, autoejecución y qué revisar antes de instalar un servidor MCP."
category: "Herramientas de IA"
date: 2026-10-01
translation: "mcp-seguranca-agentes-de-codigo"
updated: 2026-10-12
readingTime: "8 min"
image: "./images/mcp-seguranca-agentes-de-codigo.webp"
imageAlt: "Foto editorial por encima del hombro de un desarrollador de noche frente a un portátil con una terminal desenfocada, con un candado y una llave de seguridad USB sobre la mesa y una lámpara encendida al lado"
---

Si usas Claude Code, Cursor, Copilot o Gemini CLI, probablemente ya instalaste un servidor MCP. El Model Context Protocol es lo que permite que el agente hable con GitHub, la base de datos, Figma, Slack y cualquier otra cosa que tenga un conector. Es práctico, y justamente por eso se convirtió en objetivo.

Entre enero y abril de 2026, investigadores divulgaron [más de 40 CVE contra implementaciones de MCP](https://dev.to/piiiico/mcp-security-vulnerabilities-in-2026-40-cves-and-counting-4pco), en los SDK de Python, TypeScript, Java y Rust. Eso da más o menos una falla nueva cada cuatro días. El problema no es que "MCP sea malo". Es que un servidor MCP ejecuta código en tu máquina, con tus permisos, y el agente confía en lo que dice de sí mismo.

Esta guía explica los tres ataques que más aparecen y termina con siete cuidados prácticos. Si todavía estás armando tu flujo de trabajo con agentes, vale la pena leer antes [las 5 funciones de Claude Code que la mayoría de los devs nunca activa](/claude-code-funciones-ocultas/), porque varias de las defensas de abajo (permisos, hooks, plan mode) vienen de ahí.

## Qué hace realmente un servidor MCP en tu máquina

Un servidor MCP es un programa. Cuando lo configuras, tu editor o CLI lo inicia como un proceso común del sistema operativo, con el mismo acceso que tú tienes a tus archivos, a las claves SSH y a las variables de entorno. No hay sandbox por defecto.

Expone al modelo una lista de herramientas, cada una con un nombre y una **descripción en texto**. El modelo lee esas descripciones para decidir cuándo y cómo llamar a cada herramienta. Esa es la rendija por donde entran los ataques: el texto que debería solo explicar la herramienta también se lee como instrucción.

## Los tres ataques más comunes

### 1. Tool poisoning (envenenamiento de herramienta)

Un servidor malicioso esconde instrucciones dentro de la descripción de una herramienta. La herramienta se presenta como una calculadora inocente, pero el texto oculto le ordena al modelo leer `~/.ssh/id_rsa` y enviar el contenido junto con la siguiente llamada. Tú ves "sumar dos números". El agente ve una orden extra.

El benchmark MCPTox, de agosto de 2025, probó 45 servidores reales en 20 modelos de lenguaje y registró [una tasa media de éxito del ataque de 36,5%](https://labs.cloudsecurityalliance.org/research/csa-research-note-mcp-tool-poisoning-auto-execution-20260701/), con uno de los modelos obedeciendo en el 72,8% de los casos. Un mejor modelo ayuda, pero no lo resuelve.

### 2. Autoejecución al abrir el proyecto

Según una nota de investigación de la Cloud Security Alliance, de julio de 2026, Cursor, Claude Code, Gemini CLI, GitHub Copilot y Amazon Q Developer inician los servidores MCP definidos en la configuración del proyecto apenas abres la carpeta y aceptas el aviso de confianza en el workspace. Después de ese "sí", no hay una segunda aprobación para ejecutar el código.

En la práctica: clonar un repositorio desconocido, abrirlo en el editor y hacer clic en "confiar" puede bastar para ejecutar un comando arbitrario. En junio de 2026, un gusano llamado Miasma plantó configuraciones de MCP con backdoor en 73 repositorios de GitHub, según la misma nota.

### 3. Inyección de comandos en los propios servidores

No todo problema viene de un servidor malintencionado. Muchos están simplemente mal escritos. El análisis de las CVE de 2026 señala que cerca del 43% de las fallas son inyección de comandos de shell, y el transporte STDIO del protocolo no sanea la cadena de comando, lo que hace de la ejecución de comandos la interfaz predeterminada. Incluso servidores de referencia de Anthropic, como `mcp-server-git`, tuvieron vulnerabilidades corregidas en enero de 2026.

## 7 cuidados antes de instalar cualquier servidor MCP

**1. Trata el archivo de configuración de MCP como código.** Los cambios en `.mcp.json` o equivalentes deben pasar por revisión en el pull request, igual que un script de despliegue. Ese fue el vector del ataque MCPoison, divulgado por Check Point en agosto de 2025: una configuración ya aprobada se alteraba después.

**2. Prefiere servidores oficiales y con mantenimiento activo.** Mira quién publica, cuándo fue el último commit y cuántas personas realmente lo usan. Un conector "gratis" de un autor desconocido con pocas descargas es el perfil clásico de riesgo.

**3. Fija la versión.** El caso Postmark, de septiembre de 2025, fue un paquete de correo ampliamente instalado que, en una actualización, empezó a copiar en silencio todo correo enviado por el agente a un dominio del atacante. La actualización automática de un servidor MCP es una actualización automática de código que se ejecuta como tú.

**4. Da el mínimo acceso posible.** Token de lectura en lugar de escritura. Un repositorio en lugar de toda la organización. Una carpeta en lugar del disco. Casi todos los servidores aceptan un alcance menor, y casi nadie lo configura.

**5. Nunca dejes claves de producción en el entorno del agente.** Usa credenciales de desarrollo, de vida corta, y mantén los secretos en el `.env` fuera del alcance del proceso. Es el mismo hábito que ya recomendamos en [Vibe coding sin desorden: 6 hábitos](/vibe-coding-6-habitos-sin-desorden/), solo que ahora con más motivo.

**6. Mantén la aprobación manual de las acciones sensibles.** Escribir archivos, ejecutar comandos, enviar mensajes y hacer push deben pedir confirmación. Desactivar los avisos para "ir más rápido" es cambiar seguridad por segundos. Si lo que te molesta es el costo de uso, el problema es otro, y la [reseña de Claude Code](/claude-code-review-vale-el-precio/) muestra cómo controlar la cuota sin renunciar a esto.

**7. Actualiza el editor y la CLI.** Parte de las fallas citadas ya tiene corrección: por ejemplo, Cursor corrigió las dos CVE de 2025 en la versión 1.3.9. Ejecutar una herramienta antigua es aceptar un riesgo ya resuelto.

## ¿Y si solo uso el chat, sin agentes?

Ahí el riesgo baja bastante, porque no hay un proceso local ejecutando nada por ti. El peligro crece proporcionalmente a cuánta autonomía das. Quien usa solo el chat para generar fragmentos de código, como en los [12 comandos personalizados para programadores](/chatgpt-comandos-para-programadores/), tiene una superficie de ataque mucho menor que quien deja que un agente lea el disco, use la terminal y llame a APIs.

Eso no significa evitar los agentes. Son la parte que más acelera el trabajo, como mostramos en la [comparación entre Claude Code, Antigravity y Copilot](/claude-code-vs-antigravity-vs-copilot/). Significa darles el nivel de confianza que le darías a un pasante nuevo: acceso a lo que necesita, supervisión en lo que importa.

## Lista rápida para pegar en tu README interno

- [ ] Todo servidor MCP usado está en una lista aprobada por el equipo
- [ ] Los cambios en la configuración de MCP exigen revisión
- [ ] Versiones fijadas, sin actualización automática
- [ ] Tokens con alcance mínimo y plazo corto
- [ ] Ninguna clave de producción accesible al agente
- [ ] Las acciones de escritura y los comandos piden confirmación
- [ ] Editor y CLI actualizados

## Preguntas frecuentes

### ¿MCP es inseguro por naturaleza?

No exactamente. El protocolo fue diseñado primero para la funcionalidad, y varios riesgos vienen de decisiones como ejecutar servidores sin aislamiento y confiar en descripciones en texto. OWASP ya publicó una lista MCP Top 10, con riesgos como mala gestión de tokens, escalada de privilegios, tool poisoning, ataques a la cadena de suministro y servidores MCP "sombra" que nadie aprobó. El ecosistema está madurando y las defensas existen.

### ¿Claude Code, Cursor y Copilot se ven afectados por igual?

La nota de la CSA cita las cinco herramientas como vulnerables al patrón de autoejecución de la configuración del proyecto, pero cada una tiene avisos, permisos y correcciones propios. El comportamiento cambia de versión en versión, así que revisa la documentación de tu herramienta y mantén todo actualizado.

### ¿Puedo instalar un MCP de un repositorio que encontré en GitHub?

Solo después de leer el código o de confirmar que viene de una fuente confiable. Si viene de un autor desconocido, ejecútalo en una máquina virtual o contenedor, sin acceso a tus claves, antes de llevarlo a tu entorno real.

### ¿Cómo sé si un servidor MCP ya fue comprometido?

Es difícil sin monitoreo. Algunas señales: descripciones de herramientas que cambiaron después de la instalación, tráfico de red inesperado y pedidos del agente para leer archivos que no tienen relación con la tarea. Por eso fijar la versión y revisar la configuración valen más que intentar detectarlo después.

## Conclusión

MCP no se va a ir, y no debería. Es lo que convierte a un asistente de chat en un agente que realmente hace cosas. Pero cada servidor instalado es un programa con tus permisos, y el agente cree en lo que dice. Los siete cuidados de arriba llevan unos veinte minutos de aplicar y cortan la mayor parte del riesgo real: confianza consciente, alcance mínimo, versión fija y revisión de la configuración.

## Sigue leyendo

- [Estudios de caso de Claude Code, Codex, Copilot y Antigravity](/estudios-de-caso-herramientas-ia-codigo/)
- [Google Antigravity explicado](/google-antigravity/)

---

*Fuentes: [Cloud Security Alliance, MCP Tool Poisoning and IDE Auto-Execution](https://labs.cloudsecurityalliance.org/research/csa-research-note-mcp-tool-poisoning-auto-execution-20260701/), [DEV Community, MCP Security Vulnerabilities in 2026: 40+ CVEs and Counting](https://dev.to/piiiico/mcp-security-vulnerabilities-in-2026-40-cves-and-counting-4pco), [Cycode, OWASP MCP Top 10](https://cycode.com/blog/owasp-mcp-top-10/), [SC Media, Model Context Protocol overhaul introduces new security challenges for developers](https://www.scworld.com/brief/model-context-protocol-overhaul-introduces-new-security-challenges-for-developers).*
