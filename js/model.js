document.addEventListener('DOMContentLoaded', function () {
    const btnMenu = document.getElementById('btnMenu'); // Seleccionamos el checkbox
    if (btnMenu) {
        btnMenu.addEventListener('change', function () {
            const liLinks = document.querySelectorAll('.li_links'); // Seleccionamos todos los enlaces
            const logo = document.querySelector('.logo'); // Seleccionamos el logo
            const ulLinks = document.querySelector('.ul_links'); // Seleccionamos el contenedor de enlaces

            if (this.checked) {
                ulLinks.style.display = 'flex';
                ulLinks.style.flexDirection = 'column';
                ulLinks.style.position = 'absolute';
                ulLinks.style.backgroundColor = '#1e1e1f';
                ulLinks.style.width = '768px';
                ulLinks.style.top = '20px';
                ulLinks.style.alignItems = 'center';
                ulLinks.style.marginLeft = '-320px';
                ulLinks.style.paddingBottom = '70px';
                ulLinks.style.paddingTop = '0px';

                liLinks.forEach(link => {
                    link.style.padding = '10px';
                    link.style.fontSize = '25px';
                });

                logo.style.opacity = '0';
            } else {
                ulLinks.style.display = 'none';
                logo.style.opacity = '1';
            }
        });
    } else {
        console.error('No se encontró el checkbox con ID btnMenu');
    }
});











