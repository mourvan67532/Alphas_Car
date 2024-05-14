function adicionarProduto() {
    // Obtém os valores do formulário
    let nomeProduto = document.getElementById("nomeProduto").value;
    let precoProduto = document.getElementById("precoProduto").value;

    // Cria um objeto produto com os valores do formulário
    let produto = {
        nome: nomeProduto,
        preco: precoProduto
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