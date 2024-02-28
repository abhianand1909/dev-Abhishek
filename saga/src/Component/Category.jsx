import React from 'react'

const Category = () => {
  return (
    <div className='categoryDiv'>
        <div className='categoryEachDiv'>
            <div className='categoryImageDiv'>
                <img className='categoryImage' src="./Images/Category/Fusion.jpg" alt="Fusion" />
                <div className='categoryTitle'>FUSION</div>
            </div>
            <div className='categoryDesc'> 
                <p>SPARKY & GLAMOROUS</p>
            </div>
        </div>
        <div className='categoryEachDiv'>
            <div className='categoryImageDiv'>
                <img className='categoryImage' src="./Images/Category/Bridal.jpg" alt="Bridal" />
                <div className='categoryTitle'>BRIDAL</div>
            </div>
            <div className='categoryDesc'> 
                <p>LAVISH & ELEGANT</p>
            </div>
        </div>
        <div className='categoryEachDiv'>
            <div className='categoryImageDiv'>
                <img className='categoryImage' src="./Images/Category/Luxury-Pret.jpg" alt="Luxury-Pret" />
                <div className='categoryTitle'>LUXURY PRET</div>
            </div>
            <div className='categoryDesc'> 
                <p>BRIGHT & COLORFUL</p>
            </div>
        </div>
    </div>
  )
}

export default Category