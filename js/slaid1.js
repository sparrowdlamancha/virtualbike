// Selecciona el botón de siguiente
let next = document.querySelector('.next');
// Selecciona el botón de anterior
let prev = document.querySelector('.prev');

// Función para mover a la siguiente diapositiva
function moveToNextSlide() {
    // Selecciona todas las diapositivas
    let items = document.querySelectorAll('.item');
    // Mueve la primera diapositiva al final de la lista de diapositivas
    document.querySelector('.slide').appendChild(items[0]);
}

// Función para mover a la diapositiva anterior
function moveToPrevSlide() {
    // Selecciona todas las diapositivas
    let items = document.querySelectorAll('.item');
    // Mueve la última diapositiva al principio de la lista de diapositivas
    document.querySelector('.slide').prepend(items[items.length - 1]);
}

// Añade un evento al botón de siguiente para mover a la siguiente diapositiva
next.addEventListener('click', function() {
    moveToNextSlide(); // Llama a la función para mover a la siguiente diapositiva
    resetAutoSlide(); // Reinicia el temporizador de movimiento automático
});

// Añade un evento al botón de anterior para mover a la diapositiva anterior
prev.addEventListener('click', function() {
    moveToPrevSlide(); // Llama a la función para mover a la diapositiva anterior
    resetAutoSlide(); // Reinicia el temporizador de movimiento automático
});

// Configura un intervalo para mover automáticamente a la siguiente diapositiva cada 3 segundos
let autoSlideInterval = setInterval(moveToNextSlide, 5000);

// Función para reiniciar el temporizador de movimiento automático
function resetAutoSlide() {
    // Detiene el temporizador actual
    clearInterval(autoSlideInterval);
    // Inicia un nuevo temporizador
    autoSlideInterval = setInterval(moveToNextSlide, 5000); 
    //1000 = 1s
}
