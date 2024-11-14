//Cadastra Cliente
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

};

// Cadastras Mecanico
async function cadastro_mecanico() {
    const nome_m = document.getElementById("nome_mecanico").value;
    const telefone_m = document.getElementById("celular_m").value;
    const cpf_m = document.getElementById("cpf_m").value;
    const cep_m = document.getElementById("endereco_cep_m").value;
    const bairro_m = document.getElementById("bairro_m").value;
    const especialidade = document.getElementById("especialidade").value;

    try {
        const response = await fetch('/cadastrar-mecanico', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome_m, telefone_m, cpf_m, cep_m, bairro_m, especialidade })
        });

        if (response.ok) {
            alert('Mecânico cadastrado com sucesso!');
        } else {
            alert('Erro ao cadastrar mecânico!');
        }
    } catch (error) {
        console.error('Erro ao realizar cadastro:', error);
        alert('Erro ao conectar ao servidor.');
    }
}

//Cadastra veiculo
async function cadastro_veiculo(){ // função do cadastro do veiculo, recebe e envia de volta os dados até o momento //

    const modelo_v = document.getElementById("modelo_vei").value;
    const cor_v = document.getElementById("cor").value;
    const ano_v = document.getElementById("ano").value;
    const cpf_v = document.getElementById("cpf_vei").value;
    const n_chassi_v = document.getElementById("n_chas").value;
    const placa_v = document.getElementById("placa").value;

    await fetch('/cadastrar-veiculo',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({modelo_v, cor_v, ano_v, cpf_v, n_chassi_v, placa_v })
    });

    alert('Veiculo cadastrado com sucesso!');

}

