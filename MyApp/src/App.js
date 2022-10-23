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

  let [arr,setdata]=useState([]);
  let [value1,takevalue]=useState('');
  let sendData =(elem1) =>
  {
    takevalue(elem1.target.value);
  }
  let addData =() =>{
    setdata([value1.toUpperCase(),...arr]); 
    takevalue(value1='') 
    console.log(arr);
  } 
  let removeData =() =>{
    arr.pop();
    setdata([...arr]);
    console.log(arr);
  } 
  
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
    <br />

    <div className="Exercise3">
      <h3 className="E3">EXERCISE 3</h3>
      <input type="text" value={value1} onChange={sendData} />
       <div>
          <button onClick={addData}>Add</button>
          <button onClick={removeData}>Remove</button>
        </div>
      <div className="Arrayreturn">
        {arr.map((elem2)=>
        {
          return(
            <div>{elem2}</div>
          )
        })
        }</div>
        <br />
    </div>
    

    
    </>
    
  );
}
export default App;
