import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import AllProducts from './pages/AllProducts';
import Myaccount from './pages/Myaccount';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyOrders from './pages/Myorders';
import OrderDetails from './pages/OrderDetails';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BackHandler from './Components/BackHandler';
export default function App() {
  const [category, setCategory] = useState("all");
  
  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };
  

  return (
    <BrowserRouter>
      <Navbar getCategory={handleCategoryChange} /> 
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path="/" element={<AllProducts category="all" />} />
        <Route path="/clothes" element={<AllProducts category="clothes" />} />
        <Route path="/electronics" element={<AllProducts category="electronics" />} />
        <Route path="/furnitures" element={<AllProducts category="furnitures" />} />
        <Route path="/toys" element={<AllProducts category="toys" />} />
        <Route path="/myaccount" element={<BackHandler><Myaccount/></BackHandler>} /> 
        <Route path="/Myorders" element={<BackHandler><MyOrders/></BackHandler>}/>
        <Route path="/order/:orderId" element={<BackHandler><OrderDetails/></BackHandler>} />
      </Routes>
    </BrowserRouter>
  );
}
