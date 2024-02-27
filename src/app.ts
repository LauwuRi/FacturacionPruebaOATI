import express from "express";
import connection from "./db/configuracion";
import { json, urlencoded } from "body-parser";
import clienteRouter from './routes/routesCliente';
import facturaRouter from './routes/routesFactura';
import productoRouter from './routes/routesProducto';
import * as dotenv from "dotenv";
import cors from 'cors';


const app = express();
dotenv.config();

app.use(json());
app.use(cors());
app.use(urlencoded({ extended: true }));

app.use('/clientes', clienteRouter);
app.use('/facturas', facturaRouter);
app.use('/productos', productoRouter);


app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hola!");
})

app.use((req: express.Request, res: express.Response) => {
  res.status(404).send({ error: 'Not Found', message: 'URL Not Found' });
});

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message });
  }
);

connection
  .sync()
  .then(() => {
    console.log("Se ha conectado a la base de datos correctamete");
  })
  .catch((err) => {
    console.log("Error", err);
  });

app.listen(process.env.PORT, () => {
  console.log(`El puerto del servidor es: ${process.env.PORT}`);
  console.log(`http://localhost:${process.env.PORT}`);
});