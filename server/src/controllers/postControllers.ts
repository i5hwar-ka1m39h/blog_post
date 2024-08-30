import { Request, Response } from "express";
import { Post } from "../model/allModel";

export const postingPost = async (req : Request, res : Response)  => {
    try {
        const {title, description, content,  } = req.body

        const picUrl = req.file ? `uploads/${req.file.filename}` : null

        const post = await Post.create({
            title : title,
            description : description,
            content : content,
            picUrl : picUrl,
        })

        if(!post) return res.status(422).json({message: 'unable to upload the post'})

        res.status(201).json({message:'post added successfully', post});

    } catch (error) {
        res.status(500).json({message : error})
    }
}

export const gettingAllPost = async (req : Request, res : Response) => {
    try {
        const post = await Post.find({});
        if(!post){
            return res.status(404).json({message:'no post found'})
        }

        res.status(200).json({message:`here are all the post ${post}`})
    } catch (error) {
        res.status(500).json({message : error})
    }
}

export const gettingSinglePost = async (req : Request, res : Response) =>{
    try {
        let {id} = req.params
        const singlePost = await Post.findOne({_id: id})
        if(!singlePost) return res.status(404).json({message: 'no post found with given id'})
        
        res.status(200).json({message: `here is the post with id: ${id}`, singlePost})
    } catch (error) {
        res.status(500).json({message : error})
        
    }
}

export const updatingSinglePost = async (req : Request, res : Response) =>{
    try {
        let {content, title, description} = req.body;
        let {id} = req.params;

        const singlePost = await Post.findOne({_id: id})
        if(!singlePost) return res.status(404).json({message: 'no post found with given id'})

        const updatePost = await Post.updateOne({_id:id}, {
            title: title,
            description: description,
            content: content,
            date: Date.now()
        })
        
        res.status(200).json({message:'post updated successfully', updatePost})
    } catch (error) {
        res.status(500).json({message : error})
        
    }
}

export const deletingSinglePost = async (req : Request, res :Response) => {
    try {
        const id = req.params.id

        const post = await Post.findById(id);

        if(!post) return res.status(400).json({message:'no post found'})

        await Post.deleteOne({_id:id})
        res.status(200).json({message:'deleted successfully'})

    } catch (error) {
        res.status(500).json({message : error})
    }
}