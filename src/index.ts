import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './router';


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

// app.post('/signup.html', (req:express.Request, res:express.Response) => {
//     const {email, username, password} = req.body
//     console.log(email, username, password)
//     if(!email || !username || !password){
//         return res.status(400).send({message: "failed"})
//     }

//     return res.status(200).send({status: "received"})
// })

const server = http.createServer(app);

server.listen(7000, () => {
    console.log("server running at http://localhost:7000")
})

const MONGO_URL = 'mongodb+srv://Sng:senga@cluster0.rrmemwy.mongodb.net/'

mongoose.Promise = Promise
mongoose.connect(MONGO_URL)
mongoose.connection.on('error', (error: Error) => console.log('error'));

app.use('/', router())