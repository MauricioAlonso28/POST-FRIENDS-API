import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.configDotenv()

import mainRouter from './routes/main.routes.js';

const { URL_DB } = process.env
const app = express()

app.use(cors({
    origin: `${URL_DB}`,
    credentials: true
}))
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())

app.use(mainRouter)

export default app