# README del Proyecto de Gestión de Cookies 🍪

## 📋 Tabla de Contenidos
- [Descripción General](#-descripción-general)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Características Principales](#-características-principales)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Explicación del Código](#-explicación-del-código)
- [Flujo de Funcionamiento](#-flujo-de-funcionamiento)
- [Cumplimiento Normativo](#-cumplimiento-normativo)

---

## 🎯 Descripción General

Este proyecto implementa un **sistema de gestión de cookies conforme con la normativa legal** (RGPD, LSSI-CE, etc.). Permite a los usuarios aceptar o rechazar diferentes tipos de cookies de forma granular, guardando sus preferencias en el navegador.

**Tecnologías utilizadas:**
- 🌐 HTML5
- 🎨 CSS3 (con características modernas)
- ⚡ JavaScript (ES6 módulos)

---

## 📁 Estructura del Proyecto

```
📦 proyectoInicioPortafolio/
├── 📄 index.html                 # Página principal
├── 📄 politica-de-cookies.html   # Política de cookies
├── 📄 README.md                  # Este archivo
│
├── 📂 css/
│   ├── normalize.css             # Estilos de normalización
│   ├── reset.css                 # Reset de estilos
│   └── style.css                 # Estilos personalizados
│
├── 📂 img/
│   ├── tablet/
│   ├── desktop/
│   └── svg/
│
└── 📂 js/
    ├── main.js                   # Punto de entrada
    └── cookies.js                # Lógica de cookies
```

---

## ✨ Características Principales

| Característica | Descripción |
|---|---|
| 🎯 **Popup Modal** | Pantalla bloqueante con fondo difuminado |
| ⚙️ **Preferencias Granulares** | 4 tipos diferentes de cookies configurables |
| 💾 **Persistencia** | Almacenamiento en `localStorage` |
| 🔄 **Verificación Automática** | Detecta si el usuario ya ha aceptado |
| 📱 **Responsivo** | Diseño adaptable a todos los dispositivos |
| ♿ **Accesible** | Formularios accesibles y semánticamente correctos |

---

## 🚀 Instalación

### Opción 1: Clonar el repositorio
```bash
gh repo clone dj-leee/proyectoInicioPortafolio
cd proyectoInicioPortafolio
```

### Opción 2: Descarga manual
Descarga todos los archivos y colócalos en tu carpeta del proyecto.

### Servir localmente
```bash
# Usando Python 3
python -m http.server 8000

# Usando Node.js (http-server)
npx http-server

# Usando Live Server en VS Code
# Extensión recomendada: Live Server
```

---

## 📖 Uso

### Flujo de Usuario Básico

1. **Usuario visita el sitio** → Se activa el evento `load`
2. **Verificación de localStorage** → Se comprueba si hay cookies previas
3. **Decisión**:
   - Si NO hay cookies previas → Mostrar popup
   - Si SÍ hay cookies previas → Cargar página normalmente
4. **Acciones disponibles**:
   - ✅ **Aceptar TODO** → Guardar todas las preferencias como "aceptar"
   - ❌ **Rechazar TODO** → Guardar todas las preferencias como "rechazar"
   - ⚙️ **Personalizar** → Seleccionar preferencias individuales

### Tipos de Cookies Disponibles

| Tipo | Descripción | Obligatoria |
|---|---|---|
| 🔒 **Estrictamente necesarias** | Seguridad, idioma, ubicación, cesta | ✅ Siempre activa |
| 📊 **Rendimiento y análisis** | Datos de comportamiento del usuario | ❌ Opcional |
| 🎯 **Experiencias personalizadas** | Contenido relevante personalizado | ❌ Opcional |
| 📢 **Publicidad personalizada** | Datos compartidos con socios | ❌ Opcional |
| 👤 **Publicidad basada en perfil** | Email/teléfono con socios publicitarios | ❌ Opcional |

---

## 🔍 Explicación del Código

### 1️⃣ HTML Principal - `index.html`

```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Language" content="es" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <title>Document</title>
        <meta name="description" content="Descripción de la página" />
        <link rel="stylesheet" href="css/style.css" />
    </head>
    <body>
        <img src="..." alt="" width="100%" />

        <footer>
            <!-- Contenedor de cookies -->
            <div id="cookie-consent-banner" class="cookie-consent-banner">
                <p>
                    <a href="politica-de-cookies.html" id="accept-cookies">
                        Preferencia de cookies
                    </a>
                </p>
            </div>
        </footer>

        <!-- Script modular que importa la lógica de cookies -->
        <script type="module" src="js/main.js"></script>
    </body>
</html>
```

**Puntos clave:**
- ✅ Estructura semántica con `<footer>`
- ✅ Enlace a política de cookies
- ✅ Uso de módulos ES6 para mejor organización
- ✅ Meta tags para SEO y accesibilidad

---

### 2️⃣ CSS Reset - `css/reset.css`

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;  /* Incluir padding en cálculo de ancho */
}
```

**Propósito:**
- Eliminar estilos por defecto del navegador
- Aplicar `box-sizing: border-box` globalmente
- Garantizar consistencia cross-browser

---

### 3️⃣ CSS Normalize - `css/normalize.css`

Archivo estándar que normaliza los estilos entre navegadores manteniendo la accesibilidad.

**Características:**
- ✅ Normalización de tipografía
- ✅ Corrección de formularios
- ✅ Manejo de media embebidos
- ✅ Elementos interactivos

---

### 4️⃣ CSS Estilos Principales - `css/style.css`

#### Configuración Global del Body

```css
body {
    height: 100dvh;              /* 100% del viewport dinámico */
    font-family: "Arial", sans-serif;
}

body:has(.pantalla-cookies) {
    overflow: hidden;            /* Evitar scroll cuando hay popup */
}
```

**Explicación:**
- `100dvh` → Alto dinámico del viewport (mejor que `100vh` en móviles)
- `:has()` → Selector de paternidad (navegadores modernos)

#### Pantalla de Bloqueo (Overlay)

```css
.pantalla-cookies {
    position: fixed;             /* Fijo en el viewport */
    top: 0;
    left: 0;
    width: 100dvw;              /* 100% del ancho dinámico */
    height: 100dvh;             /* 100% del alto dinámico */
    background-color: rgba(255, 255, 255, 0.341);  /* Blanco translúcido */
    backdrop-filter: blur(5px); /* Efecto de vidrio esmerilado */
    z-index: 5;                 /* Por debajo del modal */
}
```

**Visualización:**
```
┌─────────────────────────────────────┐
│ Pantalla difuminada (blur 5px)      │
│ Color: rgba(255, 255, 255, 0.341)   │
│ z-index: 5                          │
└─────────────────────────────────────┘
```

#### Contenedor del Modal

```css
.contedor-cookies {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);  /* Centrado perfecto */
    z-index: 10;                       /* Por encima del overlay */

    padding: 30px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
}
```

**Técnica de centrado:**
- ✅ `position: absolute` + `top/left: 50%`
- ✅ `transform: translate(-50%, -50%)` → Centra en ambos ejes
- ✅ Funciona incluso si el tamaño es desconocido

#### Formulario Responsivo

```css
.formulario {
    width: 100%;
    max-width: 400px;
    height: 500px;
    overflow-y: auto;           /* Scroll vertical interno */
    overflow-x: hidden;         /* Sin scroll horizontal */

    & #cookiesForm, 
    & .cookie-option, 
    & .radio-group {
        display: flex;
        flex-direction: column;
        gap: 25px;              /* Espacio entre elementos */

        & .radio-group {
            gap: 10px;          /* Menos espacio en grupos radio */
        }
    }
}
```

**Características:**
- ✅ Máximo ancho de 400px (legible)
- ✅ Alto fijo de 500px con scroll
- ✅ Uso de selectores anidados (CSS anidado)
- ✅ Flexbox para alineación

#### Botones

```css
.btn-cookies {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #4caf50;  /* Verde */
    color: white;
    cursor: pointer;            /* Cambiar cursor en hover */
    font-size: 16px;
}

.btn-preferencias {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #2196f3;  /* Azul */
    color: white;
    cursor: pointer;
    font-size: 16px;
}
```

#### Botonera

```css
.botonera {
    display: flex;
    justify-content: space-between;  /* Espacio entre botones */
    align-items: center;             /* Centrado vertical */
    padding: 20px 0;
}
```

---

### 5️⃣ JavaScript Principal - `js/main.js`

```javascript
// IMPORT - Importar módulo de cookies
import '../js/cookies.js';
```

**Función:**
- Punto de entrada de la aplicación
- Carga la lógica de cookies como módulo separado
- Mantiene el código organizado

---

### 6️⃣ Lógica de Cookies - `js/cookies.js`

#### Parte 1: Verificación Automática

```javascript
window.addEventListener("load", function () {
    // Esperar a que el DOM esté completamente cargado
    const cookiesAccepted = localStorage.getItem("cookies");
    
    if (cookiesAccepted === "true") {
        console.log("✅ Cookies ya aceptadas - Cargar página");
        // No mostrar el popup
    } else {
        console.log("❌ Primera visita - Mostrar popup");
        showCookiesPopup();
    }
});
```

**Flujo:**
1. ✅ Evento `load` → Espera a que la página esté lista
2. ✅ Leer `localStorage` → Verificar si hay preferencias previas
3. ✅ Decisión condicional → Mostrar o no el popup

---

#### Parte 2: Generación del Modal HTML

```javascript
function showCookiesPopup() {
    const cookiesPopup = document.createElement("div");
    document.body.appendChild(cookiesPopup);
    cookiesPopup.innerHTML = `
        <!-- Pantalla de bloqueo -->
        <div id="pantalla-cookies" class="pantalla-cookies"></div>
        
        <!-- Contenedor principal -->
        <ul class="contedor-cookies">
            <!-- Formulario -->
            <li class="formulario">
                <form id="cookiesForm">
                    <div>
                        <h2>Datos para mejorar tu experiencia</h2>
                        <p>Para mejorar tu experiencia utilizamos cookies...</p>
                    </div>

                    <!-- Cookies estrictamente necesarias (siempre activas) -->
                    <div class="cookie-option">
                        <h3>Estrictamente necesarias (siempre activado)</h3>
                        <p>Permitir las funcionalidades principales...</p>
                    </div>

                    <!-- Rendimiento y análisis -->
                    <div class="cookie-option">
                        <h3>Rendimiento y análisis</h3>
                        <p>Permitir el uso de datos de comportamiento...</p>
                        <div class="radio-group">
                            <label>
                                <input type="radio" name="performance" 
                                       value="aceptar" required />
                                Aceptar
                            </label>
                            <label>
                                <input type="radio" name="performance" 
                                       value="rechazar" required />
                                Rechazar
                            </label>
                        </div>
                    </div>

                    <!-- Experiencias personalizadas -->
                    <div class="cookie-option">
                        <h3>Experiencias personalizadas</h3>
                        <p>Mediante cookies se permite el uso de datos...</p>
                        <div class="radio-group">
                            <label>
                                <input type="radio" name="personalized" 
                                       value="aceptar" required />
                                Aceptar
                            </label>
                            <label>
                                <input type="radio" name="personalized" 
                                       value="rechazar" required />
                                Rechazar
                            </label>
                        </div>
                    </div>

                    <!-- Publicidad personalizada -->
                    <div class="cookie-option">
                        <h3>Publicidad personalizada</h3>
                        <p>Permitir compartir datos de comportamiento...</p>
                        <div class="radio-group">
                            <label>
                                <input type="radio" name="advertising" 
                                       value="aceptar" required />
                                Aceptar
                            </label>
                            <label>
                                <input type="radio" name="advertising" 
                                       value="rechazar" required />
                                Rechazar
                            </label>
                        </div>
                    </div>

                    <!-- Publicidad por perfil -->
                    <div class="cookie-option">
                        <h3>Publicidad personalizada basada en tu perfil</h3>
                        <p>Permitir compartir email y teléfono...</p>
                        <div class="radio-group">
                            <label>
                                <input type="radio" name="profileAdvertising" 
                                       value="aceptar" required />
                                Aceptar
                            </label>
                            <label>
                                <input type="radio" name="profileAdvertising" 
                                       value="rechazar" required />
                                Rechazar
                            </label>
                        </div>
                        <button class="btn-preferencias" type="submit">
                            Guardar preferencias
                        </button>
                    </div>
                </form>
            </li>

            <!-- Botones de acción -->
            <li class="botonera">
                <button class="btn-cookies" id="btnAceptar">
                    Aceptar TODO
                </button>
                <button class="btn-cookies" id="btnRechazar">
                    Rechazar TODO
                </button>
            </li>
        </ul>
    `;

    // Objeto para guardar las preferencias
    let cookiesPreferences;

    // Funcionalidad botones y formulario aquí...
}
```

**Estructura generada:**
```
┌─────────────────────────────────────┐
│  Pantalla de bloqueo (overlay)      │
│  ┌───────────────────────────────┐  │
│  │   MODAL DE COOKIES            │  │
│  │                               │  │
│  │  📋 Datos para mejorar...     │  │
│  │  ☑ Estrictamente necesarias   │  │
│  │  ○ Rendimiento y análisis     │  │
│  │  ○ Experiencias personalizadas│  │
│  │  ○ Publicidad personalizada   │  │
│  │  ○ Publicidad por perfil      │  │
│  │                               │  │
│  │  [Aceptar TODO] [Rechazar]    │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

---

#### Parte 3: Botón "Aceptar TODO"

```javascript
const btnAceptar = document.getElementById("btnAceptar");
btnAceptar.addEventListener("click", function () {
    // Crear objeto con todas las preferencias en "aceptar"
    cookiesPreferences = {
        performance: "aceptar",
        personalized: "aceptar",
        advertising: "aceptar",
        profileAdvertising: "aceptar"
    };
    
    // Guardar preferencias en localStorage como JSON
    localStorage.setItem(
        "cookiesPreferences",
        JSON.stringify(cookiesPreferences)
    );
    
    // Marcar que las cookies fueron aceptadas
    localStorage.setItem("cookies", "true");
    
    // Eliminar el popup del DOM
    document.body.removeChild(cookiesPopup);
    
    console.log("✅ Todas las cookies aceptadas");
});
```

**localStorage después:**
```json
{
  "cookies": "true",
  "cookiesPreferences": {
    "performance": "aceptar",
    "personalized": "aceptar",
    "advertising": "aceptar",
    "profileAdvertising": "aceptar"
  }
}
```

---

#### Parte 4: Botón "Rechazar TODO"

```javascript
const btnRechazar = document.getElementById("btnRechazar");
btnRechazar.addEventListener("click", function () {
    // Crear objeto con todas las preferencias en "rechazar"
    cookiesPreferences = {
        performance: "rechazar",
        personalized: "rechazar",
        advertising: "rechazar",
        profileAdvertising: "rechazar"
    };
    
    // Guardar preferencias
    localStorage.setItem(
        "cookiesPreferences",
        JSON.stringify(cookiesPreferences)
    );
    
    // Marcar como rechazadas
    localStorage.setItem("cookies", "true");
    
    // Eliminar popup
    document.body.removeChild(cookiesPopup);
    
    console.log("❌ Todas las cookies rechazadas");
});
```

---

#### Parte 5: Formulario Personalizado

```javascript
const cookiesForm = document.getElementById("cookiesForm");
cookiesForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir recarga de página
    
    // Obtener valores seleccionados del formulario
    const performance = document.querySelector(
        'input[name="performance"]:checked'
    ).value;
    
    const personalized = document.querySelector(
        'input[name="personalized"]:checked'
    ).value;
    
    const advertising = document.querySelector(
        'input[name="advertising"]:checked'
    ).value;
    
    const profileAdvertising = document.querySelector(
        'input[name="profileAdvertising"]:checked'
    ).value;
    
    // Crear objeto con preferencias personalizadas
    cookiesPreferences = {
        performance,
        personalized,
        advertising,
        profileAdvertising
    };
    
    // Guardar todo en localStorage
    localStorage.setItem(
        "cookiesPreferences",
        JSON.stringify(cookiesPreferences)
    );
    localStorage.setItem("cookies", "true");
    
    // Eliminar popup
    document.body.removeChild(cookiesPopup);
    
    console.log("⚙️ Preferencias personalizadas guardadas", cookiesPreferences);
});
```

---

## 🔄 Flujo de Funcionamiento

### Diagrama de Secuencia

```
┌─────────────┐
│  Usuario    │
│  Visita     │
│   Sitio     │
└──────┬──────┘
       │
       ▼
  ┌─────────────────────────────────┐
  │ Evento: window.addEventListener │
  │         ("load", ...)           │
  └─────────────┬───────────────────┘
                │
                ▼
  ┌─────────────────────────────────┐
  │ localStorage.getItem("cookies") │
  └──────┬────────────────────┬─────┘
         │                    │
        null              "true"
         │                    │
         ▼                    ▼
  ┌────────────┐        ┌──────────────┐
  │ showCookies│        │ Cargar página│
  │ Popup()    │        │ normalmente  │
  └─────┬──────┘        └──────────────┘
        │
        ▼
  ┌──────────────────────────┐
  │ Crear elementos HTML     │
  │ - overlay                │
  │ - modal                  │
  │ - formulario             │
  │ - botones                │
  └────┬─────────────────────┘
       │
       ▼
  ┌──────────────────────┐
  │ Usuario elige acción │
  └──┬────────┬──────┬───┘
     │        │      │
     ▼        ▼      ▼
 ACEPTAR  RECHAZAR PERSONAL
  TODO     TODO     IZAR
     │        │      │
     └────┬───┴──┬───┘
          │      │
          ▼      ▼
     ┌──────────────────────┐
     │ localStorage.setItem()│
     │ - cookies: "true"    │
     │ - preferences: {}    │
     └────┬─────────────────┘
          │
          ▼
     ┌──────────────────┐
     │ removeChild()    │
     │ popup del DOM    │
     └────┬─────────────┘
          │
          ▼
     ┌──────────────────┐
     │ console.log()    │
     │ (confirmación)   │
     └──────────────────┘
```

---

## 📊 Estructura de Datos en localStorage

### Ejemplo 1: Aceptar TODO
```json
{
  "cookies": "true",
  "cookiesPreferences": {
    "performance": "aceptar",
    "personalized": "aceptar",
    "advertising": "aceptar",
    "profileAdvertising": "aceptar"
  }
}
```

### Ejemplo 2: Rechazar TODO
```json
{
  "cookies": "true",
  "cookiesPreferences": {
    "performance": "rechazar",
    "personalized": "rechazar",
    "advertising": "rechazar",
    "profileAdvertising": "rechazar"
  }
}
```

### Ejemplo 3: Personalizado
```json
{
  "cookies": "true",
  "cookiesPreferences": {
    "performance": "aceptar",
    "personalized": "rechazar",
    "advertising": "aceptar",
    "profileAdvertising": "rechazar"
  }
}
```

---

## 🎨 Guía de Colores y Estilos

| Elemento | Color | Hex | RGB |
|---|---|---|---|
| Fondo Overlay | Blanco Translúcido | - | `rgba(255, 255, 255, 0.341)` |
| Botón Aceptar | Verde | `#4caf50` | `rgb(76, 175, 80)` |
| Botón Preferencias | Azul | `#2196f3` | `rgb(33, 150, 243)` |
| Sombra | Gris Oscuro | - | `rgba(0, 0, 0, 0.2)` |

---

## 🔐 Cumplimiento Normativo

✅ **RGPD (Reglamento General de Protección de Datos)**
- Consentimiento previo y explícito
- Información clara sobre uso de cookies
- Posibilidad de revocar consentimiento

✅ **LSSI-CE (Ley de la Sociedad de la Información - España)**
- Opciones granulares de aceptación
- Información sobre cookies de terceros
- Obligatoriedad de obtener consentimiento

✅ **GDPR (UE)**
- Formulario accesible y claro
- Rechazo tan fácil como aceptación
- Almacenamiento seguro de preferencias

---

## 📱 Responsive Design

El proyecto es totalmente responsive:

- **Desktop**: Modal de 400px de ancho máximo
- **Tablet**: Adaptación automática del contenedor
- **Móvil**: Formulario con scroll vertical
- **Unidades dinámicas**: `100dvh` y `100dvw` para mejor UX

---

## ⌨️ Atajos y Eventos

| Evento | Descripción |
|---|---|
| `window.addEventListener("load", ...)` | Se ejecuta cuando el DOM está listo |
| `click` en botones | Guarda preferencias |
| `submit` en formulario | Valida y guarda preferencias personalizadas |
| `localStorage.getItem()` | Recupera preferencias guardadas |
| `localStorage.setItem()` | Guarda preferencias |

---

## 🔧 Funciones Principales

### `showCookiesPopup()`
- **Propósito**: Generar y mostrar el modal de cookies
- **Parámetros**: Ninguno
- **Retorno**: Void
- **Efectos**: Modifica el DOM, añade event listeners

### `localStorage.getItem("cookies")`
- **Propósito**: Verificar si el usuario aceptó cookies
- **Retorno**: `"true"` o `null`

### `localStorage.setItem("cookies", "true")`
- **Propósito**: Guardar que el usuario aceptó cookies
- **Parámetros**: Clave y valor

---

## 🚨 Puntos Importantes

1. **Never** guardar contraseñas en localStorage
2. **Always** usar `JSON.stringify()` para objetos complejos
3. **Always** usar `JSON.parse()` al recuperar
4. **Check** compatibilidad de navegadores
5. **Test** en diferentes dispositivos

---

## 📝 Próximas Mejoras

- [ ] Integración con Google Analytics
- [ ] Banner minimizado para usuarios que rechazaron
- [ ] Expiración de preferencias (ej: 1 año)
- [ ] Idioma dinámico (i18n - Internacionalización)
- [ ] Categorías adicionales de cookies
- [ ] API backend para sincronizar preferencias
- [ ] Animaciones de entrada/salida
- [ ] Modo oscuro

---

## 🧪 Testing

### Verificar localStorage en DevTools
```javascript
// En la consola del navegador
localStorage.getItem("cookies")
JSON.parse(localStorage.getItem("cookiesPreferences"))

// Limpiar para reiniciar
localStorage.clear()
```

---

## 👨‍💻 Autor

**@djocunda** - Proyecto Portfolio Inicial  
**Fecha**: 18 de noviembre de 2025

---

## 📄 Licencia

Este proyecto es de código abierto bajo licencia **MIT**.

---

## 💬 Soporte

¿Preguntas o sugerencias? Abre un issue en el repositorio.

**Última actualización**: 18/11/2025