
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

    // Función para obtener el valor de un parámetro de la URL
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    // Al cargar la página
    window.addEventListener('DOMContentLoaded', (event) => {
        const productId = getQueryParam('id');
        
        if (productId) {
            // Oculta todos los productos
            const allProducts = document.querySelectorAll('.producto-item');
            allProducts.forEach(product => {
                product.style.display = 'none';
            });

            // Muestra solo el producto con el ID especificado
            const targetProduct = document.getElementById(productId);
            if (targetProduct) {
                targetProduct.style.display = 'block';
            } else {
                console.log("Producto no encontrado");
            }
        }
    });

