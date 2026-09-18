# Reglas del proyecto

Estas instrucciones se aplican a todo el repositorio. Respetar el alcance de cada tarea: una solicitud de análisis o documentación no autoriza inicializar ni implementar la aplicación.

## Producto e identidad

- Portfolio profesional de Federico Villagra, publicado en `https://federicovillagra.com`, orientado principalmente a Data Engineering y secundariamente a Software Engineering relacionado con datos, backend e integración.
- Públicos: recruiters, hiring managers, profesionales técnicos, buscadores, crawlers y sistemas automáticos o de IA utilizados en recruiting. Escribir primero para personas, con estructura interpretable por máquinas.
- Identidad actual: **Federico Villagra · Junior Data Engineer · EPAM Systems (empleador) · CLARO (proyecto/cliente) · Data Engineering / Telecomunicaciones**. Nunca presentar CLARO como empleador.
- Mantener esa identidad consistente en contenido visible, traducciones, metadata, Open Graph y structured data.
- Dar máxima jerarquía al trabajo actual en datos. Web Development → QA Automation → Data Engineering explica la evolución; web y QA son experiencia previa, no especialidades principales actuales.
- No inventar experiencia, métricas, responsabilidades, conocimientos, tecnologías, logros ni proyectos. Diferenciar experiencia laboral, formación y contexto tecnológico de un proyecto; no atribuir dominio personal de todo su stack.

## Contenido

- `docs/profile-content.txt` es la fuente editorial original. El contenido estructurado debe conservar sus hechos y las aclaraciones explícitas aprobadas por el usuario.
- Se permite resumir, reorganizar y mejorar la redacción sin alterar el significado. Ante contradicciones o datos faltantes, señalarlos y solicitar aclaración cuando sea necesaria; no resolverlos inventando información.
- Mantener paridad factual entre idiomas y distinguir cargo profesional de título académico obtenido. Publicar relatos técnicos o aprendizajes solo con respaldo verificable.

## Idiomas y URLs

- Inglés principal en `/`; español en `/es`. Cada URL entrega siempre un único idioma.
- No mezclar idiomas en el contenido principal ni rellenar traducciones faltantes con párrafos del otro idioma. Nombres propios, tecnologías, siglas y denominaciones oficiales pueden conservarse.
- Adaptar la traducción para que suene natural sin cambiar hechos ni nivel de experiencia.
- No redirigir automáticamente por geolocalización o idioma del navegador. Usar un selector accesible con enlaces a la página equivalente.
- Mantener datos compartidos, traducciones y un mapa explícito de rutas equivalentes; evitar duplicar manualmente hechos entre idiomas.

## SEO

- SEO es un requisito de primera categoría en toda decisión técnica y visual. Usar HTML semántico, headings jerárquicos, URLs estables y contenido profesional indexable como texto real en el HTML inicial.
- No ocultar información importante detrás de JavaScript, animaciones, canvas, imágenes o interacciones. El perfil debe comprenderse sin interactuar.
- Proveer metadata y Open Graph localizados, idioma del documento correcto, sitemap, robots y structured data coherentes con el contenido visible.
- Cada página localizada tiene canonical hacia sí misma. Declarar hreflang recíproco `en` y `es`, incluyendo la propia versión, y `x-default` hacia su equivalente inglés. No canonicalizar el español hacia el inglés.
- Incluir en el sitemap las URLs públicas canónicas e indexables. Evitar indexar previews y duplicados; robots no sustituye controles de acceso.
- Representar una misma identidad en los datos estructurados; EPAM es el empleador y CLARO el cliente. No agregar afirmaciones ausentes del contenido visible.
- No hacer keyword stuffing. Priorizar claridad, consistencia de identidad, performance y Core Web Vitals.

## Accesibilidad

