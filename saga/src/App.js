import './App.css'; 
import {Routes, Route} from 'react-router-dom';
import About from './Pages/About';
import Saga from './Pages/Saga';
import ViewAll from './Component/ViewAll';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Saga/>}/>
      <Route path='/ViewAll' element={<ViewAll/>}/>
      <Route path='/About' element={<About/>}/>  
    </Routes>
  );
}

export default App;
