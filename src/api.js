import { Router } from 'express';

import destination from './routes/destination';
import experiences from './routes/experiences';

export default () => {
	let api = Router();
	
	api.get('/', (req, res) => {
		res.send("api");
	});

	api.use('/destination', destination());

	api.use('/experiences', experiences());

	return api;
}