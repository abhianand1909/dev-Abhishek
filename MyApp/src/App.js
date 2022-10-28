import React, { useState } from "react";
import "./App.css";
import Table from "./Component/Table";
import Button from "./Component/Button";
import Table2 from "./Component/Table2";


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
  } 
 const deleteElement =((name) => {
  const newarr = arr.filter((elemnt)=>{
    return(
      elemnt !==name
    )
  });
  setdata(newarr);
 })

  // Exercise 5

  let nameArr=["Abhishek","Anand","Raj","Ram","Shyam","Tony"];
  let columnName=["Name"];
  
  return (
    <>
    {/* Exercise 1 */}
    <div className="Exercise1">
       <h3> EXERCISE 1</h3>     
        <input type="text" value={value} onChange={inputvalue} />
        <button onClick={extractvalue}>Submit</button>
      <div>{display}</div>
    </div>

    {/* Exercise 2 */}
    <div className="Exercise2">
      <h3 className="E2">EXERCISE 2</h3>
    <Table students={students} colNames={columns}/>
    </div>
    <br />

    {/* Exercise 3 */}
    <div className="Exercise3">
      <h3 className="E3">EXERCISE 3</h3>
      <input type="text" value={value1} onChange={sendData} />
       <div>
          <button onClick={addData}>Add</button>
          
        </div>
      <div className="Arrayreturn">
        {arr.map((elem2)=>
        {
          return(
            <div onClick={() =>{deleteElement(elem2)}}>{elem2}</div>
          )
        }).reverse()
        }</div>
        <br />
    </div>

    {/* Exercise 4 */}
    <div className="Exercise4">
        <h3 className="E4">EXERCISE4</h3>
        <Button  buttonName={"Submit"}/>
        <br />
      </div>

      {/* Exercise 5 */}
      <div className="Exercise5">
        <h3 className="E5">Exercise 5</h3>
        <Table2 names={nameArr} clName={columnName} />
      </div>

    </>
    
  );
}
export default App;
