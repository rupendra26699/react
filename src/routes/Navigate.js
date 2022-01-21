import React from 'react';
import { BrowserRouter ,Route , Routes } from 'react-router-dom'
import components from '../components/Allcomponents'

function Navigate() {
  return (
   <BrowserRouter>
   <components.Header/>
       <Routes>
           <Route name = 'about' path ='/about' element ={<components.About />}></Route>
           <Route name = 'services' path ='/services' element ={<components.Service />}></Route>
           <Route name = 'contact' path ='/contact' element ={<components.Contact />}></Route>
           <Route name = 'home' path ='/' element ={<components.Home />}></Route>
       </Routes>
       <components.Footer/>
   </BrowserRouter>
  );
}

export default Navigate;
