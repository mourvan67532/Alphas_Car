const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = process.env.PORT || 3000;

// Serve os arquivos estáticos (HTML, CSS, JS) da pasta "public"
app.use(express.static('frontend'));

// Configura o body-parser para ler JSON
app.use(bodyParser.json());

// Conectando ao banco de dados SQLite
const db = new sqlite3.Database('banco_de_dados/alpha.db');

// Criar as tabelas se não existirem
db.serialize(() => {
        // Cliente
        db.run(`
        CREATE TABLE IF NOT EXISTS clientes (
            ID_cliente INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
            Nome TEXT, 
            Email TEXT,
            Fone INTEGER,                 
            CEP TEXT,
            CPF TEXT UNIQUE,     
            Bairro TEXT,  
            Rua TEXT,    
            Numero TEXT,
            Complemento TEXT
        );
    `, (err) => {
        if (err) {
            console.error('Erro ao criar tabela clientes:', err);
        } else {
            console.log('Tabela clientes criada com sucesso (ou já existe).');
        }
    });
        // Peças
        db.run(`
        CREATE TABLE IF NOT EXISTS pecas(
            ID_pecas INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
            Nome_peca TEXT,
            Preco_pecas TEXT,
            Modelo_pecas TEXT
        );
        `, (err) => {
        if (err) {
            console.error('Erro ao criar tabela peças:', err);
        } else {
            console.log('Tabela peças criada com sucesso (ou já existe).');
        }
    });
        //Mecanico 
        db.run(`
        CREATE TABLE IF NOT EXISTS mecanico (
            ID_mecanico INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
            Nome TEXT, 
            Fone TEXT,                 
            CPF TEXT UNIQUE,
            CEP TEXT,  
            Bairro TEXT,
            Rua TEXT,
            Numero TEXT,
            Especialidade TEXT
        );
    `, (err) => {
        if (err) {
            console.error('Erro ao criar tabela mecanico:', err);
        } else {
            console.log('Tabela mecanico criada com sucesso (ou já existe).');
        }
    });
        //Orçamento
        db.run(`
        CREATE TABLE IF NOT EXISTS orcamento (
            ID_Orcamento INTEGER PRIMARY key AUTOINCREMENT UNIQUE,
            Nome TEXT,
            Valor TEXT,
            CPF TEXT,
            Servico TEXT,
            Servicoop1 TEXT,
            Servicoop2 TEXT
        );
    `, (err) => {
        if (err) {
            console.error('Erro ao criar tabela orcamento:', err);
        } else {
            console.log('Tabela orcamento criada com sucesso (ou já existe).');
        }
    });
        //Agendamento
        db.run(`
        CREATE TABLE IF NOT EXISTS agendamento (
            ID_Agendamento INTEGER PRIMARY key AUTOINCREMENT UNIQUE,
            Nome TEXT,
            CPF TEXT,
            Data DATE,
            Horario TEXT
        );
    `, (err) => {
        if (err) {
            console.error('Erro ao criar tabela agendamento:', err);
        }  else {
            console.log('Tabela agendamento criada com sucesso (ou já existe).');
        }  
    });
        //Veiculo
        db.run(`
        CREATE TABLE IF NOT EXISTS veiculo (
            ID_veiculo INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
            Modelo TEXT, 
            Cor TEXT,
            Ano TEXT,                 
            CPF TEXT, 
            Número_do_chassi TEXT,   
            Placa TEXT
        );

    `, (err) => {
        if (err) {
            console.error('Erro ao criar tabela veiculo:', err);
        } else {
            console.log('Tabela veiculo criada com sucesso (ou já existe).');
        }
    });
        //Fornecedor
        db.run(`
        CREATE TABLE IF NOT EXISTS fornecedor (
            ID_Fornecedor INTEGER PRIMARY key AUTOINCREMENT UNIQUE, 
            Nome TEXT,
            Email TEXT,
            Telefone INTEGER,
            CNPJ TEXT,
            CEP TEXT	
        );
    `, (err) => {
        if (err) {
            console.error('Erro ao criar tabela forncedor:', err);
        } else {
            console.log('Tabela fornecedor criada com sucesso (ou já existe).');
        }
    });
        //Serviços 
        db.run(`
        CREATE TABLE IF NOT EXISTS servico (
            ID_Serviço INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
            Nome_Serviço TEXT,
            Preco TEXT,
            Ferramentas TEXT
        );
    `, (err) => {
        if (err) {
            console.error('Erro ao criar tabela servico:', err);
        } else {
            console.log('Tabela servico criada com sucesso (ou já existe).');
        }
    });
});


