import { AppError } from '@errors';
import { Address } from '@model';
import { dbConfig } from 'server';

export class AddressRepositories{
	
	async create(address: Address):Promise<Address>{
		try {
			const newAddress = await dbConfig.address.create({data:address});
			return newAddress;
		} catch (error) {			
			throw new AppError('Internal server error',500);
		}
	}
	async update(address: Address):Promise<Address>{
		try {
			const editAddress = await dbConfig.address.update(
				{ 
					where:{
						id :address.id
					},
					data: address 
				}
			);
			return editAddress;
		} catch (error) {
			throw new AppError('Internal server error',500);
		}
		
	}
	async remove(id: number): Promise<null>{
		try {
			await dbConfig.address.delete(
				{
					where:{
						id
					},
				}
			);
			return null;
		} catch (error) {
			throw new AppError('Internal server error',500);
		}
	

	}
	async getAll():Promise<Address[]>{
		try {
			const allAddress = await dbConfig.address.findMany();
			return allAddress;
		} catch (error) {
			throw new AppError('Internal server error',500);
		}
	}
	async getById(id: number):Promise<Address>{
		try {
			const addressSearch = await dbConfig.address.findUnique({
				where:{
					id: id
				}
			});
			if(!addressSearch){
				throw new AppError('Not content',204);
			}
			return addressSearch;

		} catch (error) {
			throw new AppError('Internal server error',500);
		}

	}
}