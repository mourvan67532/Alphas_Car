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
        // Mourvan
        db.run(`
        CREATE TABLE IF NOT EXISTS clientes (
            ID_cliente INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
            Nome TEXT, 
            Email TEXT,
            Fone INTEGER,                 
            CEP TEXT,
            CPF INTEGER UNIQUE,     
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
    // Kau :3
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
        // Abner
        db.run(`
        CREATE TABLE IF NOT EXISTS mecanico (
            ID_mecanico INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
            Nome TEXT, 
            Fone INTEGER,                 
            CEP TEXT,
            CPF TEXT UNIQUE,     
            Bairro TEXT  
        );
    `, (err) => {
        if (err) {
            console.error('Erro ao criar tabela mecanico:', err);
        } else {
            console.log('Tabela mecanico criada com sucesso (ou já existe).');
        }
    });
        // João
        db.run(`
        CREATE TABLE IF NOT EXISTS veiculo (
            ID_veiculo INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
            Modelo TEXT, 
            Cor TEXT,
            Ano TEXT,                 
            CPF INTEGER UNIQUE, 
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
        // Victor
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

        db.run(`
        CREATE TABLE IF NOT EXISTS servico (
            ID_Serviço INTEGER PRIMARY key AUTOINCREMENT UNIQUE,
            Nome_Serviço TEXT,
            Ferramentas TEXT,
            Tempo INTEGERT	
        );
    `, (err) => {
        if (err) {
            console.error('Erro ao criar tabela servico:', err);
        } else {
            console.log('Tabela servico criada com sucesso (ou já existe).');
        }
    });
});


//CADASTRAR CLIENTE
    app.post('/cadastrar-clientes', (req, res) => {
        const { nome, email, telefone, cep, cpf, bairro, rua, numero, complemento} = req.body;
        db.run("INSERT INTO clientes ( Nome, Email, Fone, CEP, CPF, Bairro, Rua, Numero, Complemento) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", [nome, email, telefone, cep, cpf, bairro, rua, numero, complemento], function(err) {
            if (err) {
                console.error('Erro ao cadastrar:', err);
                res.status(500).send('Erro ao cadastrar');
            } else {
                res.send('cadastrado com sucesso!');
            }
        });
    });

//CADASTRAR PECAS
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

//CADASTRAR MECÂNICO
    app.post('/cadastrar-mecanico', (req, res) => {
        const { nome_m, telefone_m, cep_m, cpf_m, bairro_m } = req.body;
        db.run("INSERT INTO mecanico (Nome, Fone, CEP, CPF, Bairro) VALUES (?, ?, ?, ?, ?)", 
        [nome_m, telefone_m, cep_m, cpf_m, bairro_m], function(err) {
            if (err) {
                console.error('Erro ao cadastrar mecânico:', err); // Log do erro
                res.status(500).send('Erro ao cadastrar mecânico');
            } else {
                res.send('Mecânico cadastrado com sucesso!');
            }
        });
    });

//CADASTRAR VEICULO
app.post('/cadastrar-veiculo', (req, res) => {
    const { modelo_v, cor_v, ano_v, cpf_v, n_chassi_v, placa_v } = req.body;
    db.run("INSERT INTO veiculo ( Modelo, Cor, Ano, CPF, Número_do_chassi, Placa,) VALUES (?, ?, ?, ?, ?, ?)", [ modelo_v, cor_v, ano_v, cpf_v, n_chassi_v, placa_v], function(err) {
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
    db.run("INSERT INTO forncedor (Nome , Email, Telefone, CNPJ, CEP) VALORES (?, ?, ?, ?, ?)", [ nome_fornecedor , email_f, fone_f, cnpj_f, cep_f], function(err) { 
        if (err){
            console.error('Erro ao cadastrar:', err);
            res.status(500).send('Erro ao cadastrar veiculo');
        } else { 
            res.send('cadastratado com successo!');
        }
    })
});

//CADASTRAR SERVICO
app.post('/cadastrar-servico', (req, res) => {
    const { nome_s, preco_s, ferramenta_s } = req.body;
    db.run("INSERT INTO servico ( Nome, Preco, Ferramentas) VALORES (?, ?, ?)", [ nome_s, preco_s, ferramenta_s], function(err) { 
        if (err){
            console.error('Erro ao cadastrar:', err);
            res.status(500).send('Erro ao cadastrar veiculo');
        } else { 
            res.send('cadastratado com successo!');
        }
    })
});


// consultar

app.get('/consultar-clientes', (req, res) => {
    const nome_cliente = req.query.Nome || ''; 

    // Consulta ao banco de dados para buscar clientes com base no nome
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

app.get('/consultar-mecanico', (req, res) => {
    const nome_mecanico = req.query.Nome || ''; 

    // Consulta ao banco de dados para buscar clientes com base no nome
    const query = `SELECT * FROM mecanico WHERE nome LIKE ?`;
    const params = [`%${nome_mecanico}%`];

    db.all(query, params, (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Erro ao consultar mecanicos' });
        } else {
            res.json(rows);
        }
    });
    
    // Consulta ao banco de dados para buscar clientes com base no nome
    const j_ve = `SELECT * FROM veiculo WHERE nome LIKE ?`;
    const j_cr = [`%${modelo_veiculo}%`];

    db.all(j_ve, j_cr, (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Erro ao consultar veiculos' });
        } else {
            res.json(rows);
        }
    });
});
















// Teste para ver se o servidor está rodando
app.get('/', (req, res) => {
    res.send('Servidor no Replit está rodando e tabelas criadas!');
});

// Iniciando o servidornome, telefone, cep, cpf, bairro
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});


