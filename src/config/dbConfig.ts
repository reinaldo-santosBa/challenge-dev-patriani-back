import { PrismaClient } from '@prisma/client';

export function DbConfig(){
	const prisma = new PrismaClient();
	return prisma;
} 