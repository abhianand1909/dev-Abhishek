import React from 'react'
import HomePageDress from '../json/HomePageDress.json'
import {Link} from 'react-router-dom';

const Dresses = () => {
  return (
    <>
    <div>
        <div className='homePageDressHeadingDiv'>
        <div className='homePageDressHeading'>YOU WILL LOVE IT</div>
        <Link to="/ViewAll" ><button className='homePageDressButton'>VIEW ALL</button></Link>
        </div>
        <div className='homePageDressDetail'>
        {
          HomePageDress.map((data)=>
          {
            return(
              <div className='homePageDressEachDiv'>
              <img src={data.src} className='homePageDressImage' alt={data.title} />
              <div className='homePageDressTitle'>{data.title}</div>
              <div className='homePageDressPrice'>Rs.{data.price}</div>
              </div>
            )
          })
        }
        </div>
    </div>
    </>
  )
}

export default Dresses