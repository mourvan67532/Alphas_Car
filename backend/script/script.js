function cadastro_cliente(){
    
    const nome = document.getElementById("nome_cliente").value;
    const email = document.getElementById("e-mail").value;
    const telefone = document.getElementById("celular").value;
    const cpf = document.getElementById("cpf").value;
    const uf = document.getElementById("uf").value;
    const cep = document.getElementById("endereco_cep").value;
    const bairro = document.getElementById("bairro").value;
    const rua = document.getElementById("rua").value;
    const complemento = document.getElementById("complemento").value;

    document.getElementById("nome_client").innerText = nome;
    document.getElementById("e-mai").innerText = email;
    document.getElementById("celula").innerText = telefone;
    document.getElementById("cp").innerText = cpf;
    document.getElementById("u").innerText = uf;
    document.getElementById("endereco_ce").innerText = cep;
    document.getElementById("bairr").innerText = bairro;
    document.getElementById("ru").innerText = rua;
    document.getElementById("complement").innerText = complemento;

};


function agendamento(){

    const nome = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const model = document.getElementById("car").value;
    const data = document.getElementById("date").value;
    const hora = document.getElementById("time").value;

    document.getElementById("nam").innerHTML = nome;
    document.getElementById("emai").innerHTML = email;
    document.getElementById("ca").innerHTML = model;
    document.getElementById("dat").innerHTML = data;
    document.getElementById("tim").innerHTML = hora;

}