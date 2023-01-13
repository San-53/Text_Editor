import React, { useState } from 'react'
import './App.css'
import Header from './Components/Header/header'
import RichTextEditor from './Components/RichTextEditor'


const App = () => {
  const [value, setValue] = useState("")
  const getValue = (value) => {
    setValue(value);
  };
  return (
    <div className='App'>
      <Header/>
      <h2 className='header_text'>Type Your text in the box</h2>
      <RichTextEditor initialValue="" getValue={getValue}/>
      <br/>
      <h3 className='header_res'>Your output will be shown here............</h3>
      <div className='result'>
        {value}</div>
    </div>
  )
}

export default App