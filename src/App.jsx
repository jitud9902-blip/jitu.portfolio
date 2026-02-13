

import { Routes, Route } from "react-router-dom";
import Home from "./assets/Pages/Home";
import Education from './assets/Pages/Education';
import Csc from "./assets/Pages/Csc";
import Iti from "./assets/Pages/Iti";
import Wb from "./assets/Pages/Wb";
import Navbar from "./assets/Components/Navbar"


import "./App.css"
function App() {
  return (
    <>


   
    <Navbar/>
 
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/education" element={<Education/>} />
     
      
        
         <Route path="/scs" element={<Csc/>}/>
         <Route path="/iti" element={<Iti/>}/> 
         <Route path="/wb" element={<Wb/>}/> 
      </Routes>
        


    </>
  );
}

export default App;
