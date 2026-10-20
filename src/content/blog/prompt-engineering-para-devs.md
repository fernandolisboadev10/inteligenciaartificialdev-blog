---
title: "Prompt Engineering para Devs: Qué Funciona, Qué Se Volvió Mito y Cómo Medir"
description: "Prompt Engineering para devs sin frases mágicas: contrato de entrada y salida, JSON validado, versionado y una prueba real con 5 modelos y 24 casos."
category: "Prompts"
date: 2026-10-20T09:59:00-03:00
translation: "prompt-engineering-para-devs"
readingTime: "9 min"
image: "./images/prompt-engineering-para-devs.webp"
imageAlt: "Foto editorial del escritorio de un desarrollador con un portátil que muestra un editor de código y una tabla de resultados de pruebas, junto a cuadernos con anotaciones a mano, luz suave de atardecer y poca profundidad de campo"
draft: false
---

Prompt Engineering para devs no consiste en descubrir la frase correcta. Consiste en tratar el prompt como cualquier otra interfaz de tu sistema: entrada definida, salida verificable, versión en el repositorio y una prueba que avise cuando algo se rompe. Si estás en el camino que describimos en [profesiones de IA en Latinoamérica y España](/profesiones-de-ia-en-latinoamerica-y-espana/), esta es probablemente la habilidad que más vas a usar en el día a día.

Para no quedarme solo en la opinión, hice un experimento: el mismo prompt de extracción de datos en tres versiones y cinco modelos, con respuestas de referencia. El método, los números y las limitaciones están más abajo.

## Prompt Engineering para Devs Hoy: Qué Cambió y Qué Se Volvió Mito

En 2023 el repertorio estaba hecho de trucos: "eres un experto de clase mundial", propinas imaginarias, "respira hondo", amenazas, mayúsculas. Los modelos de razonamiento actuales hacen por su cuenta el paso que esos trucos intentaban forzar. La guía de prompts de OpenAI describe la diferencia: los modelos de razonamiento funcionan bien con objetivos de alto nivel, mientras que los modelos GPT convencionales piden instrucciones explícitas y precisas.

En la práctica, esto es lo que se volvió mito:

- **La frase mágica.** Ninguna expresión sustituye especificar lo que quieres.
- **"Piensa paso a paso" en todo.** En un modelo que ya razona, prueba si la instrucción todavía ayuda. Puede que solo gaste tokens.
- **El prompt gigante e intocable.** Con demasiadas reglas, nadie sabe cuál provocó el error.

Lo que sigue vigente es la ingeniería: objetivo claro, instrucción separada del dato, formato de salida fijo y medición. Es un contrato entre tu código y el modelo.

## Anatomía de un Prompt de Producción

Un prompt de producción suele tener seis bloques: rol (system), contexto, tarea, restricciones, formato de salida y ejemplos. El rol puede ser una línea. Lo que pesa es la **tarea**, las **restricciones** (incluido qué hacer cuando la información no existe) y el **formato**.

El prompt de abajo es la versión B del experimento, con el texto condensado. Define cada campo, resuelve el caso "no está en el texto" y prohíbe cualquier texto fuera del JSON. Una aclaración importante: el experimento se hizo con correos en portugués de una tienda online brasileña, así que dejé el prompt en portugués, tal como se probó. Traducirlo habría sido medir otra cosa. El patrón se aplica igual en otros idiomas: escribe las instrucciones y las reglas de `null` en el idioma de tus datos y vuelve a medir.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">extracao-pedidos.txt</span>
    <button class="copy-btn" data-copy-target="prompt-extracao">Copiar</button>
  </div>
  <pre id="prompt-extracao"><code>Você extrai dados de e-mails de clientes de uma loja online brasileira.

Devolva SOMENTE um objeto JSON, sem texto antes ou depois e sem bloco de código, com exatamente estas chaves:
- "cliente": nome de quem escreve; null se não houver
- "pedido": número do pedido, só dígitos, string; null se não houver (protocolo, CPF, telefone e CEP não contam)
- "produto": produto principal; null se não houver
- "valor": total do pedido já feito, em reais, número com ponto decimal; null se não houver compra
- "data": data da compra, AAAA-MM-DD (ano 2026 se ausente); null se não aparecer (entrega não conta)
- "intencao": "reclamacao" (problema sem pedir troca nem cancelamento), "duvida", "cancelamento", "elogio" ou "troca"

Se uma informação não está no texto, use null. Não invente nada.

&lt;email&gt;
{{texto_do_email}}
&lt;/email&gt;</code></pre>
</div>

La etiqueta alrededor del correo ayuda al modelo a separar el dato de la instrucción, pero no es una barrera: un texto malicioso todavía puede intentar pasar por orden, como explicamos en [inyección de prompt](/inyeccion-de-prompt-que-es/). Valida siempre la salida.

## Técnicas con Criterio de Uso

