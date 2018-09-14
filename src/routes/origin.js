import { Router } from 'express';
import axios from 'axios';
import config from '../../config.json';
import errorHandler from '../middleware/errorHandler';


export default () => {
	let origin = Router();
	let axiosConfig = {
		headers: {
			Authorization: 'Token ' + config.apiKey,
			'Accept': 'application/json'
		}
	};
	origin.get('/', errorHandler(async (req, res, next) => {
			const result = await axios.get(config.rootUrl + config.version + '/stops', axiosConfig);
			let stops = result.data.stops.map(stop => {
				return {
					id: stop.id,
					name: stop.short_name_en
				}
			});
			res.json(stops);
	}));
	return origin;
}