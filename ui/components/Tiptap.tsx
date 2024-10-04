import React, { forwardRef, Ref, useCallback, useImperativeHandle } from "react";
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
import Link from '@tiptap/extension-link'





const contentFromTitTap = '<p>Enter some text </p>'

interface TitTapProps{
  
  onChange: (content: string) => void;
}


const Tiptap = ({ onChange}: TitTapProps, ref: Ref<{clearEditor: () => void}>) => {
    const editor = useEditor({ 

      extensions: [ StarterKit.configure({
        document: false,
        paragraph: false,
        text: false,
        heading: false,
        blockquote: false, // Exclude Blockquote if manually added
      }),
        Underline,
        Document, 
        Paragraph, 
        Text, 
        Heading.configure({
        levels : [1,2,3,4]
      }), 
        TextAlign.configure({
        types : ['heading', 'paragraph'],
        alignments : ['left', 'right', 'justify'],
      }), 
        Blockquote,
        Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: 'https',
      }), ],

      immediatelyRender : false,


      content:  contentFromTitTap,

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