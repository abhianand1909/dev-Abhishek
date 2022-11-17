import React from 'react'
import HomePageDress from '../json/HomePageDress.json'


const Navbar = () => {

  return (
    <>
    <div className='navbar'>
        <div className='logoDiv'><img className='logo' src="./Images/Navbar/saga logo 2_1.jpg" alt="" /></div>
        
        <div className='searchBox'>
          <input className='searchBarText' type="text" placeholder='Search'/>
          <i className='fas fa-search' ></i>
          <div className='container'></div>
        </div>
    </div> 
    </>
  )
}

export default Navbar