import { AppError } from '@errors';
import { Enterprise } from '@model';
import { dbConfig } from 'server';

export class EnterpriseRepositories {
	async create(enterprises: Enterprise): Promise<Enterprise> {
		console.log({ id: enterprises.addressId });

		try {

			const newEnterprise = await dbConfig.enterprises.create({
				data: {
					name: enterprises.name,
					purpose: enterprises.purpose,
					riNumber: enterprises.riNumber,
					address: { connect: { id: enterprises.addressId } }
				}
			});
			return newEnterprise;
		} catch (error) {
			throw new AppError('Internal server error', 500);
		}
	}
	async update(enterprises: Enterprise): Promise<Enterprise> {
		const enterprise = await dbConfig.enterprises.findUnique({
			where: {
				id: enterprises.id
			}
		});
		if (!enterprise) {
			throw new AppError('Not content', 204);
		}
		const editEnterprise = await dbConfig.enterprises.update(
			{
				where: {
					id: enterprises.id
				},
				data: enterprises
			}
		);
		return editEnterprise;
	}
	async remove(id: number): Promise<null> {
		try {
			await dbConfig.enterprises.delete(
				{
					where: {
						id
					},
				}
			);
			return null;
		} catch (error) {
			throw new AppError('Internal server error', 500);
		}


	}
	async getAll(): Promise<Enterprise[]> {
		try {
			const allEnterprise = await dbConfig.enterprises.findMany({
				include: {
					address: true
				}
			});
			return allEnterprise;
		} catch (error) {
			throw new AppError('Internal server error', 500);
		}
	}
	async getById(id: number): Promise<Enterprise> {
		const enterprise = await dbConfig.enterprises.findUnique({
			where: {
				id
			},
			include: {
				address: true
			}
		});
		if (!enterprise) {
			throw new AppError('Not content', 204);
		}
		return enterprise;

	}
}