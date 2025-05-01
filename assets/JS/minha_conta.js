function salvarAlteracoes() {
    alert('Alterações salvas com sucesso!');
    
  }

  function abrirModalApagar() {
    document.getElementById('modalApagarConta').showModal();
  }

  function fecharModalApagar() {
    document.getElementById('modalApagarConta').close();
  }

  function confirmarApagar() {
    alert('Conta apagada!');
    
    fecharModalApagar();
  }