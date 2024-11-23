
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form"); // Selecciona el formulario
    const contactoSection = document.querySelector("#contacto"); // Selecciona la sección de contacto


    // Configura el IntersectionObserver
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    form.classList.add("active"); 
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


    function validarFormulario(event) {
        // Prevenir el envío del formulario
        event.preventDefault();

        // Obtener los valores de los campos
        const nombre = document.getElementById("nombre").value.trim();
        const departamento = document.getElementById("departamento").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        const formulario = document.getElementById("formularioContacto");

        // Validar si algún campo está vacío
        if (!nombre || !departamento || !telefono || !email || !mensaje) {
            alert("Debe completar todos los campos");
        } else {
            alert("¡Formulario enviado con éxito!");
            formulario.reset();
        }
    }