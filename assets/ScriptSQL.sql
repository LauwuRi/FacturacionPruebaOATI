-- Creación de base de datos
DROP DATABASE IF EXISTS facturacion;

CREATE DATABASE IF NOT EXISTS facturacion CHARACTER SET utf8mb4;
USE facturacion;

-- Creación de tablas
CREATE TABLE Producto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    cantidad INT,
    precio INT
);

CREATE TABLE Cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    telefono VARCHAR(255)
);

CREATE TABLE Factura (
    id INT AUTO_INCREMENT PRIMARY KEY,
    producto_id INT,
    cliente_id INT,
    cantidad INT,
    FOREIGN KEY (producto_id) REFERENCES Producto(id),
    FOREIGN KEY (cliente_id) REFERENCES Cliente(id)
);