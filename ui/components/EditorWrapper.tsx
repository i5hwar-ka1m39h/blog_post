'use client'
import React, { useEffect, useRef } from 'react'
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

const EditorWrapper = () => {
  const editorRef = useRef<{ clearEditor : () => void} | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  
  const form = useForm({
    mode: 'onChange',
    defaultValues: {
      title: '',
      content: '',
      description: ''
    }
  })

  useEffect(() => {
    if(inputRef.current){
      inputRef.current.focus();
    }
  }, [])

  const onSubmit =async(values: any) => {
    try {
      console.log(values);
      
      form.reset({
        title: '',
        description: '',
        content: ''
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
                  <Input placeholder="Enter the title of blog" {...field}  ref={inputRef}/>
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
                  <Tiptap content={field.name} onChange={field.onChange} ref={editorRef}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </main>
  )
}

export default EditorWrapper



