const botao = document.getElementById("modal_btn");
const modal = document.getElementById("m_modal");

function m_modal() {
    modal.showModal();
}

function fecharModal() {
    modal.close();
}

document.getElementById("btn-comecar").onclick = function() {
    window.location.href = "/Pages/login.html";
}