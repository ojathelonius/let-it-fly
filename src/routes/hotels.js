import {
	Router
} from 'express';
import hotels_json from '../ressources/hotels.json';
import errorHandler from '../middleware/errorHandler';


export default () => {
	let hotels = Router();

    // http://localhost:3000/api/hotels
    // http://localhost:3000/api/hotels?airport=SIN
	hotels.get('/', errorHandler(async (req, res, next) => {
        let result = hotels_json.experiences;
        if (req.query.airport != undefined){
            result = result.filter(x => x.airport === req.query.airport);
        }
		res.send(result);
    }));

    // http://localhost:3000/api/hotels/1
    hotels.get('/:id', errorHandler(async (req, res, next) => {
        let result = hotels_json.experiences.filter(x => x.id === req.params.id);
		res.send(result);
    }));
    

	return hotels;
}