import {
	Router
} from 'express';
import axios from 'axios';
import config from '../../config.json';
import errorHandler from '../middleware/errorHandler';


export default () => {
	let destination = Router();
	let data = {
		"originAirportCode": "SIN",
		"destinationAirportCode": "DXB",
		"scheduledDepartureDate": "2018-08-15"
	};
	let axiosConfig = {
		'Content-Type': 'application/x-www-form-urlencoded',
		'apikey': config.apiKey
	};
	
	destination.get('/', errorHandler(async (req, res, next) => {
			const result = await axios({
				method: 'post',
				url: config.rootUrl + "flightroutestatus", 
				data: data,
				headers: axiosConfig
			});
		res.send(result.data);
	}));

	return destination;
}