document.getElementById('reset-password-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (password === confirmPassword) {
        // Lógica para llamar al método de Firebase para restablecer la contraseña
        alert("Contraseña restablecida exitosamente");
    } else {
        alert("Las contraseñas no coinciden. Intenta de nuevo.");
    }
});
