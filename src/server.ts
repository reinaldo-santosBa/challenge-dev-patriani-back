import { AppServer, DbConfig } from '@config';
export const  dbConfig = DbConfig();
export const server = new AppServer();