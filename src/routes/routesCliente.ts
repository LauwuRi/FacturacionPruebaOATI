import { Router } from 'express';
import { getClientes, getClientesById } from '../controller/controladorCliente';

const router = Router();

router.get('/', getClientes);

router.get('/unica', getClientesById);

export default router;