import React from 'react';

const BestSellingCategory = () => {
  return (
    <div className='BestSellingCategory'>
      <div className='BestSellingCategoryEachDiv'>
        <img className='BestSellingCategoryImage' src="./Images/BestSellingCategory/Saree.jpg" alt="" />
        <div className='BestSellingCategoryHeading'>Saree</div>
      </div>
      <div className='BestSellingCategoryEachDiv'>
        <img className='BestSellingCategoryImage' src="./Images/BestSellingCategory/Blouse.jpg" alt="" />
        <div className='BestSellingCategoryHeading'>Blouse</div>
      </div>
      <div className='BestSellingCategoryEachDiv'>
        <img className='BestSellingCategoryImage' src="./Images/BestSellingCategory/Lehenga.jpg" alt="" />
        <div className='BestSellingCategoryHeading'>Lahenga</div>
      </div>
      <div className='BestSellingCategoryEachDiv'>
        <img className='BestSellingCategoryImage' src="./Images/BestSellingCategory/Kurta.jpg" alt="" />
        <div className='BestSellingCategoryHeading'>Kurta</div>
      </div>
    </div>
  )
}

export default BestSellingCategory