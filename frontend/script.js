// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦Index♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦Index♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦Index♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
function m_data_index(){
    const m_data_real = new Date();

    const m_dia = String(m_data_real.getDate()).padStart(2, '0');
    const m_mes = String(m_data_real.getMonth() + 1).padStart(2, '0');
    const m_ano = m_data_real.getFullYear();

     document.getElementById('m_dia').textContent = m_dia;
     document.getElementById('m_mes').textContent = m_mes;
     document.getElementById('m_ano').textContent = m_ano;

}



// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
window.onload = function() {
    m_lupa();
    m_lupak();
    m_lupakp();
    v_lupa();
    m_data_index();
};
//Cadastra Cliente
async function cadastro_cliente() {
    // Coleta os dados do formulário
    const nome = document.getElementById("nome_cliente").value;
    const email = document.getElementById("e-mail").value;
    const telefone = document.getElementById("celular").value;
    const cpf = document.getElementById("cpf").value;
    const cep = document.getElementById("endereco_cep").value;
    const bairro = document.getElementById("bairro").value;
    const rua = document.getElementById("rua").value;
    const numero = document.getElementById("numero").value;
    const complemento = document.getElementById("complemento").value;

    try {
        // Envia os dados para o servidor
        const response = await fetch('/cadastrar-clientes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, email, telefone, cep, cpf, bairro, rua, numero, complemento })
        });

        if (!response.ok) {
            const errorMessage = await response.text(); 
            if (errorMessage === 'CPF já cadastrado') {
                alert('CPF já cadastrado!'); 
            } else {
                alert('CPF já cadastrado!');
            }
            return; 
        }

        alert('Cliente cadastrado com sucesso!');
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao tentar cadastrar o cliente. Tente novamente.');
    }
}
// ----------------------------------CEP-------------------------------------------------------
async function m_buscarcep() {
    const cep = document.getElementById("endereco_cep").value.trim();

    if (!cep) {
        alert('Por favor, informe o CEP.');
        return;
    }

    const url = `https://viacep.com.br/ws/${cep}/json/`;

    try {
        const response = await fetch(url);
        const endereco = await response.json();

        // Verifica se o CEP retornou erro (CEP não encontrado)
        if (endereco.erro) {
            alert('CEP não encontrado.');
            return;
        }

        // Preenche os campos de rua e bairro automaticamente
        document.getElementById("rua").value = endereco.logradouro;
        document.getElementById("bairro").value = endereco.bairro;
    } catch (error) {
        console.error('Erro ao buscar o endereço:', error);
        alert('Erro ao buscar o endereço. Tente novamente.');
    }
}

async function m_buscarcep2() {
    const cep2 = document.getElementById("endereco_cep2").value.trim();

    if (!cep2) {
        alert('Por favor, informe o CEP.');
        return;
    }

    const url2 = `https://viacep.com.br/ws/${cep2}/json/`;

    try {
        const response = await fetch(url2);
        const endereco2 = await response.json();

        // Verifica se o CEP retornou erro (CEP não encontrado)
        if (endereco2.erro) {
            alert('CEP não encontrado.');
            return;
        }

        // Preenche os campos de rua e bairro automaticamente
        document.getElementById("rua_m").value = endereco2.logradouro;
        document.getElementById("bairro_m").value = endereco2.bairro;
    } catch (error) {
        console.error('Erro ao buscar o endereço:', error);
        alert('Erro ao buscar o endereço. Tente novamente.');
    }
}




// Cadastras Mecanico
async function cadastro_mecanico() {
    const nome_m = document.getElementById("nome_mecanico").value;
    const telefone_m = document.getElementById("celular_m").value;
    const cpf_m = document.getElementById("cpf_m").value;
    const cep_m = document.getElementById("endereco_cep_m").value;
    const bairro_m = document.getElementById("bairro_m").value;
    const especialidade = document.getElementById("especialidade").value;


    await fetch('/cadastrar-mecanico', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome_m, telefone_m, cpf_m, cep_m, bairro_m, especialidade })
    });
    alert('Mecânico cadastrado com sucesso!');
};

//Cadastra veiculo
async function cadastro_veiculo(){ // função do cadastro do veiculo, recebe e envia de volta os dados até o momento //

    const modelo_v = document.getElementById("modelo_vei").value;
    const cor_v = document.getElementById("cor").value;
    const ano_v = document.getElementById("ano").value;
    const cpf_v = document.getElementById("cpf_selecionado_veiculo").value;;
    const n_chassi_v = document.getElementById("n_chas").value;
    const placa_v = document.getElementById("placa").value;


    await fetch('/cadastrar-veiculo',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({modelo_v, cor_v, ano_v, cpf_v, n_chassi_v, placa_v })
    });

    alert('Veiculo cadastrado com sucesso!');

}


