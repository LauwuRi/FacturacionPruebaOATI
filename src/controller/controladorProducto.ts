import { RequestHandler } from "express";
import { Producto } from '../models/producto';

export const getProductos: RequestHandler = async(req, res, next) => {
    try{
        const productos = await Producto.findAll();
        res.status(200).json({ message: 'Busqueda realizada con éxito', data: productos});
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ message: 'Hubo un error, no se pudo obtener los datos', error: err.message})
    }
};

export const getProductoById: RequestHandler = async (req, res, next) => {
    try {
      const producto = await Producto.findByPk(req.params.id);
      if (producto) {
        res.status(200).json({ message: 'Operación exitosa', data: producto });
      } else {
        res.status(404).json({ message: 'Producto no encontrado' });
      }
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ message: 'Hubo un error al obtener el producto', error: err.message });
    }
  };