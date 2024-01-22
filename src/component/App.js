import React from "react";
import "./App.css";
import{ Routes, Route } from "react-router-dom";
import{ Link} from "react-router-dom";

import Home from "./home";
import Project from "./projects";
import About from "./about";
import Contact from "./contact";

import Nav from "./nav";


function App() {

 
 
return(
<div className='section'>
<Nav />
<Routes>
        
     <Route path='/' element={ <Home/>}/>

      <Route path='/about' element={<About />}/>
       
      
      <Route path='/projects' element={<Project />}/>
  
     
      <Route path='/contact' element={ <Contact /> }/>
     
  
  
  </Routes>


           
  <div className="numbers">
  <Link  style={{textDecoration:"none", color:"white"}} to="/"><h1>01</h1></Link>
  <Link  style={{textDecoration:"none", color:"white"}} to="/about"><h1>02</h1></Link>
  <Link style={{textDecoration:"none", color:"white"}} to="/projects"><h1>03</h1></Link>
  <Link style={{textDecoration:"none", color:"white"}} to="/contact"><h1>04</h1></Link>
  </div>

  
  </div>

);

}
export default App; 