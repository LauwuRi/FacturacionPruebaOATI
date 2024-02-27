import { Router } from 'express';
import { getProductos, getProductoById } from '../controller/controladorProducto';

const router = Router();

router.get('/', getProductos);

router.get('/unica', getProductoById);

export default router;