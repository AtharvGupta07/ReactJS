import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {
    const [text, setText] = useState('Enter text here.');

    const handleUpClick = ()=>{
        console.log("Uppercase was clicked.");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event )=>{
        // console.log("On change");
        setText(event.target.value);
        
    }

    // Wrong way to update text-> text = "xyz";
    // correct way -> setText("xyz")
  return (
    <div>
        <h3>{props.heading} </h3>
        <div className="mb-3">
        <textarea className="form-control" value={text}  onChange={handleOnChange}  id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}>Convert to upperCase</button>
    </div>
  )
}

Textform.prototype = {
    heading: PropTypes.string
}
Textform.defaultProps = {
    heading: "Pass a Heading via prop."
}