-- TABLE
CREATE TABLE cliente(
  ID_cliente INTEGER PRIMARY key AUTOINCREMENT NOT NULL UNIQUE,
  Nome varchar(100),
  CPF integer unique not null,
  Fone integer not null,
  CEP varchar(20),
  Bairro varchar(20),
  Rua varchar(20),
  Numero varchar(5)
 );

 CREATE TABLE fornecedores(
  ID_Fornecedor INTEGER PRIMARY key AUTOINCREMENT NOT NULL UNIQUE, 
  Nome varchar(50),
  Email varchar(100),
  Telefone INTEGER,
  CNPJ INTEGER UNIQUE,
  CEP INTEGER UNIQUE	
);

CREATE TABLE mecanico(
  ID_mecanico INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE,
  Nome varchar(50), 
  Fone INTEGER,                 
  CEP varchar(20),
  CPF INTEGER UNIQUE NOT NULL,     
  Bairro varchar(20)  
  Especialidade varchar(100)
);

CREATE TABLE orcamento(
  ID_orcamento INTEGER PRIMARY key AUTOINCREMENT NOT NULL UNIQUE  
  nome_cliente varchar(50),
  Email varchar(100),
  Modelo_Carro varchar(10),
  Data date,
  Horário time,
  FOREIGN KEY (nome_cliente) REFERENCES cliente(Nome),
  FOREIGN key (Modelo_Carro) REFERENCES carro(Modelo)
);

CREATE TABLE serviço(
  ID_Serviço INTEGER PRIMARY key AUTOINCREMENT NOT NULL UNIQUE,
  Nome_Serviço varchar(50),
  Ferramentas varchar(50),
  Tempo INTEGER
);

CREATE TABLE veiculo(
  ID_veiculo INTEGER PRIMARY key AUTOINCREMENT NOT NULL UNIQUE
  Placa PRIMARY key not NULL,
  Modelo varchar(10),
  Cor varchar(10),
  Ano date not NULL, 
  N° do Chassi varchar(17),
  cpf varchar(11),
  FOREIGN KEY (CPF) REFERENCES cliente(CPF)
);
 
-- INDEX
 
-- TRIGGER
 
-- VIEW
 
