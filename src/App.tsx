import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {ShopPage} from "./pages/Shop";
import {ProductDetails} from "./pages/ProductDetails/ProductDetails";
import {NotFound} from "./pages/NotFound";

function App() {
 return(
     <BrowserRouter>
         <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="/shop" element={<ShopPage/>} />
             <Route path="/shop/:productId" element={<ProductDetails/>}/>
             <Route path="*" element={<NotFound/>}/>
         </Routes>
     </BrowserRouter>
 )
}

export default App;
