

document.addEventListener("DOMContentLoaded", function () {
        const form = document.querySelector("form"); // Selecciona el formulario
        const contactoSection = document.querySelector("#contacto"); // Selecciona la sección de contacto
        const contactImage = document.querySelector(".Elementos_contacto img"); // Selecciona la imagen


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
                root: null, 
                threshold: 0.2, 
            }
        );

        observer.observe(contactoSection); 
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

