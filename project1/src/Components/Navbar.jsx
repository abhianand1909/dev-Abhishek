import React ,{useRef, useState} from 'react'
import { useEffect } from 'react';

import HomePageDress from '../json/HomePageDress.json'


const Navbar = () => {
  let [styleInput,setStyleInput] =useState("searchBarText1");
  let [result,setResult] =useState("container1")
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
    elem.target.value.length===0?setResult("container1") :setResult("container");
  })
  const ref=useRef()
  const handleClickOutside=((event)=>
  {
    if(!ref.current.contains(event.target))
    {
      setResult("container1")
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
        <div className='logoDiv'><img className='logo' src="./Images/Navbar/saga logo 2_1.jpg" alt="" /></div>
        
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
        <div>
        <i class="fa-solid fa-cart-shopping"></i>
        </div>
        <div>
        <i class="fa fa-user" aria-hidden="true"></i>
        </div>
    </div> 
    </>
  )
}

export default Navbar