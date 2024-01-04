import React, {useState} from 'react'

export default function TextForm(props) {
    const[text, setText] = useState('');
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleLowClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to Lowercase", "success");
    }
    const clearText = () => {
        setText("");
        props.showAlert("Text Cleared", "success");
    }
    const speakText = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        props.showAlert("Speaking", "success");
    }
    return (
        <>
        <div className="container" >
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#333333':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={clearText}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={speakText}>Speak</button>



        </div>
        <div className="container my-3">
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read.</p>
            <h2>Preview Text Here</h2>
            <p>{text.length>0?text:"Enter Something to preview it"}</p>
        </div>
        </>
    )
}
