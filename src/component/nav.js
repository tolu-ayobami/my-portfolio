
import React, {useState} from "react";
import{ Link} from "react-router-dom";
import { FaTimes} from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Nav = () =>{

    const[ok, setOk] = useState(false);

    const hot = () =>{
        setOk(!ok);

    }

    return(
        <div className="navall">
            <h1 className="toti">Tolu</h1>

    <div className="bars9" onClick={hot}>
        <div className="bars1"></div>
        <div className="bars2"></div>
        <div className="bars3"></div>
    </div>
           



           

           
    <div className={ok? "numb and" : "numb"}>
        <span className="time"  onClick={hot}><FaTimes/></span>
  <Link  style={{textDecoration:"none", color:"white"}}  onClick={hot} to="/"><h1>Home</h1></Link>
  <Link  style={{textDecoration:"none", color:"white"}}  onClick={hot} to="/about"><h1>About</h1></Link> 
  <Link style={{textDecoration:"none", color:"white"}}  onClick={hot} to="/projects"><h1>Projects</h1></Link>
  <Link style={{textDecoration:"none", color:"white"}}  onClick={hot} to="/contact"><h1>Contact</h1></Link>


  
  
  <div className="so">
           <span><a href="https://x.com/Ayobamit9?s=08"><FaTwitter/></a></span>
                      <span><a href="https://github.com/tolu-ayobami"><FaGithub/></a></span> 
                       <span><a href="https://www.linkedin.com/in/tolu-ayobami?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin/></a></span>
             
         </div>

  </div>





        </div>



    );
}

export default Nav;