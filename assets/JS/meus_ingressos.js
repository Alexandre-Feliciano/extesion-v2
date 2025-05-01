const modal = document.getElementById('modalDetalhes');
const titulo = document.getElementById('modalTitulo');
const dataEl = document.getElementById('modalData');
const horaEl = document.getElementById('modalHora');
const localEl = document.getElementById('modalLocal');

document.querySelectorAll('.btn-detalhes').forEach(btn => {
    btn.addEventListener('click', () => {
        const nome = btn.dataset.nome;
        const data = btn.dataset.data;
        const hora = btn.dataset.hora;
        const local = btn.dataset.local;

        titulo.textContent = nome;
        dataEl.textContent = data;
        horaEl.textContent = hora;
        localEl.textContent = local;

        modal.showModal();
    });
});

function fecharModal() {
    modal.close();
}

function cancelarInscricao() {
    if (confirm('Deseja cancelar sua inscrição?')) {
        // Aqui pode fazer uma requisição para cancelar no backend com PHP
        alert('Inscrição cancelada com sucesso!');
        modal.close();
    
    }
}
