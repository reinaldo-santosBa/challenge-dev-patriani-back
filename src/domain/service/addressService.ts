import { AppError } from '@errors';
import { Address } from '@model';
import { AddressRepositories } from 'domain/repositories/addressRepositories';

export class AddressService {
	async create(address: Address):Promise<Address>{
		try {
			const addressRepositories = new AddressRepositories();
			const newAddress = await addressRepositories.create(address);
			return newAddress; 
		} catch (error) {
			console.log(error)
			throw new AppError('Internal server erro',500);
		}
	}

	async update(address: Address):Promise<Address>{
		try {
			const addressRepositories = new AddressRepositories();
			const updateAddress = await addressRepositories.update(address);
			return updateAddress;
		} catch (error) {			
			throw new AppError('Internal server erro',500);
		}
	}

	async del(id: number):Promise<null>{
		try {
			const addressRepositories = new AddressRepositories();
			const updateAddress = await addressRepositories.remove(id);
			return updateAddress;
		} catch (error) {
			throw new AppError('Internal server erro',500);
		}
	}

	async getAll():Promise<Address[]>{
		try {
			const addressRepositories = new AddressRepositories();
			const addressList = await addressRepositories.getAll();
			return addressList;
		} catch (error) {
			throw new AppError('Internal server erro',500);
		}
	}
	async getById(id:number):Promise<Address>{
		try {
			const addressRepositories = new AddressRepositories();
			const addressList = await addressRepositories.getById(id);
			return addressList;
		} catch (error) {
			throw new AppError('Internal server erro',500);
		}
	}
}