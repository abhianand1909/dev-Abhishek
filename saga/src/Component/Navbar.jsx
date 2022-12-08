import React ,{useRef, useState} from 'react'
import { useEffect } from 'react';
import {Link} from "react-router-dom";

import HomePageDress from '../json/HomePageDress.json'
import LogIn from './LogIn';


const Navbar = () => {
  let [styleInput,setStyleInput] =useState("searchBarText1");
  let [result,setResult] =useState("resultList1")
  let [closeSearch,setCloseSearch]=useState(true);
  let [searchValue,setSearchvalue]=useState("")
  
  let searchBar =(()=>
  { 
    setCloseSearch(!closeSearch); 
    closeSearch?setStyleInput("searchBarText"):setStyleInput("searchBarText1");
  })
  let searchText=((elem)=>
  {
    setSearchvalue(elem.target.value)
    console.log(elem.target.value)
    elem.target.value.length===0?setResult("resultList1") :setResult("resultList");
  })
  const ref=useRef()
  const handleClickOutside=((event)=>
  {
    if(!ref.current.contains(event.target))
    {
      setResult("resultList1")
      setStyleInput("searchBarText1")
      setSearchvalue("")
      setCloseSearch(true)
    }
  })
 useEffect(() =>
 {
  document.addEventListener("mousedown",handleClickOutside );
  return()=>
  {
    document.removeEventListener("mousedown",handleClickOutside)
  }
 })
  return (
    <>
    <div className='navbar'>
        <div className='logoDiv'><Link to="/"><img className='logo' src="./Images/Navbar/saga logo 2_1.jpg" alt="Logo" /></Link></div>
        
        <div ref={ref} className='searchBox' >
          <input className={styleInput} type="text" placeholder='Search' value={searchValue} onChange={searchText}/>
          <i className='fas fa-search' onClick={searchBar} ></i>
          <div className={result}>
            {
              HomePageDress.filter((productName)=>
              {
                return(
                  productName.title.toLowerCase().includes(searchValue)
                )
                
              }).map((product)=>
              {
                return(
                <>
                <div className='resultHover'>
                <div className='resultEachDiv'>
                <img className='resultImage' src={product.src} alt="" />
                <div className='resultTitle'>{product.title}</div>
                </div>
                </div>
                </>
                )
              })    
            }
          </div>
        </div>
        <div className='cartIcon'>
        <i class="fa-solid fa-cart-shopping"></i>
        </div>
        <div className='loginIcon'>
        <LogIn />
        </div>
    </div> 
    </>
  )
}

export default Navbar