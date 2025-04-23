const botao = document.getElementById("modal_btn");
const modal = document.getElementById("m_modal");

function m_modal() {
    modal.showModal(); // Abre o modal
}

function fecharModal() {
    modal.close(); // Fecha  modal
}

// Fecha o modal ao pressionar "Esc"
modal.addEventListener("cancel", (event) => {
    event.preventDefault(); // Impede o comportamento padrão de fechar
    modal.close();
});
