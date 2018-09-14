import { Router } from 'express';
import axios from 'axios';
import config from '../../config.json';
import errorHandler from '../middleware/errorHandler';


export default () => {
	let destination = Router();
	let axiosConfig = {
		headers: {
			Authorization: 'Token ' + config.apiKey,
			'Accept': 'application/json'
		}
	};
	destination.get('/', errorHandler(async (req, res, next) => {
		const result = await axios.get(config.rootUrl + config.version + `/fares?origin_id=${req.query.originId}`, axiosConfig);
		let fares = result.data.fares.map(fare => {
			return {
				id: fare.destination_id,
				price: fare.price_cents,
				price_formatted : (fare.price_cents/100) + '€'

			}
		});
		res.json(fares);
	}));
	return destination;
}