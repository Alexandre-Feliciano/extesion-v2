const botao = document.getElementById("modal_btn");
const modal = document.getElementById("m_modal");

function m_modal() {
    modal.showModal();
}

function fecharModal() {
    modal.close();
    alert('Modal fechado!');
}

document.getElementById("btn-comecar").onclick = function () {
    window.location.href = "/Pages/login.html";
}

// dropdown do perfil

document.addEventListener('DOMContentLoaded', function () {
    const userToggle = document.getElementById('user-toggle');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const icon = document.getElementById('icone-nome');

    userToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownMenu.classList.toggle('show');
        dropdownMenu.classList.toggle('hidden');
        icon.classList.toggle('fa-angle-down');
        icon.classList.toggle('fa-angle-up');
    });

    document.addEventListener('click', (e) => {
        if (!userToggle.contains(e.target)) {
            dropdownMenu.classList.remove('show');
            dropdownMenu.classList.add('hidden');
            icon.classList.add('fa-angle-down');
            icon.classList.remove('fa-angle-up');
        }
    });
});
