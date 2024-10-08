-- TABLE
CREATE TABLE cliente(
  ID_cliente integer Primary key AUTOINCREMENT,
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
 
