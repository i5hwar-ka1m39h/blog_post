'use client'

import axios from 'axios'

import Image from 'next/image'
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
        <div className='  flex flex-col justify-center items-center w-screen'>
            
            <h1>{post && post.title}</h1>
            <p>{post && post.description}</p><br /><br />
            {post && post.picData ? <Image src={post.picData} alt='post pic' width={600} height={300}/> : 
            <Image src={'/placeholder.jpg'} alt='site pic' width={600} height={300}/>}br
            <>{post && post.content}</>



        </div>
    )
}

export default page