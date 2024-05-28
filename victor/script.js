function enviarDados() {
    // Capturar os valores dos campos do formulário
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    var endereco = document.getElementById('endereco').value;

    // Criar um objeto JSON com os dados capturados
    var dadosCadastro = {
        "nome": nome,
        "email": email,
        "telefone": telefone,
        "endereco": endereco
    };

    // Converter o objeto JSON em uma string para envio para o servidor
    var dadosJSON = JSON.stringify(dadosCadastro);

    // Aqui você pode enviar os dadosJSON para o servidor, por exemplo, via requisição AJAX
    console.log(dadosJSON); // Apenas para exemplo, mostra os dados no console
}
