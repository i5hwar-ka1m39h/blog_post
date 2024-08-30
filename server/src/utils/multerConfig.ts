import multer from "multer"
import path from 'path'


export const direcName = path.join(__dirname, '../../uploads');




export const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, direcName )
    },

    filename: function(req, file, callback) {
        callback(null, `image${Date.now()}${path.extname(file.originalname)}`)
    },
})

export const upload = multer({storage:storage})