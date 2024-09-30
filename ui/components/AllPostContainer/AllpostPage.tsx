'use client'
import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'



const AllpostPage = () => {
  const [posts, setPosts] = useState([])

  const getData = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/post")
      let data = response.data;
      let postfromBackend = data.updatedPost;
      setPosts(postfromBackend);

    } catch (error) {
      
      console.error(error)
    }
  },[])

  useEffect(() => {
    getData();
    
  }, [getData])
  
  return (
    <div>
    {posts.map((each:any) => (
      <div key={each._id}>
        <Link href={`/allpost/${each._id}`}>
        <h1>{each.title}</h1>
        </Link>
        <p>{each.description}</p>
        { each.picData ? 
        <Image src={each.picData} alt='post image' width={200} height={100}/> :
        <h3>no image found</h3>
        }
      </div>
    ))}
    
    </div>
  )
}

export default AllpostPage