-- TABLE
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

-- INDEX
 
-- TRIGGER
 
-- VIEW
 