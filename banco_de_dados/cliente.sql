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
 
-- INDEX
 
-- TRIGGER
 
-- VIEW
 