// Cadastra Fornecedor//
async function cadastro_fornecedor(){ 

    const nome_fornecedor = document.getElementById("nome_fornecedor").value;
    const email_f = document.getElementById("e_mail_f").value;
    const fone_f = document.getElementById("fone_f").value;
    const cnpj_f = document.getElementById("cnpj_f").value;
    const cep_f = document.getElementById("endereco_cep").value;


    await fetch('/cadastrar-fornecedor',{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({nome_fornecedor, email_f, fone_f, cnpj_f, cep_f })       
    });

    alert('Fornecedor cadastrado com sucesso!');

}


//Cadastra peças
async function cadastro_pecas(){ // função do cadastro da pecas, recebe e envia de volta os dados até o momento //

    const nome_pecas = document.getElementById("nome_pecas").value;
    const preco_pecas = document.getElementById("preco_pecas").value;
    const modelo_pe = document.getElementById("modelo_pe").value;



    await fetch('/cadastrar-pecas',{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({nome_pecas, preco_pecas, modelo_pe})       
    });

    alert('Peças cadastrado com sucesso!');


}

//cadastra orçamento
async function cadastro_orcamento(){ // função do orcamento, recebe e os dados necessários para preencher o orçamento //

    const nome_orca = document.getElementById("name").value;
    const valor = document.getElementById("valor").value;
    const cpf_o = document.getElementById("acpf_selecionado_veiculo").value;
    const servico = document.getElementById("servic1").value;
    const servico_op1 = document.getElementById("servic2").value;
    const servico_op2 = document.getElementById("servic3").value;

    await fetch('/cadastrar-orcamento',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({nome_orca, valor, cpf_o, servico, servico_op1, servico_op2})
    });
    alert('Orçamento cadastrado com sucesso!');
}

//Cadastra agendamento
async function agendamento(){ // função do agendamento, recebe e os dados necessários para confirmar o orçamento, e gerar a ordem de serviço //

    const nome_agenda = document.getElementById("name_a").value;
    const cpf_a = document.getElementById("cpf_a").value;
    const data = document.getElementById("date").value;
    const hora = document.getElementById("time").value;

    await fetch('/agendamento',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({nome_agenda, cpf_a, data, hora})
    });

    alert('Agendamento cadastrado com sucesso!');

}

//Cadastra serviço
async function cadastra_servico(){ 

    const nome_s = document.getElementById("nome_servico").value;
    const preco_s = document.getElementById("kpreco").value;
    const ferramenta_s = document.getElementById("kferramenta").value;

    await fetch('/cadastrar-servico',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({nome_s, preco_s, ferramenta_s})
    });

    alert('Serviço cadastrado com sucesso!');
}

// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦Pagina do Nav♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦Pagina do Nav♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦Pagina do Nav♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦

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
};
let a_var_c = 0;
function a_cad_c(){
    let a_nav_c = document.getElementsByClassName('a_nav3_a_c')
    if (a_var_c == 1){
        for (let i = 0; i < a_nav_c.length; i++) {
            a_nav_c[i].style.cssText = 'display: none;';
        }
        a_var_c = 0;
    }
    else{
        for (let i = 0; i < a_nav_c.length; i++) {
            a_nav_c[i].style.cssText = 'display: flex;';
        }
        a_var_c = 1;
    }
}
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦

// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦Pagina do peça♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦Pagina do peça♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦Pagina do peça♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
async function m_lupakp() {
  const inputp = document.getElementById("m_pecaspesq");
  if (!inputp) {
    console.error('Elemento "m_barrakp" não encontrado!');
    return;
  }
  const m_buscarkp = inputp.value;
  document.getElementById("m_pesqkp").innerHTML = m_buscarkp;

  const queryParamskp = new URLSearchParams();
  if (m_buscarkp) queryParamskp.append('Nome_peca', m_buscarkp);

  try {

    const responsekp = await fetch(`/consultar-pecas?${queryParamskp.toString()}`);
    if (!responsekp.ok) {
      throw new Error(`Erro HTTP! Status: ${responsekp.status}`);
    }

    const m_var4kp = await responsekp.json();

    const listaspecas = document.getElementById('listaspecas');
    if (!listaspecas) {
      console.error('Elemento "listapecas" não encontrado!');
      return;
    }
    listaspecas.innerHTML = `
      <div class="m_linhakk">
      <div class="m_colunakkd">ID</div>
        <div class="m_colunakk">Serviço</div>
        <div class="m_colunakk">Preço</div>
      </div>
    `;
    m_var4kp.forEach(pecas => {
      const lip = document.createElement('div');
      lip.className = 'm_linhak';
      lip.innerHTML = `
        <div class="m_colunakd">${pecas.ID_pecas}</div>
        <div class="m_colunak">${pecas.Nome_peca}</div>
        <div class="m_colunak"><span>R$</span>${pecas.Preco_pecas}<span>,00</span></div>
      `;
      listaspecas.appendChild(lip);
    });
  } catch (error) {
    console.error('Erro ao buscar peças:', error);
    const listaspecas = document.getElementById('listaspecas');
    if (listaspecas) {
      listaspecas.innerHTML = `<p style="color: white;"> A página está em manutenção no momento. Por favor, tente novamente mais tarde. Pedimos desculpas pelo inconveniente e agradecemos pela compreensão.</p>
`;
    }
  }
}
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦

// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦Pagina do serviço♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦Pagina do serviço♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦Pagina do serviço♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦


// arrumando o kau
async function m_lupak() {
  const input = document.getElementById("m_barrak");
  if (!input) {
    console.error('Elemento "m_barrak" não encontrado!');
    return;
  }

  const m_buscark = input.value;
  document.getElementById("m_pesqk").innerHTML = m_buscark;

  const queryParamsk = new URLSearchParams();
  if (m_buscark) queryParamsk.append('Nome_Serviço', m_buscark);

  try {
    const responsek = await fetch(`/consultar-servico?${queryParamsk.toString()}`);
      
    if (!responsek.ok) {
      throw new Error(`Erro HTTP! Status: ${responsek.status}`);
    }

    const m_var4k = await responsek.json();

    const listaservico = document.getElementById('listaservico');
    if (!listaservico) {
      console.error('Elemento "listaservico" não encontrado!');
      return;
    }

    listaservico.innerHTML = `
      <div class="m_linhakk">
      <div class="m_colunakkd">ID</div>
        <div class="m_colunakk">Serviço</div>
        <div class="m_colunakk">Preço</div>
      </div>
    `;

    m_var4k.forEach(servico => {
      const li = document.createElement('div');
      li.className = 'm_linhak';
      li.innerHTML = `
        <div class="m_colunakd">${servico.ID_Serviço}</div>
        <div class="m_colunak">${servico.Nome_Serviço}</div>
        <div class="m_colunak"><span>R$</span>${servico.Preco}<span>,00</span></div>
      `;
      listaservico.appendChild(li);
    });
  } catch (error) {
    console.error('Erro ao buscar serviços:', error);
    const listaservico = document.getElementById('listaservico');
    if (listaservico) {
      listaservico.innerHTML = `<p>Erro ao buscar serviços. Tente novamente mais tarde.</p>`;
    }
  }
}
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦

// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦Pagina do clientes♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦Pagina do clientes♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦Pagina do clientes♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦

async function m_buscarcliente() { 
  const m_cliente_b = document.getElementById('cpf_vei').value;

  // Se o campo de busca estiver vazio, não faz nada
  if (m_cliente_b === '') return;

  // Faz a busca no servidor
  const mb_response = await fetch(`/buscar-cliente?query=${m_cliente_b}`);

  // Verifica se a resposta foi bem-sucedida
  if (mb_response.ok) {
      const cliente_veiculo = await mb_response.json();


      const m_clienteselecionado = document.getElementById('clienteselecionado');
          m_clienteselecionado.innerHTML = '<option value="">Selecione um Cliente</option>';

      // Preenche o dropdown com os resultados da busca
      cliente_veiculo.forEach(cliente => {
          const option = document.createElement('option');
          option.value = cliente.CPF;
          option.textContent = `${cliente.Nome} (CPF: ${cliente.CPF})`;
          m_clienteselecionado.appendChild(option);
      });
      m_clienteselecionado.addEventListener('change', () => {
        const cpfSelecionado = m_clienteselecionado.value;
        document.getElementById('cpf_selecionado_veiculo').value = cpfSelecionado;
      });

  } else {
      alert('Erro ao buscar clientes. Tente novamente.');
  }
}


