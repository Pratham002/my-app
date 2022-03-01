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
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
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

    // let words = text.trim().split(" ").length;
    // if (words === 1 && text.split(" ")[0] === "") {
    //   words = 0;
    //   return words;
    // } else {
    //   return words;
    // }

    // trim : trim() method removes whitespace from both sides of a string
    // if string has even an extra space it will remove it..

    // split : method splits a string into an array of substrings, returns the new array, does not change the original string

    const wordsCount = (text) => {
        let words = text.trim().split(" ").length;
        if(words === 1 && text.split(" ")[0] === "") {
            return 0;
        }
        else {
            return words;
        }
    }

  return (
      <>
    <div className="container" style={{color: props.mode === "dark" ? "white" : "#042743"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleChange} style={{backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "#042743"}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handletextExtract}>Remove all Symbols</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3"  style={{color: props.mode === "dark" ? "white" : "#042743"}}>
        <h2>Your Text Summary</h2>
        <p>{wordsCount(text)} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Time Required to Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter some text to preview it here."}</p>
    </div>
    </>
  )
}
