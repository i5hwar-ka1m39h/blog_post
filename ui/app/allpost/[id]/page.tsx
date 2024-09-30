'use client'
import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'

const page = ({ params }: { params: { id: string } }) => {

    const [post, setPost] = useState<any>(null)
    const getPost = useCallback(async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/post/${params.id}`)
            let data = response.data;
            setPost(data.post)
        } catch (error) {
            console.error(error);
            
        }

    }, [])

    useEffect(() => {
        getPost()
    }, [getPost])

    return (
        <div>
            <h1>{post && post.title}</h1>
            <h3>{post && post.description}</h3>
            <p>{post && post.content}</p>

        </div>
    )
}

export default page