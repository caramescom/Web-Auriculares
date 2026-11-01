// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario-pedido');
    const mensajeConfirmacion = document.getElementById('mensaje-confirmacion');

    formulario.addEventListener('submit', function (evento) {
        // Evitar que el formulario se envíe de forma tradicional
        evento.preventDefault();

        // Obtener los valores de los campos
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const cantidad = parseInt(document.getElementById('cantidad').value);

        // Validación adicional (aunque HTML5 ya ayuda)
        if (nombre === '' || email === '' || isNaN(cantidad) || cantidad < 1) {
            alert('Por favor, rellena todos los campos correctamente.');
            return;
        }

        // Calcular el total
        const precioUnitario = 49.99;
        const total = (precioUnitario * cantidad).toFixed(2);

        // Construir el mensaje de confirmación
        const mensaje = `¡Gracias por tu compra, ${nombre}!<br>
                         Has pedido ${cantidad} auricular${cantidad > 1 ? 'es' : ''} SoundMax Pro.<br>
                         Total a pagar: $${total}.<br>
                         Te enviaremos la confirmación a: ${email}.`;

        // Mostrar el mensaje en la página
        mensajeConfirmacion.innerHTML = mensaje;
        mensajeConfirmacion.classList.remove('oculto');

        // Limpiar el formulario después de la compra
        formulario.reset();

        // Opcional: hacer scroll hasta el mensaje para que sea visible
        mensajeConfirmacion.scrollIntoView({ behavior: 'smooth' });
    });
});
