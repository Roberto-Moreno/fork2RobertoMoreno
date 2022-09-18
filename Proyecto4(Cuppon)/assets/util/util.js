/* FILTRO DE PRODUCTOS */
function hideAndShow(id1) {
    var div = document.getElementsByClassName('all');
    for (i = 0; i < div.length; i++) {
        if (!div[i].classList.contains(id1)) {
            div[i].style.display = 'none';
        } else if (div[i].classList.contains(id1)) {
            div[i].style.display = 'block';
        }
    }
}
/* VALIDACIÓN INPUT */
function validateInput() {
    var nombre = document.getElementById('inputName');
    var mail = document.getElementById('userMail');
    const modal = document.getElementById('comunModal');
    const modalTitle = modal.querySelector('.modal-title');
    const modalBodyInput = modal.querySelector('.modal-body p');
    /* Validacion Nombre */
    if (nombre.value.length == 0) {
        modalTitle.textContent = "¡Falta tu nombre!";
        modalBodyInput.textContent = "Por favor ingresa tu nombre!!!!";
        return false;
    }
    /* Validacion Mail */
    if (mail.value.length == 0) {

        modalTitle.textContent = "¡Falta tu mail!";
        modalBodyInput.textContent = "Por favor ingresa tu mail!!!!";
        return false;
    }
    modalTitle.textContent = "CUPPON";
    modalBodyInput.textContent = "Gracias por su registro";
}