async function cadastro_fornecedor(){ // função do cadastro do fornecedor, recebe e envia de volta os dados até o momento //

    const nome_fornecedor = document.getElementById("nome_fornecedor").value;
    const email_f = document.getElementById("e-mail").value;
    const fone_f = document.getElementById("fone_f").value;
    const cnpj_f = document.getElementById("cnpj").value;
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
async function orcamento(){ // função do orcamento, recebe e os dados necessários para preencher o orçamento //

    const nome_orça = document.getElementById("name").value;
    const cpf_o = document.getElementById("cpf_o").value;
    const valor = document.getElementById("valor").value;
    const servico = document.getElementById("servic1").value;
    const servico_op1 = document.getElementById("servic2").value;
    const servico_op2 = document.getElementById("servic3").value;

    await fetch('/orcamento',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({nome_orça, cpf_o, valor, servico, servico_op1, servico_op2})
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
    const preco_s = document.getElementById("preco").value;
    const ferramenta_s = document.getElementById("ferramenta").value;
        
    await fetch('cadastra_servico',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({nome_s, preco_s, ferramenta_s})
    });

    alert('Serviço cadastrado com sucesso!');
}


//KAUAN NÃO MEXA, NIGUEM MEXA DAQUI PARA BAIXO


//------------------------------------------------ nav----------------------------------------------
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
//------------------------------------------------ nav ----------------------------------------------


// arrumando o kau
async function m_lupak(){
    const m_buscark = document.getElementById("m_barrak").value;
    document.getElementById("m_pesqk").innerHTML = m_buscark;
    // consulta clientes
    const m_barrak = document.getElementById('m_barrak').value;
    const queryParamsk = new URLSearchParams();

    if (m_barrak) queryParamsk.append('Nome_Serviço', m_buscark);

    const responsek = await fetch(`/consultar-clientes?${queryParamsk.toString()}`);

    if (!responsek.ok) {
        console.error('Erro ao consultar:', responsek.statusText);
        return;
    }

    const m_var4k = await responsek.json();
    const listaservico = document.getElementById('listaservico');

    // Limpa a lista antes de preencher com novos dados
    listaservico.innerHTML = `
        <li class="m_tabela">
            <h2>Nome</h2>
            <h2 class="m_tabela_cpf">CPF</h2>
            <h2 class="m_tabela_fone">Telefone</h2>
            <h2 class="m_tabela_ponto">.</h2>
        </li>
    `;

    console.log('retornados:', m_var4k);


    m_var4k.forEach(cliente => {
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




// *************************************clientes************************************************
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
        m_cliente_cpf = cliente.CPF;
        li.onclick = () => m_mais_dados_cliente(cliente.ID_cliente, cliente.CPF);;
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
            <h3>ID:ㅤ <span>${cliente.ID_cliente}</span></h3>
            <h3>Email:ㅤ <span>${cliente.Email}</span></h3>
            <h3>Rua:ㅤ <span>${cliente.Rua}</span> </h3>
            <h3>Bairro:ㅤ <span>${cliente.Bairro}</span></h3>
            <h3>Número:ㅤ <span>${cliente.Numero}</span></h3>
            <h3>Complemento:ㅤ <span>${cliente.Complemento}</span></h3>
            <h3 id="m_apaga_dados" onclick="excluir_cliente(${cliente.ID_cliente})">Deletar</h3>
            <h3 id="m_busca_carro" onclick="m_buscar_carro(${cliente.CPF})">Veículos</h3>
            <div id="m_procurar_car-${cliente.CPF}"></div>

        `;

        listaClientes.appendChild(li);
        listaClientes.appendChild(m_div);
        listaClientes.appendChild(m_colocar_aqui);
    });

};
//!!!!!!!!!!!!!!!!!!!!!!!!! apagar cliente do banco de dados!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
async function excluir_cliente(clienteId) {
    let m_res_apaga = prompt('Cliente ID número: ' + clienteId + ' será deletado. Digite "s" para continuar ou "n" para cancelar.'); //verificar se quer apagar o cliente
    if (m_res_apaga == 's'){
        alert('Cliente deletado!');
    }
    else{
        alert('Cliente não deletado!');
        return
    }

    try {
        const response = await fetch(`/excluir-cliente/${clienteId}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
        if (!response.ok) {
            throw new Error('Falha ao excluir cliente');
        }
        
    } catch (error) {
        console.error('Erro:', error); 
    }
    location.reload();
};


document.getElementById("m_barra").addEventListener("keydown", function(m_enter) {
    if (m_enter.key === "Enter") {
      m_lupa();
}
});

// ------------------------------------outros dados do cliente----------------------------------------
function m_mais_dados_cliente(clienteId, clienteCPF) {
    let m_div = document.getElementById(`dados-${clienteId}`);
    let m_div_v = document.getElementById(`carros-${clienteCPF}`);
    if (m_div.style.display === 'none') {
        m_div.style.display = 'flex';
    } else {
        m_div.style.display = 'none';
        m_div_v.style.display = 'none';
    }
};
async function m_buscar_carro(car) {
    // -----------------------------aparecer parte dos veiculos------------------------------------------------
    const m_div_v = document.getElementById(`carros-${car}`);
    if (m_div_v.style.display === 'none') {
        m_div_v.style.display = 'flex';
    } else {
        m_div_v.style.display = 'none';
    }

    // -------------------------------------parte para buscar veiculos-------------------------------------
    const m_queryParams_veiculo = new URLSearchParams();

    m_queryParams_veiculo.append('CPF', car);

    const m_resposta_veiculo = await fetch(`/consultar-veiculo?${m_queryParams_veiculo.toString()}`);

    if (!m_resposta_veiculo.ok) {
        console.error('Erro ao consultar:', m_resposta_veiculo.statusText);
        return;
    }

    const m_var_veiculo = await m_resposta_veiculo.json();
    
    if (m_var_veiculo.length === 0) {
        alert('Este cliente não possui veículos cadastrados.');
        return;
    }
    if (m_var_veiculo.length > 1){
        alert('Este cliente possui mais de um veículo cadastrado. Por favor, selecione um veículo específico.');
        prompt("digite um numero:")
    }
    m_var_veiculo.forEach(veiculo =>{
        const li_v = document.getElementById(`carros-${car}`);
        li_v.className = 'm_carros';
        li_v.innerHTML = `
            <div class="m_carros_1">
                Veículo 1
            </div>
            <h3>ID:ㅤ <span>${veiculo.ID_veiculo}</span></h3>
            <h3>Modelo:ㅤ <span>${veiculo.Modelo}</span></h3>
            <h3>Ano:ㅤ <span>${veiculo.Ano}</span></h3>
            <h3>Cor:ㅤ <span>${veiculo.Cor}</span> </h3>
            <h3>Chassi:ㅤ <span>${veiculo.Número_do_chassi}</span></h3>
            <h3>Placa:ㅤ <span>${veiculo.Placa}</span></h3>
        `;
        m_colocar_aqui.appendChild(li_v);
    });


}
window.onload = function() {
    m_lupa()
};

// *************************************mecanico************************************************

async function v_lupa(){

    const v_buscar = document.getElementById("v_barra").value;
    document.getElementById("m_pesq").innerHTML = v_buscar;
    // consulta clientes
    const v_barra = document.getElementById('v_barra').value;
    const v_queryParams = new URLSearchParams();

    if (v_barra) v_queryParams.append('Nome', v_buscar);

    const v_resposta = await fetch(`/consultar-mecanico?${v_queryParams.toString()}`);

    if (!v_resposta.ok) {
        console.error('Erro ao consultar:', v_resposta.statusText);
        return;
    }

    const v_var = await v_resposta.json();
    const listaClientes = document.getElementById('listaMecanicos');


    // colunas da tabela e apaga o resto
    listaClientes.innerHTML = `
        <li class="m_tabela">
            <h2>Nome</h2>
            <h2 class="m_tabela_fone">Telefone</h2>
            <h2 class="m_tabela_ponto">Especialidades</h2>
        </li>
    `;

    console.log('retornados:', v_var);


    v_var.forEach(mecanico => {
        const li = document.createElement('li');
        li.className = 'm_li_cliente';
        v_mecanico_nome = mecanico.NOME;
        li.innerHTML = `
            <div class="m_li_nome">
                <img src="../img/m_avatar.png" alt="avatar">
                <h3>${mecanico.Nome}</h3>
            </div>
            <h3>${mecanico.Fone}</h3>
            <h3>${mecanico.Especialidades}</h3>
            <img src="../img/m_seta.png" alt="seta" id="m_seta">
        `
    })};