| Técnica | Úsala cuando | Evítala cuando | Antes → después |
|---|---|---|---|
| Zero-shot | La tarea es común y el formato es simple | La regla es sutil o el formato es poco habitual | "Clasifica este ticket" → "Clasifica en bug, mejora o duda. Responde solo con la etiqueta." |
| Few-shot | El formato o la regla es difícil de describir con palabras | Los ejemplos se parecen entre sí y vician al modelo | Añadir 3 ejemplos variados, incluido un caso con campo ausente |
| Chain-of-thought | Problema de varios pasos en un modelo que no razona por sí solo | El modelo ya razona, o la salida debe ser solo JSON | "Resuelve" → "Muestra el razonamiento y, al final, la respuesta en una línea" |
| Descomposición | La tarea mezcla subtareas independientes | La tarea es simple | Un prompt de "analiza el contrato" se convierte en extracción de cláusulas, clasificación de riesgo y resumen |
| Prompt chaining | Cada paso depende del anterior y se puede validar | La latencia y el costo son críticos | Extraer → validar → solo entonces redactar la respuesta |

La base del chain-of-thought está en el paper de [Wei et al. (2022)](https://arxiv.org/abs/2201.11903), que muestra que los ejemplos con pasos intermedios mejoran el desempeño en tareas de aritmética, sentido común y razonamiento simbólico, y describe el efecto como algo que aparece en modelos suficientemente grandes. En los modelos de razonamiento, esto muchas veces ya viene incorporado.

Para prompts cortos de uso diario, mira los [12 comandos personalizados para programadores](/chatgpt-comandos-para-programadores/). Aquí el foco es el prompt que corre dentro de un sistema.

## Salida Estructurada: JSON, Schema y Fallos

Si otro código va a consumir la respuesta, el texto libre no sirve. Tres capas ayudan:

1. **Pide el formato en el prompt** y, cuando la API del proveedor ofrezca un modo de salida estructurada con schema, úsalo.
2. **Valida en tu código** con Pydantic, Zod o JSON Schema: claves exactas, tipos, valores de enum.
3. **Trata el fallo** como un caso normal, no como una excepción rara.

```python
for intento in range(3):
    texto = llamar_modelo(prompt)
    try:
        dato = Pedido.model_validate_json(texto)  # Pydantic
        break
    except ValidationError as error:
        prompt = prompt + f"\n\nTu respuesta anterior no era válida: {error}. Corrígela."
else:
    enviar_a_revision_humana(email)
```

Limita los intentos, registra cada fallo y define un destino para lo que no pasó. Validar el formato no valida el contenido: un JSON perfecto puede traer el valor equivocado, y por eso existe la siguiente sección.

## Parámetros Que Importan

- **Temperatura:** para extracción y clasificación, usa un valor bajo. En las pruebas de abajo usé 0,3. Algunos modelos ignoran el parámetro: la documentación de estrategias de prompts de Google indica que los modelos Gemini 4 y 3.6 o posteriores ignoran valores personalizados de temperatura, top_p y top_k.
- **Top-p:** ajusta la temperatura o el top-p, no ambos, para saber qué cambió el resultado.
- **Límite de tokens de salida:** es la trampa más cara. Mira lo que pasó en el experimento más adelante.
- **Costo:** tokens de entrada más tokens de salida. Los ejemplos aumentan la entrada, pero pueden acortar la salida.

## Cómo Probar y Medir

Anthropic recomienda tener, antes de tocar el prompt, [criterios de éxito definidos y una forma empírica de probarlos](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview). En la práctica:

- **Un conjunto de casos con respuesta de referencia.** De 20 a 50 ya ayuda, y debe incluir los casos incómodos: campo ausente, dato parecido a otro, texto desordenado.
- **Una métrica por campo**, no solo "acertó todo", para saber dónde falla.
- **Varias ejecuciones**, porque la respuesta varía de una llamada a otra.
- **Comparación entre versiones y entre modelos.** Cambiar de modelo es un cambio de código: corre el conjunto de casos antes de promoverlo.

### El Experimento: Tres Versiones del Mismo Prompt, Cinco Modelos

**Método.** Escribí 24 correos de soporte sintéticos en portugués, con respuesta de referencia para 6 campos (cliente, pedido, producto, valor, fecha de la compra e intención). Las trampas: CPF, teléfono y protocolo que no son un pedido, pago en cuotas, valor escrito en palabras, fecha de entrega junto a la fecha de compra, precio de un producto que aún no se compró y correo sin nombre. Tres versiones: **A**, ingenua ("Extraia os dados deste e-mail: nome, pedido, produto, valor, data e o que o cliente quer"); **B**, el prompt estructurado de la sección 2; **C**, igual que B más 3 ejemplos. Cada versión corrió 3 veces por modelo, con temperatura 0,3, vía OpenRouter el 19/10/2026. Modelos: Claude Haiku 5.5, GPT-6 Luna, Qwen3.7 Flash, Ling 3.1 Flash y Granite 4.2 8B. El gasto total, con pruebas descartadas, fue de unos US$ 0,39.

**Resultado de la versión A.** Ninguna de las 360 respuestas (5 modelos × 24 casos × 3 ejecuciones) llegó en JSON. Todas eran texto en Markdown, que el código no consume sin otra etapa de interpretación. Mirando solo el contenido, con una revisión flexible (el valor aparece en algún punto del texto), nombre, pedido, producto, valor y fecha estaban correctos en prácticamente todos los casos. La excepción fue la intención, reconocida en entre el 78% y el 92% de las respuestas por una heurística de palabras clave mía, que puede subestimar.

**Resultado de las versiones B y C**, promedio de acierto por campo, corrección estricta contra la referencia:

| Modelo | B (estructura + formato) | C (B + 3 ejemplos) |
|---|---|---|
| Claude Haiku 5.5 | 100% | 100% |
| GPT-6 Luna | 100% | 100% |
| Qwen3.7 Flash | 99,5% | 99,5% |
| Ling 3.1 Flash | 96,5% | 99,8% |
| Granite 4.2 8B | 90,3% | 94,4% |

Lo que esto muestra, con honestidad:

- **La estructura trajo una salida utilizable, no un contenido mejor.** En esta tarea el prompt ingenuo ya extraía bien. La ganancia fue formato fijo, enum para la intención y tratamiento del campo ausente.
- **El few-shot solo ayudó al modelo más pequeño.** En Ling, del 96,5% al 99,8%. Haiku y Luna ya estaban en el techo.
- **Un ejemplo no sustituye a la prueba.** Qwen falló el mismo caso en 2 de las 3 ejecuciones de B y de C: la clienta preguntaba por el plazo de una silla que todavía no había comprado, y el modelo puso el precio de escaparate (1499) en "valor". En la versión C esto persistió, a pesar de que había un ejemplo parecido en el prompt.
- **El límite de tokens rompió más que el prompt.** En Granite, toda respuesta que llegó estaba correcta; el 90,3% y el 94,4% vienen de respuestas vacías (7 y 4 de 72) por agotar el límite de 8.000 tokens. En una primera ronda con límite de 1.500, Qwen y Granite devolvieron respuestas vacías en 59 a 64 de las 72 llamadas estructuradas. Por su comportamiento, parecen gastar tokens en razonamiento interno antes de responder.

**Limitaciones.** Datos sintéticos, tarea simple, solo portugués, y la referencia y el script los escribí yo. Las notas cercanas al 100% no valen para tareas difíciles, y la diferencia entre B y C, salvo en Ling, está dentro del ruido. Otra prueba con un solo prompt y varios modelos: [el mismo prompt de landing page](/mismo-prompt-landing-page-ia/). En costo, Haiku quedó en torno a US$ 0,00015 por correo en las tres versiones.

## Versionar y Mantener Prompts

Trata el prompt como código de producción:

- **Un archivo en el repositorio**, no un string perdido en medio de una función, con variables explícitas como `{{texto_do_email}}`, la del prompt de arriba.
- **Revisión en pull request**, con el resultado de la evaluación en el PR y un changelog corto: qué cambió y cuál fue la nota antes y después.
- **Fija la versión del modelo.** OpenAI recomienda [fijar las aplicaciones de producción a un snapshot con fecha](https://developers.openai.com/api/docs/guides/prompt-engineering), porque los snapshots de la misma familia pueden comportarse de forma distinta. La evaluación corre en cada cambio.
- **Contexto y RAG:** inyecta solo los fragmentos relevantes, delimitados como dato, y vuelve a medir cuando cambie la búsqueda.

## Errores Comunes y Checklist Final

Los errores más comunes: ajustar el prompt sin un conjunto de casos, tomar un acierto aislado como prueba, olvidar el caso "no encontrado", usar un límite de tokens demasiado bajo y cambiar de modelo sin correr la evaluación. Antes de subir un prompt, comprueba:

1. ¿La tarea, las restricciones y el formato de salida están escritos, sin ambigüedad?
2. ¿Hay una instrucción para cuando falta la información?
3. ¿La salida se valida con schema y los fallos tienen destino?
4. ¿Hay un conjunto de casos con respuesta de referencia y una métrica por campo?
5. ¿El límite de tokens alcanza para el razonamiento más la respuesta?
6. ¿El prompt está en el repositorio, con revisión y la versión del modelo fijada?
7. ¿El dato externo se trata como dato, no como orden?

*Fuentes: [Anthropic, Prompt engineering overview](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview), [OpenAI, Prompt engineering](https://developers.openai.com/api/docs/guides/prompt-engineering), [Google, Prompt design strategies (Gemini API)](https://ai.google.dev/gemini-api/docs/prompting-strategies), [Wei et al., Chain-of-Thought Prompting Elicits Reasoning in Large Language Models (2022)](https://arxiv.org/abs/2201.11903). Consultadas el 19 de octubre de 2026. Experimento propio, realizado el 19 de octubre de 2026.*
