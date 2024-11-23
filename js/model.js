
document.getElementById('btnMenu').addEventListener('change', function() {
    const liLinks = document.querySelector('.li_links');  // seleccionamos la lista de enlaces
    const logo = document.querySelector('.logo'); 
    const ulLinks = document.querySelector('.ul_links');

    if (this.checked) {
        // Si el checkbox está marcado, mostramos los enlaces con estilo flex

        ulLinks.style.display = 'flex';
        ulLinks.style.flexdirection = 'column';
        ulLinks.style.position = 'absolute';
        ulLinks.style.backgroundcolor = '#1e1e1f';
        ulLinks.style.width = '768px';
        ulLinks.style.top = '20px';
        ulLinks.style.alignitems = 'center';
        ulLinks.style.marginleft = '-320px';
        ulLinks.style.paddingbottom = '70px';
        ulLinks.style.paddingtop = '0px';


        liLinks.style.padding= '10px';
        liLinks.style.fontsize= '25px';

        logo.style.opacity= '0';

    } else {
        logo.style.opacity= '100';
        ulLinks.style.display = 'none';
    }

});













