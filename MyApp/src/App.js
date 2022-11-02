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
        setvalue(value);
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

  // Exercise 6
  let [length,setLength] =useState();
  let [password ,setPassword] =useState("********");
  let passwordLength =((e) =>{
    setLength(e.target.value);
    console.log(length);
  });
  let generatePassword =(() =>{
    let createPass=Math.random().toString(36).slice(2)+Math.random().toString(36).slice(2);
    let updatePassLength=createPass.slice(0,length);
    setPassword(updatePassLength);
  })

  //Exercise 7
  let [colStyle ,setStyle] =useState({backgroundColor:''});
  let buttonClick=(() => 
  {
    let randomNum = Math.random().toString(16).slice(2);
    setStyle({backgroundColor:"#" + randomNum.slice(0,6)});
  })
    
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
        <br />
      </div>

      {/* Exercise 6 */}
      <div className="Exercise6">
        <div className="E6">Exercise 6</div>
        <div className="e6Desc">Enter length of password you want to generate</div>
        <input type="text" onChange={passwordLength} />
        <button onClick={generatePassword}>Generate Password</button>
        <div>{password}</div>
      </div>

      {/* Exercise 7 */}
      <div className="Exercise7">
        <div className="E7">Exercise 7</div>
        <div className="e7Desc">Click me to change color</div>
        <button className="colorChangeBtn" style={colStyle} onClick={buttonClick}>Click Me</button>
        
      </div>

    </>
    
  );
}
export default App;
