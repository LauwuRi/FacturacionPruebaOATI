import { RequestHandler } from "express";
import { Cliente } from '../models/cliente';

export const getClientes: RequestHandler = async(req, res, next) => {
    try{
        const clientes = await Cliente.findAll();
        res.status(200).json({ message: 'Busqueda realizada con éxito', data: clientes});
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ message: 'Hubo un error, no se pudo obtener los datos', error: err.message})
    }
};

export const getClientesById: RequestHandler = async (req, res, next) => {
    try {
      const cliente = await Cliente.findByPk(req.params.id);
      if (cliente) {
        res.status(200).json({ message: 'Operación exitosa', data: cliente });
      } else {
        res.status(404).json({ message: 'Paciente no encontrado' });
      }
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ message: 'Hubo un error al obtener el cliente', error: err.message });
    }
  };