import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose';
import { Post } from './model/allModel';
import multer from 'multer';
import fs from 'fs/promises'
import path from 'path'




const app = express();
const PORT = 3000;
const DBURL = 'mongodb://127.0.0.1:27017/blog_web'

app.use(express.json());
app.use(cors());


const direcName = path.join(__dirname, '../images')

const ensureUploadDir = async() =>{
    try {
        
        try {
            await fs.access(direcName);
        } catch (error) {
            await fs.mkdir(direcName)
        } 

    } catch (error) {
        console.error('error creating upload folder', error);
        
    }
   
}

const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, direcName )
    },

    filename: function(req, file, callback) {
        callback(null, `image${Date.now()}${path.extname(file.originalname)}`)
    },
})
const upload = multer({storage:storage})


app.get('/api/posts', async(req, res)=>{
    try {
        const post = await Post.find({});
        if(!post){
            return res.status(404).json({message:'no post found'})
        }

        res.status(200).json({message:`here are all the post ${post}`})
    } catch (error) {
        res.status(500).json({message : error})
    }
})

app.post('/api/post', upload.single('image'), async(req, res)=>{
    try {
        const {title, description, content,  } = req.body

        const picUrl = req.file ? `uploads/${req.file.fieldname}` : null

        const post = await Post.create({
            title : title,
            description : description,
            content : content,
            picUrl : picUrl,
        })

        if(!post) return res.status().json({message: 'unable to upload the post'})

    } catch (error) {
        res.status(500).json({message : error})
    }
})


const connectDB = async() =>{
    try {
        await mongoose.connect(DBURL, )
        console.log(`connected to database`);
    
    } catch (error) {
        console.error(`error occured while connecting to mongodb: ${error}`);
        
    }
}

ensureUploadDir()
    .then(()=>connectDB())
    .then(()=>{
        app.listen(PORT, ()=>console.log(`server is listening on port ${PORT}`))
    })
    .catch(e=>{console.error(e)})



