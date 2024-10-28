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
    // Criar a tabela alunos
    db.run(`
        CREATE TABLE IF NOT EXISTS clientes (
            ID_cliente INTEGER PRIMARY key AUTOINCREMENT NOT NULL UNIQUE,
            Nome varchar(100),
            CPF integer unique ,
            Fone integer,
            CEP varchar(20),
            Bairro varchar(20),
            Rua varchar(20),
            Numero varchar(5)
        )
    `, (err) => {
        if (err) {
            console.error('Erro ao criar tabela clientes:', err);
        } else {
            console.log('Tabela clientes criada com sucesso (ou já existe).');
        }
    });
});


//CADASTRAR CLIENTE
    app.post('/cadastrar-clientes', (req, res) => {
        const { nome, email, telefone, cpf, cep, bairro, rua, complemento} = req.body;
        db.run("INSERT INTO clientes (ID_cliente, Nome , CPF , Fone, CEP, Bairro, Rua, Numero) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [nome, email, telefone, cpf, cep, bairro, rua, complemento], function(err) {
            if (err) {
                console.error('Erro ao cadastrar:', err);
                res.status(500).send('Erro ao cadastrar');
            } else {
                res.send('cadastrado com sucesso!');
            }
        });
    });
    

















// Teste para ver se o servidor está rodando
app.get('/', (req, res) => {
    res.send('Servidor no Replit está rodando e tabelas criadas!');
});

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});


