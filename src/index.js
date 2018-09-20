import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import 'idempotent-babel-polyfill';
import api from './api';

let app = express();
app.server = http.createServer(app);

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(morgan('dev'));

app.use(bodyParser.json());

app.use('/api', api());

app.get('/', (req, res) => {
    res.send("index");
});

app.server.listen(process.env.PORT || 3001, () => {
    console.log(`Server started on port ${app.server.address().port}`);
});


export default app;
