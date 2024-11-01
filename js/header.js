//FUNCIÓN PARA HACER QUE APAREZCA UNA 
//LINEA PORDEBAJO DE CADA VENTANA ACTIVA

// Obtener la URL de la página actual
const currentUrl = window.location.pathname;

// Seleccionar todos los enlaces de navegación
const navLinks = document.querySelectorAll('.navbar .links a');

// Recorrer los enlaces y comparar con la URL actual
navLinks.forEach(link => {
    if (link.href.includes(currentUrl)) {
        link.classList.add('active'); // Agrega la clase 'active' al enlace actual
    }
});

