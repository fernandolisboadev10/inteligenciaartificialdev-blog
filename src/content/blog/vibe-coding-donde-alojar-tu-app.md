---
title: "Hice mi app con vibe coding, ¿y ahora dónde la alojo? 5 opciones comparadas"
description: "Tu app hecha con Claude Code, Cursor o Lovable funciona en tu computadora, pero ¿y para el resto del mundo? Comparamos Vercel, GitHub Pages, Netlify, Cloudflare y Render: plan gratuito, letra pequeña y una checklist de pruebas antes de compartir el enlace."
category: "Estudios de caso"
date: 2026-10-22T10:32:00-03:00
translation: "vibe-coding-onde-hospedar-app"
readingTime: "7 min"
image: "./images/vibe-coding-onde-hospedar-app.webp"
imageAlt: "Foto documental de dos desarrolladores en una oficina de startup, uno de ellos señalando un monitor con código y un panel de app en línea mientras su compañera revisa la app en el celular, con otros colegas trabajando al fondo y una gran ventana con vista a la ciudad"
draft: false
---

Imagina el caso más común de 2026: pasaste un fin de semana con Claude Code, Cursor, Lovable o Bolt y saliste con una app que funciona. Corre en tu computadora, el botón guarda, la pantalla se ve bien. Entonces llega la pregunta que nadie respondió en medio del entusiasmo: ¿cómo se convierte eso en un enlace que otra persona pueda abrir en su celular?

Alojar la app es la etapa en la que se traban muchos proyectos hechos con IA. Este texto compara cinco caminos, con lo que ofrece hoy el plan gratuito de cada uno y su letra pequeña. Casi todos publican desde un repositorio de Git, así que, si tu proyecto todavía está desordenado, antes pasa por los [6 hábitos del vibe coding sin desorden](/vibe-coding-6-habitos-sin-desorden/).

## La pregunta que lo decide todo: ¿tu app es estática o tiene backend?

Antes de elegir el servicio, averigua qué construiste:

- **Sitio o app estática:** solo HTML, CSS y JavaScript en el navegador. Una landing page, un portafolio, una calculadora, un juego sencillo. Es el caso más fácil y más barato.
- **Front-end con backend o base de datos:** la app guarda datos, tiene inicio de sesión o llama a una API de IA con una clave secreta. Aquí necesitas un lugar que ejecute código en el servidor, y es donde más se diferencian los planes gratuitos.

Si tienes dudas, pregúntale al asistente que usaste (comparamos algunos en [Claude Code, Antigravity o Copilot](/claude-code-vs-antigravity-vs-copilot/)): "¿Este proyecto necesita servidor o es solo estático? Lista las variables de entorno que usa."

## Antes de publicar: el riesgo que acompaña al vibe coding

Una app hecha por IA suele nacer con la clave de API escrita directamente en el código, porque era el camino más rápido. Si ese repositorio es público, la clave queda a la vista de cualquiera. Nunca subas `.env`, claves de API ni contraseñas a GitHub. Si una clave ya se subió con un commit, borrar el archivo no basta: revócala en el panel del proveedor y genera otra. El hábito 4 del texto sobre [vibe coding sin desorden](/vibe-coding-6-habitos-sin-desorden/) explica cómo evitarlo.

## Las 5 opciones

### 1. Vercel

**Sirve para:** front-end moderno (Next.js, Vite, React) y apps con funciones de servidor ligeras. **Cómo publicar:** crea la cuenta, conecta el repositorio de GitHub, elige el proyecto y haz clic en deploy. Cada push genera un nuevo despliegue, y las demás ramas reciben un enlace de vista previa.

