const openModal = document.querySelector('.fotoCabaco');
function toggleModal() {
    openModal.addEventListener('click', () => {
        const modal = document.querySelector('.box-perfil-mobile');

        if (modal.classList.contains('open-box-modal-perfil-user')) {
            modal.classList.remove('open-box-modal-perfil-user');
        } else {
            modal.classList.add('open-box-modal-perfil-user');
        }
    });
}
toggleModal();