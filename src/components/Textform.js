import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {
    const [text, setText] = useState('Enter text here.');

    const handleDumClick = ()=>{
        console.log("Dummy text generated.");
        const dummy = ("This is a sample paragraph written for testing and dummy purposes only. It does not carry any real meaning,but it flows like normal English so you can use it to check layouts,fonts, or designs. Imagine this asfiller content that helps you see how a real block of text would appear inside your project.The sentences are kept simple and easy to read, without complex vocabulary. You can copy, paste, and repeat this text as many times as you need. Its only goal is to fill space in a realistic way,nothing more and nothing less.");
        setText(dummy);
        props.showAlert("Dummy Text generated", "primary");
    }

    const handleUpClick = ()=>{
        console.log("Uppercase was clicked.");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upperCase", "success");
    }

    const handleLoClick = ()=>{
        console.log("LowerCase was clicked.");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowerCase", "success");
    }

    const handleInvClick = () => {
        console.log("Text is Inverting.");
        const words = text.split(" ");
        for (let i = 0; i < words.length; i++) {
            let chars = words[i].split("");  // string → array
            let n = chars.length;
            for (let j = 0; j < Math.floor(n / 2); j++) {
                [chars[j], chars[n - 1 - j]] = [chars[n - 1 - j], chars[j]];
            }
            words[i] = chars.join(""); // array → string
        }
        const invertedText = words.join(" ");
        console.log("Text is Inverted.");
        setText(invertedText);
        props.showAlert("Text is Inverted", "success");
    };

    const handleclrClick = () =>{
        console.log("Text is cleared.");
        setText("");
        props.showAlert("Text is Cleared", "danger");
    }

    const handleCase = () => {
        console.log("Capitalizing Everything.");
        handleLoClick();
        const words = text.split(" ");
        for(let i = 0; i < words.length; i++){
            let chars = words[i].split("");
            if (chars.length > 0) {
                chars[0] = chars[0].toUpperCase();
            }
            words[i] = chars.join("");
        }
        const capitalText = words.join(" ");
        setText(capitalText);

        props.showAlert("First character of each leter is Captalised.", "success");
    }

    const handleOnChange = (event )=>{
        // console.log("On change");
        setText(event.target.value);
    }
    // Wrong way to update text-> text = "xyz";
    // correct way -> setText("xyz")
  return (
    <>
    <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
        <h3>{props.heading} </h3>
        <div className="mb-3">
        <textarea className="form-control" value={text}  onChange={handleOnChange} style={{color: props.mode==='light'?'black':'white' , backgroundColor: props.mode==='dark'?'grey':'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleDumClick}>Dummy text</button>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to upperCase</button>
        <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to lowerCase</button>
        <button className='btn btn-primary mx-1' onClick={handleInvClick}>Inverse text</button>
        <button className='btn btn-primary mx-1' onClick={handleCase}>Capitaliz every Word</button>
        <button className='btn btn-danger mx-1' onClick={handleclrClick}>Clear text</button>
    </div>

    <div className='container my-3' style={{color: props.mode==='light'?'black':'white'}}>
        <h3>Your text summary</h3>
        <p> {text.split(" ").length} words and {text.length}characters</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>

        <h3>Preview</h3>
        <p>{text}</p>

    </div>
    </>
  )
}

Textform.PropTypes = {
    heading: PropTypes.string
}
Textform.defaultProps = {
    heading: "Pass a Heading via prop."
}