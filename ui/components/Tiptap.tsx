import React, { forwardRef, Ref, useImperativeHandle } from "react";
import {EditorProvider, FloatingMenu, BubbleMenu, useEditor, EditorContent} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Toolbar from "./Toolbar";
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Heading from '@tiptap/extension-heading'
import Blockquote from "@tiptap/extension-blockquote";





const contentFromTitTap = '<p>Enter some text </p>'

interface TitTapProps{
  content: string;
  onChange: (content: string) => void;
}


const Tiptap = ({content, onChange}: TitTapProps, ref: Ref<{clearEditor: () => void}>) => {
    const editor = useEditor({ 
      extensions: [ StarterKit, Underline,Document, Paragraph, Text, Heading.configure({
        levels : [1,2,3,4]
      }), TextAlign.configure({
        types : ['heading', 'paragraph'],
        alignments : ['left', 'right', 'justify'],
      }), Blockquote ],


      content: content ? content : contentFromTitTap,

      editorProps:{
        attributes:{
          class: "h-[300px] border border-black rounde-md p-5"
        }
      },

      onUpdate:({editor}) => {
        onChange(editor.getHTML())
        
        
      }
    })

    useImperativeHandle(ref, () => ({
      clearEditor : () => {
        editor?.commands.setContent(contentFromTitTap)
      }
    }))


  return(
    <div className="flex flex-col gap-2">
      <Toolbar editor={editor}/>
      <EditorContent editor={editor}/>
    </div>
  )
}



export default forwardRef( Tiptap);