**Plan gratuito (Hobby):** según la [página oficial del plan](https://vercel.com/docs/plans/hobby), incluye 100 GB de transferencia rápida de datos y 1 millón de invocaciones de funciones al mes, además de hasta 50 dominios por proyecto. **Letra pequeña:** Hobby es solo para uso personal y no comercial. Si la app va a generar ingresos o a servir a una empresa, lo correcto es el plan de pago. Superar un límite, por regla general, bloquea el recurso durante 30 días.

### 2. GitHub Pages

**Sirve para:** únicamente sitios estáticos. Nada de backend. **Cómo publicar:** en el repositorio, abre Settings, luego Pages, y elige el origen de la publicación (una rama o un flujo de GitHub Actions). La dirección queda con el formato `usuario.github.io/repositorio`.

**Plan gratuito:** según las [reglas de límites de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits), el sitio publicado puede pesar hasta 1 GB, con un límite flexible de 100 GB de ancho de banda al mes y 10 builds por hora. **Letra pequeña:** en una cuenta GitHub Free, el repositorio tiene que ser público. Todo lo que contiene queda visible, incluido un `.env` olvidado. Además, el servicio no está permitido como alojamiento gratuito para un negocio en línea o una tienda.

### 3. Netlify

**Sirve para:** sitios estáticos y front-ends con funciones sencillas; el flujo es parecido al de Vercel (repositorio conectado, despliegue en cada push, vistas previas). **Cómo publicar:** importa el repositorio y confirma el comando de build.

**Plan gratuito:** hoy se mide en créditos. El plan Free trae 300 al mes; un despliegue a producción cuesta 15 créditos, mientras que cada GB transferido cuesta 10, según la página de precios y el anuncio del nuevo modelo (enlaces en Fuentes). **Letra pequeña:** al llegar al límite, los proyectos se pausan hasta el siguiente ciclo de facturación. Eso significa que muchos despliegues de prueba gastan el crédito del mes y el sitio puede caerse justo cuando compartes el enlace. El plan Free tampoco incluye la detección de claves expuestas que sí tiene el plan Personal.

### 4. Cloudflare (Workers con archivos estáticos, o Pages)

**Sirve para:** sitios estáticos gratis y con mucho tráfico, y apps con algo de lógica de servidor. **Cómo publicar:** conecta el repositorio en el panel de Cloudflare y define el comando de build y la carpeta de salida. La propia documentación de Cloudflare recomienda empezar los proyectos nuevos con Workers, que cubre la mayoría de los usos de Pages.

**Plan gratuito:** las solicitudes a archivos estáticos son gratuitas e ilimitadas, y Pages Free permite 500 builds al mes. El código dinámico en Workers Free tiene 100.000 solicitudes por día. **Letra pequeña:** la interfaz ofrece dos opciones (Pages y Workers) y eso confunde a quien empieza. Además, el código de servidor corre en un entorno propio, no en un Node.js común, así que un backend generado por IA puede necesitar ajustes.

### 5. Render

**Sirve para:** la app con backend de verdad (Node, Python) y base de datos. Es la opción más cercana a "un servidor propio". **Cómo publicar:** conecta el repositorio, elige entre sitio estático o servicio web e indica los comandos de build y de inicio. Los sitios estáticos son gratuitos.

**Plan gratuito:** según la [documentación del plan gratuito](https://render.com/docs/free), cada espacio de trabajo tiene 750 horas de instancia al mes. **Letra pequeña:** el servicio web gratuito se duerme tras 15 minutos sin visitas y tarda cerca de 1 minuto en despertar, así que el primer visitante ve una pantalla de carga. La base de datos Postgres gratuita expira 30 días después de crearse, con 14 días de gracia antes de borrarse. Para el propio Render, la capa gratuita sirve para pruebas y proyectos de pasatiempo, no para producción.

## Comparativa rápida

| Opción | Estático | Backend/base de datos | Letra pequeña principal |
|---|---|---|---|
| Vercel | Sí | Funciones de servidor | Plan gratuito solo para uso no comercial |
| GitHub Pages | Sí | No | Repositorio público en el plan Free |
| Netlify | Sí | Funciones sencillas | Créditos mensuales; el sitio se pausa al agotarlos |
| Cloudflare | Sí, ilimitado | Workers | Dos productos; entorno distinto de Node |
| Render | Sí | Sí, con base de datos | Se duerme a los 15 min; la base gratuita expira en 30 días |

## Si eres X, usa Y

- **Portafolio o landing page sin servidor:** Cloudflare o GitHub Pages (en este último, solo si el repositorio puede ser público sin riesgo).
- **App Next.js o Vite que quieres mostrar rápido, con vistas previas:** Vercel, mientras sea un proyecto personal.
- **App con backend y base de datos, todavía en pruebas:** Render, sabiendo del sueño del servicio y del plazo de la base de datos.
- **Va a generar ingresos o a atender clientes:** ningún plan gratuito es cómodo. Considera el de pago.

## Checklist antes de compartir el enlace

1. **Claves fuera del repositorio.** `.env` en el `.gitignore`, un `.env.example` solo con los nombres, y las claves registradas en el panel del servicio (variables de entorno).
2. **Repositorio revisado.** Busca `sk-`, `key`, `token` y `password` en el código y en el historial antes de hacerlo público.
3. **Prueba en un celular real,** no solo en el modo responsivo del navegador.
4. **Usa el enlace de vista previa** para probar antes de pasar a producción, y mándaselo a dos personas.
5. **Prueba el flujo completo:** registro, formulario, cualquier cosa que guarde datos.
6. **Dominio propio,** si la app va en serio. La dirección por defecto del servicio sirve para probar, pero no para promocionar.
7. **Sabe qué pasa cuando se acaba el plan gratuito:** ¿se pausa, se duerme, expira o cobra? Define un límite de gasto en la clave de la API de IA, para que una visita viral no se convierta en una factura.

## Conclusión

Publicar una app hecha con IA es más sencillo de lo que parece, y el error que más cuesta no es elegir el servicio equivocado, sino publicar una clave de API junto con el código. Empieza por la pregunta estático o backend, elige la opción de la tabla que encaje, pasa la checklist y solo entonces comparte el enlace. Para tener un panorama de lo que se puede esperar de las herramientas de código, vale la pena leer también el [estudio de caso sobre las herramientas de IA para código](/estudios-de-caso-herramientas-ia-codigo/).

## Sigue leyendo

- [Vibe coding sin desorden: 6 hábitos](/vibe-coding-6-habitos-sin-desorden/)
- [Claude Code, Antigravity o Copilot: cuál elegir](/claude-code-vs-antigravity-vs-copilot/)
- [MCP en Claude Code, Cursor y Copilot: 7 cuidados de seguridad](/mcp-seguridad-agentes-de-codigo/)

## Fuentes

*Consultadas el 22 de octubre de 2026; confirma siempre los límites actuales en las páginas oficiales.*

- [Vercel: plan Hobby](https://vercel.com/docs/plans/hobby)
- [GitHub: límites de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)
- [GitHub: crear un sitio en GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Netlify: precios](https://www.netlify.com/pricing/)
- [Netlify: Personal vs Free](https://www.netlify.com/pricing/personal-vs-free)
- [Netlify: anuncio de los planes por créditos](https://www.netlify.com/changelog/netlify-pricing-update-introducing-credit-based-plans/)
- [Cloudflare Pages: límites](https://developers.cloudflare.com/pages/platform/limits/)
- [Cloudflare Workers: precios](https://developers.cloudflare.com/workers/platform/pricing/)
- [Render: plan gratuito](https://render.com/docs/free)