// ♦♦♦♦♦♦♦♦�Cadastra Clientes♦♦♦♦♦♦♦♦�
app.post('/cadastrar-clientes', (req, res) => {
    const { nome, email, telefone, cep, cpf, bairro, rua, numero, complemento } = req.body;

    // Verificar se o CPF já existe
    db.get("SELECT * FROM clientes WHERE CPF = ?", [cpf], (err, row) => {
        if (err) {
            console.error('Erro ao verificar CPF:', err);
            return res.status(500).send('Erro ao verificar CPF');
        }

        if (row) {
            // Se o CPF já existir, retorna um erro
            return res.status(400).send('CPF já cadastrado');
        }

        // Se o CPF não existir, insere o novo cliente
        db.run("INSERT INTO clientes (Nome, Email, Fone, CEP, CPF, Bairro, Rua, Numero, Complemento) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", 
            [nome, email, telefone, cep, cpf, bairro, rua, numero, complemento], function(err) {
            if (err) {
                console.error('Erro ao cadastrar:', err);
                return res.status(500).send('Erro ao cadastrar');
            }

            // Cadastro bem-sucedido
            res.send('Cliente cadastrado com sucesso!');
        });
    });
});


// ♦♦♦♦♦♦♦♦�Cadastra Pecas♦♦♦♦♦♦♦♦�
app.post('/cadastrar-pecas', (req, res) => {
    const {nome_pecas, preco_pecas, modelo_pe} = req.body;
    db.run("INSERT INTO pecas (Nome_peca, Preco_pecas, Modelo_pecas) VALUES (?, ?, ?)", [nome_pecas, preco_pecas, modelo_pe], function(err) {
        if (err) {
            console.error('Erro ao cadastrar:', err);
            res.status(500).send('Erro ao cadastrar');
        } else {
            res.send('cadastrado com sucesso!');
        }
    });
});

// ♦♦♦♦♦♦♦♦�Cadastra Mecanico♦♦♦♦♦♦♦♦�
app.post('/cadastrar-mecanico', (req, res) => {
    const { nome_m, telefone_m, cpf_m, cep_m, bairro_m, rua_m, numero_m, especialidade } = req.body;
    db.run("INSERT INTO mecanico (Nome, Fone, CPF, CEP, Bairro, Rua, Numero, Especialidade) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", 
    [nome_m, telefone_m, cpf_m, cep_m, bairro_m, rua_m, numero_m, especialidade], function(err) {
        if (err) {
            console.error('Erro ao cadastrar mecânico:', err); // Log do erro
            res.status(500).send('Erro ao cadastrar mecânico');
        } else {
            res.send('Mecânico cadastrado com sucesso!');
        }
    });
});

// ♦♦♦♦♦♦♦♦�Cadastra Veiculo♦♦♦♦♦♦♦♦�
app.post('/cadastrar-veiculo', (req, res) => {
    const { modelo_v, cor_v, ano_v, cpf_v, n_chassi_v, placa_v } = req.body;
    db.run("INSERT INTO veiculo ( Modelo, Cor, Ano, CPF, Número_do_chassi, Placa) VALUES (?, ?, ?, ?, ?, ?)", [modelo_v, cor_v, ano_v, cpf_v, n_chassi_v, placa_v ], function(err) {
        if (err) {
            console.error('Erro ao cadastrar:', err);
            res.status(500).send('Erro ao cadastrar veiculo');
        } else {
            res.send('cadastrado com sucesso!');
        }
    });
});

