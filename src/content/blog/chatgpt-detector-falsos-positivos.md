---
title: "Alimentamos detectores de IA con redacciones escritas por humanos. Marcaron a estudiantes reales como tramposos."
description: "Los detectores de IA marcaron un ensayo de 1841 y un artículo de Wikipedia de 2012 como 'falsos' en nuestra propia prueba. Estos son los datos reales sobre falsos positivos y cómo protegerte."
category: "Tutoriales"
date: 2026-09-08
updated: 2026-10-12
translation: "chatgpt-detector-falsos-positivos"
readingTime: "9 min"
image: "./images/chatgpt-detector-falsos-positivos.webp"
imageAlt: "Foto editorial en primer plano de una redacción impresa con frases resaltadas en rojo y un bolígrafo rojo encima, junto a un portátil que muestra una puntuación de detección de IA desenfocada"
---

En febrero de 2026, un juez federal ordenó que la Adelphi University borrara una acusación de plagio contra un estudiante llamado Orion Newby. Su profesor había pasado un trabajo de Civilizaciones del Mundo por el detector de IA de Turnitin, que marcó el texto como generado por IA. Newby, que recibe apoyo a través del programa de la universidad para estudiantes con discapacidades de aprendizaje y neurológicas, presentó verificaciones independientes de Grammarly y ZeroGPT, ambas afirmando que el ensayo fue escrito por un humano. Aun así, Adelphi lo sancionó. Hizo falta una demanda judicial y seis cifras en costos legales para revertirlo.

Ese caso se cita hoy como la primera vez que un estudiante ganó una demanda federal por una falsa acusación de plagio con IA. No es un error aislado. Para ver el tamaño real del problema, hicimos nuestra propia prueba: escritura humana real, con décadas de antigüedad, pasada por un detector de IA en funcionamiento, junto a texto que generamos nosotros mismos.

## Qué probamos

Armamos cuatro muestras, cada una claramente identificada por lo que realmente es:

- **Muestra A — Humana, literaria**: la apertura del ensayo "Self-Reliance" de Ralph Waldo Emerson, publicado en 1841. Inequívocamente humana, escrita 179 años antes de que existiera ChatGPT.
- **Muestra B — Humana, simple/enciclopédica**: el párrafo inicial del artículo "Fotosíntesis" de Wikipedia, tomado de una revisión de mayo de 2012, mucho antes de que los grandes modelos de lenguaje escribieran contenido para la web. Usado bajo la licencia CC BY-SA de Wikipedia.
- **Muestra C — 100% generada por IA**: un párrafo que explica cómo funciona la memoria inmunológica, escrito por Claude (el modelo de IA de Anthropic) para esta prueba, sin ninguna edición.
- **Muestra D — Generada por IA y luego editada**: el mismo párrafo de la Muestra C, reescrito con contracciones, transiciones informales y una estructura de frases más suelta, simulando a un estudiante que hizo el borrador con IA y luego lo reescribió con su propia voz.

Pasamos las cuatro por el detector gratuito de IA de Sapling, una de las herramientas más consolidadas del sector. También probamos GPTZero, ZeroGPT y el detector de Quillbot, pero no pudimos completar pruebas anónimas en ninguno: cada uno exigía una cuenta para ver el resultado o bloqueaba por completo el envío automatizado, lo cual ya merece destacarse; estas herramientas se volvieron más difíciles de verificar de forma casual desde 2023, no más fáciles.

## Los resultados

<div style="max-width:900px;margin:24px auto;overflow-x:auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table style="width:100%;border-collapse:collapse;background:#ffffff;box-shadow:0 1px 4px rgba(0,0,0,0.08);border-radius:8px;overflow:hidden;">
    <thead>
      <tr style="background:var(--ink-deep);color:#ffffff;">
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Muestra</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Escrita en realidad por</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Veredicto de Sapling</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;">A — Emerson, 1841</td>
        <td style="padding:12px 16px;">Humano</td>
        <td style="padding:12px 16px;font-weight:600;color:var(--rose);">84,2% Falso</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;">B — Wikipedia, 2012</td>
        <td style="padding:12px 16px;">Humano</td>
        <td style="padding:12px 16px;font-weight:600;color:var(--rose);">100,0% Falso</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;">C — Párrafo de IA</td>
        <td style="padding:12px 16px;">IA</td>
        <td style="padding:12px 16px;font-weight:600;">100,0% Falso</td>
      </tr>
      <tr>
        <td style="padding:12px 16px;">D — IA, luego editado</td>
        <td style="padding:12px 16px;">IA + edición humana</td>
        <td style="padding:12px 16px;font-weight:600;">100,0% Falso</td>
      </tr>
    </tbody>
  </table>
</div>

