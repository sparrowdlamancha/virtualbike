document.addEventListener("DOMContentLoaded", () => {
    const tratamientoCheckbox = document.getElementById("tratamiento");
    const guardarBtn = document.getElementById("guardar");

    tratamientoCheckbox.addEventListener("change", () => {
        guardarBtn.disabled = !tratamientoCheckbox.checked;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.input-contenedor input, .input-contenedor select').forEach((element) => {
        element.addEventListener('input', function() {
            if (this.value) {
                this.nextElementSibling.classList.add('active');
            } else {
                this.nextElementSibling.classList.remove('active');
            }
        });
    });
});