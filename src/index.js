import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import api from './api';
let app = express();
app.server = http.createServer(app);

app.use(morgan('dev'));

app.use(bodyParser.json());

app.use('/api', api());

app.get('/', (req, res) => {
    res.send("index");
});

app.server.listen(process.env.PORT || 3000, () => {
    console.log(`Server started on port ${app.server.address().port}`);
});


export default app;