- Objetivo: WCAG 2.2 AA. Garantizar teclado, foco visible, contraste suficiente, HTML semántico, etiquetas accesibles, textos alternativos apropiados y orden de lectura correcto.
- Diseñar mobile-first y responsive, con texto ampliable y sin desbordamientos innecesarios. Respetar `prefers-reduced-motion`.
- Nada importante debe depender exclusivamente de hover, color o animación. Dar equivalente textual a los diagramas y comprobar manualmente los recorridos importantes además de las verificaciones automáticas.

## Dirección visual

- Identidad: **Perfil editorial contemporáneo + precisión de ingeniería + presencia humana**.
- Priorizar composición editorial, espacios generosos, ritmo, jerarquía tipográfica fuerte, fotografía natural, pocas superficies encerradas e información técnica integrada. Evitar exceso de cards.
- Incorporar precisión al distinguir cargo, empleador y cliente, y agrupar tecnologías por contexto de uso. Usar un único esquema útil de Data Engineering, por ejemplo Extractor → Parser → Loader, sin inventar arquitectura del cliente.
- Incluir pequeñas dosis de voz personal y evolución profesional en segundo plano. No convertir el sitio en documentación técnica ni en una bitácora narrativa.
- Fotografías: `docs/visual-references/portrait-04.webp` es candidata al Hero; `portrait-02.webp` es opcional para una sección personal. No es obligatorio usar ambas. Conservar fondos naturales; no agregar halos, efectos artificiales ni transformar las fotos en ilustraciones.
- Microinteracciones sutiles que no retrasen contenido. Diseñar para textos en ambos idiomas sin alturas rígidas que los recorten.
- Evitar estética genérica de startup, cyberpunk, terminales falsas decorativas, lluvia de código, exceso de gradientes, glassmorphism indiscriminado, nubes de logos, dashboards ficticios, métricas inventadas y animaciones de escritura. No introducir WebGL/3D sin justificación clara.

## Arquitectura y performance

- Stack previsto: Next.js, App Router, React, TypeScript, Tailwind CSS, pnpm y Vercel. Frontend principalmente estático y prerenderizado.
- No incorporar inicialmente backend propio, base de datos, CMS ni autenticación.
- Separar conceptualmente contenido, presentación, metadata, datos compartidos y traducciones. Compartir hechos entre contenido visible y metadata para evitar divergencias.
- Priorizar Server Components cuando corresponda y limitar Client Components a interactividad necesaria. Mantener mínimo el JavaScript enviado al navegador.
- Performance es parte del diseño: optimizar imágenes, reservar sus dimensiones para prevenir CLS, limitar fuentes y cargar rápidamente el contenido principal.
- Evitar dependencias y scripts externos innecesarios, animaciones costosas y librerías pesadas para problemas simples. Evaluar Core Web Vitals; las mediciones de laboratorio no sustituyen datos reales.

## Calidad y forma de trabajo

- Usar TypeScript estricto, componentes pequeños y coherentes, nombres claros, mínima duplicación y separación de responsabilidades. Favorecer legibilidad y dependencias justificadas.
- No crear abstracciones solo porque podrían servir en el futuro.
- Antes de cambios significativos: inspeccionar el repositorio y su estado, entender convenciones, explicar brevemente el enfoque, realizar cambios enfocados y verificar el resultado. Preservar cambios ajenos y evitar modificaciones fuera del alcance solicitado.
- Antes de finalizar una implementación, ejecutar lint, typecheck, tests relevantes y production build cuando esas herramientas existan. Si una verificación no puede ejecutarse, indicarlo y explicar la limitación; no afirmar que pasó.
- Corregir errores provocados por el cambio. No silenciar errores de TypeScript o lint para lograr que el build pase.
- Verificar accesibilidad, responsive y efectos sobre SEO cuando el cambio los afecte. Informar qué cambió, cómo se comprobó y qué limitaciones quedan.

## Prioridad general

Ante conflictos con efectos visuales, priorizar claridad, accesibilidad, SEO, performance y mantenibilidad. La sofisticación debe surgir de decisiones de diseño e ingeniería, no de la cantidad de efectos.
