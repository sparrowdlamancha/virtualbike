document.addEventListener("DOMContentLoaded", () => {
    const tratamientoCheckbox = document.getElementById("tratamiento");
    const guardarBtn = document.getElementById("guardar");

    tratamientoCheckbox.addEventListener("change", () => {
        guardarBtn.disabled = !tratamientoCheckbox.checked;
    });
});
