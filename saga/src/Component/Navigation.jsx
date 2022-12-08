import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
    console.log("abhi")
  return (
    <>
    <div>
       <Link to="/" > Home</Link>
    </div>
    <div>
        <Link to="/About" >About</Link>
    </div>
    </>
  )
}

export default Navigation