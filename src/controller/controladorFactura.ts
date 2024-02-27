import { RequestHandler } from "express";
import { Factura } from '../models/factura';

export const getFacturas: RequestHandler = async(req, res, next) => {
    try{
        const facturas = await Factura.findAll();
        res.status(200).json({ message: 'Busqueda realizada con éxito', data: facturas});
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ message: 'Hubo un error, no se pudo obtener los datos', error: err.message})
    }
};

export const getFacturasById: RequestHandler = async (req, res, next) => {
    try {
      const { producto, cliente, cantidad } = req.query;
      const factura = await Factura.findOne({ where: { producto_id: producto, cliente_id: cliente , cantidad: cantidad } });
      if (factura) {
        res.status(200).json({ message: 'Busqueda realizada con éxito', data: factura });
      } else {
        res.status(404).json({ message: 'Factura no encontrada' });
      }
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ message: 'Hubo un error, no se pudo obtener los datos', error: err.message });
    }
  };

  export const createFactura: RequestHandler = async (req, res, next) => {
    try {
      const { producto_id, cliente_id, cantidad} = req.body;
      const cita = await Factura.create(req.body);
      res.status(201).json({ message: 'Factura creada exitosamente', data: cita });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ message: 'Hubo un error al crear la Factura', error: err.message });
    }
  };

  export const updateFactura: RequestHandler = async (req, res, next) => {
    try {
      const { producto, cliente, cantidad } = req.query;
      const factura = await Factura.findOne({ where: { producto_id: producto, cliente_id: cliente , cantidad: cantidad } });
  
      if (!factura) {
        res.status(404).json({ message: 'Factura no encontrada' });
        return;
      } else {
        await Factura.update(req.body, { where: { producto_id: producto, cliente_id: cliente , cantidad: cantidad } });
        res.status(200).json({
          message: 'Factura actualizada exitosamente'
        });
      }
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ message: 'Hubo un error al actualizar la Factura', error: err.stack });
    }
  };

  export const deleteFactura: RequestHandler = async (req, res, next) => {
    try {
      const { producto, cliente, cantidad } = req.query;
      const factura = await Factura.findOne({ where: { producto_id: producto, cliente_id: cliente , cantidad: cantidad } });
  
      if (!factura) {
        res.status(404).json({ message: 'Factura no encontrada' });
        return;
      } else {
        await Factura.destroy({ where: { producto_id: producto, cliente_id: cliente , cantidad: cantidad } });
        res.status(200).json({ message: 'Factura eliminada exitosamente' });
      }
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ message: 'Hubo un error al eliminar la Factura', error: err.message });
    }
  };