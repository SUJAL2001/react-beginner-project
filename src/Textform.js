import React,{useState} from 'react'
import ReactDOM from 'react-dom'

export default function Textform(props) {
      
 const handleOnchange =(event)=>{
 console.log("changed");
 setText(event.target.value);
};
const handleUpclick =()=>{
 console.log("Uppercase was clicked");
 let newText = text.toUpperCase();
 setText(newText);
props.showAlert("changed to Uppercasecase","success");
};
const handleLoclick =()=>{
 console.log("lowercase was clicked");
 let newText = text.toLowerCase();
 setText(newText);
  props.showAlert("changed to lowercase", "success");
};

const handleCopy = ()=>{
 var text = document.getElementById("mybox");
 text.select();
 navigator.clipboard.writeText(text.value);
  props.showAlert("text copied to clipboard", "success");
 
}
const handleClear =()=>{
 console.log("lowercase was clicked");
 let newText = ("");
 setText(newText);
  props.showAlert("text is cleared", "success");
};
const handleExtraSpaces = ()=>{
let newText =text.split(/[ ]+/);
setText(newText.join(" "));
 props.showAlert("extra spaces removed", "success");
};
const [text,setText] = useState("");
const curDate = new Date()//toLocaleDateString();
// const curTime = new Date().toLocaleTimeString();


  return (
    <>
      <div className="container my-3">
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            <h1>{props.heading}</h1>
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            style={{
              backgroundColor: props.mode === "dark" ? "blueviolet" : "white",
            }}
            id="mybox"
            rows="3"
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-success mx-1"
          onClick={handleUpclick}
        >
          lc to uc
        </button>
        <button
          type="button"
          className="btn btn-success mx-2"
          onClick={handleLoclick}
        >
          uc to lc
        </button>
        <button
          type="button"
          className="btn btn-success mx-2"
          onClick={handleClear}
        >
          clear
        </button>
        <button
          type="button"
          className="btn btn-success mx-2"
          onClick={handleCopy}
        >
          copy text
        </button>
        <button
          type="button"
          className="btn btn-success mx-2"
          onClick={handleExtraSpaces}
        >
          remove spaces
        </button>
      </div>
      <div className="container my-1">
        <h1>summary</h1>
        <p>no. of letters ={text.length - text.split(" ").length + 1}</p>
        <p>no. of words = {text.split(" ").length}</p>
        <p>time taking = {text.split(" ").length * 0.008}</p>
      </div>
      <div className="container my-3">
        <h1>preview</h1>
        <p>{text.length === 0 ? "enter something to preview" : text}</p>
      </div>
       <>
         
         
        </>
        
    </>
  );
}
