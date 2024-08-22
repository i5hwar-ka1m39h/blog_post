import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
    userName: {type: String, required: true},
    password: {type: String, required: true},
})

const postSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, },
    content: {type: String, required: true},
    picUrl: {type: String},
    creator: {type: Schema.Types.ObjectId, ref: 'User'},
    date: {type: Date, default: Date.now}
})

export const User = mongoose.model('User', userSchema)
export const Post = mongoose.model('Post', postSchema)