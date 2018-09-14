import {
	Router
} from 'express';
import experiences_json from '../ressources/experiences.json';
import errorHandler from '../middleware/errorHandler';


export default () => {
	let experiences = Router();

    // http://localhost:3000/api/experiences
    // http://localhost:3000/api/experiences?airport=SIN&tag=outdoor
	experiences.get('/', errorHandler(async (req, res, next) => {
        let result = experiences_json.experiences;
        if (req.query.airport != undefined){
            result = result.filter(x => x.airport === req.query.airport);
        }
        if (req.query.tag != undefined){
            result = result.filter(x => x.tag === req.query.tag);
        }
		res.send(result);
    }));

    // http://localhost:3000/api/experiences/1
    experiences.get('/:id', errorHandler(async (req, res, next) => {
        let result = experiences_json.experiences.filter(x => x.id === req.params.id);
		res.send(result);
    }));
    

	return experiences;
}