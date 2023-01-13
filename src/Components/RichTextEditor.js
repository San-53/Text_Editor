import JoditEditor from 'jodit-react';
import './RichTextEditor.css'
import React, { useRef } from 'react'

const RichTextEditor = ({initialValue, getValue}) => {
    const editor = useRef(null);
  return( 
    <div className='jodi'>
  <JoditEditor
      ref={editor}
      value={initialValue}
      tabIndex={1}
      onChange={(newContent) => getValue(newContent)}
    />
  </div>)

}

export default RichTextEditor