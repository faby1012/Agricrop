

document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        if (!validateForm()) {
            event.preventDefault(); // Evitar que el formulario se envíe si la validación falla
        }
    });

    function validateForm() {
        var nombre = document.getElementById('nombre').value;
        var email = document.getElementById('email').value;
        var mensaje = document.getElementById('mensaje').value;

        // Realiza la validación, puedes agregar más validaciones según tus necesidades
        if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
            alert('Todos los campos son obligatorios');
            return false;
        }

        return true; // El formulario es válido
    }
});
