import { AppError } from '@errors';
import { Enterprise } from '@model';
import { AddressRepositories, EnterpriseRepositories } from '@repositories';

export class EnterpriseService {
	enterpriseRepositories = new EnterpriseRepositories();
	async create(enterprise: Enterprise): Promise<Enterprise> {
		const newEnterprise = await this.enterpriseRepositories.create(enterprise);
		return newEnterprise;
	}

	async update(enterprise: Enterprise): Promise<Enterprise> {
		const updateEnterprise = await this.enterpriseRepositories.update(enterprise);
		return updateEnterprise;
	}

	async del(id: number): Promise<null> {
		const addressRepositories = new AddressRepositories();
		const enterprise = await this.enterpriseRepositories.getById(id);
		await this.enterpriseRepositories.remove(id);
		await addressRepositories.remove(enterprise.addressId);
		return null;
	}

	async getAll(): Promise<Enterprise[]> {
		const enterpriseList = await this.enterpriseRepositories.getAll();
		if(enterpriseList.length === 0){
			throw new AppError('',204)
		}
		return enterpriseList;
	}
	async getById(id: number): Promise<Enterprise> {
		const enterprise = await this.enterpriseRepositories.getById(id);
		return enterprise;
	}
}