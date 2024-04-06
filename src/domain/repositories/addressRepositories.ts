import { Address } from '@model';
import { dbConfig } from 'server';

export class AddressRepositories{
	
	async create(address: Address){
		dbConfig.address.create({data:address});
	}
	async update(address: Address){
		dbConfig.address.update(
			{ 
				where:{
					id :address.id
				},
				data: address 
			}
		);
	}
	async remove(address: Address){
		dbConfig.address.delete(
			{
				where:{
					id :address.id
				},
			}
		);

	}
	async getAll(){
		dbConfig.address.findMany();
	}
	async getById(address: Address){
		dbConfig.address.findUnique({
			where:{
				id: address.id
			}
		});
	}
}