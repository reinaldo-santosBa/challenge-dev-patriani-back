import { EnterpriseController } from '@controllers';
import express from 'express';

const controllerAddress = new EnterpriseController();

export const EnterpriseRouter = express.Router();

EnterpriseRouter.get('/',controllerAddress.getAll);
EnterpriseRouter.get('/:id',controllerAddress.getById);
EnterpriseRouter.patch('/',controllerAddress.update);
EnterpriseRouter.post('/',controllerAddress.create);
EnterpriseRouter.delete('/:id',controllerAddress.delete);