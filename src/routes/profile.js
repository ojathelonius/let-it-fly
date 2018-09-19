import {
	Router
} from 'express';
import axios from 'axios';
import config from '../../config.json';
import usable_data from '../ressources/usable_data.json';
import errorHandler from '../middleware/errorHandler';


export default () => {
	let profile = Router();
	let axiosConfig = {
		'Content-Type': 'application/x-www-form-urlencoded',
		'apikey': config.apiKey
	};
	
	let goingTo = ["Paris","San Francisco"];
	let goingToAirport = ["CDG", "SFO"];
	let adjacentBookings = [0, 3];
	
	profile.get('/', errorHandler(async (req, res, next) => {
		let out = [];
		for (let index = 0; index < 2; index++) {
			let data = {
				"krisflyerNumber": usable_data.profiles[index]
			};
			let result = await axios({
				method: 'post',
				url: config.rootUrl + "krisflyer/profile", 
				data: data,
				headers: axiosConfig
			});
			result.data.response.id = index;
			result.data.response.goingTo = goingTo[index];
			result.data.response.goingToAirport = goingToAirport[index];
			result.data.response.adjacentBookings = adjacentBookings[index];
			out.push(result.data.response);
		}
		res.send(out);
	}));

    // http://localhost:3000/api/profile/9136902546
	profile.get('/:id', errorHandler(async (req, res, next) => {
        let data = {
            "krisflyerNumber": usable_data.profiles[req.params.id]
        };
		const result = await axios({
			method: 'post',
			url: config.rootUrl + "krisflyer/profile", 
			data: data,
			headers: axiosConfig
		});
		result.data.response.id = req.params.id;
		result.data.response.goingTo = goingTo[req.params.id];
		result.data.response.goingToAirport = goingToAirport[req.params.id];
		result.data.response.adjacentBookings = adjacentBookings[req.params.id];
		res.send(result.data.response);
    }));
    
	return profile;
}