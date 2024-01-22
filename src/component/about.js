

import React from "react";
import img from "../images/img1.jpg";



const About =() =>{



    return(


        <div className="classabout">
             <div className="img2">
                <img src={img} alt={img} className="p"/>
            </div>
        <div className="ab">
         <h1>About me</h1>
        <div></div>
         </div>

         <p className="p1">i am Tolu Ayobami, pretty good with developing, building, and designing web pages applications across various platforms</p>

           <p className="p2">In my many years of development, i have acquired skill sets in various Project</p>

           <h2 className="my">My skillsets</h2>
           <div className="skills">
               <ul className="ul1">
               <li><span>HTML</span></li>
               <li><span>ReactJS</span></li>
               <li><span>BootStrap</span></li>
               </ul>
               <ul className="ul2">
               <li><span>CSS</span></li>
               <li><span>GitHub</span></li>
               <li><span>JavaScript</span></li>  
               </ul> 
               </div> 

        </div>


    );
}

export default About;