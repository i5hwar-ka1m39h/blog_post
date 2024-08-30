import mongoose from "mongoose";

const DBURL = 'mongodb://127.0.0.1:27017/blog_web'

export const connectDB = async() =>{
    try {
        await mongoose.connect(DBURL)
        console.log(`connected to database`);
    
    } catch (error) {
        console.error(`error occured while connecting to mongodb: ${error}`);
        throw error
    }
}