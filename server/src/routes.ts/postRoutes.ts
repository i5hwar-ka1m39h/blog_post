import express from 'express'
import multer from 'multer'

import { deletingSinglePost,
    gettingAllPost,
    gettingSinglePost, 
    postingPost, 
    updatingSinglePost } from '../controllers/postControllers'
import { upload } from '../utils/multerConfig'


const router = express.Router()




// all routes

router.get('/', gettingAllPost)

router.post('/', upload.single('image'), postingPost)

router.get('/:id', gettingSinglePost)

router.put(':id', updatingSinglePost)

router.delete('/:id', deletingSinglePost)


export default router;