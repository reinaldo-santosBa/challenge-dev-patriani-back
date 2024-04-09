import express, { Application, NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import dotenv from 'dotenv';
import cors from 'cors';
import { AppError } from '@errors';
import { ErrorHandler } from '@middlewares';
import { EnterpriseRouter } from '@routes';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

dotenv.config();
export class AppServer {
	private app: Application;
	constructor() {
		this.app = express();
		this.configureMiddleware();
		this.configureRoutes();
		this.configureDoc();
		this.configureErrorHandling();
		const port = Number(process.env.PORT || 3001);
		this.start(port);
	}

	private configureMiddleware() {
		this.app.use(express.json());
		this.app.use(cors({ origin: '*' }));
	}

	private configureErrorHandling() {
		this.app.use((req: Request, res: Response, next: NextFunction) => {
			const error = new AppError('Route not found', 404);
			next(error);
		});

		this.app.use(ErrorHandler);
	}

	private start(port: number) {
		this.app.listen(port, () => {
			console.log(`Server running on port ${port}`);
		});
	}
	private configureRoutes() {
		this.app.use('/enterprise', EnterpriseRouter);
	}
	private configureDoc() {
		const options = {
			swaggerDefinition: {
				info: {
					title: 'Patriani crud enterprises test',
					version: '1.0.0',
					description: 'Documentation created for the patriani test of a list of enterprises',
				},
			},
			apis: ['./src/routes/*.ts'],
			servers: [
				{
					url: 'http://localhost:3000',
					description: 'Servidor de desenvolvimento',
				},
			],
		};
		const specs = swaggerJsdoc(options);
		this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));
	}
}
