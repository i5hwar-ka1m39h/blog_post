'use client'
import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '../ui/button'



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
    <div className=' flex flex-row gap-5  flex-wrap'>
    {posts.map((each:any) => (
      <Card className=' bg-slate-200'>
      <CardHeader>
        <CardTitle><h1>{each.title}</h1></CardTitle>
        <CardDescription>{each.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {each.picData ? <Image src={each.picData} alt='post image' width={400} height={200}/> : 
        <Image src={'/placeholder.jpg'} alt='site pic' width={400} height={200}/>}
      </CardContent>
      <CardFooter>
        <Link href={`/allpost/${each._id}`}><Button>Read</Button></Link>
      </CardFooter>
    </Card>
    
    
    ))}
    
    
    </div>
  )
}

export default AllpostPage