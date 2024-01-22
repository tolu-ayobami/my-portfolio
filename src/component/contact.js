

import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const Contact =() =>{



    return(


        <div className="classcontact">
           <div className="ab">
         <h1>Contact me</h1>
        <div></div>
         </div>

         <p>Please feel free to drop me a line if you dont get an answer immediately, i might just be traveling through the middle of nowhere i will get back to you as soon i can. That's a promise.</p>
         <h2>Toluneymar@gmail.com</h2>
         <p>I'm just a call away </p>
         <h2>+2348109630874</h2>

         <div className="soci">
            <span><a href="https://twitter.com/ToluAyobami?s=09"><FaTwitter/></a></span>
            <span><a href="https://tolu-ayobami.github.io"><FaGithub/></a></span> 
             <span><a href="https://www.linkedin.com/intolu-ayobami-126441221"><FaLinkedin/></a></span>
             <span><a href=""><FaInstagram/></a></span>
         </div>
 
        </div>


    );
}

export default Contact;