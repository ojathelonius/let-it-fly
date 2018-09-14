import { Router } from 'express';
import origin from './routes/origin';
import destination from './routes/destination';

export default () => {
	let api = Router();
	
	api.get('/', (req, res) => {
		res.send("api");
	});

	api.use('/origin', origin());

	api.use('/destination', destination());

	return api;
}