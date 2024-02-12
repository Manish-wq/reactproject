import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    
    const [text, setText] = useState('Enter text here')
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
            <div class="mb-3">
            <textarea class="form-control" value={text} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
    </div>
   <div className="container my-4">
   <h2>Your Text Summary</h2>
    <p>{text.split(" ").length} and {text.length}</p>
    <h2>Preview</h2>
    <p>{text}</p>
   </div>
    </>
  )
}
