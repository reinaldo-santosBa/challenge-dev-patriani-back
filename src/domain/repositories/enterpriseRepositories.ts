import { Enterprise } from '@model';
import { dbConfig } from 'server';

export class EnterpriseRepositories{
	async create(enterprises: Enterprise){
		dbConfig.enterprises.create({data:enterprises});
	}
	async update(enterprises: Enterprise){
		dbConfig.enterprises.update(
			{ 
				where:{
					id :enterprises.id
				},
				data: enterprises 
			}
		);
	}
	async remove(enterprises: Enterprise){
		dbConfig.enterprises.delete(
			{
				where:{
					id :enterprises.id
				},
			}
		);

	}
	async getAll(){
		dbConfig.enterprises.findMany();
	}
	async getById(enterprises: Enterprise){
		dbConfig.enterprises.findUnique({
			where:{
				id: enterprises.id
			}
		});
	}
}