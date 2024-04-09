import { EnterpriseController } from '@controllers';
import express from 'express';

const controllerEnterprise = new EnterpriseController();

export const EnterpriseRouter = express.Router();
/**
 * @swagger
 * /enterprise:
 *   get:
 *     description: Get all
 *     responses:
 *       200:
 *         description: ok
 *       500:
 *         description: Internal server error
 *       204:
 *          description: Not content
 *  */
EnterpriseRouter.get('/',controllerEnterprise.getAll);
/**
 * @swagger
 * /enterprise/{id}:
 *   get:
 *     description: Get by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: ok
 *       500:
 *         description: Internal server error
 *       204:
 *          description: Not content
 *  */
EnterpriseRouter.get('/:id',controllerEnterprise.getById);
/**
 * @swagger
 * /enterprise:
 *   patch:
 *     description: Atualiza uma empresa existente com um endereço associado
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: data
 *         description: Dados da empresa e do endereço a serem atualizados
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             enterprise:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 purpose:
 *                   type: string
 *                 riNumber:
 *                   type: string
 *                 status:
 *                   type: string
 *             address:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 street:
 *                   type: string
 *                 number:
 *                   type: string
 *                 district:
 *                   type: string
 *                 city:
 *                   type: string
 *                 state:
 *                   type: string
 *                 cep:
 *                   type: string
 *     responses:
 *       200:
 *         description: Empresa excluída com sucesso
 *       500:
 *         description: Internal server error
 *       204:
 *          description: Not content
 */

EnterpriseRouter.patch('/',controllerEnterprise.update);
/**
 * @swagger
 * /enterprise:
 *   post:
 *     description: Cria uma nova empresa com um endereço associado
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: data
 *         description: Dados da empresa e do endereço
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             address:
 *               type: object
 *               properties:
 *                 street:
 *                   type: string
 *                 number:
 *                   type: string
 *                 district:
 *                   type: string
 *                 city:
 *                   type: string
 *                 state:
 *                   type: string
 *                 cep:
 *                   type: string
 *             enterprise:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 purpose:
 *                   type: string
 *                 riNumber:
 *                   type: string
 *                 status:
 *                   type: string
 *     responses:
 *       201:
 *         description: Empresa criada com sucesso
 *       500:
 *         description: Internal server error
 */
EnterpriseRouter.post('/',controllerEnterprise.create);
/**
 * @swagger
 * /enterprise/{id}:
 *   delete:
 *     description: Exclui uma empresa existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Empresa excluída com sucesso
 *       500:
 *         description: Internal server error
 *       204:
 *          description: Not content
 *  */
EnterpriseRouter.delete('/:id',controllerEnterprise.delete);