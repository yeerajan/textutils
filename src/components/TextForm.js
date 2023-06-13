import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    // To upper case
    const handleUpClick = () => {
        // console.log('Upper case was clicked' + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    // To Lower case
    const handleLoClick = () => {
        // console.log('Upper case was clicked' + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    // Clear text
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }
    // Copy text
    const handleCopyClick = () => {
        let copyText = document.getElementById('myBox');
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
    }
    // To remove extra spaces
    const handleTrimClick = () => {
        let newText=text.replace(/\s+/g,' ').trim();
        setText(newText);
    }
    // On change
    const handleOnChange = (event) => {
        // console.log('On Change');
        setText(event.target.value);
    }
        return (
            <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to UpperCase</button>
                <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to LowerCase</button>
                <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear Text</button>
                <button className='btn btn-primary mx-1' onClick={handleCopyClick}>Copy Text</button>
                <button className='btn btn-primary mx-1' onClick={handleTrimClick}>Trim Text</button>

            </div>
            <div className="container my-3">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
            </>
        )
    }
