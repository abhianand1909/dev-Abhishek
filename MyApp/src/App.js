import React, { useState } from "react";
import "./App.css";
import Table from "./Component/Table"


function App(){

  // Exercise 1
  let [value,getvalue]= useState();
  let [display,setvalue]=useState();
  let inputvalue =(elem) =>{
    getvalue(elem.target.value);
  }
  let extractvalue=() =>{
        setvalue(display=value);
  }

  // Exercise 2

   let students=[{Name:"Ram" ,Age:"27"},{Name:"Rajnish" ,Age:"26"},{Name:"Raj" ,Age:"25"},{Name:"Anand" ,Age:"28"}];
   let columns=["Name","Age"];

  // Exercise 3
  
 
  return (
    <>
    
    <div className="Exercise1">
       <h3> EXERCISE 1</h3>     
        <input type="text" value={value} onChange={inputvalue} />
        <button onClick={extractvalue}>Submit</button>
      <div>{display}</div>
    </div>

    <div className="Exercise2">
      <h3 className="E2">EXERCISE 2</h3>
    <Table students={students} colNames={columns}/>
    </div>
    </>
  );
}
export default App;
