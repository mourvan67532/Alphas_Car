//cadastro
function cadastro_cliente(){ // função do cadastro do cliente, recebe e envia de volta os dados até o momento //
    
    const nome = document.getElementById("nome_cliente").value;
    const email = document.getElementById("e-mail").value;
    const telefone = document.getElementById("celular").value;
    const cpf = document.getElementById("cpf").value;
    const cep = document.getElementById("endereco_cep").value;
    const bairro = document.getElementById("bairro").value;
    const rua = document.getElementById("rua").value;
    const complemento = document.getElementById("complemento").value;

    document.getElementById("nome_client").innerText = nome;
    document.getElementById("e-mai").innerText = email;
    document.getElementById("celula").innerText = telefone;
    document.getElementById("cp").innerText = cpf;
    document.getElementById("endereco_ce").innerText = cep;
    document.getElementById("bairr").innerText = bairro;
    document.getElementById("ru").innerText = rua;
    document.getElementById("complement").innerText = complemento;

};

function cadastro_veiculo(){ // função do cadastro do veiculo, recebe e envia de volta os dados até o momento //

    const modelo = document.getElementById("modelo").value;
    const cor = document.getElementById("cor").value;
    const ano = document.getElementById("ano").value;
    const cpf = document.getElementById("cpf").value;
    const n_chassi = document.getElementById("n_chas").value;
    const placa = document.getElementById("placa").value;

    document.getElementById("model").innerText = modelo;
    document.getElementById("color").innerText = cor;
    document.getElementById("car_ano").innerText = ano;
    document.getElementById("cp").innerText = cpf;
    document.getElementById("chassi").innerText = n_chassi;
    document.getElementById("plac").innerText = placa;

}

function cadastro_fornecedor(){ // função do cadastro do fornecedor, recebe e envia de volta os dados até o momento //

    const nome_fornecedor = document.getElementById("nome_fornecedor").value;
    const email = document.getElementById("e-mail").value;
    const telefone = document.getElementById("celular").value;
    const cnpj = document.getElementById("cnpj").value;
    const cep = document.getElementById("endereco_cep").value;

    document.getElementById("nome_forn").innerText = nome_fornecedor;
    document.getElementById("e-mai").innerText = email;
    document.getElementById("celula").innerText = telefone;
    document.getElementById("cnp").innerText = cnpj;
    document.getElementById("endereco_ce").innerText = cep;

}

function orcamento(){ // função do orcamento, recebe e os dados necessários para preencher o orçamento //

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


// nav
let m_var = 0;
function m_cad(){
    let m_nav = document.getElementsByClassName('m_nav3_a');
    if (m_var == 1){
        for (let i = 0; i < m_nav.length; i++) {
            m_nav[i].style.cssText = 'display: none;';
        }
        m_var = 0;
    }
    else{
        for (let i = 0; i < m_nav.length; i++) {
            m_nav[i].style.cssText = 'display: flex;';
        }
        m_var = 1;
    }
}
let m_var_p = 0;
function m_cad_p(){
    let m_nav_p = document.getElementsByClassName('m_nav3_a_p');
    if (m_var_p == 1){
        for (let i = 0; i < m_nav_p.length; i++) {
            m_nav_p[i].style.cssText = 'display: none;';
        }
        m_var_p = 0;
    }
    else{
        for (let i = 0; i < m_nav_p.length; i++) {
            m_nav_p[i].style.cssText = 'display: flex;';
        }
        m_var_p = 1;
    }
}

// clientes
function m_lupa(){
    const m_buscar = document.getElementById("m_barra").value;
    document.getElementById("m_pesq").innerHTML = m_buscar;
};




document.getElementById("m_barra").addEventListener("keydown", function(m_enter) {
    if (m_enter.key === "Enter") {
      m_lupa();
}
});