# Dirección visual del portfolio

## Identidad y ambición

**Perfil editorial contemporáneo + precisión de ingeniería + presencia humana.** El resultado debe ser visualmente rico y art-directed: una composición a medida, con imágenes protagonistas, jerarquía tipográfica, geometría, detalle y cambios de ritmo. No alcanza con una sucesión de textos, líneas y whitespace, aunque la legibilidad y el espacio sigan siendo esenciales.

La foundation actual de Header y Hero aporta tipografía, paleta, fotografía y jerarquía. Se conserva mientras las siguientes etapas desarrollan el resto de la dirección. Este documento no autoriza un rediseño fuera del alcance de cada tarea.

## Referencias conceptuales

Las referencias aportadas se utilizan por su lenguaje visual, no por su temática, contenido ni promesas comerciales. La revisión inicial de sus portadas permite extraer estos recursos; no constituye una auditoría completa de sus animaciones o accesibilidad.

| Referencia | Principio trasladable al portfolio |
| --- | --- |
| [Pizzalio](https://pizza-project-claude-design.vercel.app/) | Diálogo entre tipografía de gran escala, imagen dominante y pequeños contrapuntos gráficos. |
| [Afterfern](https://lightgreen-ant-121233.hostingersite.com/) | Imagen ambiental que organiza el viewport y establece una atmósfera reconocible. |
| [Evercoat](https://evercoatpainterco.com/) | Jerarquía clara y contraste entre tratamientos tipográficos dentro de una composición amplia. |
| [Taste Skill](https://www.tasteskill.dev/) | Montaje editorial con escalas y posiciones variadas, integrado con una identidad tipográfica sobria. |
| [Altura](https://mediumturquoise-stingray-679970.hostingersite.com/) | Encuadre y profundidad visual que convierten la imagen en parte de la arquitectura de la página. |
| [Good Things](https://antiquewhite-dotterel-933330.hostingersite.com/) | Ritmo gráfico, bloques cromáticos e identidad consistente en los detalles. |

No copiar layouts, marcas, textos, paletas completas, tipografías combinadas exactamente, assets ni interacciones. No trasladar estética gastronómica, outdoor, vinícola o comercial al perfil profesional. Los nombres y recursos técnicos presentes en una referencia no son recomendaciones de dependencias.

## Composición y riqueza visual

- Diseñar secciones con funciones y composiciones distintas: aperturas amplias, imágenes integradas, bloques de lectura, relaciones gráficas y pausas. Evitar repetir indefinidamente texto a la izquierda e imagen a la derecha.
- Alternar escala, densidad y proporciones manteniendo alineaciones y tokens comunes. Variar el ritmo sin que cada sección parezca otro sitio.
- Aprovechar el viewport con intención; no imponer alturas de 100vh ni llenar todo el espacio con decoración.
- Integrar software y Data Engineering mediante relaciones comprensibles, geometría y pequeños recursos de visualización. Un pipeline conceptual puede explicar Extractor → Parser → Loader, pero no representar infraestructura real del cliente sin evidencia.
- No inventar métricas, resultados ni dashboards. Distinguir siempre ilustración conceptual de información profesional verificable.
- Mantener el trabajo actual en datos como foco. La riqueza visual debe facilitar el recorrido de recruiters y profesionales técnicos.

## Fotografía e imágenes

- Mantener el retrato natural actual. Preservar originales; no alterar rasgos, eliminar fondos ni aplicar halos o filtros fuertes.
- Evaluar individualmente las futuras imágenes de datacenter/telecom, workstation/pipeline y formación. No es obligatorio usarlas todas ni asignarlas definitivamente a una sección por su nombre.
- Tratar los assets como material compositivo: considerar encuadre, escala, recorte, relación con tipografía y espacio negativo antes de integrarlos. Evitar imágenes colocadas como relleno junto a un párrafo.
- Las imágenes generadas son conceptuales: no deben hacerse pasar por instalaciones, proyectos, certificados o trabajo real de Federico, EPAM o CLARO. No inventar logos ni imitar marcas; las credenciales verificables se enlazan a su documento real.
- Antes de cada integración comprobar propósito informativo o decorativo, sección, proporción, crop y punto focal en desktop/mobile, peso, dimensiones y tamaños responsive. No incrustar información profesional imprescindible en la imagen.
- Utilizar formatos optimizados y next/image, reservar dimensiones y cargar con prioridad solo lo necesario. Localizar el alt informativo; usar alt vacío en imágenes puramente decorativas.

## Motion e interacción

Microinteracciones y transiciones breves, elegantes y funcionales: foco, underline, color o desplazamientos discretos. Nada debe retrasar la lectura ni necesitar animación para entenderse. Respetar prefers-reduced-motion y ofrecer todos los recorridos por teclado.

No usar scroll hijacking, videos o secuencias controladas frame-by-frame por scroll, animaciones de escritura, revelados que obliguen a esperar ni WebGL/3D como atracción principal. Evitar cyberpunk, neón, terminales falsas, lluvia de código, logos flotantes, dashboards y páginas enteramente construidas con cards.

## Condiciones de calidad

SEO, accesibilidad WCAG 2.2 AA, performance y mantenibilidad prevalecen sobre cualquier efecto. El contenido debe existir como HTML semántico indexable y ser comprensible sin interacción. Mantener contraste, foco visible, orden de lectura y ausencia de CLS.

Componer para inglés y español desde el inicio, revisando longitudes, navegación, targets táctiles y recortes en 375, 768, 1024 y 1440 px. Mobile necesita decisiones compositivas propias, no una reducción mecánica del desktop. La fotografía nunca debe desplazar la identidad profesional fuera de la primera lectura.

La calidad se evalúa en navegador: cada sección debe tener intención visual reconocible y funcionar sin sacrificar comprensión, carga rápida ni acceso al contenido. No agregar dependencias por razones puramente decorativas.

## Visual asset inventory

Inspección visual de los archivos locales (20/09/2026): cuatro retratos, cinco imágenes generadas y siete assets de instituciones. Las prioridades son propuestas para futuras etapas, no una instrucción de integrar todos los archivos. Ratios expresados como ancho:alto. Las imágenes generadas son decorativas/conceptuales, no evidencia de instalaciones, código, estudios ni credenciales reales.

| Archivo en `docs/visual-references/` | Orientación / dimensiones | Qué comunica y sección posible | Prioridad / función | Crop y responsive |
| --- | --- | --- | --- | --- |
| `portrait-01.webp` | Vertical, 2583×4032, 0,64:1 | Retrato sonriente con camisa blanca, brazos cruzados y amplio fondo cálido; alternativa personal al Hero. | optional / informativa: identidad | Mucho aire superior; un recorte moderado puede acercar el rostro. Redundante con 04: no usar ambas por defecto. |
| `portrait-02.webp` | Vertical 3:4, 3024×4032 | Retrato exterior de medio cuerpo, mirada lateral, chaqueta verde y paisaje; sección personal o trayectoria. | supporting / informativa: identidad | Conservar algo de entorno y espacio hacia la mirada; en mobile evitar un recorte demasiado cerrado. |
| `portrait-03.webp` | Vertical, 1856×2560, 0,73:1 | Retrato frontal exterior, camisa azul y fondo desenfocado; alternativa de presencia humana. | optional / informativa: identidad | Encuadre ya próximo: cuidar cabeza y hombros; no aporta suficiente variedad para usarlo junto a todos los retratos. |
| `portrait-04.webp` | Vertical, 2777×3982, 0,70:1 | Retrato sonriente, camisa blanca y fondo interior cálido; Hero actual. | primary / informativa: identidad | Mantener el tratamiento actual; reservar proporción y conservar rostro/hombros en el crop 4:5. |
| `07ea81d7-019f-42a6-ae16-07cf481cff11.png` | Horizontal ≈16:9, 1672×941 | Pasillo con racks, ventana al paisaje y líneas luminosas de flujo; apertura de trabajo actual o contexto telecom. | supporting / decorativa conceptual | Racks a la derecha y profundidad a la izquierda; un crop vertical pierde esa relación. Preferir proporción horizontal en mobile. |
| `897edaa4-e494-467c-b3d0-77bd1db04bc6.png` | Horizontal ≈16:9, 1672×941 | Workstation con monitor, código, iconos conectados y antena exterior; candidata principal para trabajo actual/pipelines. | primary / decorativa conceptual | Mantener monitor y relación con el entorno; no depender de texto minúsculo del monitor. En mobile reducir la escena antes que cortar el flujo. |
| `8c0e0836-91f0-4afb-ab7e-b0b17261568f.png` | Horizontal 3:2, 1536×1024 | Escritorio con portátil, libros, cuaderno abierto y pequeña placa electrónica; formación o conocimientos. | supporting / decorativa conceptual | Foco entre portátil y cuaderno; conservar ambos si se recorta. No interpretar notas como contenido verificable. |
| `9efd6926-32ce-436f-922a-409ff263f0e8.png` | Vertical ≈4:5, 1122×1402 | Diplomas genéricos con sellos, cuaderno, portátil y escritorio cálido; candidata protagonista de Certifications. | primary / decorativa conceptual | El formato favorece media sección en desktop y una imagen apilada en mobile; preservar diplomas y entorno. Nunca presentarlos como certificados reales del usuario. |
| `e51b615b-11e7-4707-9eb3-c91ac84eb8af.png` | Horizontal 4:3, 1448×1086 | Racks y cables en primer plano, paneles transparentes con líneas de flujo; detalle técnico alternativo para experiencia/conocimientos. | optional / decorativa conceptual | Alto detalle y densidad a la derecha; crop cuidadoso que preserve cables y paneles. Compite con las otras imágenes técnicas: elegir, no acumular. |

Los cinco PNG pesan aproximadamente 1,75–2,17 MB cada uno; requieren copias optimizadas y tamaños responsive antes de producción. Los retratos van de 0,37 a 1,07 MB. Preservar originales y no servir estos pesos indiscriminadamente. No superponer texto esencial sobre áreas densas; las etiquetas de pipelines deben existir en HTML fuera de las imágenes.

### Assets de instituciones

La ubicación prevista `docs/visual-references/logos/` ya contiene los siguientes archivos. Se inspeccionaron los raster y el render de los SVG; no se descargó ni generó ningún logo. Esta inspección describe su apariencia, no certifica su procedencia oficial o vigencia de marca.

Todos son posibles identificadores secundarios de issuer en Certifications: función informativa, acompañados por el nombre textual; si lo repiten, el futuro alt puede ser vacío. Conservar proporciones y usar contain, nunca crop. No crear placeholders visibles ni integrarlos todavía.

| Archivo dentro de `logos/` | Proporción / apariencia observada | Prioridad y observación responsive |
| --- | --- | --- |
| `openai.svg` | Cuadrado 1:1; símbolo negro entrelazado. | supporting; pequeño junto al nombre OpenAI, sin convertirlo en protagonista. |
| `epam-systems.svg` | Horizontal ≈2,83:1; nombre EPAM y signos angulares turquesa. | supporting; preferible como identificador compacto si mantiene legibilidad. |
| `Epam circule logo.png` | Cuadrado, 512×512; nombre EPAM dentro de un círculo oscuro. | optional; alternativa al SVG, no usar ambos; evitar que el disco domine el listado. |
| `universidad-nacional-de-cordoba.svg` | Vertical ≈0,72:1; escudo detallado. | optional; el detalle se pierde a tamaño pequeño: acompañar por nombre legible. |
| `UNC logo.jpg` | Horizontal 2:1, 640×320; escudo y sigla UNC en bloque azul/blanco. | supporting; conservar el bloque completo, comprobar legibilidad a escala secundaria. |
| `coderhouse.svg` | Casi cuadrado ≈0,96:1; símbolo con arco de color y franjas oscuras. | optional; necesita nombre textual para identificación y no debe competir por color. |
| `coderhouse.webp` | Horizontal ≈2,09:1, 380×182; marca textual Coderhouse. | supporting; considerar su espacio interno al alinear, sin deformar ni ampliar en exceso. |

## Futura dirección visual de Certifications

Una gran composición editorial, con una imagen protagonista ocupando aproximadamente media sección cuando el viewport lo permita y un listado tipográfico de credenciales. La candidata inicial es `9efd6926-32ce-436f-922a-409ff263f0e8.png`, sujeta a evaluación del diseño completo y optimización. En mobile, recomponer en flujo vertical sin sacrificar acceso a los enlaces ni imponer media pantalla de imagen.

Dar identidad a la sección mediante índices editoriales, separadores, cambios de escala tipográfica y composición. Cada issuer debe identificarse claramente; los enlaces externos deben ser discretos pero reconocibles, con foco visible. Logos oficiales pequeños/secundarios solo si mejoran la identificación. Los nombres y documentos reales siguen siendo la fuente de información, no los diplomas de la imagen generada.

Evitar grilla convencional de cards, badges gigantes, logos dominantes, diseño tipo LinkedIn, carruseles de certificados e iframes de Google Drive. Esta definición queda documentada para una etapa posterior: no modifica la presentación semántica actual.
