import React from "react";
import img from "../images/imgt.jpeg";

const Home = () =>{

    return(
        <div className="homeall">
 
            <p className="hi">Hi, Meet</p>
            <h1>Tolu Ayobami</h1>
            <p className="front">I am a <span>Frontend Web Developer</span> who creates pixel perfect pages </p>
            <button className="touch">Get in Touch</button>

            <div className="img">
                <img src={img} alt={img} className="po"/>
            </div>

           

           
        </div>



    );
}

export default Home;