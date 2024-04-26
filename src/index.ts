import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './router';
import swaggerDocs from './helpers/swagger';


const app = express()

app.use(cors({
    credentials: true,
}))

app.use(compression());
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static('UI'));
app.use(bodyParser.urlencoded({ extended: true}))
app.use(express.urlencoded());


const server = http.createServer(app);

const port = 7000

server.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);

    swaggerDocs(app, port);


})

const MONGO_URL = 'mongodb+srv://Sng:senga@cluster0.rrmemwy.mongodb.net/'

mongoose.Promise = Promise
mongoose.connect(MONGO_URL)
mongoose.connection.on('error', (error: Error) => console.log('error'));

app.use('/', router())