"Falso" (Fake) es la etiqueta de la propia Sapling para el texto que cree generado por IA. En nuestra pequeña prueba, marcó las dos muestras humanas con la misma confianza que el texto de IA de verdad. Acertó con nuestros dos párrafos de IA, incluido el levemente editado, pero eso no es mucho consuelo cuando también llamó "falso" a un ensayo de 1841 con 84% de confianza.

Queremos ser transparentes sobre los límites: es un detector, cuatro muestras, una sola ronda. No es una investigación científica. Es una demostración de que un detector real, comercializado hoy, puede fallar con escritura humana auténtica de la forma más básica posible, exactamente el tipo de fallo descrito en la investigación de abajo, a una escala mucho mayor.

## ¿Los detectores de IA realmente funcionan?

Nuestra prueba es un eco pequeño e informal de un problema mucho mayor y bien documentado.

Un [estudio de Stanford](https://www.sciencedirect.com/science/article/pii/S2666389923001307) publicado en la revista *Patterns* pasó 91 redacciones reales del TOEFL, escritas por hablantes no nativos de inglés, por siete detectores comerciales de IA. En promedio, **el 61,3% fue marcado como generado por IA**. Las redacciones de hablantes nativos de inglés fueron marcadas solo el **5,1%** de las veces. La explicación de los investigadores: la escritura de no nativos tiende a usar estructuras de frase más simples y predecibles, y los detectores confunden esa baja variabilidad con la "firma" de una máquina, no de una persona.

Ese sesgo se acumula. [Common Sense Media](https://getcoai.com/news/ai-detection-tools-disadvantage-black-students-study-finds/) entrevistó a más de mil adolescentes estadounidenses y descubrió que los estudiantes negros fueron acusados falsamente de usar IA a una tasa aproximadamente **el doble** que los estudiantes blancos o latinos: 20% frente a 7% y 10%. Otras investigaciones encontraron disparidades parecidas en estudiantes neurodivergentes, incluidos los que tienen TDAH y autismo.

Turnitin, el detector más usado en las escuelas de Estados Unidos, afirmaba originalmente una **tasa de falsos positivos del 1%**. En junio de 2023, la empresa reconoció que la tasa real era más alta, sin publicar una cifra corregida. Las [propias pruebas del Washington Post](https://lawlibguides.sandiego.edu/c.php?g=1443311&p=10721367) encontraron una tasa de falsos positivos más cercana al 50% en una muestra menor. Incluso OpenAI, la empresa que popularizó el texto de IA que estas herramientas intentan detectar, abandonó su propio clasificador: identificaba correctamente solo el 26% del texto escrito por IA, marcaba por error texto humano como IA el 9% de las veces, y OpenAI [descontinuó la herramienta por completo en julio de 2023](https://www.searchenginejournal.com/openai-shuts-down-flawed-ai-detector/492565/) por su "baja tasa de precisión".

La respuesta institucional siguió a los datos. Más de 25 universidades, incluidas MIT, Yale, NYU, UC Berkeley y Vanderbilt, prohibieron o restringieron el uso de detectores de IA en casos de mala conducta académica. La University of Pittsburgh desactivó por completo el detector de IA de Turnitin, al concluir que la herramienta no era lo bastante confiable para usarse sin un riesgo sustancial de acusaciones falsas.

## Cómo protegerte de un falso positivo

Si escribes tu propio trabajo y aun así te preocupa que te marquen, algunos hábitos realmente ayudan:

- **Escribe y guarda en una plataforma con historial de versiones.** El historial de versiones de Google Docs, o cualquier herramienta que registre la fecha de tus borradores, es una evidencia mucho más fuerte que la puntuación de un detector, en cualquier dirección. Es exactamente ese tipo de evidencia la que ayudó en el caso de Newby.
- **Conserva tu rastro de investigación.** El historial del navegador, las fuentes guardadas y las notas que muestran tu trabajo desarrollándose con el tiempo respaldan mejor un "sí, yo escribí esto" que cualquier cosa hecha después del hecho.
- **No confíes en un detector para defenderte, y no dejes que uno te acuse tampoco.** Si un detector marca tu trabajo, pregunta qué otra evidencia se está usando. Una puntuación porcentual por sí sola, en cualquier dirección, no prueba nada, según las propias universidades que ya llegaron a esa conclusión.
- **Si usaste IA y editaste por tu cuenta, esa edición puede no salvarte.** Nuestra Muestra D muestra que un párrafo de IA levemente reescrito fue marcado con la misma fuerza que el no editado. Una paráfrasis ligera no vence a estas herramientas de forma confiable, en ninguna de las dos direcciones, ya sea que lo uses para ocultar el uso de IA o que temas que oculte una escritura humana honesta.
- **Conoce la política real de tu institución**, no solo su software. Muchas escuelas, siguiendo el ejemplo de Pitt y Vanderbilt, ahora exigen que la puntuación de un detector esté respaldada por otras evidencias antes de cualquier acción disciplinaria. Si la tuya no lo dice explícitamente, pregunta.

## Preguntas frecuentes

### ¿Los detectores de IA pueden distinguir de forma confiable la escritura humana de la escrita por IA?

No de manera consistente. Nuestra propia prueba pequeña marcó dos textos inequívocamente humanos como "Falso" con la misma confianza que el texto de IA de verdad. Investigaciones revisadas por pares, con muestras mucho mayores, lo confirman, con tasas de falsos positivos que van de cerca del 5% hasta el 61%, según el perfil de quien escribe.

### ¿Qué detector de IA es más preciso?

Ninguno de los principales, incluidos Turnitin, GPTZero, Sapling y ZeroGPT, ha publicado tasas de falsos positivos lo bastante bajas como para que las universidades traten una puntuación como prueba aislada. Más de 25 grandes universidades ahora exigen evidencias adicionales antes de actuar según el resultado de un detector.

### ¿Por qué los detectores marcan tanto a hablantes no nativos de inglés y la escritura simple?

Los detectores en general funcionan midiendo la "perplejidad", qué tan predecible es un texto. Las estructuras de frase más simples, comunes en la escritura en inglés de no nativos y en la prosa sencilla y densa en información, como los artículos antiguos de Wikipedia, suenan estadísticamente predecibles, la misma señal que los detectores usan para identificar texto de IA. El estilo de escritura es el problema, no quién escribe.

### ¿Editar un texto generado por IA ayuda a pasar un detector?

No de forma confiable, al menos contra el detector que probamos. Nuestro párrafo de IA levemente reescrito (Muestra D) fue marcado con la misma confianza que la versión sin editar. Una reescritura más profunda puede reducir la puntuación de detección en algunas herramientas, pero no hay un umbral consistente, lo cual funciona en ambos sentidos: no es una forma confiable de ocultar el uso de IA, y tampoco una forma confiable de demostrar que no la usaste.

### ¿Qué hacer si me acusan falsamente de usar IA?

Reúne evidencias independientes: historial de versiones, notas de investigación, historial del navegador y borradores. Señala con calma que la puntuación de un detector por sí sola no se considera prueba confiable según las políticas actuales de muchas universidades, y pregunta qué evidencia adicional se está usando en tu contra antes de aceptar cualquier resultado.

## Conclusión

Los detectores de IA no mienten cuando devuelven un porcentaje, pero ese número significa mucho menos de lo que parece. En nuestra propia prueba rápida, un ensayo de 185 años de uno de los escritores más famosos de Estados Unidos fue marcado como 84% falso, y un párrafo de Wikipedia de hace una década fue marcado como 100% falso. Investigaciones más amplias y revisadas por pares muestran el mismo fallo a escala, afectando con más fuerza a hablantes no nativos de inglés, estudiantes negros y estudiantes neurodivergentes. Las universidades que de verdad estudiaron sus propias herramientas de detección llegaron, en general, a la misma conclusión: una puntuación es una señal, no un veredicto. Trátala así, seas un estudiante preocupado por una falsa acusación o un docente que decide qué hacer con una marca.

## Sigue leyendo

- [12 comandos personalizados de ChatGPT para estudiar](/chatgpt-comandos-para-estudiar/)
- [Los modelos Sol, Terra y Luna de ChatGPT: con quién hablas](/chatgpt-modelos-sol-terra-luna/)

---

*Fuentes: [CBS New York — Orion Newby gana demanda por plagio con IA](https://www.cbsnews.com/newyork/news/orion-newby-adelphi-university-ai-plagiarism-accusations/), [Liang et al., "GPT detectors are biased against non-native English writers," Patterns (2023)](https://www.sciencedirect.com/science/article/pii/S2666389923001307), [estudio de Common Sense Media vía CO/AI](https://getcoai.com/news/ai-detection-tools-disadvantage-black-students-study-finds/), [Vanderbilt University — Guidance on AI Detection](https://www.vanderbilt.edu/brightspace/2023/08/16/guidance-on-ai-detection-and-why-were-disabling-turnitins-ai-detector/), [Search Engine Journal — OpenAI Shuts Down Flawed AI Detector](https://www.searchenginejournal.com/openai-shuts-down-flawed-ai-detector/492565/), [University of San Diego — The Problems with AI Detectors](https://lawlibguides.sandiego.edu/c.php?g=1443311&p=10721367). Prueba de detección en vivo realizada en el [Sapling AI Detector](https://sapling.ai/ai-content-detector), septiembre de 2026.*
