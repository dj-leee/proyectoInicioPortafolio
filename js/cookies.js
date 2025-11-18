// Cuando carga l página, tengo que mirar en localstorage si hay un key llamado cookies y si su valor es true
window.addEventListener("load", function () {
    // Cuando la página html se haya cargado, leo el valor de la key cookies en localstorage
    const cookiesAccepted = localStorage.getItem("cookies");
    // Si el valor es true, oculto el banner de cookies
    if (cookiesAccepted === "true") {
        console.log("Cookies ya aceptadas");
    } else {
        // Si el valor es false o no existe, muestro el banner de cookies
        showCookiesPopup();
    }
});

// función para mostrar legalmente el popup de cookies
function showCookiesPopup() {
    // Crear los elementos de HTML necesarios
    const cookiesPopup = document.createElement("div");
    document.body.appendChild(cookiesPopup);
    cookiesPopup.innerHTML = `
            <!-- Ejemplo de bloqueo popup cookies -->
        <div id="pantalla-cookies" class="pantalla-cookies"></div>
        <!-- Formulario -->
        <ul class="contedor-cookies">
            <li class="formulario">
                <form id="cookiesForm">
                    <div>

                        <h2>Datos para mejorar tu experiencia</h2>
        
                        <p>
                            Para mejorar tu experiencia en nuestras plataformas y poder
                            mostrarte información más relevante, utilizamos cookies y
                            tecnologías similares, tanto propiedad de Nike como de
                            terceros, así como datos enviados directamente desde
                            nuestros servidores. Puedes modificar lo que quieras en
                            cualquier momento en la sección "Privacidad" de la
                            configuración de tu cuenta o haciendo clic en el enlace
                            "Configuración de privacidad y cookies" que verás en la
                            parte inferior de Nike.com. Para más información, consulta
                            nuestra Política de privacidad y cookies.
                        </p>
                    </div>
    
                    <div class="cookie-option">
                        <h3>Estrictamente necesarias (siempre activado)</h3>
                        <p>
                            Permitir las funcionalidades principales para desplegar
                            tu idioma, ubicación y cesta. También contribuye a la
                            seguridad, la gestión de red y la accesibilidad.
                        </p>
                    </div>
    
                    <div class="cookie-option">
                        <h3>Rendimiento y análisis</h3>
                        <p>
                            Permitir el uso de datos de comportamiento para
                            optimizar el rendimiento, revisar cómo interactúas con
                            nuestros sitios web y aplicaciones, y mejorar las
                            experiencias de Nike.
                        </p>
                        <div class="radio-group">
                            <label>
                                <input
                                    type="radio"
                                    name="performance"
                                    value="aceptar"
                                    required
                                />
                                Aceptar
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="performance"
                                    value="rechazar"
                                    required
                                />
                                Rechazar
                            </label>
                        </div>
                    </div>
    
                    <div class="cookie-option">
                        <h3>Experiencias personalizadas</h3>
                        <p>
                            Mediante cookies y otras tecnologías se permite el uso
                            de datos de comportamiento para mejorar tu experiencia y
                            ofrecerte contenido relevante en las plataformas y
                            comunicaciones de Nike.
                        </p>
                        <div class="radio-group">
                            <label>
                                <input
                                    type="radio"
                                    name="personalized"
                                    value="aceptar"
                                    required
                                />
                                Aceptar
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="personalized"
                                    value="rechazar"
                                    required
                                />
                                Rechazar
                            </label>
                        </div>
                    </div>
    
                    <div class="cookie-option">
                        <h3>Publicidad personalizada</h3>
                        <p>
                            Permitir compartir datos de comportamiento con socios
                            publicitarios. Estos datos se utilizan para mejorar e
                            informar sobre la experiencia de publicidad
                            personalizada en los sitios de nuestros socios
                            publicitarios.
                        </p>
                        <p>
                            <a href="#"
                                >Aprende más sobre la publicidad personalizada</a
                            >
                        </p>
                        <div class="radio-group">
                            <label>
                                <input
                                    type="radio"
                                    name="advertising"
                                    value="aceptar"
                                    required
                                />
                                Aceptar
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="advertising"
                                    value="rechazar"
                                    required
                                />
                                Rechazar
                            </label>
                        </div>
                    </div>
    
                    <div class="cookie-option">
                        <h3>Publicidad personalizada basada en tu perfil</h3>
                        <p>
                            Permitir compartir tu dirección de correo electrónico y
                            número de teléfono con socios publicitarios para
                            personalizar la publicidad en función de tus intereses y
                            medir la eficacia de la publicidad en sitios de nuestros
                            socios publicitarios.
                        </p>
                        <p>
                            <a href="#"
                                >Más información sobre publicidad basada en
                                perfiles</a
                            >
                        </p>
                        <div class="radio-group">
                            <label>
                                <input
                                    type="radio"
                                    name="profileAdvertising"
                                    value="aceptar"
                                    required
                                />
                                Aceptar
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="profileAdvertising"
                                    value="rechazar"
                                    required
                                />
                                Rechazar
                            </label>
                        </div>
                        <button class="btn-preferencias" type="submit">Guardar preferencias</button>
                    </div>
                    </div>
                </form>
            </li>
            <!-- Botones de aceptar TODO o rechazar TODO -->
            <li class="botonera">
                <button class="btn-cookies" id="btnAceptar">
                    Aceptar TODO
                </button>
                <button class="btn-cookies" id="btnRechazar">
                    Rechazar TODO
                </button>
            </li>
        </div>

    `;
    // Objeto para guardar las preferencias de cookies
    let cookiesPreferences;

    // Añadir funcionalidad a los botones, aceptar todo
    const btnAceptar = document.getElementById("btnAceptar");
    btnAceptar.addEventListener("click", function () {
        // Objeto con las keys (performace, personalized, advertising) y valor aceptar
        cookiesPreferences = {
            performance: "aceptar",
            personalized: "aceptar",
            advertising: "aceptar",
            profileAdvertising: "aceptar"
        };
        // Guardar en localstorage, como un JSON las cookiesPreferences
        localStorage.setItem(
            "cookiesPreferences",
            JSON.stringify(cookiesPreferences)
        );
        localStorage.setItem("cookies", "true");
        // Guardar en cookies, las cookiesPreferences
        // setCookies(cookiesPreferences);

        // Eliminar la creación del div del popup de cookies
        document.body.removeChild(cookiesPopup);
    });

    // Añadir funcionalidad a los botones, aceptar todo
    const btnRechazar = document.getElementById("btnRechazar");
    btnRechazar.addEventListener("click", function () {
        // Objeto con las keys (performace, personalized, advertising) y valor aceptar
        cookiesPreferences = {
            performance: "rechazar",
            personalized: "rechazar",
            advertising: "rechazar",
            profileAdvertising: "rechazar"
        };
        // Guardar en localstorage, como un JSON las cookiesPreferences
        localStorage.setItem(
            "cookiesPreferences",
            JSON.stringify(cookiesPreferences)
        );
        localStorage.setItem("cookies", "true");
        // Guardar en cookies, las cookiesPreferences
        // setCookies(cookiesPreferences);

        // Eliminar la creación del div del popup de cookies
        document.body.removeChild(cookiesPopup);
    });

    // Boton preferencias del formulario, primero hay que captar los values seleccionados
    const cookiesForm = document.getElementById("cookiesForm");
    cookiesForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evitar el envío del formulario
        // Insertar los valores de cada input radio, en el objeto cookiesPreferences
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

        // Asignar los valores al objeto cookiesPreferences
        cookiesPreferences = {
            performance: performance,
            personalized: personalized,
            advertising: advertising,
            profileAdvertising: profileAdvertising

        };
        // Guardar en localstorage, como un JSON las cookiesPreferences
        localStorage.setItem(
            "cookiesPreferences",
            JSON.stringify(cookiesPreferences)
        );
        localStorage.setItem("cookies", "true");
        // Guardar en cookies, las cookiesPreferences
        // setCookies(cookiesPreferences);

        // Eliminar la creación del div del popup de cookies
        document.body.removeChild(cookiesPopup);
    });
}