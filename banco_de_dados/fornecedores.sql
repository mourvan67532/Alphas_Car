-- TABLE
CREATE TABLE fornecedores(
  ID_Fornecedor INTEGER PRIMARY key AUTOINCREMENT NOT NULL UNIQUE, 
  Nome varchar(50),
  Email varchar(100),
  Telefone INTEGER,
  CNPJ INTEGER UNIQUE,
  CEP INTEGER UNIQUE	
);

-- INDEX

-- TRIGGER

-- VIEW
