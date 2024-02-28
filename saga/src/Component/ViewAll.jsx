import React from 'react'
import Navbar from '../Component/Navbar';
import Dresses from '../json/Dresses.json'

const ViewAll = () => {
  return (
    <>
    <Navbar/>
    <div className='collection'>
        {
            Dresses.map((Element)=>
            {
                return(
                    <>
                    <div className='collectionEachDiv'>
                    <img className='collectionImage' src={Element.src} alt={Element.title} />
                    <div className='collectionTitle'>{Element.title}</div>
                    <div className='collectionPrice'>{Element.price}</div>
                    </div>
                    </>
                )
            })
        }
    </div>
    </>
  )
}

export default ViewAll