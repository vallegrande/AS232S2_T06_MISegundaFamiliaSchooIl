function validateForm() {
    var nombreInput = document.getElementById('nombre');
    var apellidoInput = document.getElementById('apellidos');
    var emailInput = document.getElementById('email');
    var nombrePattern = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nombrePattern.test(nombreInput.value)) {
        alert('El nombre no debe contener números ni caracteres especiales.');
        nombreInput.focus();
        return false;
    }

    if (!nombrePattern.test(apellidoInput.value)) {
        alert('Los apellidos no deben contener números ni caracteres especiales.');
        apellidoInput.focus();
        return false;
    }

    if (!emailPattern.test(emailInput.value)) {
        alert('El correo electrónico no es válido.');
        emailInput.focus();
        return false;
    }

    return true;
}