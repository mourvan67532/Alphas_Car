const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const fetch = require('node-fetch');
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
            Fone INTEGER,                 
            CEP TEXT,
            CPF TEXT UNIQUE,     
            Bairro TEXT, 
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
app.post('/cadastrar-clientes', async (req, res) => {
    const { nome, email, telefone, cep, cpf, numero, complemento } = req.body;

    // Verifica se o CEP foi enviado
    if (!cep) {
        return res.status(400).send('CEP é obrigatório!');
    }

    try {
        // Busca o endereço na API ViaCEP
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (data.erro) {
            return res.status(400).send('CEP inválido!');
        }

        // Preenche os dados do endereço
        const bairro = data.bairro || '';
        const rua = data.logradouro || '';

        // Insere no banco de dados
        db.run(
            `INSERT INTO clientes (Nome, Email, Fone, CEP, CPF, Bairro, Rua, Numero, Complemento)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [nome, email, telefone, cep, cpf, bairro, rua, numero, complemento],
            function (err) {
                if (err) {
                    console.error('Erro ao cadastrar:', err);
                    return res.status(500).send('Erro ao cadastrar');
                }

                res.send('Cadastrado com sucesso!');
            }
        );
    } catch (err) {
        console.error('Erro ao buscar CEP:', err);
        res.status(500).send('Erro ao buscar CEP');
    }
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
    const { nome_m, telefone_m, cpf_m, cep_m, bairro_m, especialidade } = req.body;
    db.run("INSERT INTO mecanico (Nome, Fone, CPF, CEP, Bairro, Especialidade) VALUES (?, ?, ?, ?, ?, ?)", 
    [nome_m, telefone_m, cep_m, cpf_m, bairro_m, especialidade], function(err) {
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

// ♦♦♦♦♦♦♦♦�Cadastra Fornecedor♦♦♦♦♦♦♦♦�
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
app.post('/orcamento', (req, res) => {
    const { nome_orça, cpf_o, valor, servico, servico_op1, servico_op2 } = req.body;
    db.run("INSERT INTO orcamento ( Nome, CPF, Valor, Servico, Servicoop1, Servicoop2) VALORES (?, ?, ?, ?, ?, ?)", [ nome_orça, cpf_o, valor, servico, servico_op1, servico_op2], function(err) {
        if (err){
            console.error('Erro ao cadastrar:', err);
            res.status(500).send('Erro ao cadastrar orcamento');
        } else {
            res.send('cadastrado com sucesso!');
        }
    })
});

// ♦♦♦♦♦♦♦♦�Cadastra Agendamento♦♦♦♦♦♦♦♦�
app.post('/agendamento', (req, res) => {
    const { name_a, cpf_a , data, time } = req.body;
    db.run("INSERT INTO orcamento ( Nome, CPF, Data, Hora) VALORES (?, ?, ?, ?)", [ name_a, cpf_a , data, time], function(err) {
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


// ♦♦♦♦♦♦♦♦�Exclui Veiculo♦♦♦♦♦♦♦♦�
app.delete('/excluir-cliente/:id', (m_delete, res) => {
    const clienteId = m_delete.params.id;

    db.run("DELETE FROM clientes WHERE ID_cliente = ?", [clienteId], function(err) {
        if (err) {
            console.error('Erro ao excluir cliente:', err);
            res.status(500).send('Erro ao excluir cliente');
        } else if (this.changes === 0) {
            res.status(404).send('Cliente não encontrado');
        } else {
            res.send('Cliente excluído com sucesso');
        }
    });
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



// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦


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


