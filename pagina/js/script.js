// Función para abrir el modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Función para cerrar el modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Cerrar el modal si el usuario hace clic fuera de él
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        closeModal(event.target.id);
    }
}
