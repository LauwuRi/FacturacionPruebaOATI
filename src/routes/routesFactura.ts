import { Router } from 'express';
import { getFacturas, getFacturasById, createFactura, updateFactura, deleteFactura } from '../controller/controladorFactura';

const router = Router();

router.get('/', getFacturas);

router.get('/unica', getFacturasById);

router.post('/', createFactura);

router.put('/', updateFactura);

router.delete('/', deleteFactura);

export default router;