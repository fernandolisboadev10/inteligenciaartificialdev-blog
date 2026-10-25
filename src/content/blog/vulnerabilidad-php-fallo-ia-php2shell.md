---
title: "Vulnerabilidad PHP hallada con IA: qué es PHP2Shell y qué hacer"
description: "La vulnerabilidad PHP PHP2Shell la encontró la IA. Qué hizo el modelo, qué siguió siendo humano y un checklist para actualizar PHP en tu sitio."
category: "Estudios de caso"
date: 2026-10-25T16:02:00-03:00
translation: "falha-php-vulnerabilidade-ia-php2shell"
readingTime: "8 min"
image: "./images/vulnerabilidad-php-fallo-ia-php2shell.webp"
imageAlt: "Logo de PHP agrietado por una fisura naranja en una sala de servidores, con una esfera de red neuronal azul proyectando un haz de luz sobre el fallo"
draft: false
---

Dos fallos críticos en el núcleo de PHP, bautizados PHP2Shell, obligaron a miles de administradores a actualizar a toda prisa en octubre de 2026. Lo que convierte esta vulnerabilidad PHP en un caso para un blog de inteligencia artificial es cómo se encontró: dos equipos distintos, con modelos de IA, dieron con los errores casi a la vez. La noticia de última hora ya la cubren otros medios; aquí interesa qué hizo la IA, qué siguió dependiendo de personas y qué conviene hacer hoy si tu sitio o tu programa corre en PHP.

## Qué se descubrió: dos CVE, un mismo problema de fondo

Los identificadores son CVE-2026-109618 y CVE-2026-109619. Ambos tienen una puntuación CVSS 4.0 de 9,2 y permiten ejecución remota de código sin autenticación: alguien desde internet podría ejecutar instrucciones en el servidor sin tener una cuenta.

La causa de fondo es el manejo de los errores fatales por falta de memoria. Cuando una petición agota la memoria, PHP se interrumpe con datos a medio inicializar, y la limpieza posterior trata como válido lo que no lo es. En el otro CVE, parte del estado de una petición sobrevive después de liberarse la memoria y lo usa una petición posterior en el mismo proceso. Son fallos de corrupción de memoria, un terreno clásico y delicado.

El riesgo es mayor con `mod_php`, donde el ataque puede dispararse antes de que se ejecute una sola línea de la aplicación. La empresa Wiz, que puso el nombre PHP2Shell, describe una cadena de cuatro errores y demostró la ejecución de código sin autenticación en WordPress, Drupal y Joomla. Los fallos afectan desde PHP 5.4, de 2012, hasta la rama 8.5.

## Cómo la IA encontró el fallo

Hubo dos hallazgos independientes. La firma de seguridad Calif, especializada en pruebas ofensivas con IA, usó GPT-5.6 Sol, de OpenAI, dentro de la iniciativa "Patch the Planet", pensada para detectar y corregir fallos en infraestructura digital. Eligió PHP como objetivo de alto impacto y contactó a la PHP Foundation. Su hallazgo es del 1 de agosto de 2026.

Wiz Research llegó por su cuenta desde el 19 de agosto, con su herramienta Wiz Atlas, Gemini 4 Argon, de Google, y también GPT-5.6 Sol. Según Wiz, Gemini contribuyó a descubrir el fallo, a desarrollar la prueba de concepto, a detectar ataques y a validar el parche. Su propia valoración es que, antes de la IA, ese trabajo manual habría sido difícil de hacer y más aún de escalar.

### Qué hizo la IA y qué siguió siendo humano

Por lo que cuentan las fuentes, el modelo aportó escala y paciencia: recorrer una base de código enorme, plantear hipótesis sobre caminos raros, como el manejo de errores de memoria, y ayudar a armar una prueba que demuestre el problema. Esa es la parte que antes costaba semanas de trabajo especializado.

Lo que siguió siendo humano es lo que rodea al hallazgo:

- Elegir el objetivo y decidir que valía la pena buscar ahí.
- Validar que el resultado era real y no una falsa alarma.
- Notificar de forma responsable al equipo de PHP y coordinar la corrección.
- Decidir cómo se corrige, algo en lo que el propio proyecto tardó años en ponerse de acuerdo.

Esto último importa. Según la crónica de Wikipedia, en 2024 un desarrollador del núcleo de PHP ya había detectado en una auditoría el problema de memoria que está detrás de uno de los fallos. No se corrigió: el equipo no se puso de acuerdo en la solución y todavía no existía un exploit. La IA no inventó un problema nuevo; convirtió uno conocido y relegado en algo demostrable. Las fuentes discrepan en cuántos años llevaba el código vulnerable, así que lo prudente es decir "más de una década".

## Por qué cambia la carrera entre defensores y atacantes

