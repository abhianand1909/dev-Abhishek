import '../App.css';
import Navbar from '../Component/Navbar';
import ImageSlider from '../Component/ImageSlider';
import CustomiseDiv from '../Component/CustomiseDiv';
import Category from '../Component/Category';
import BestSellingCategory from '../Component/BestSellingCategory'
import Dresses from '../Component/Dresses'
import SignUp from '../Component/SignUp'
import LogIn from '../Component/LogIn'

function Saga() {
  const slides =[
    {url:"./Images/ImageSlider/Slide1.jpg" ,title :"Cottonwear"},
    {url:"./Images/ImageSlider/Slide2.jpg" ,title :"Winterwear"},
    {url:"./Images/ImageSlider/Slide3.jpg" ,title :"Winterwear"},
    {url:"./Images/ImageSlider/Slide4.jpg" ,title :"Winterwear"},
    {url:"./Images/ImageSlider/Slide5.jpg" ,title :"Winterwear"}
    

  ]
  return (
    <>
   <Navbar  />
   <div className='imageSliderParent'> <ImageSlider slides={slides}/> </div>
   <CustomiseDiv/>
   <div className='categoryParent'><Category/></div>
    <Dresses/>
   <div className='bestSellingCategoriesTitle'>SHOP OUR BESTSELLING CATEGORIES</div>
   <div className='BestSellingCategoryMain'><BestSellingCategory/></div>
   <SignUp/>
   <LogIn/>
    </>
  );
}

export default Saga;
