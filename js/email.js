
(function() {emailjs.init('2-LFQgKjnqVsirVSJ')})();

document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el formulario y agregar evento de envío
    document.getElementById('formularioContacto').addEventListener('submit', function(event) {
        // Evitar el comportamiento predeterminado del formulario
        event.preventDefault();

        // Capturar los datos del formulario
        const f_nombre = document.getElementById('nombre').value.trim();
        const f_departamento = document.getElementById('departamento').value.trim();
        const f_telefono = document.getElementById('telefono').value.trim();
        const f_email = document.getElementById('email').value.trim();
        const f_mensaje = document.getElementById('mensaje').value.trim();

        // Validar datos básicos antes de enviar
        if (!f_nombre || !f_email || !f_mensaje) {
            Swal.fire({
                title: '¡Alerta!',
                text: 'Por favor completa todos los campos!',
                icon: 'info',
                confirmButtonText: 'Entendido'
            });
            return;
        }

        console.log(f_nombre, f_departamento, f_telefono, f_email, f_mensaje);


        // Enviar datos usando EmailJS
        emailjs.send("service_Firma_Legal", "template_nhrzupc", {
            nombre: f_nombre,
            departamento: f_departamento,
            telefono: f_telefono,
            email: f_email,
            mensaje: f_mensaje,
       // Si la consulta se envió con éxito
        
    }).then(() => {
        console.log('¡Consulta enviada con éxito!');
        Swal.fire({
            title: '¡Consulta enviada!',
            text: 'Tu consulta fue enviada exitosamente. Te responderemos pronto.',
            icon: 'success',
            confirmButtonText: 'Entendido'
    });
    document.getElementById('formularioContacto').reset(); // Limpiar formulario
    }).catch((error) => {
    console.error('Error al enviar el formulario:', error);
        Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al enviar tu consulta. Intenta nuevamente.',
        icon: 'error',
        confirmButtonText: 'Reintentar'
        });
    });
    });
});
