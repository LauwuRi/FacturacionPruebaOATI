import { Sequelize } from "sequelize-typescript";
import * as dotenv from "dotenv";
import { Factura } from "../models/factura";
import { Cliente } from "../models/cliente";
import { Producto } from "../models/producto";

dotenv.config();

const connection = new Sequelize({
  dialect: "mysql",
  host: process.env.HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: false,
  models: [Factura, Cliente, Producto]
});

export default connection;