async function m_lupa(){

    const m_buscar = document.getElementById("m_barra").value;
    document.getElementById("m_pesq").innerHTML = m_buscar;
    // consulta clientes
    const m_barra = document.getElementById('m_barra').value;
    const m_queryParams = new URLSearchParams();

    if (m_barra) m_queryParams.append('Nome', m_buscar);

    const m_resposta = await fetch(`/consultar-clientes?${m_queryParams.toString()}`);

    if (!m_resposta.ok) {
        console.error('Erro ao consultar:', m_resposta.statusText);
        return;
    }

    const m_var4 = await m_resposta.json();
    const listaClientes = document.getElementById('listaClientes');


    // colunas da tabela e apaga o resto
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
        li.onclick = () => {
            m_mais_dados_cliente(cliente.ID_cliente, cliente.CPF);
            m_buscarveiculo(cliente.CPF);
        };
        li.innerHTML = `
            <div class="m_li_nome">
                <img src="../img/m_avatar.png" alt="avatar">
                <h3>${cliente.Nome}</h3>
            </div>
            <h3>${cliente.CPF}</h3>
            <h3>${cliente.Fone}</h3>
            <img src="../img/m_seta.png" alt="seta" id="m_seta">
        `;
        // colocar veiculo
        const m_colocar_aqui = document.createElement('div');
        m_colocar_aqui.id = `carros-${cliente.CPF}`;
        // -----------------------------------------[

        const m_div = document.createElement('div');
        m_div.className = 'm_dados';
        m_div.id = `dados-${cliente.ID_cliente}`;
        m_div.innerHTML = `
            <div class="m_dados_nome">
                <h3>ID:ㅤ <span>${cliente.ID_cliente}</span></h3>
                <h3>Email:ㅤ <span>${cliente.Email}</span></h3>
                <h3>Rua:ㅤ <span>${cliente.Rua}</span> </h3>
                <h3>Bairro:ㅤ <span>${cliente.Bairro}</span></h3>
                <h3>Número:ㅤ <span>${cliente.Numero}</span></h3>
                <h3>Complemento:ㅤ <span>${cliente.Complemento}</span></h3>
            </div>
            <div class="m_option2">
                <div class="m_option4">
                    <h3 id="m_apaga_dados" onclick='atualiza_cliente(${JSON.stringify(cliente)})'>Editar</h3>

                </div>
                <div class="m_option3">
                    <label for="veiculo_selecionado">Veiculo Selecionado:</label>
                    <select id="veiculo_selecionado-${cliente.CPF}" class="veiculo_selecionado" name="veiculo_selecionado" required>
                        <option value="">Selecione um cliente</option>
                </select>
                <h3 id="m_busca_carro" onclick="m_buscar_carro(${cliente.CPF})">Veículos</h3>
                </div>

                <input type="hidden" id="m_vei_sec-${cliente.CPF}">
            </div>
        `;

        listaClientes.appendChild(li);
        listaClientes.appendChild(m_div);
        listaClientes.appendChild(m_colocar_aqui);
    });

};
//!!!!!!!!!!!!!!!!!!!!!!!!! editacliente do banco de dados!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function m_up_cancela(){
    location.reload(); // Recarrega a página
}
async function atualiza_cliente(cliente) {
    const { ID_cliente, Nome, Email, Fone, CPF, CEP, Bairro, Rua, Numero, Complemento } = cliente;

    const m_up = document.getElementById('m_up_up'); 
    
    if (m_up.style.display === 'none' || m_up.style.display === '') {
        m_up.style.display = 'flex';
    }

    // Preenche os inputs
    document.getElementById('m_up_nome').value = Nome;
    document.getElementById('m_up_email').value = Email;
    document.getElementById('m_up_fone').value = Fone;
    document.getElementById('m_up_cpf').value = CPF;
    document.getElementById('m_up_cep').value = CEP;
    document.getElementById('m_up_bairro').value = Bairro;
    document.getElementById('m_up_rua').value = Rua;
    document.getElementById('m_up_num').value = Numero;
    document.getElementById('m_up_com').value = Complemento;


    const tnome = document.getElementById('m_up_nome');
    const temail = document.getElementById('m_up_email');
    const tfone = document.getElementById('m_up_fone');
    const tcpf = document.getElementById('m_up_cpf');
    const tcep = document.getElementById('m_up_cep');
    const tbairro = document.getElementById('m_up_bairro');
    const trua = document.getElementById('m_up_rua');
    const tnumero = document.getElementById('m_up_num');
    const tcomplemento = document.getElementById('m_up_com');


    if (!tnome || !temail || !tfone || !tcep || !tcpf || !tbairro || !trua || !tnumero || !tcomplemento) {
        alert('Todos os dados devem ser preenchidos!');
        return;
    }
    
    const up_clientes = document.getElementById('m_up_fim');
    up_clientes.onclick = () => {
   
        const atualizarCliente = async () => {
            try {
                const response = await fetch(`/atualizar-cliente/${ID_cliente}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        Nome: tnome.value,
                        Email: temail.value,
                        Fone: tfone.value,
                        CEP: tcep.value,
                        CPF: tcpf.value,
                        Bairro: tbairro.value,
                        Rua: trua.value,
                        Numero: tnumero.value,
                        Complemento: tcomplemento.value
                    })
                });
    
                if (!response.ok) {
                    throw new Error('Erro ao atualizar cliente');
                }
    
                // Sucesso
                alert('Cliente atualizado com sucesso!');
                location.reload(); // Recarrega a página
            } catch (error) {
                console.error('Erro:', error);
                alert('Erro ao tentar atualizar o cliente. Tente novamente. Possível erro CPF');
            }
        };
    
        // Chama a função assíncrona
        atualizarCliente();
    };
    
}

document.getElementById("m_barra").addEventListener("keydown", function(m_enter) {
    if (m_enter.key === "Enter") {
      m_lupa();
}
});

// ------------------------------------outros dados do cliente----------------------------------------
function m_mais_dados_cliente(clienteId, clientecpf) {
    let m_div = document.getElementById(`dados-${clienteId}`);
    let m_div_v = document.getElementById(`carros-${clientecpf}`)
    if (m_div.style.display === 'none') {
        m_div.style.display = 'flex';
    } else {
        m_div.style.display = 'none';
        m_div_v.style.display = 'none';
    }
};

//--------------------------------- buscar veiculo-------------------------------
async function m_buscarveiculo(cpf_veiculo) {
  const m_veiculo_b = cpf_veiculo;

  // Se o campo de busca estiver vazio, não faz nada
  if (m_veiculo_b === '') return;

  // Faz a busca no servidor
  const mv_response = await fetch(`/buscar-veiculo?query=${m_veiculo_b}`);

  // Verifica se a resposta foi bem-sucedida
  if (mv_response.ok) {
      const mv_veiculo = await mv_response.json();


      const m_veiculo_selecionado = document.getElementById(`veiculo_selecionado-${cpf_veiculo}`);
      m_veiculo_selecionado.innerHTML = '<option value="">Selecione um Veiculo</option>';

      // Preenche o dropdown com os resultados da busca
        mv_veiculo.forEach(veiculo => {
          const v_option = document.createElement('option');
          v_option.value = veiculo.ID_veiculo;
          v_option.textContent = `${veiculo.Modelo} (PLACA: ${veiculo.Placa})`;
          m_veiculo_selecionado.appendChild(v_option);
      });
        let m_vei_aux = '';
        m_veiculo_selecionado.addEventListener('change', () => {
            const m_vei_sec = m_veiculo_selecionado.value;
            document.getElementById(`m_vei_sec-${cpf_veiculo}`).value = parseInt(m_vei_sec);

            if (m_vei_aux !== m_vei_sec) {
                m_buscar_carro(cpf_veiculo)
            }
            m_vei_aux = m_vei_sec;
        });
  } else {
      alert('Erro ao buscar veiculos. Tente novamente.');
  }

};
// ============================================================================================================
    async function m_buscar_carro(cpf_veiculo) {
      let m_div_v = document.getElementById(`carros-${cpf_veiculo}`);

      // Alterna a exibição do div para o cliente correto
      if (m_div_v.style.display === 'none' || m_div_v.style.display === '') {
        m_div_v.style.display = 'flex'; 
      } else {
        m_div_v.style.display = 'none'; 
      }

      const m_veiculo_2 = document.getElementById(`m_vei_sec-${cpf_veiculo}`);
      // Verifica se o campo de busca está vazio
      if (!m_veiculo_2.value) {
        alert('Escolha um veiculo para consultar!!!!!!!');
        return;
      }

      try {
        // Faz a busca no servidor
        const m_var_veiculo_response = await fetch(`/consultar-veiculo?ID_veiculo=${m_veiculo_2.value}`);

        // Verifica se a resposta foi bem-sucedida
        if (!m_var_veiculo_response.ok) {
          alert('Erro ao buscar veículos. Tente novamente.');
          return;
        }

        const m_var_veiculo = (await m_var_veiculo_response.json()).filter(veiculo => veiculo.ID_veiculo === parseInt(m_veiculo_2.value));


        // Atualiza a lista de veículos
        m_var_veiculo.forEach((veiculo) => {
          const li_v = document.getElementById(`carros-${cpf_veiculo}`);
          li_v.className = 'm_carros';
          li_v.innerHTML = `
            <div class="m_car_consulta">
              <h3>ID:ㅤ <span>${veiculo.ID_veiculo}</span></h3>
              <h3>Modelo:ㅤ <span>${veiculo.Modelo}</span></h3>
              <h3>Ano:ㅤ <span>${veiculo.Ano}</span></h3>
              <h3>Cor:ㅤ <span>${veiculo.Cor}</span></h3>
              <h3>Chassi:ㅤ <span>${veiculo.Número_do_chassi}</span></h3>
              <h3>Placa:ㅤ <span>${veiculo.Placa}</span></h3>
            </div>
          `;
        });
      } catch (error) {
        alert('Ocorreu um erro ao buscar veículos.');
        console.error(error);
      }
    }



// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦

// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦Pagina do mecanico♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦Pagina do mecanico♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦Pagina do mecanico♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦

// Cadastra Mecanico
async function cadastro_mecanico() {
    const nome_m = document.getElementById("nome_mecanico").value;
    const telefone_m = document.getElementById("celular_m").value;
    const cpf_m = document.getElementById("cpf_m").value;
    const cep_m = document.getElementById("endereco_cep_m").value;
    const bairro_m = document.getElementById("bairro_m").value;
    const rua_m = document.getElementById("rua_m").value;
    const numero_m = document.getElementById("numero_m").value;
    const especialidade = document.getElementById("especialidade").value;


    await fetch('/cadastrar-mecanico', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome_m, telefone_m, cpf_m, cep_m, bairro_m, rua_m, numero_m, especialidade })
    });
    alert('Mecânico cadastrado com sucesso!');
};

async function v_lupa(){

    const a_buscar = document.getElementById("m_barra").value;
    document.getElementById("m_pesq").innerHTML = a_buscar;
    // consulta Mecanico
    const a_barra = document.getElementById('m_barra').value;
    const a_queryParams = new URLSearchParams();

    if (a_barra) a_queryParams.append('Nome', a_buscar);

    const a_resposta = await fetch(`/consultar-mecanico?${a_queryParams.toString()}`);

    if (!a_resposta.ok) {
        console.error('Erro ao consultar:', a_resposta.statusText);
        return;
    }

    const a_var = await a_resposta.json();
    const listaMecanico = document.getElementById('listaMecanicos');


    // colunas da tabela e apaga o resto
    listaMecanico.innerHTML = `
        <li class="a_tabela">
            <h2>Nome</h2>
            <h2 class="a_tabela_cpf">CPF</h2>
            <h2 class="a_tabela_fone">Telefone</h2>
            <h2 class="a_tabela_ponto">.</h2>
        </li>
    `;

    console.log('retornados:', a_var);


    a_var.forEach(mecanico => {
        const lim = document.createElement('li');
        lim.className = 'a_li_mecanico';
        lim.onclick = () => {
            a_mais_dados_mecanico(mecanico.ID_mecanico, mecanico.CPF);
        };
        lim.innerHTML = `
            <div class="a_li_nome">
                <img src="../img/m_avatar.png" alt="avatar">
                <h3>${mecanico.Nome}</h3>
            </div>    
            <h3>${mecanico.CPF}</h3>
            <h3>${mecanico.Fone}</h3>
            <img src="../img/m_seta.png" alt="seta" id="a_seta">
        `;
        
        const a_div = document.createElement('div');
        a_div.className = 'a_dados';
        a_div.id = `dados-${mecanico.ID_mecanico}`;
        a_div.innerHTML = `
            <div class="a_dados_nome">
                <h3>ID:ㅤ <span>${mecanico.ID_mecanico}</span></h3>
                <h3>CEP:ㅤ <span>${mecanico.CEP}</span> </h3>
                <h3>Bairro:ㅤ <span>${mecanico.Bairro}</span></h3>
                <h3>Bairro:ㅤ <span>${mecanico.Rua}</span></h3>
                <h3>Bairro:ㅤ <span>${mecanico.Bairro}</span></h3>
                <h3>Especialidade:ㅤ <span>${mecanico.Especialidade}</span></h3>
            </div>
            <div class="a_option2">
                <div class="a_option4">
                    <h3 id="a_apaga_dados" onclick='atualiza_mecanico(${JSON.stringify(mecanico)})'>Editar</h3>

                </div>
        `;

        listaMecanico.appendChild(lim);
        listaMecanico.appendChild(a_div);
    });
        
};

function a_mais_dados_mecanico(mecanicoId) {
    let a_div = document.getElementById(`dados-${mecanicoId}`);
    if (a_div.style.display === 'none') {
        a_div.style.display = 'flex';
    } else {
        a_div.style.display = 'none';
    }
};

function a_up_cancela(){
    location.reload(); // Recarrega a página
}
async function atualiza_mecanico(mecanico) {
    const { ID_mecanico, Nome, Fone, CPF, CEP, Bairro, Rua, Numero, Especialidade } = mecanico;

    const a_up = document.getElementById('a_up_up'); 

    if (a_up.style.display === 'none' || a_up.style.display === '') {
        a_up.style.display = 'flex';
    };
    // Preenche os inputs
    document.getElementById('a_up_nome').value = Nome;
    document.getElementById('a_up_fone').value = Fone;
    document.getElementById('a_up_cpf').value = CPF;
    document.getElementById('a_up_cep').value = CEP;
    document.getElementById('a_up_bairro').value = Bairro;
    document.getElementById('a_up_rua').value = Rua;
    document.getElementById('a_up_num').value = Numero;
    document.getElementById('a_up_especialidade').value = Especialidade;


    const mnome = document.getElementById('a_up_nome');
    const mfone = document.getElementById('a_up_fone');
    const mcpf = document.getElementById('a_up_cpf');
    const mcep = document.getElementById('a_up_cep');
    const mbairro = document.getElementById('a_up_bairro');
    const mrua = document.getElementById('a_up_rua');
    const mnumero = document.getElementById('a_up_num');
    const mespecialidade = document.getElementById('a_up_especialidade');


    if (!mnome || !mfone || !mcep || !mcpf || !mbairro || !mrua || !mnumero || !mespecialidade) {
        alert('Todos os dados devem ser preenchidos!');
        return;
    }

    const up_mecanicos = document.getElementById('a_up_fim');
    up_mecanicos.onclick = () => {

        const atualizarMecanico = async () => {
            try {
                const response = await fetch(`/atualizar-mecanico/${ID_mecanico}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        Nome: mnome.value,
                        Fone: mfone.value,
                        CEP: mcep.value,
                        CPF: mcpf.value,
                        Bairro: mbairro.value,
                        Rua: mrua.value,
                        Numero: mnumero.value,
                        Especialidade: msespecialidade.value,
                    })
                });

                if (!response.ok) {
                    throw new Error('Erro ao atualizar mecanico');
                }

                // Sucesso
                alert('Mecanico atualizado com sucesso!');
                location.reload(); // Recarrega a página
            } catch (error) {
                console.error('Erro:', error);
                alert('Erro ao tentar atualizar o mecanico. Tente novamente. Possível erro CPF');
            }
        };

        // Chama a função assíncrona
        atualizarMecanico();
    };

}

// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦ ORÇAMENTO ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦ ORÇAMENTO ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦ ORÇAMENTO ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
async function a_buscarveiculo() { 
    const a_veiculo_b = document.getElementById('a_cpf_vei').value;
  
    // Se o campo de busca estiver vazio, não faz nada
    if (a_veiculo_b === '') return;
  
    // Faz a busca no servidor
    const ab_response = await fetch(`/buscar-veiculo?query=${a_veiculo_b}`);
  
    // Verifica se a resposta foi bem-sucedida
    if (ab_response.ok) {
        const a_cliente_veiculo = await ab_response.json();
  
  
        const a_veicselecionado = document.getElementById('a_veicselecionado');
                a_veicselecionado.innerHTML = '<option value="">Selecione um veículo do cliente</option>';
  
        // Preenche o dropdown com os resultados da busca
        a_cliente_veiculo.forEach(veiculo => {
            const a_option = document.createElement('option');
            a_option.value = veiculo.CPF;
            a_option.textContent = `${veiculo.Modelo} (PLACA: ${veiculo.Placa})`;
            a_veicselecionado.appendChild(a_option);
        });
        a_veicselecionado.addEventListener('change', () => {
          const a_cpfSelecionado = a_veicselecionado.value;
          document.getElementById('acpf_selecionado_veiculo').value = a_cpfSelecionado;
        });
  
    } else {
        alert('Erro ao buscar veiculos. Tente novamente.');
    }
  }
  
  async function o_lupa(){
  
      const o_buscar = document.getElementById("m_barra").value;
      document.getElementById("m_pesq").innerHTML = o_buscar;
      // consulta clientes
      const o_barra = document.getElementById('m_barra').value;
      const o_queryParams = new URLSearchParams();
  
      if (o_barra) o_queryParams.append('Nome', o_buscar);
  
      const o_resposta = await fetch(`/consultar-clientes?${o_queryParams.toString()}`);
  
      if (!o_resposta.ok) {
          console.error('Erro ao consultar:', o_resposta.statusText);
          return;
      }
  
      const o_var4 = await o_resposta.json();
      const listaOrcamento = document.getElementById('listaOrcamentos');
  
  
      // colunas da tabela e apaga o resto
      listaOrcamento.innerHTML = `
          <li class="o_tabela">
              <h2>Nome</h2>
              <h2 class="o_tabela_cpf">CPF</h2>
              <h2 class="o_tabela_valor">Valor</h2>
              <h2 class="o_tabela_ponto">.</h2>
          </li>
  
      `;
  
      console.log('retornados:', o_var4);
  
  
      o_var4.forEach(orcamento => {
          const lio = document.createElement('li');
          lio.className = 'o_li_orcamento';
          lio.onclick = () => {
              o_mais_dados_orcamento(orcamento.ID_orcamento, orcamento.CPF);
          };
          lio.innerHTML = `
              <div class="o_li_nome">
                  <img src="../img/m_avatar.png" alt="avatar">
                  <h3>${orcamento.Nome}</h3>
              </div>
              <h3>${orcamento.CPF}</h3>
              <h3>${orcamento.Valor}</h3>
              <img src="../img/m_seta.png" alt="seta" id="o_seta">
          `;
  
          const o_div = document.createElement('div');
          o_div.className = 'o_dados';
          o_div.id = `dados-${orcamento.ID_orcamento}`;
          o_div.innerHTML = `
              <div class="o_dados_nome">
                  <h3>ID:ㅤ <span>${orcamento.ID_orcamento}</span></h3>
                  <h3>Serviço:ㅤ <span>${orcamento.Servico}</span> </h3>
                  <h3>Serviço 2:ㅤ <span>${cliente.Servicoop1}</span></h3>
                  <h3>Serviço 3:ㅤ <span>${cliente.Servicoop2}</span></h3>
              </div>
              <div class="o_option2">
                  <div class="o_option4">
                      <h3 id="o_apaga_dados" onclick='atualiza_orcamento(${JSON.stringify(orcamento)})'>Editar</h3>
  
                  </div>
          `;
  
          listaOrcamento.appendChild(lio);
          listaOrcamento.appendChild(o_div);
      });
  
  };
  
  function o_mais_dados_orcamento(orcamentoId) {
      let o_div = document.getElementById(`dados-${orcamentoId}`);
      if (o_div.style.display === 'none') {
          o_div.style.display = 'flex';
      } else {
          o_div.style.display = 'none';
      }
  };
  
  function o_up_cancela(){
      location.reload(); // Recarrega a página
  }
  async function atualiza_orcamento(orcamento) {
      const { ID_orcamento, Nome, Valor, CPF, Servico, Servicoop1, Servicoop2 } = orcamento;
  
      const o_up = document.getElementById('o_up_up'); 
  
      if (o_up.style.display === 'none' || o_up.style.display === '') {
          o_up.style.display = 'flex';
      }
  
      // Preenche os inputs
      document.getElementById('o_up_nome').value = Nome;
      document.getElementById('o_up_valor').value = Valor;
      document.getElementById('o_up_cpf').value = CPF;
      document.getElementById('o_up_servico1').value = Servico;
      document.getElementById('o_up_servico2').value = Servicoop1;
      document.getElementById('o_up_servico3').value = Servicoop2;
  
  
      const onome = document.getElementById('o_up_nome');
      const ovalor = document.getElementById('o_up_valor');
      const ocpf = document.getElementById('o_up_cpf');
      const oservico1 = document.getElementById('o_up_servico1');
      const oservico2 = document.getElementById('o_up_servico2');
      const oservico3 = document.getElementById('o_up_servico3');
  
      if (!onome || !ovalor || !ocpf || !oservico1 || !oservico2 || !oservico3) {
          alert('Todos os dados devem ser preenchidos!');
          return;
      }
  
      const up_orcamentos = document.getElementById('o_up_fim');
      up_orcamentos.onclick = () => {
  
          const atualizarOrcamento = async () => {
              try {
                  const response = await fetch(`/atualizar-orcamento/${ID_orcamento}`, {
                      method: 'PUT',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                          Nome: onome.value,
                          Fone: ovalor.value,
                          CPF: ocpf.value,
                          Servico: oservico1.value,
                          Servicoop1: oservico2.value,
                          Servicoop2: oservico3.value,
                      })
                  });
  
                  if (!response.ok) {
                      throw new Error('Erro ao atualizar orçamento');
                  }
  
                  // Sucesso
                  alert('Orçamento atualizado com sucesso!');
                  location.reload(); // Recarrega a página
              } catch (error) {
                  console.error('Erro:', error);
                  alert('Erro ao tentar atualizar o orçamento. Tente novamente. Possível erro CPF');
              }
          };
  
          // Chama a função assíncrona
          atualizarOrcamento();
      };
  
  }

