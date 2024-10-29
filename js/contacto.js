document.getElementById("whatsapp-btn").addEventListener("click", function(event) {
    // Obtén el mensaje de la caja de texto
    const mensaje = document.getElementById("mensajeWhatsApp").value;

    // Verifica que no esté vacío
    if (mensaje.trim() === "") {
        alert("Por favor, escribe un mensaje.");
        event.preventDefault();
        return;
    }

    // Codifica el mensaje para que sea seguro enviarlo en el enlace de WhatsApp
    const mensajeCodificado = encodeURIComponent(mensaje);

    // Actualiza el enlace de WhatsApp con el mensaje codificado
    this.href = `https://wa.me/573203086071?text=${mensajeCodificado}`;
});