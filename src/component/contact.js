

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

         <p>Please feel free to drop me a line, if you dont get an answer immediately, i might just be traveling through the middle of nowhere.. i will get back to you as soon as i can. That's a promise.</p>
         <h2>toluneymar@gmail.com</h2>
         <p>I'm just a call away </p>
         <h2>+2348109630874</h2>

         <div className="soci">
            <span><a href="https://x.com/Ayobamit9?s=08"><FaTwitter/></a></span>
            <span><a href="https://github.com/tolu-ayobami"><FaGithub/></a></span> 
             <span><a href="https://www.linkedin.com/in/tolu-ayobami?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin/></a></span>
         </div>
 
        </div>


    );
}

export default Contact;