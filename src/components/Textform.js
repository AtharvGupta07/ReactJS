import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {
    const [text, setText] = useState('Enter text here.');

    const handleUpClick = ()=>{
        console.log("Uppercase was clicked.");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = ()=>{
        console.log("Uppercase was clicked.");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event )=>{
        // console.log("On change");
        setText(event.target.value);
        
    }

    // Wrong way to update text-> text = "xyz";
    // correct way -> setText("xyz")
  return (
    <>
    <div className='container'>
        <h3>{props.heading} </h3>
        <div className="mb-3">
        <textarea className="form-control" value={text}  onChange={handleOnChange}  id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-success' onClick={handleUpClick}>Convert to upperCase</button>
        <button className='btn btn-danger mx-2' onClick={handleLoClick}>Convert to lowerCase</button>
    </div>

    <div className='container my-3'>
        <h3>Your text summary</h3>
        <p> {text.split(" ").length} words and {text.length}characters</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>

        <h3>Preview</h3>
        <p>{text}</p>

    </div>
    </>
  )
}

Textform.prototype = {
    heading: PropTypes.string
}
Textform.defaultProps = {
    heading: "Pass a Heading via prop."
}