//cadastro
async function cadastro_cliente(){ // função do cadastro do cliente, recebe e envia de volta os dados até o momento //
    
    const nome = document.getElementById("nome_cliente").value;
    const email = document.getElementById("e-mail").value;
    const telefone = document.getElementById("celular").value;
    const cpf = document.getElementById("cpf").value;
    const cep = document.getElementById("endereco_cep").value;
    const bairro = document.getElementById("bairro").value;
    const rua = document.getElementById("rua").value;
    const numero = document.getElementById("numero").value;
    const complemento = document.getElementById("complemento").value;

    // Envio das informações para o banco de dados
    await fetch('/cadastrar-clientes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({nome, email, telefone, cep, cpf, bairro, rua, numero, complemento})
    });

    alert('Cliente cadastrado com sucesso!');



    // document.getElementById("nome_client").innerText = nome;
    // document.getElementById("e-mai").innerText = email;
    // document.getElementById("celula").innerText = telefone;
    // document.getElementById("cp").innerText = cpf;
    // document.getElementById("endereco_ce").innerText = cep;
    // document.getElementById("bairr").innerText = bairro;
    // document.getElementById("ru").innerText = rua;
    // document.getElementById("complement").innerText = complemento;

};

async function cadastro_mecanico() {
    const nome_m = document.getElementById("nome_mecanico").value;
    const telefone_m = document.getElementById("celular_m").value;
    const cpf_m = document.getElementById("cpf_m").value;
    const cep_m = document.getElementById("endereco_cep_m").value;
    const bairro_m = document.getElementById("bairro_m").value;

    await fetch('/cadastrar-mecanico', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome_m, telefone_m, cpf_m, cep_m, bairro_m })
    });

    alert('Mecânico cadastrado com sucesso!');
}

async function cadastro_veiculo(){ // função do cadastro do veiculo, recebe e envia de volta os dados até o momento //

    const modelo_v = document.getElementById("modelo").value;
    const cor_v = document.getElementById("cor").value;
    const ano_v = document.getElementById("ano").value;
    const cpf_v = document.getElementById("cpf").value;
    const n_chassi_v = document.getElementById("n_chas").value;
    const placa_v = document.getElementById("placa").value;

    await fetch('/cadastrar-veiculo',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({modelo_v, cor_v, ano_v, cpf_v, n_chassi_v, placa_v })
    });

    alert('Veiculo cadastrado com sucesso!');


    // document.getElementById("model").innerText = modelo;
    // document.getElementById("color").innerText = cor;
    // document.getElementById("car_ano").innerText = ano;
    // document.getElementById("cp").innerText = cpf;
    // document.getElementById("chassi").innerText = n_chassi;
    // document.getElementById("plac").innerText = placa;

}

async function cadastro_fornecedor(){ // função do cadastro do fornecedor, recebe e envia de volta os dados até o momento //

    const nome_fornecedor = document.getElementById("nome_fornecedor").value;
    const email_forn = document.getElementById("e-mail").value;
    const telefone_forn = document.getElementById("celular").value;
    const cnpj = document.getElementById("cnpj").value;
    const cep_f = document.getElementById("endereco_cep").value;



    await fetch('/cadastrar-fornecedor',{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({nome_fornecedor, email_forn, telefone_forn, cnpj, cep })       
    });

    alert('Fornecedor cadastrado com sucesso!');
    // document.getElementById("nome_forn").innerText = nome_fornecedor;
    // document.getElementById("e-mai").innerText = email;
    // document.getElementById("celula").innerText = telefone;
    // document.getElementById("cnp").innerText = cnpj;
    // document.getElementById("endereco_ce").innerText = cep;

}

async function orcamento(){ // função do orcamento, recebe e os dados necessários para preencher o orçamento //

    const nome = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const model = document.getElementById("car").value;
    const data = document.getElementById("date").value;
    const hora = document.getElementById("time").value;

    await fetch('orcamento',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({nome, email, model, data, hora})
    });

    alert('Orçamento cadastrado com sucesso!');
    // document.getElementById("nam").innerHTML = nome;
    // document.getElementById("emai").innerHTML = email;
    // document.getElementById("ca").innerHTML = model;
    // document.getElementById("dat").innerHTML = data;
    // document.getElementById("tim").innerHTML = hora;

}




//KAUAN NÃO MEXA, NIGUEM MEXA DAQUI PARA BAIXO









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
async function m_lupa(){
    const m_buscar = document.getElementById("m_barra").value;
    document.getElementById("m_pesq").innerHTML = m_buscar;
    // consulta clientes
    const m_barra = document.getElementById('m_barra').value;
    const queryParams = new URLSearchParams();

    if (m_barra) queryParams.append('Nome', m_buscar);

    const response = await fetch(`/consultar-clientes?${queryParams.toString()}`);

    if (!response.ok) {
        console.error('Erro ao consultar:', response.statusText);
        return;
    }

    const m_var4 = await response.json();
    const listaClientes = document.getElementById('listaClientes');

    // Limpa a lista antes de preencher com novos dados
    listaClientes.innerHTML = `
        <li class="m_tabela">
            <h2>Nome</h2>
            <h2 class="m_tabela_cpf">CPF</h2>
            <h2 class="m_tabela_fone">Telefone</h2>
            <h2 class="m_tabela_ponto">.</h2>
        </li>
    `;

    console.log('retornados:', m_var4);


    m_var4.forEach(cliente => {
        const li = document.createElement('li');
        li.className = 'm_li_cliente';
        li.innerHTML = `
            <div class="m_li_nome">
                <img src="../img/m_avatar.png" alt="avatar">
                <h3>${cliente.Nome}</h3>
            </div>
            <h3>${cliente.CPF}</h3>
            <h3>${cliente.Fone}</h3>
            <img src="../img/m_seta.png" alt="seta" id="m_seta">
        `;
        listaClientes.appendChild(li);
    });
};




document.getElementById("m_barra").addEventListener("keydown", function(m_enter) {
    if (m_enter.key === "Enter") {
      m_lupa();
}
});
