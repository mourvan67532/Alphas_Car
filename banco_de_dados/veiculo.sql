-- TABLE
CREATE TABLE veiculo(
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
 