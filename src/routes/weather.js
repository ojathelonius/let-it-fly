import {
	Router
} from 'express';
import axios from 'axios';
import config from '../../config.json';
import errorHandler from '../middleware/errorHandler';


export default () => {
	let weather = Router();

	let axiosConfig = {
		'x-apiKey': config.aero_apiKey
	};

	// http://localhost:3000/api/weather/SFO
	weather.get('/:airport', errorHandler(async (req, res, next) => {
		const result = await axios({
			method: 'get',
			url: config.aero_rootUrl + req.params.airport, 
			headers: axiosConfig
		});
		res.send(result.data);
	}));

	return weather;
}