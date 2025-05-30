import React from "react";
import img from "../images/imgt.jpeg";
import {Link} from 'react-router-dom';

const Home = () =>{

    return(
        <div className="homeall">
 
            <p className="hi">Hi, Meet</p>
            <h1>Tolu Ayobami</h1>
            <p className="front">I am a <span>Frontend Web Developer</span> who creates pixel perfect pages </p>
           
            <div className="cv">

              <Link to="/contact" className="touch">Get in Touch</Link>

                <a href="/assets/Tolu Ayobami CV.pdf" download>
               <button className="touch">
                  Download CV
                </button>
                </a>


            </div>
           

            <div className="img">
                <img src={img} alt={img} className="po"/>
            </div>

           

           
        </div>



    );
}

export default Home;