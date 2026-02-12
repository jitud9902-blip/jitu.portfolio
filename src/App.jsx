

import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Service from "./Pages/Service";
import Demo from "./Pages/Demo";

import Contact from "./pages/Contact";
import Navbar from "./assets/Components/Navbar";
import Education from "./Pages/Education";
import Wb from "./Pages/Wb";

import "./App.css"
import Csc from "./Csc";
import Iti from "./Iti";
function App() {
  return (
    <>


   
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/education" element={<Education/>} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/demo" element={<Demo />} />
         <Route path="/scs" element={<Csc/>}/>
         <Route path="/iti" element={<Iti/>}/> 
         <Route path="/wb" element={<Wb/>}/> 
      </Routes>
         
         


    </>
  );
}

export default App;
