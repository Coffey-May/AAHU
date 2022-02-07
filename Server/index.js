import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import commentRoutes from './routes/comments.js';
import dotenv from "dotenv";
dotenv.config();

const DB_CONNECTION = process.env.DB_CONNECTION

const app = express();
const PORT = 5000
mongoose.connect(DB_CONNECTION, { useNewUrlParser: true }, () => {

    console.log("connected to mongoose")
})
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("hello!")
})
app.use('/comments', commentRoutes)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})