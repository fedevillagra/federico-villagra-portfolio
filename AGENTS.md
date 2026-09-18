Queda aprobada la dirección visual **Perfil editorial** como identidad principal del portfolio.

Quiero combinarla de manera controlada con elementos de las otras propuestas:

### Dirección visual definitiva

Base:

* Perfil editorial contemporáneo.
* Profesional, humano, limpio y cuidadosamente compuesto.
* Fotografía integrada de forma natural.
* Gran importancia de tipografía, espacio, ritmo y jerarquía.

De “Sistemas con claridad” quiero incorporar:

* precisión en la organización de la información;
* distinción inequívoca entre cargo, empleador y cliente/proyecto;
* agrupaciones técnicas por contexto de uso;
* un único esquema útil relacionado con Data Engineering, por ejemplo Extractor → Parser → Loader.

De “Cuaderno de trayectoria” quiero incorporar:

* pequeñas dosis de voz personal;
* mostrar de forma secundaria la evolución Web Development → QA Automation → Data Engineering;
* pequeños relatos técnicos o aprendizajes cuando haya contenido verificable.

No quiero que la web se convierta visualmente en documentación técnica ni en una bitácora narrativa.

### Fotografías

Por ahora considero:

* `portrait-04.webp`: candidata principal para el Hero.
* `portrait-02.webp`: posible fotografía secundaria para una sección más personal.

No es obligatorio utilizar ambas.

Mantener fotografía natural. No eliminar fondos, agregar halos, efectos artificiales ni transformar las fotografías en ilustraciones.

---

Ahora quiero preparar el repositorio para empezar el desarrollo.

## Tu tarea

Crea únicamente el archivo:

`AGENTS.md`

en la raíz del repositorio.

Todavía NO inicialices Next.js.
NO escribas componentes.
NO implementes la web.
NO modifiques otros archivos.

El objetivo del AGENTS.md es convertirse en la fuente permanente de reglas para todos los agentes Codex que trabajen posteriormente sobre este proyecto.

Debe ser conciso pero suficientemente estricto.

## El AGENTS.md debe establecer como mínimo

### Objetivo del producto

Portfolio profesional de Federico Villagra orientado principalmente a Data Engineering y secundariamente a Software Engineering relacionado con datos, backend e integración.

Públicos principales:

* recruiters;
* hiring managers;
* profesionales técnicos;
* buscadores;
* crawlers;
* sistemas automáticos y sistemas de IA utilizados en recruiting.

### Identidad profesional

Mantener siempre consistente:

* Nombre: Federico Villagra.
* Rol actual: Junior Data Engineer.
* Empleador: EPAM Systems.
* Proyecto/cliente actual: CLARO.
* Área: Data Engineering / Telecomunicaciones.

Nunca presentar CLARO como empleador.

QA Automation y Web Development deben aparecer como experiencia previa y parte de la evolución profesional, no como especialidad principal actual.

No inventar experiencia, métricas, responsabilidades, conocimientos, tecnologías, logros ni proyectos.

### Fuente de contenido

`docs/profile-content.txt` es la fuente editorial original del perfil.

Cuando exista contenido estructurado dentro de la aplicación, debe mantenerse consistente con esa información.

### Idiomas

Arquitectura aprobada:

* Inglés principal: `/`
* Español: `/es`

Reglas:

* Una URL siempre corresponde a un idioma.
* No mezclar idiomas dentro del contenido principal de una página.
* No realizar redirecciones automáticas por geolocalización o idioma del navegador.
* Mantener paridad factual entre versiones.
* La traducción puede adaptarse para sonar natural.
* Tecnologías, nombres propios y denominaciones oficiales pueden conservarse cuando corresponda.

### SEO

SEO es un requisito de primera categoría y debe considerarse en cada decisión técnica y visual.

Priorizar:

* semantic HTML;
* contenido indexable;
* metadata adecuada;
* canonical URLs;
* hreflang;
* sitemap;
* robots;
* structured data;
* Open Graph;
* jerarquía correcta de headings;
* URLs estables;
* contenido visible como texto real;
* consistencia de identidad;
* performance;
* Core Web Vitals.

