'use client'
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Tiptap from './Tiptap'
import axios from 'axios'
import Loading from './Loading'

const EditorWrapper = () => {
  const editorRef = useRef<{ clearEditor: () => void } | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null)

  const form = useForm({
    mode: 'onChange',
    defaultValues: {
      title: '',
      content: '',
      description: '',
      image: null as File | null
    }
  })

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [])

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if(file){
      setFile(file)
      form.setValue('image', file)
    }
  }

  const onSubmit = async (values: any) => {
    try {
      setLoading(true);
      
      const formData = new FormData()
      formData.append("title", values.title)
      formData.append("description", values.description)
      formData.append("content", values.content);
      
      if(file){
        formData.append("image", file)
      }
      
      const response = await axios.post("http://localhost:5000/api/post", formData, {
        headers:{
          'Content-Type': 'multipart/form-data',
        }
      })
      
      console.log(response.data);
      

      setLoading(false);


      form.reset({
        title: '',
        description: '',
        content: '',
        image: null
      })

      editorRef.current?.clearEditor();
    } catch (error) {
      console.error('error submiting the form data', error);

    }

  }

  return (
    <main className=' p-24'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter the title of blog" {...field} ref={inputRef} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="Enter some description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Tiptap onChange={field.onChange} ref={editorRef} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image to upload</FormLabel>
                <FormControl>
                 <Input type='file' accept='image/*' onChange={handleImage} ref={fileRef}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">{loading ? <Loading /> : "Sumbit"}</Button>
        </form>
      </Form>
    </main>
  )
}

export default EditorWrapper



