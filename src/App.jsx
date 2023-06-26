
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Nav from '../src/components/navigation/Nav'
import Home from './pages/home/Home';
import Catalog from './pages/catalog/Catalog';
import SingleProduct from './pages/single-product/SingleProduct';

function App() {
  return (
    <div className="App">
        <Nav />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/catalog' element={<Catalog/>} />
            <Route path='/product_id:' element={<SingleProduct/>} />
          </Routes>
    </div>
  );
}

export default App;
