import React, { useState } from "react";
import "./App.css";
import Comp from "./Component/Comp";
import Displayname from "./Component/Displayname";

function App() {
  // const arr=["Rajnish","Raj","Anand","Aditya"];
  // let [condition,changecondition]=useState(true);
  // let [count,incCount]=useState(0);
  // function increment()
  //   {
  //     if(condition==true){
  //     incCount(count=count+2);
  //         if(count==10)
  //         {
  //           changecondition(condition=false);
  //         }
  //     }

  //     else if(condition==false){ 
  //     incCount(count=count-2);
  //         if (count==0)
  //         {
  //           changecondition(condition=true);
  //         }
  //      }
      
      
  //   }
  let[arr,setArr]=useState([]);
  let [value,getValue]=useState('');
  let Display =(elem) =>
  {
    getValue(elem.target.value);
  }
  let submit=() =>
  {
    setArr([value,...arr]);
    console.log(arr);
  }

  return (
    <>
    <div> hii <Displayname/></div>
    <div className="hello">

      {/* <Comp name="Abhishek"/> <Comp name="Anand"/> <Comp name="Aditya"/> */}
      {/* {Comp("Abhi")}{Comp("Ravi")}{Comp("Raghav")} */}
      {/* {
        
       arr.map((elem)  => 
        {
          return (
             <Comp name={elem}/>
          )
        })
      } */}
      {/* <div>{count}</div>
    <button onClick={increment}>Click</button> */}
    <div>{value}</div>
    <input type="text" value={value} onChange={Display} />
    <button onClick={submit}>Submit</button>
   { arr.map((element)=>
    {
      return(
        <div>{element}</div>
      )
    })}
    </div>

    
    </>
  );
}
export default App;