No realizar keyword stuffing.

No ocultar información profesional importante detrás de JavaScript, animaciones, canvas, imágenes o interacciones.

El sitio debe poder ser comprendido razonablemente incluso sin ejecutar interacciones.

### Accesibilidad

Objetivo: WCAG 2.2 AA.

Como mínimo:

* navegación completa por teclado;
* focus visible;
* contraste suficiente;
* HTML semántico;
* labels accesibles;
* alt text apropiado;
* orden de lectura correcto;
* responsive real;
* soporte para `prefers-reduced-motion`.

Nada importante debe depender exclusivamente de hover, color o animación.

### Performance

Performance es parte del diseño.

Priorizar:

* Server Components cuando corresponda;
* JavaScript del cliente mínimo;
* optimización de imágenes;
* fuentes limitadas;
* evitar dependencias innecesarias;
* evitar scripts externos innecesarios;
* evitar animaciones costosas;
* prevenir CLS;
* carga rápida del contenido principal.

No incorporar librerías pesadas para resolver problemas simples.

### Dirección visual

Identidad base:

**Perfil editorial contemporáneo + precisión de ingeniería + presencia humana.**

Principios:

* composición editorial;
* espacios generosos;
* jerarquía tipográfica fuerte;
* fotografía natural;
* pocas superficies encerradas;
* evitar uso excesivo de cards;
* información técnica clara pero integrada al diseño;
* microinteracciones sutiles;
* diseño mobile-first/responsive.

Evitar:

* estética genérica de startup;
* portfolio cyberpunk;
* terminales falsas como decoración;
* lluvia de código;
* exceso de gradientes;
* glassmorphism indiscriminado;
* nubes de logos;
* dashboards ficticios;
* métricas inventadas;
* animaciones de escritura;
* animaciones que retrasen contenido;
* efectos WebGL/3D sin una justificación clara.

### Arquitectura técnica prevista

La implementación utilizará:

* Next.js
* App Router
* React
* TypeScript
* Tailwind CSS
* pnpm
* Vercel

Frontend principalmente estático.

No incorporar inicialmente:

* backend propio;
* base de datos;
* CMS;
* autenticación.

Separar conceptualmente:

* contenido;
* presentación;
* metadata;
* datos compartidos;
* traducciones.

### Calidad de código

Priorizar:

* TypeScript estricto;
* componentes pequeños y coherentes;
* nombres claros;
* mínima duplicación;
* separación de responsabilidades;
* dependencias justificadas;
* código legible antes que abstracciones prematuras.

No introducir una abstracción únicamente porque “podría servir en el futuro”.

### Forma de trabajo del agente

Antes de realizar cambios significativos:

1. inspeccionar el repositorio;
2. entender las convenciones existentes;
3. explicar brevemente el enfoque cuando la tarea sea importante;
4. realizar cambios enfocados;
5. verificar el resultado.

Antes de considerar una tarea de implementación finalizada, cuando las herramientas existan, ejecutar:

* lint;
* typecheck;
* tests relevantes;
* production build.

Corregir errores provocados por el cambio antes de finalizar.

No silenciar errores de TypeScript o lint simplemente para lograr que el build pase.

### Principio general

Cuando exista un conflicto entre un efecto visual y:

* claridad;
* accesibilidad;
* SEO;
* performance;
* mantenibilidad;

debe priorizarse la calidad funcional.

El portfolio debe sentirse sofisticado por sus decisiones de diseño e ingeniería, no por la cantidad de efectos.

---

Redacta el AGENTS.md de forma organizada y útil para agentes de programación.

Podés mejorar, condensar o reorganizar estas reglas si eso hace que el archivo funcione mejor como instrucciones permanentes.

Después de crearlo, mostrame:

1. el contenido final;
2. qué reglas consideraste especialmente importantes;
3. cualquier regla que hayas modificado respecto de mis instrucciones y por qué.

No realices ningún otro cambio en el repositorio.
