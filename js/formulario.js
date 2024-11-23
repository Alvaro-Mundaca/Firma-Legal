document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form"); // Selecciona el formulario
    const contactoSection = document.querySelector("#contacto"); // Selecciona la sección de contacto

    if (!form || !contactoSection) {
        console.error("Formulario o sección de contacto no encontrado.");
        return;
    }

    // Configura el IntersectionObserver
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    form.classList.add("active"); // Agrega la clase `active` al formulario
                    observer.unobserve(entry.target); // Detiene la observación para mejorar el rendimiento
                }
            });
        },
        {
            root: null, // Usa el viewport como área de observación
            threshold: 0.1, // Se activa cuando al menos el 10% del formulario o la sección es visible
        }
    );

    observer.observe(contactoSection); // Observa la sección completa
});



document.addEventListener("DOMContentLoaded", function () {
        const form = document.querySelector("form"); // Selecciona el formulario
        const contactoSection = document.querySelector("#contacto"); // Selecciona la sección de contacto
        const contactImage = document.querySelector(".Elementos_contacto img"); // Selecciona la imagen

        if (!form || !contactoSection || !contactImage) {
            console.error("Formulario, sección de contacto o imagen no encontrado.");
            return;
        }

        // Configura el IntersectionObserver
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        form.classList.add("active"); // Activa el formulario
                        contactImage.classList.add("active"); // Activa la imagen
                        observer.unobserve(entry.target); // Detiene la observación
                    }
                });
            },
            {
                root: null, // Usa el viewport como área de observación
                threshold: 0.2, // Se activa cuando el 20% del elemento es visible
            }
        );

        observer.observe(contactoSection); // Observa la sección completa
    });












    document.addEventListener("DOMContentLoaded", function () {
        const form = document.querySelector("form"); // Selecciona el formulario
        const contactImage = document.querySelector(".Elementos_contacto img"); // Selecciona la imagen
        const contactoSection = document.querySelector("#contacto"); // Selecciona la sección de contacto

        if (!form || !contactImage || !contactoSection) {
            console.error("Formulario, imagen o sección de contacto no encontrado.");
            return;
        }

        // Configura el IntersectionObserver
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        form.classList.add("active"); // Muestra el formulario
                        contactImage.classList.add("active"); // Muestra la imagen
                    } else {
                        form.classList.remove("active"); // Oculta el formulario
                        contactImage.classList.remove("active"); // Oculta la imagen
                    }
                });
            },
            {
                root: null, // Usa el viewport como área de observación
                threshold: 0.2, // Se activa cuando al menos el 20% de la sección es visible
            }
        );

        observer.observe(contactoSection); // Observa la sección completa
    });