import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
        <div className='logoDiv'><img className='logo' src="./Images/Navbar/saga logo 2_1.jpg" alt="" /></div>
        <div className='searchBar'>
          <input className='searchBarText' type="text" />
          <img className='searchBarIcon' src="./Images/Navbar/SearchIcon.png" alt="" />
        </div>
    </div> 
    </>
  )
}

export default Navbar