import { Router } from 'express';

import destination from './routes/destination';
import profile from './routes/profile';
import experiences from './routes/experiences';
import events from './routes/events';
import weather from './routes/weather';
import hotels from './routes/hotels';

export default () => {
	let api = Router();
	
	api.get('/', (req, res) => {
		res.send("Our API for the Singapore Airlines AppChallenge 2018.");
	});

	//fetch flights towards specified destination
	api.use('/destination', destination());

	//fetch the user profile
	api.use('/profile', profile());

	//fetch experiences, optional filter by tag and airport
	api.use('/experiences', experiences());

	//fetch events in Singapore from TIH API
	api.use('/events', events());

	//get the weather forecast
	api.use('/weather', weather());

	//fetch hotels, optional filter by airport
	api.use('/hotels', hotels());

	return api;
}