function cadastroCliente() {
    // Obtém os valores do formulário
    let nomeCliente = document.getElementById("nomeCliente").value;
    let cpfCliente = document.getElementById("cpfCliente").value;

    // Cria um objeto produto com os valores do formulário
    let cadastro = {
        nome: nomeCliente,
        cpf: cpfCliente
    };

    // Envia a requisição POST para o servidor
    fetch('/adicionarProduto', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produto)
    })
    .then(response => {
        if (response.ok) {
            alert('Produto cadastrado com sucesso!');
        } else {
            alert('Erro ao cadastrar produto.');
        }
    })
    .catch(error => console.error('Erro:', error));
}
