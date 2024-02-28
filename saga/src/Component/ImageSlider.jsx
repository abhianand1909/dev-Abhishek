import React from 'react'
import { useState ,useEffect } from 'react'

const ImageSlider = ({slides}) => {
  let [currentIndex, SetCurrentIndex] =useState(0);
  const goToPrevious=(()=>
  {
    setSlideStyle('slideStyle')
    const firstSlide=currentIndex===0;
    const newIndex=firstSlide ? slides.length - 1 :currentIndex - 1;
    SetCurrentIndex(newIndex)
  })
  const goToForward=(() =>
  {
    setSlideStyle('slideStyle')
    const lastSlide=currentIndex===slides.length - 1;
    const newIndex=lastSlide ? 0 :currentIndex + 1;
    SetCurrentIndex(newIndex)
  })

  
  const goToSlide=((slideindex) =>{
    setSlideStyle('slideStyle')
    SetCurrentIndex(slideindex);
  })
  let [slideStyle,setSlideStyle]= useState('slideStyle');
  useEffect(()=>
  {
  setSlideStyle('slideStyleActive')
  },[currentIndex])

  return (
    <>
    <div className='sliderStyle'>
    <div className='leftArrowStyle' onClick={goToPrevious}>❮</div>
    <div className='rightArrowStyle' onClick={goToForward}>❯</div>
    <img src={slides[currentIndex].url} className={slideStyle} alt="" />
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
