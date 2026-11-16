# 🎮 HappyKid Games · Catálogo Free-To-Play

Sitio web responsive desarrollado como Trabajo Práctico Final de Diseño Web. El proyecto retoma la identidad del estudio independiente **HappyKid** y presenta un catálogo interactivo de videojuegos gratuitos consumidos en tiempo real desde una API pública, acompañado de una sección de contacto validada con JavaScript y una página institucional del equipo.

🔗 **Repositorio:** [github.com/f3rch-ar/happykid](https://github.com/f3rch-ar/happykid)

---

## 👥 Integrantes y Roles del Equipo

* **German Franco Lantaño Barrueta** — *Arquitectura JavaScript, Consumo de API & Documentación*
  * Diseño de la estructura modular con ES Modules (`Juego.js`, `pedirDatos.js`, `dibujar.js`, `app.js`).
  * Implementación de consumo asíncrono (`fetch`, `async/await`, `AbortController`) y manejo de estados de interfaz (`loading`, `success`, `error` con reintento).
  * Redacción de la documentación técnica en `README.md`.
* **Fernando Carrazana Diaz** — *Maquetación HTML5 Semántica, Diseño Responsive & Validación de Formulario*
  * Estructura semántica de las tres páginas (`index.html`, `contacto.html`, `about.html`) y cumplimiento de estándares W3C.
  * Implementación de estilos bajo enfoque **Mobile First** (`css/styles.css`) con sistema de grillas adaptables (`320px`, `768px`, `1024px`).
  * Desarrollo de la validación interactiva del formulario en `js/contacto.js` y curaduría de recursos visuales.

---

## 📁 Estructura del Proyecto

```text
tp-final-happykid/
├── index.html          # Página principal con catálogo dinámico desde FreeToGame API
├── contacto.html       # Formulario de contacto con 5 tipos de campos y validación JS
├── about.html          # Presentación del equipo, roles y decisiones técnicas
├── README.md           # Documentación general y técnica del proyecto
├── css/
│   └── styles.css      # Hoja de estilos única (Variables :root + Mobile First)
├── fonts/              # Tipografías locales del proyecto
├── img/                # Recursos gráficos, portadas y fotografías del equipo
└── js/
    ├── Juego.js        # Clase modelo para estructurar y filtrar datos de cada juego
    ├── pedirDatos.js   # Módulo encargado de la petición HTTP con Fetch API y timeout
    ├── dibujar.js      # Módulo de manipulación del DOM (cards, spinner y errores)
    ├── app.js          # Punto de entrada que coordina la carga del catálogo en Home
    └── contacto.js     # Lógica de validación del formulario en Contacto
