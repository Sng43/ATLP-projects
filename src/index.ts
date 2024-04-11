import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
// import router from './router';


const app = express()

app.use(cors({
    credentials: true,
}))

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static('UI'));
app.use(bodyParser.urlencoded({ extended: true}))

const server = http.createServer(app);

server.listen(7000, () => {
    console.log("server running at http://localhost:7000")
})

const MONGO_URL = 'mongodb+srv://Sng:senga@cluster0.rrmemwy.mongodb.net/'

mongoose.Promise = Promise
mongoose.connect(MONGO_URL)
mongoose.connection.on('error', (error: Error) => console.log('error'));

// app.use('/', router())