//AGENDAMENTO ******************************
async function a_buscarorca() { 
  const a_orcamento_b = document.getElementById('a_cpf_orc').value;

  // Se o campo de busca estiver vazio, não faz nada
  if (a_orcamento_b === '') return;

  // Faz a busca no servidor
  const aob_response = await fetch(`/buscar-cliente?query=${a_orcamento_b}`);
    // Verifica se a resposta foi bem-sucedida
  if (aob_response.ok) {
      const a_cliente_orcamento = await aob_response.json();


      const a_orcselecionado = document.getElementById('a_orcselecionado');
              a_orcselecionado.innerHTML = '<option value="">Selecione um orçamento do cliente</option>';

      // Preenche o dropdown com os resultados da busca
      a_cliente_orcamento.forEach(cliente => {
          const ao_option = document.createElement('option');
          ao_option.value = cliente.CPF;
          ao_option.textContent = `${cliente.Nome} CPF: (${cliente.CPF})`;
          a_orcselecionado.appendChild(ao_option);
      });
      a_orcselecionado.addEventListener('change', () => {
        const a_cpfSelecionado = a_orcselecionado.value;
        document.getElementById('acpf_selecionado_orca').value = a_cpfSelecionado;
      });

  } else {
      alert('Erro ao buscar orçamentos. Tente novamente.');
  }
}



// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦Pagina do Fornecedor♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦Pagina do fornecedor♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦Pagina do fornecedor♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦

// Função para consultar fornecedores
async function consultarFornecedores() {
    try {
        // Faz uma requisição GET ao backend
        const response = await fetch('/consultar-fornecedores');

        if (!response.ok) {
            throw new Error("Erro ao consultar fornecedores");
        }

        // Converte a resposta para JSON
        const fornecedores = await response.json();

        // Atualiza o HTML com os fornecedores
        const listaFornecedores = document.getElementById("listaFornecedores");
        listaFornecedores.innerHTML = ""; // Limpa a lista

        fornecedores.forEach(fornecedor => {
            const li = document.createElement("li");
            li.className = "fornecedor-item";

            li.innerHTML = `
            <div class="fornecedor-item">
                    <div class="fornecedor-info">
                        <h1> ${fornecedor.Nome}</h1>
                        <p><strong>Email:</strong> ${fornecedor.Email}</p>
                        <p><strong>Telefone:</strong> ${fornecedor.Telefone}</p>
                        <p><strong>CNPJ:</strong> ${fornecedor.CNPJ}</p>
                        <p><strong>CEP:</strong> ${fornecedor.CEP}</p>
                    </div>
            </div>    
            `;

            listaFornecedores.appendChild(li);
        });

        // Exibe um alerta informando o sucesso e a quantidade de fornecedores carregados
        alert(`Fornecedores carregados com sucesso! Total: ${fornecedores.length}`);

    } catch (error) {
        console.error(error);
        console.log("Erro ao consultar fornecedores. Verifique o console para mais detalhes.");
    }
}



// Chama a função quando a página é carregada
document.addEventListener("DOMContentLoaded", consultarFornecedores);














// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦João♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦João♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦

// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦Victor♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦Victor♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦

// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦Abner♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦Abner♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦

// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦Mourvan♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦Mourvan♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦

// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦Kauan♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦Kauan♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
