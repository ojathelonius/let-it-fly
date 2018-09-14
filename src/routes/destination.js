import {
	Router
} from 'express';
import axios from 'axios';
import config from '../../config.json';
import errorHandler from '../middleware/errorHandler';


export default () => {
	let destination = Router();

	let axiosConfig = {
		'Content-Type': 'application/x-www-form-urlencoded',
		'apikey': config.apiKey
	};

	// http://localhost:3000/api/destination/SFO
	destination.get('/:airport', errorHandler(async (req, res, next) => {
		let data = {
			"request": {
				"originAirportCode": "SIN",
				"destinationAirportCode": req.params.airport,
				"departureDate": "2018-09-29",
				"returnFlight": false
			}
		};
		const result = await axios({
			method: 'post',
			url: config.rootUrl + "flightschedule", 
			data: data,
			headers: axiosConfig
		});
		res.send(result.data);
	}));

	return destination;
}