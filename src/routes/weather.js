import {
	Router
} from 'express';
import axios from 'axios';
import config from '../../config.json';
import usable_data from '../ressources/usable_data.json';
import IATA_map from '../ressources/IATA_map.json';
import errorHandler from '../middleware/errorHandler';


export default () => {
	let weather = Router();

	let axiosConfig = {
		'x-apiKey': config.aero_apiKey
	};

	// http://localhost:3000/api/weather/
	weather.get('/', errorHandler(async (req, res, next) => {

		// returns the list of IATA codes of airports
		let tab = usable_data.weatherAirports;
		let out = [];
		for (let index = 0; index < tab.length; index++) {
			let r = await axios({
				method: 'get',
				url: config.aero_rootUrl + tab[index], 
				headers: axiosConfig
			});
			
			// from the IATA code, adds the city name to the returned object
			let city = IATA_map.filter(x => x.IATA === tab[index])[0].cityName;
			r.data.currentWeather.city = city;
			out.push(r.data.currentWeather);			
		}
		res.send(out);
	}));

	return weather;
}