La misma capacidad sirve a los dos bandos. La propia OpenAI, que lideró una coalición con Wiz, Calif, la PHP Foundation, Cloudflare, Quarkslab y agencias estadounidenses, advirtió de que lo que ayuda a los defensores también ayuda a los atacantes a montar herramientas y exploits con rapidez. Según la prensa, la compañía espera más hallazgos de este tipo en los próximos meses. Los investigadores de Calif lo resumieron así: la IA vuelve prácticas cadenas de explotación largas y complejas.

El resultado visible es una ventana mucho más corta. Según la cronología de Wiz, el 24 de agosto se avisó al equipo de seguridad de PHP, el 21 de septiembre el proyecto reconoció el problema y el 21 de octubre se publicaron los parches. Pero la explotación no esperó: Amazon registró un intento de ataque el 17 de octubre, cuatro días antes de la divulgación, y Cloudflare informó de decenas de miles de intentos en los primeros 45 minutos tras la noticia. La ventana para actualizar se mide en horas, no en semanas.

Ahora, dos aclaraciones para no confundirse con los titulares:

- **Encontrar el fallo con IA no prueba ataques conducidos por IA.** Las fuentes no dicen que los ataques observados los ejecutara una inteligencia artificial, ni que haya habido filtración de datos por esta vía. Dicen que la IA aceleró el descubrimiento.
- **"El 70 % de internet" es la parte que usa PHP, no la vulnerable.** La cifra se refiere a la proporción de sitios que declaran PHP como lenguaje de servidor. Muchos ya están corregidos o lo estarán pronto. Palo Alto Networks estimó 22,6 millones de instancias potencialmente vulnerables, según Fortune: una cifra enorme, pero distinta.

## El apagón preventivo en Europa

Varios organismos prefirieron apagar antes que arriesgarse. Se desconectaron por precaución, entre otros, el portal del gobierno de los Países Bajos, los sitios del Ministerio del Interior de Francia, servicios de gobiernos de Dinamarca y Finlandia y administraciones locales y la policía metropolitana en el Reino Unido. La NSA llegó a aconsejar sacar de línea lo que no pudiera actualizarse.

Un sitio caído no equivale a un sitio hackeado: puede estar en mantenimiento o aislado por prudencia. Es lo que se hizo en esos casos. En Brasil también se vieron servicios públicos inaccesibles el 21 de octubre, como los de la Anatel, según Tecnoblog.

## Versiones corregidas de PHP

El proyecto publicó el 21 de octubre las versiones que cierran los dos fallos. La única solución completa es actualizar:

| Rama | Versión corregida | Nota |
|---|---|---|
| PHP 8.5 | 8.5.12 | Rama más reciente |
| PHP 8.4 | 8.4.27 | |
| PHP 8.3 | 8.3.36 | |
| PHP 8.2 | 8.2.35 | Termina su soporte el 31 de diciembre de 2026 |
| PHP 8.1 y anteriores | Sin versión oficial | Solo backports mínimos de código; depende de tu proveedor |

Hay además un detalle que despista. En Ubuntu, Debian o Red Hat, la corrección puede llegar sin cambiar el número de versión que muestra PHP. Si ves "8.3.30" no concluyas que estás sin parchear: confirma con tu proveedor de hosting o la distribución si el paquete incluye el parche.

## Checklist si tienes un sitio en PHP o WordPress

Un visitante cualquiera no tiene que hacer nada en su ordenador ni en su navegador: el fallo está en el servidor. Los pasos son para quien administra el sitio.

1. **Averigua qué PHP corre.** En WordPress, ve a Herramientas, Salud del sitio, pestaña Información y abre la sección Servidor. En el servidor, `php -v`. Muchos paneles de hosting lo muestran también.
2. **Actualiza PHP, no solo WordPress.** Actualizar el CMS o los plugins no cambia la versión de PHP, que es una configuración del servidor o del hosting.
3. **Haz copia de seguridad y prueba la compatibilidad** antes de saltar de rama.
4. **Reinicia PHP-FPM o Apache y comprueba que el parche está en uso**, no solo programado.
5. **Si usas 8.1 o anterior**, no hay soporte oficial. Migra o pide a tu proveedor un paquete con la corrección.
6. **Si no puedes actualizar hoy**, aplica las mitigaciones temporales de php.net y pon un WAF como Cloudflare delante. Es un paliativo, no sustituye el parche.