//CADASTRAR FORNECEDOR
app.post('/cadastrar-fornecedor', (req, res) => {
    const { nome_fornecedor, email_f, fone_f, cnpj_f, cep_f } = req.body;
    db.run("INSERT INTO fornecedor (Nome , Email, Telefone, CNPJ, CEP) VALUES (?, ?, ?, ?, ?)", [nome_fornecedor , email_f, fone_f, cnpj_f, cep_f], function(err) { 
        if (err){
            console.error('Erro ao cadastrar:', err);
            res.status(500).send('Erro ao cadastrar fornecedor');
        } else { 
            res.send('cadastrado com sucesso!');
        }
    })
});

// ♦♦♦♦♦♦♦♦�Cadastra Servico♦♦♦♦♦♦♦♦�
app.post('/cadastrar-servico', (req, res) => {
    const { nome_s, preco_s, ferramenta_s } = req.body;
    db.run("INSERT INTO servico ( Nome_Serviço, Preco, Ferramentas) VALUES (?, ?, ?)", [ nome_s, preco_s, ferramenta_s], function(err) { 
        if (err){
            console.error('Erro ao cadastrar:', err);
            res.status(500).send('Erro ao cadastrar servico');
        } else { 
            res.send('cadastrado com sucesso!');
        }
    })
});

// ♦♦♦♦♦♦♦♦�Cadastra Orcamento♦♦♦♦♦♦♦♦�
app.post('/cadastrar-orcamento', (req, res) => {
    const { nome_orca, valor, cpf_o, servico, servico_op1, servico_op2 } = req.body;
    db.run("INSERT INTO orcamento ( Nome, Valor, CPF, Servico, Servicoop1, Servicoop2) VALUES (?, ?, ?, ?, ?, ?)", [ nome_orca, valor, cpf_o, servico, servico_op1, servico_op2], function(err) {
        if (err){
            console.error('Erro ao cadastrar:', err);
            res.status(500).send('Erro ao cadastrar orçamento');
        } else {
            res.send('cadastrado com sucesso!');
        }
    })
});

// ♦♦♦♦♦♦♦♦�Cadastra Agendamento♦♦♦♦♦♦♦♦�
app.post('/agendamento', (req, res) => {
    const { name_a, cpf_a , data, time } = req.body;
    db.run("INSERT INTO orcamento ( Nome, CPF, Data, Hora) VALUES (?, ?, ?, ?)", [ name_a, cpf_a , data, time], function(err) {
        if (err){
            console.error('Erro ao cadastrar:', err);
            res.status(500).send('Erro ao cadastrar agendamento');
        } else {
            res.send('cadastrado com sucesso!');
        }
    })
});

// ♦♦♦♦♦♦♦♦�Consulta♦♦♦♦♦♦♦♦�♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦�Busca♦♦♦♦♦♦♦♦�

// consulta peças
app.get('/consultar-pecas', (req, res) => {
    const Nome_peca = req.query.Nome_peca || ''; 

    const query_kp = `SELECT * FROM pecas WHERE Nome_peca LIKE ?`;
    const params_kp = [`%${Nome_peca}%`];

    db.all(query_kp, params_kp, (err, rows) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao consultar peças' });
        } else {
            res.json(rows);
        }
    });
});

// ♦♦♦♦♦♦♦♦�Consulta Servico♦♦♦♦♦♦♦♦�
app.get('/consultar-servico', (req, res) => {
    const nome_servico = req.query.Nome_Serviço || ''; 


    const query_k = `SELECT * FROM servico WHERE Nome_Serviço LIKE ?`;
    const params_k = [`%${nome_servico}%`];

    db.all(query_k, params_k, (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Erro ao consultar serviços' });
        } else {
            res.json(rows);
        }
    });
});

// ♦♦♦♦♦♦♦♦�Busca orcamento♦♦♦♦♦♦♦♦�
app.get('/buscar-orcamento', (req, res) => {
    const av_query = req.query.query;


    db.all("SELECT * FROM orcamento WHERE CPF LIKE ?", [`%${av_query}%`], (err, rows) => {
        if (err) {
            console.error('Erro ao buscar orçamento:', err);
            res.status(500).send('Erro ao buscar orçamento');
        } else {
            res.json(rows);
        }
    });
});


// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦Pagina do Cliente♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦Pagina do Cliente♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦Pagina do Cliente♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦

// ♦♦♦♦♦♦♦♦�Consultar Veiculo♦♦♦♦♦♦♦♦�
app.get('/consultar-veiculo', (req, res) => {
    const id_veiculo = req.query.ID_veiculo || ''; 

    const query = `SELECT * FROM veiculo WHERE ID_veiculo LIKE ?`;
    const params = [`%${id_veiculo}%`];

    db.all(query, params, (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Erro ao consultar veículo' });
        } else {
            res.json(rows);
        }
    });
});

// ♦♦♦♦♦♦♦♦�Buscar veiculo♦♦♦♦♦♦♦♦�
app.get('/buscar-veiculo', (req, res) => {
    const mv_query = req.query.query;


    db.all("SELECT * FROM veiculo WHERE CPF LIKE ?", [`%${mv_query}%`], (err, rows) => {
        if (err) {
            console.error('Erro ao buscar veiculo:', err);
            res.status(500).send('Erro ao buscar veiculo');
        } else {
            res.json(rows);
        }
    });
});

// ♦♦♦♦♦♦♦�Consultar Cliente♦♦♦♦♦♦♦�
app.get('/consultar-clientes', (req, res) => {
    const nome_cliente = req.query.Nome || ''; 

    const query = `SELECT * FROM clientes WHERE nome LIKE ?`;
    const params = [`%${nome_cliente}%`];

    db.all(query, params, (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Erro ao consultar clientes' });
        } else {
            res.json(rows);
        }
    });
});

// ♦♦♦♦♦♦♦♦�Atualiza Cliente♦♦♦♦♦♦♦♦�
app.put('/atualizar-cliente/:id', (m_update, res) => {
    const clienteId = m_update.params.id;
    const { Nome, Email, Fone, CEP, CPF, Bairro, Rua, Numero, Complemento } = m_update.body;

    if (!Nome || !Email || !Fone || !CEP || !CPF || !Bairro || !Rua || !Numero || !Complemento) {
        return res.status(400).send('Todos os dados devem ser fornecidos');
    }

    db.run(
        `UPDATE clientes 
         SET 
            Nome = ?, 
            Email = ?, 
            Fone = ?, 
            CEP = ?, 
            CPF = ?, 
            Bairro = ?, 
            Rua = ?, 
            Numero = ?, 
            Complemento = ? 
         WHERE ID_cliente = ?`,
        [Nome, Email, Fone, CEP, CPF, Bairro, Rua, Numero, Complemento, clienteId], 
        function(err) {
            if (err) {
                console.error('Erro ao atualizar cliente:', err);
                return res.status(500).send('Erro ao atualizar cliente');
            } else if (this.changes === 0) {
                return res.status(404).send('Cliente não encontrado');
            } else {
                return res.send('Cliente atualizado com sucesso');
            }
        }
    );
});

// ♦♦♦♦♦♦♦♦�Busca Cliente♦♦♦♦♦♦♦♦�
app.get('/buscar-cliente', (req, res) => {
    const mb_query = req.query.query;


    db.all("SELECT * FROM clientes WHERE CPF LIKE ? OR Nome LIKE ?", [`%${mb_query}%`, `%${mb_query}%`], (err, rows) => {
        if (err) {
            console.error('Erro ao buscar cliente:', err);
            res.status(500).send('Erro ao buscar cliente');
        } else {
            res.json(rows);
        }
    });
});

// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦Pagina do Mecanico♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦Pagina do Mecanico♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦Pagina do Mecanico♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦

// ♦♦♦♦♦♦♦♦�Consultar Mecanico♦♦♦♦♦♦♦♦�
app.get('/consultar-mecanico', (req, res) => {
    const nome_mecanico = req.query.Nome || ''; // Recupera o nome do mecânico ou uma string vazia

    // Consulta ao banco de dados para buscar mecânicos com base no nome
    const query = `SELECT * FROM mecanico WHERE Nome LIKE ?`;
    const params = [`%${nome_mecanico}%`];

    db.all(query, params, (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Erro ao consultar mecânicos' });
        } else {
            res.json(rows);
        }
    });
});

