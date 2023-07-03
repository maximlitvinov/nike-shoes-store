
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Nav from '../src/components/navigation/Nav'
import Home from './pages/home/Home';
import Catalog from './pages/catalog/Catalog';
import SingleProduct from './pages/single-product/SingleProduct';

function App() {
//   const product = {
//     first:{
//       id: 1,
//       brand: "Adidas",
//       model: "Adidas Originals Kiellor",
//       price: "295$",
//       size: "8 - 10",
//       img: "https://i.postimg.cc/Qd72Qx8F/adidas-Originals-Kiellor-W.jpg",
//     },
//     second: {
//       id: 2,
//       brand: "New Balance",
//       model: "New Balance Epictrha",
//       price: "255$",
//       size: "8 - 10",
//       img: "https://i.postimg.cc/dQSpgTD7/New-Balance-Epictrha.jpg",
//     },
//     third: {
//       id: 3,
//       brand: "Nike",
//       model: "Nike Air Force 1 LX",
//       price: "230$",
//       size: "8 - 10",
//       img: "https://i.postimg.cc/jdD0j4BQ/Nike-Air-Force-1-07-LX.jpg",
//     },
//    fourth: {
//       id: 4,
//       brand: "Nike",
//       model: "Nike Air Jordan 1",
//       price: "275$",
//       size: "8 - 10",
//       img: "https://i.postimg.cc/kGZHSLLN/Nike-air-jordan-1.jpg",
//     },
// };
  return (
    <div className="App">
        <Nav />
          <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/' element={<Home/>} />
            <Route path='/catalog' element={<Catalog/>} />
            <Route path={`/product`} element={<SingleProduct/>} />
          </Routes>
    </div>
  );
}

export default App;
