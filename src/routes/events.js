import {
	Router
} from 'express';
import axios from 'axios';
import config from '../../config.json';
import events_json from '../ressources/extra_events.json';
import errorHandler from '../middleware/errorHandler';


export default () => {
	let events = Router();

    // http://localhost:3000/api/events
	
	events.get('/', errorHandler(async (req, res, next) => {
		/*
		const result = await axios({
			method: 'get',
			url: config.tih_rootUrl + "?apikey=" + config.tih_apiKey
		});
		res.send(result.data.data);
		*/
		let result = events_json.events;
		res.send(result);
	}));

	return events;
}