// ♦♦♦♦♦♦♦♦�Atualiza Mecanico♦♦♦♦♦♦♦♦�
app.put('/atualizar-mecanico/:id', (a_update, res) => {
    const mecanicoId = a_update.params.id;
    const { Nome, Fone, CEP, CPF, Bairro, Rua, Numero, Especialidade } = a_update.body;

    if (!Nome || !Fone || !CEP || !CPF || !Bairro || !Rua || !Numero || !Especialidade) {
        return res.status(400).send('Todos os dados devem ser fornecidos');
    }

    db.run(
        `UPDATE mecanicos 
         SET 
            Nome = ?, 
            Fone = ?, 
            CEP = ?, 
            CPF = ?, 
            Bairro = ?, 
            Rua = ?,
            Numero = ?,
            Especialidade = ?, 
         WHERE ID_mecanico = ?`,
        [Nome, Fone, CEP, CPF, Bairro, Rua, Numerator, Especialidade, mecanicoId], 
        function(err) {
            if (err) {
                console.error('Erro ao atualizar mecanico:', err);
                return res.status(500).send('Erro ao atualizar mecanico');
            } else if (this.changes === 0) {
                return res.status(404).send('Mecanico não encontrado');
            } else {
                return res.send('Mecanico atualizado com sucesso');
            }
        }
    );
});

// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦Pagina Orcamento♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦Pagina Orcamento♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦Pagina Orcamento♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦

// ♦♦♦♦♦♦♦♦�Busca orcamento♦♦♦♦♦♦♦♦�
app.get('/buscar-orcamento', (req, res) => {
    const av_query = req.query.query;


    db.all("SELECT * FROM orcamento WHERE CPF LIKE ?", [`%${av_query}%`], (err, rows) => {
        if (err) {
            console.error('Erro ao buscar orçamento:', err);
            res.status(500).send('Erro ao buscar orçamento');
        } else {
            res.json(rows);
        }
    });
});

// ♦♦♦♦♦♦♦♦�Atualiza Orcamento♦♦♦♦♦♦♦♦�
app.put('/atualizar-orcamento/:id', (o_update, res) => {
    const orcamentoId = o_update.params.id;
    const { Nome, Valor, CPF, Placa, Servico, Servicoop1, Servicoop2 } = o_update.body;

    if (!Nome || !Valor || !CPF || !Placa || !Servico || !Servicoop1 || !Servicoop2) {
        return res.status(400).send('Todos os dados devem ser fornecidos');
    }

    db.run(
        `UPDATE orcamento 
         SET 
            Nome = ?, 
            Valor = ?, 
            CPF = ?, 
            Servico = ?,
            Servicoop1 = ?,
            Servicoop2 = ?, 
         WHERE ID_orcamento = ?`,
        [Nome, Valor, CPF, Servico, Servicoop1, Servicoop2, orcamentoId], 
        function(err) {
            if (err) {
                console.error('Erro ao atualizar orçamento:', err);
                return res.status(500).send('Erro ao atualizar orçamento');
            } else if (this.changes === 0) {
                return res.status(404).send('Orçamento não encontrado');
            } else {
                return res.send('Orçamento atualizado com sucesso');
            }
        }
    );
});

// ♦♦♦♦♦♦♦�Consultar fornecedores♦♦♦♦♦♦♦�
// Endpoint para consultar fornecedores
app.get('/consultar-fornecedores', async (req, res) => {
    try {
        // Consulta ao banco SQLite para obter os fornecedores
        db.all('SELECT * FROM fornecedor', [], (err, rows) => {
            if (err) {
                console.error("Erro ao consultar fornecedores:", err);
                res.status(500).json({ message: "Erro ao consultar fornecedores" });
            } else {
                // Retorna os fornecedores encontrados
                res.status(200).json(rows);
            }
        });
    } catch (error) {
        console.error("Erro ao consultar fornecedores:", error);
        res.status(500).json({ message: "Erro interno do servidor" });
    }
});





// Teste para ver se o servidor está rodando
app.get('/', (req, res) => {
    res.send('Servidor no Replit está rodando e tabelas criadas!');
});

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});


