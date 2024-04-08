import { AppError } from '@errors';
import { Enterprise } from '@model';
import { AddressRepositories, EnterpriseRepositories } from '@repositories';

export class EnterpriseService {
	enterpriseRepositories = new EnterpriseRepositories();
	async create(enterprise: Enterprise):Promise<Enterprise>{		
		try {
			const newEnterprise = await this.enterpriseRepositories.create(enterprise);
			return newEnterprise; 
		} catch (error) {
			throw new AppError('Internal server erro',500);
		}
	}

	async update(enterprise: Enterprise):Promise<Enterprise>{
		try {
			const updateEnterprise = await this.enterpriseRepositories.update(enterprise);
			return updateEnterprise;
		} catch (error) {
			throw new AppError('Internal server erro',500);
		}
	}

	async del(id: number):Promise<null>{
		try {			
			const addressRepositories = new AddressRepositories();
			const enterprise = await this.enterpriseRepositories.getById(id);			
			await this.enterpriseRepositories.remove(id);
			await addressRepositories.remove(enterprise.addressId);

			return null;
		} catch (error) {
			throw new AppError('Internal server erro',500);
		}
	}

	async getAll():Promise<Enterprise[]>{
		try {
			const enterpriseList = await this.enterpriseRepositories.getAll();
			return enterpriseList;
		} catch (error) {
			throw new AppError('Internal server erro',500);
		}
	}
	async getById(id:number):Promise<Enterprise>{
		try {
			const enterprise = await this.enterpriseRepositories.getById(id);
			return enterprise;
		} catch (error) {
			throw new AppError('Internal server erro',500);
		}
	}
}