import fs from 'fs/promises'
import { direcName } from './multerConfig';

export const ensureUploadDir = async() =>{
    try {
        await fs.access(direcName);
    } catch (error) {

        try {
            await fs.mkdir(direcName);
        } catch (mkdirError) {
            console.error(`error occured while creating file`, mkdirError);
            throw mkdirError;
            
        }
    }
   
}