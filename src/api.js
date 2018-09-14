import { Router } from 'express';

import destination from './routes/destination';
import profile from './routes/profile';
import experiences from './routes/experiences';
import events from './routes/events';
import weather from './routes/weather';

export default () => {
	let api = Router();
	
	api.get('/', (req, res) => {
		res.send("api");
	});

	//fetch flights towards specified destination
	api.use('/destination', destination());

	//fetch the user profile
	api.use('/profile', profile());

	//fetch experiences, optional filter by tag and airport
	api.use('/experiences', experiences());

	//fetch events in Singapore from TIH API
	api.use('/events', events());

	//get the weather forecast at specified airport
	api.use('/weather', weather());

	return api;
}