Entre las mitigaciones que indica el proyecto está desactivar `session.upload_progress.enabled`, configurándolo en el `php.ini` o en el pool de PHP-FPM y no con `ini_set()`, y reiniciar todos los procesos. Para el otro fallo recomienda ajustar `memory_limit` y limitar el tamaño de las peticiones, y desaconseja `RLIMIT_AS`. Los detalles exactos están en el [aviso oficial de php.net](https://www.php.net/archive/2026.php) y conviene seguirlos al pie de la letra.

### Señales que vigilar antes de parchear

Wiz menciona indicios que pueden aparecer en los registros: peticiones multipart inusuales seguidas de errores de límite de memoria, respuestas HTTP 500 repetidas, cookies PHPSESSID anormalmente grandes y reinicios raros de los procesos de PHP.

## Checklist si desarrollas en PHP

- Incluye la versión de PHP en tus rutinas de actualización, igual que las dependencias de Composer. Cuando el runtime se queda atrás, ningún cambio en tu código lo arregla.
- Usa imágenes de contenedor con la etiqueta de versión fijada y reconstruye con el parche; una imagen antigua en producción mantiene el fallo.
- Revisa las configuraciones de sesión: la carga de progreso (`upload_progress`) está en el centro de uno de los fallos y, por el aviso del 23 de octubre sobre CVE-2026-115560, php.net recomienda dejarla en 0 hasta el siguiente bugfix.
- Documenta qué sitios y herramientas internas corren PHP. Las interfaces de gestión olvidadas y los sistemas sin soporte son el terreno favorito de quien explota estos fallos.

## Qué enseña el caso a quien trabaja con IA

Revisar código con IA es útil, y este caso muestra hasta dónde llega. Pero no reemplaza el mantenimiento básico: actualizar el runtime, vigilar los avisos de seguridad y reducir lo expuesto. Si publicas aplicaciones generadas con ayuda de IA en un hosting con PHP o WordPress, el riesgo del servidor es tuyo, hayas escrito el código o no. Lo comentamos en [dónde alojar tu app de vibe coding](/vibe-coding-donde-alojar-tu-app/).

El ritmo de este mes se vio también en el [caso de los agentes que se escaparon del sandbox y vulneraron Hugging Face](/hugging-face-hackeado-sandbox-agentes-ia/). Y si te interesa cómo se está usando la IA para revisar código a escala, [Claude Code Review](/claude-code-review-vale-el-precio/) es una referencia para entender el coste real de ese tipo de herramientas, mientras que los modelos que menciona este caso se explican en la [guía de los modelos Sol, Terra y Luna](/chatgpt-modelos-sol-terra-luna/).

El [relato técnico de Wiz sobre PHP2Shell](https://www.wiz.io/blog/php2shell-php-rce) es la fuente más detallada si quieres ver la cadena completa de errores, y [Fortune](https://fortune.com/2026/10/21/ai-tools-discovered-the-php-vulnerability-that-could-take-down-70-of-the-internet-now-the-race-is-on-to-patch-it-before-ai-powered-hackers-attack/) explica la carrera por parchear antes de que lleguen los ataques.

## Una nota sobre las fechas

Los datos de este artículo se verificaron el 25 de octubre de 2026. Las versiones, las cifras y los detalles de las mitigaciones pueden cambiar: php.net prometió un nuevo aviso sobre CVE-2026-115560 en la próxima versión. Antes de tocar tu servidor, consulta siempre el aviso oficial vigente.

## Sigue leyendo

- [Sandbox para agentes de IA: lo que enseña el caso Hugging Face](/hugging-face-hackeado-sandbox-agentes-ia/)
- [MCP en Claude Code, Cursor y Copilot: 7 cuidados de seguridad](/mcp-seguridad-agentes-de-codigo/)
- [Vibe coding: dónde alojar tu app](/vibe-coding-donde-alojar-tu-app/)

---

## Fuentes

[PHP.net, avisos de octubre de 2026](https://www.php.net/archive/2026.php) | [Wiz Research, PHP2Shell](https://www.wiz.io/blog/php2shell-php-rce) | [Fortune, 21/10/2026](https://fortune.com/2026/10/21/ai-tools-discovered-the-php-vulnerability-that-could-take-down-70-of-the-internet-now-the-race-is-on-to-patch-it-before-ai-powered-hackers-attack/) | [CNBC, 23/10/2026](https://www.cnbc.com/2026/10/23/php-vulnerabilities-ai-cybersecurity.html) | [Wikipedia, PHP2Shell](https://en.wikipedia.org/wiki/PHP2Shell) | [WWWhatsnew, qué pasa si no actualizas PHP](https://wwwhatsnew.com/2026/10/21/php2shell-que-pasa-si-no-actualizas-php/) | [Noticias RCN, la IA detecta un grave fallo de seguridad](https://www.noticiasrcn.com/tendencias/ia-detecta-grave-fallo-de-seguridad-el-70-de-los-sitios-web-en-riesgo-1073857) | [Ecosistema Startup](https://ecosistemastartup.com/php2shell-fallo-critico-en-php-afecta-al-70-de-la-web/) | [Malwarebytes](https://www.malwarebytes.com/pt-br/blog/bugs/2026/10/php2shell-why-websites-are-going-offline-for-emergency-security-updates) | [WPBeginner](https://www.wpbeginner.com/pt/news/critical-php-flaws-found-how-to-protect-your-wordpress-site/) | [Tecnoblog](https://tecnoblog.net/noticias/falha-grave-no-php-pode-tirar-sites-e-servicos-publicos-do-ar/) | [Exame](https://exame.com/tecnologia/ia-derrubou-sites-entenda-as-falhas-no-php-e-o-risco-para-quem-navega/)
