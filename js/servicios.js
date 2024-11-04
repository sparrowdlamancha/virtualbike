//crea mensaje de exito al hacer click
function agendarCita(tipo) {
    // Muestra el mensaje de éxito correspondiente
    const mensajeExito = document.getElementById(`mensajeExito${tipo}`);
    mensajeExito.style.display = "block";

    // Limpia los campos de entrada
    const inputs = document.querySelectorAll(`.columna:nth-child(${tipo}) .input-servicio, .columna:nth-child(${tipo}) .input-ciudad, .columna:nth-child(${tipo}) .input-tecnico, .columna:nth-child(${tipo}) .input-fecha-hora`);
    inputs.forEach(input => {
        if (input.tagName === "SELECT") {
            input.selectedIndex = 0;
        } else {
            input.value = "";
        }
    });

    // Oculta el mensaje después de unos segundos
    setTimeout(() => {
        mensajeExito.style.display = "none";
    }, 5000); // Ocultar después de 5 segundos
}

