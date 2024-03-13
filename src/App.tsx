
import './App.css';
import Login from '../src/Components/Login';
import Main from '../src/Components/Main';
import {Routes, Route} from 'react-router-dom'
import Products from '../src/Components/Products';
import Details from '../src/Components/Details';
import Wishlist from './Components/Wishlist';

function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={ <Main/>}/>
    <Route path='/login' element={ <Login/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/details' element={<Details/>}/>
    <Route path='/wishlist' element={<Wishlist/>}/>
   </Routes>
   </>
    
  );
}

export default App;
