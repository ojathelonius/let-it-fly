import {
	Router
} from 'express';
import hotels_json from '../ressources/hotels.json';
import errorHandler from '../middleware/errorHandler';


export default () => {
	let hotels = Router();

    // http://localhost:3000/api/hotels
    hotels.get('/', errorHandler(async (req, res, next) => {
        let result = hotels_json.hotels;
		res.send(result);
    }));


    // http://localhost:3000/api/hotels/SIN
	hotels.get('/:airport', errorHandler(async (req, res, next) => {
        let result = hotels_json.hotels;
        result = result.filter(x => x.airport === req.params.airport);
		res.send(result);
    }));

    // http://localhost:3000/api/hotels/1
    hotels.get('/id/:id', errorHandler(async (req, res, next) => {
        let result = hotels_json.hotels.filter(x => x.id === req.params.id);
		res.send(result);
    }));
    

	return hotels;
}