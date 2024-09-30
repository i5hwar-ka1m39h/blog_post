import fs from 'fs';
import path from 'path';

export const imageSender = async(post:any) => {

    const imagePath = path.join(__dirname, "../../", post.picUrl)
    
    

    if(fs.existsSync(imagePath)){
        const imageBuffer = await fs.promises.readFile(imagePath);
        const base64Image = `data:image/jpeg;base64,${imageBuffer.toString('base64')}`
        post = {...post._doc, picData : base64Image}
    }else{
        post = {...post._doc, picData:null}
    }

    return post
}