import React from 'react'
import HomePageDress from '../json/HomePageDress.json'

const Dresses = () => {
  return (
    <>
    <div>
        <div className='homePageDressHeadingDiv'>
        <div className='homePageDressHeading'>YOU WILL LOVE IT</div>
        <button className='homePageDressButton'>VIEW ALL</button>
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