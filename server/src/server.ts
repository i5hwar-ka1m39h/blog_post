import { app } from "./app";
import { connectDB } from "./database";
import { ensureUploadDir } from "./utils/ensureUploadDir";

const PORT = process.env.PORT || 5000;

const startServer = async() =>{
    try {
        await ensureUploadDir();
        await connectDB();

        app.listen(PORT, ()=>{console.log(`server is listening on port: ${PORT}`)})
    } catch (error) {
        console.error('failed to start server', error);
        
    }
}


startServer()