import express from 'express'
import cors from 'cors'
import path from 'path'
import postRoutes from './routes.ts/postRoutes'



const app = express();



app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.use('/api/post', postRoutes)


export {app}




















