import React, { useState } from "react";
import "./App.css";
import Comp from "./Component/Comp";
import Displayname from "./Component/Displayname";

function App() {
  let [value,getvalue]= useState();
  let [display,setvalue]=useState();
  let inputvalue =(elem) =>{
    getvalue(elem.target.value);
  }
  let extractvalue=() =>{
        setvalue(display=value);
  }
 
  return (
    <>
    
    <div className="Exercise1">
       <h1> EXERCISE 1</h1>     
        <input type="text" value={value} onChange={inputvalue} />
      <div>{display}</div>
      <button onClick={extractvalue}>Submit</button>
    </div>
    </>
  );
}
export default App;

