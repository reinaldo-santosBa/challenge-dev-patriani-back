import { Address } from '@model';
import { AddressRepositories } from 'domain/repositories/addressRepositories';

export class AddressService {
	async create(address: Address): Promise<Address> {		
		const addressRepositories = new AddressRepositories();
		const newAddress = await addressRepositories.create(address);
		return newAddress;
	}

	async update(address: Address): Promise<Address> {
		const addressRepositories = new AddressRepositories();
		const updateAddress = await addressRepositories.update(address);
		return updateAddress;
	}

	async del(id: number): Promise<null> {
		const addressRepositories = new AddressRepositories();
		const updateAddress = await addressRepositories.remove(id);
		return updateAddress;
	}

	async getAll(): Promise<Address[]> {
		const addressRepositories = new AddressRepositories();
		const addressList = await addressRepositories.getAll();
		return addressList;
	}
	async getById(id: number): Promise<Address> {
		const addressRepositories = new AddressRepositories();
		const addressList = await addressRepositories.getById(id);
		return addressList;
	}
}