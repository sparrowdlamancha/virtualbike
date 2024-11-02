
    // Función para cambiar el estado del botón "Me encanta"
    document.querySelectorAll(".me-encanta").forEach(button => {
        button.addEventListener("click", () => {
            button.classList.toggle("active");
            button.innerHTML = button.classList.contains("active") ? "❤️" : "♡";
        });
    });

    // Función para el botón de "Agregar al carrito" con icono que cambia al hacer clic
    document.querySelectorAll(".carrito-btn").forEach(button => {
        button.addEventListener("click", () => {
            button.classList.toggle("added");
            button.innerHTML = button.classList.contains("added") 
                ? '<i class="fa fa-check"></i> Agregado' 
                : '<i class="fa fa-cart-plus"></i>';
        });
    });

