import './App.css';
import Navbar from './Components/Navbar';
import ImageSlider from './Components/ImageSlider';
import CustomiseDiv from './Components/CustomiseDiv';
import Category from './Components/Category';
import BestSellingCategory from './Components/BestSellingCategory'
import Dresses from './Components/Dresses'
import SignUp from './Components/SignUp'
import LogIn from './Components/LogIn'

function App() {
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

export default App;
