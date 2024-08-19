function showForm(formNumber) {
    // Ocultar todos los formularios
    var forms = document.querySelectorAll('.form-content');
    forms.forEach(function(form) {
        form.classList.remove('active');
    });

    // Mostrar el formulario seleccionado
    var selectedForm = document.getElementById('form-' + formNumber);
    selectedForm.classList.add('active');
}
