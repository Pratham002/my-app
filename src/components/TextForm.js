import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    function handleUpClick() {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }

    function handleLoClick() {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");
    }

    function handleClear() {
        setText("");
        props.showAlert("Message has been cleared !", "success");
    }

    // remove all symbols
    const handletextExtract = () => {
        const regex = /[0-9/A-Z/a-z/ /]/g;
        const letters = text.match(regex);
        const res = letters.join('');
        setText(res);
        props.showAlert("Removed all symbols", "success");
    }

    // handle copy
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Messaged has been copied.", "success");
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra space", "success");
    }

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const wordsCount = (text) => {
        let words = text.trim().split(/\s+/).length;
        if(words === 1 && text.split(" ")[0] === "") {
            return 0;
        }
        else {
            return words;
        }
    }

    const minutesRead = (text) => {
        const len = text.split(" ").length;
        if(len === 1) {
            return 0;
        }
        else {
            return 0.008 * len;
        }
    }

  return (
      <>
    <div className="container" style={{color: props.mode === "dark" ? "white" : "#042743"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleChange} style={{backgroundColor: props.mode === "dark" ? "#13466e" : "white", color: props.mode === "dark" ? "white" : "#042743"}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert To UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert To LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handletextExtract}>Remove all Symbols</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3"  style={{color: props.mode === "dark" ? "white" : "#042743"}}>
        <h2>Your Text Summary</h2>
        <p>{wordsCount(text)} words, {text.length} characters</p>
        <p>{minutesRead(text)} Time Required to Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview."}</p>
    </div>
    </>
  )
}
