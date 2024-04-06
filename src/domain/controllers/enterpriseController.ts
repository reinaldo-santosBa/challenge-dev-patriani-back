import { AddressService, EnterpriseService } from '@service';
import { Request, Response } from 'express';

export class EnterpriseController {
	async create(req:Request,res:Response):Promise<Response>{
		const {address,enterprise} = req.body;
		const addressService = new AddressService();
		const enterpriseService = new EnterpriseService();
		const addresSaved = await addressService.create(address);
		const enterpriseSaved = await enterpriseService.create({...enterprise,addresID: addresSaved.id});		
		return res.status(201).json({enterpriseSaved,addresSaved});
	}
	async update(req:Request,res:Response):Promise<Response>{
		const{address,enterprise} = req.body;
		const addressService = new AddressService();
		const enterpriseService = new EnterpriseService();
		const addresSaved = await addressService.update(address);
		const enterpriseSaved = await enterpriseService.update({...enterprise,addresID: addresSaved.id});
		return res.status(200).json({enterpriseSaved,addresSaved});
	}
	async delete(req:Request,res:Response):Promise<Response>{
		const{id} = req.query;
		const enterpriseService = new EnterpriseService();
		await enterpriseService.del(Number(id));
		return res.status(200).json();
	}
	async getAll(req:Request,res:Response):Promise<Response>{
		const enterpriseService = new EnterpriseService();
		const enterpriseList = await enterpriseService.getAll();    
		return res.status(200).json(enterpriseList);
	}
	async getById(req:Request,res:Response):Promise<Response>{
		const{id} = req.query;
		const enterpriseService = new EnterpriseService();
		const enterpriseList = await enterpriseService.getById(Number(id));    
		return res.status(200).json(enterpriseList);    
	}
}