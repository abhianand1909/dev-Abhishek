import React from 'react'
import { useState ,useEffect } from 'react'

const ImageSlider = ({slides}) => {
  const[currentIndex, SetCurrentIndex] =useState(0);
  const goToPrevious=(()=>
  {
    const firstSlide=currentIndex===0;
    const newIndex=firstSlide ? slides.length - 1 :currentIndex - 1;
    SetCurrentIndex(newIndex)
  })
  const goToForward=(() =>
  {
    const lastSlide=currentIndex===slides.length - 1;
    const newIndex=lastSlide ? 0 :currentIndex + 1;
    SetCurrentIndex(newIndex)
  })

  
  const goToSlide=((slideindex) =>{
    SetCurrentIndex(slideindex)
  })
//  const indexLength=slides.length-1;
//   useEffect(() => {
//     const timer=setInterval(() => {
//       if(currentIndex===indexLength)
//       {
//         SetCurrentIndex(0)
//       }
//       else
//       {
//         SetCurrentIndex(currentIndex+1)
//       }
//       // currentIndex==slides.length-1 ? SetCurrentIndex(0) : SetCurrentIndex(currentIndex+1);
//      console.log(currentIndex);
//     }, 5000);
    
//      return
//      (
//       clearInterval(timer)
//      )
//   },[SetCurrentIndex]);
  return (
    <>
    <div className='sliderStyle'>
    {/* <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className="slideStyle"></div> */}
    <div className='leftArrowStyle' onClick={goToPrevious}>❮</div>
    <div className='rightArrowStyle' onClick={goToForward}>❯</div>
    <img src={slides[currentIndex].url} className='slideStyle' alt="" />
    <div className='dotContainer'>
      {slides.map((slide,slideindex) =>
      {
        return(
          <div key={slideindex} className='dotDiv' onClick={() => goToSlide(slideindex)}>●</div>
        )
      })}
    </div>
    </div>
    </>
  )
}

export default ImageSlider
