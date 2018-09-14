import {
	Router
} from 'express';
import axios from 'axios';
import config from '../../config.json';
import errorHandler from '../middleware/errorHandler';


export default () => {
	let profile = Router();
	let axiosConfig = {
		'Content-Type': 'application/x-www-form-urlencoded',
		'apikey': config.apiKey
    };
    
    // http://localhost:3000/api/profile/9136902546
	profile.get('/:id', errorHandler(async (req, res, next) => {
        let data = {
            "krisflyerNumber": req.params.id
        };
		const result = await axios({
			method: 'post',
			url: config.rootUrl + "krisflyer/profile", 
			data: data,
			headers: axiosConfig
		});
		res.send(result.data);
    }));
    
	return profile;
}