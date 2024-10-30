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
















// Teste para ver se o servidor está rodando
app.get('/', (req, res) => {
    res.send('Servidor no Replit está rodando e tabelas criadas!');
});

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});


