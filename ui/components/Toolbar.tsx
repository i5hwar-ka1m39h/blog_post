import { Editor } from "@tiptap/react";
import React, { useCallback } from "react";
import {
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Italic,
  Link,
  List,
  Quote,
  
  UnderlineIcon,
  Unlink,
} from 'lucide-react'
import { Toggle } from "./ui/toggle";

const Toolbar = ({editor}: {editor : Editor | null; }) => {


  if(!editor) return null;


  const setLink = useCallback(() => {
    const prevURL = editor?.getAttributes('link').href;
    const url = window.prompt('URL', prevURL);
    
    if(url === null){
      return null;
    }

    if(url === ''){
      editor.chain().focus().extendMarkRange('link').unsetLink().run()
    }
    
    editor.chain().focus().extendMarkRange('link').setLink({href: url}).run()

  },[editor])

  return(
    <div className="flex flex-row flex-wrap gap-2">
      <Toggle 
        pressed={editor.isActive('bold')}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
        className="data-[state=on]:bg-slate-200 data-[state=on]:text-slate-800 border border-black rounded-[5px]"
      >
        <Bold className="h-4 w-4"/>
      </Toggle>

      <Toggle 
        pressed={editor.isActive('italic')}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
        className="data-[state=on]:bg-slate-200 data-[state=on]:text-slate-800 border border-black rounded-[5px]"
      >
        <Italic className="h-4 w-4"/>
      </Toggle>

      <Toggle 
        pressed={editor.isActive('underline')}
        onPressedChange={() => editor.chain().focus().toggleUnderline().run()}
        className="data-[state=on]:bg-slate-200 data-[state=on]:text-slate-800 border border-black rounded-[5px]"
      >
        <UnderlineIcon className="h-4 w-4"/>
      </Toggle>

      <Toggle 
        pressed={editor.isActive('blockquote')}
        onPressedChange={() => editor.chain().focus().toggleBlockquote().run()}
        className="data-[state=on]:bg-slate-200 data-[state=on]:text-slate-800 border border-black rounded-[5px]"
      >
        <Quote className="h-4 w-4"/>
      </Toggle>

      <Toggle 
        pressed={editor.isActive('bulletList')}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
        className="data-[state=on]:bg-slate-200 data-[state=on]:text-slate-800 border border-black rounded-[5px]"
      >
        <List className="h-4 w-4"/>
      </Toggle>

      <Toggle 
        pressed={editor.isActive('heading', { level: 1 })}
        onPressedChange={() => editor.chain().focus().toggleHeading({level: 1}).run()}
        className="data-[state=on]:bg-slate-500 data-[state=on]:text-black border border-black rounded-[5px]"
      >
        <Heading1 className="h-4 w-4"/>
      </Toggle>

      <Toggle 
        pressed={editor.isActive('heading', { level: 2 })}
        onPressedChange={() => editor.chain().focus().toggleHeading({level: 2}).run()}
        className="data-[state=on]:bg-slate-500 data-[state=on]:text-black border border-black rounded-[5px]"
      >
        <Heading2 className="h-4 w-4"/>
      </Toggle>

      <Toggle 
        pressed={editor.isActive('heading', { level: 3 })}
        onPressedChange={() => editor.chain().focus().toggleHeading({level: 3}).run()}
        className="data-[state=on]:bg-slate-500 data-[state=on]:text-black border border-black rounded-[5px]"
      >
        <Heading3 className="h-4 w-4"/>
      </Toggle>

      <Toggle 
        pressed={editor.isActive('heading', { level: 4 })}
        onPressedChange={() => editor.chain().focus().toggleHeading({level: 4}).run()}
        className="data-[state=on]:bg-slate-500 data-[state=on]:text-black border border-black rounded-[5px]"
      >
        <Heading4 className="h-4 w-4"/>
      </Toggle>


      <Toggle 
        pressed={editor.isActive({textAlign: 'left'})}
        onPressedChange={() => editor.chain().focus().setTextAlign('left').run()}
        className="data-[state=on]:bg-slate-500 data-[state=on]:text-black border border-black rounded-[5px]"
      >
        <AlignLeft className="h-4 w-4"/>
      </Toggle>

      <Toggle 
        pressed={editor.isActive({textAlign: 'right'})}
        onPressedChange={() => editor.chain().focus().setTextAlign('right').run()}
        className="data-[state=on]:bg-slate-500 data-[state=on]:text-black border border-black rounded-[5px]"
      >
        <AlignRight className="h-4 w-4"/>
      </Toggle>

      <Toggle 
        pressed={editor.isActive({textAlign: 'justify'})}
        onPressedChange={() => editor.chain().focus().setTextAlign('justify').run()}
        className="data-[state=on]:bg-slate-500 data-[state=on]:text-black border border-black rounded-[5px]"
      >
        <AlignJustify className="h-4 w-4"/>
      </Toggle>

      <Toggle 
        pressed={editor.isActive('link')}
        onPressedChange={() => setLink()}
        className="data-[state=on]:bg-slate-500 data-[state=on]:text-black border border-black rounded-[5px]"
      >
        <Link className="h-4 w-4"/>
      </Toggle>

      <Toggle 
        pressed={!editor.isActive('link')}
        onPressedChange={() => editor.chain().focus().unsetLink().run()}
        className="data-[state=on]:bg-slate-500 data-[state=on]:text-black border border-black rounded-[5px]"
      >
        <Unlink className="h-4 w-4"/>
      </Toggle>
    </div>
  )
}

export default Toolbar;