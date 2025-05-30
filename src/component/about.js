

import React from "react";
import img from "../images/img1.jpeg";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiSupabase } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";




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

         <p className="p1">I am Tolu Ayobami, pretty good with developing, building, and designing web page applications across various platforms</p>

           <p className="p2">In my many years of development, i have acquired skill sets in various Projects</p>

           <h2 className="my">My skillsets</h2>

           <div className="skills">

            <div className="ul1">

                <div className="ul1c">
                <FaHtml5 />
                <p>HTML</p>
            </div>

             <div className="ul1c">
                <FaCss3 />
                <p>CSS</p>
            </div>

             <div className="ul1c">
                <FaJs />
                <p>JAVASCRIPT</p>
            </div>

            <div className="ul1c">
                <FaGithub />
                <p>GITHUB</p>
            </div>

            </div>

            <div className="ul2">
                <div className="ul1c">
                <FaReact/>
                <p>REACTJS</p>
            </div>

             <div className="ul1c">
                <TbBrandNextjs />
                <p>NEXTJS</p>
            </div>

             <div className="ul1c">
                <SiTailwindcss />
                <p>TAILWIND</p>
            </div>

            <div className="ul1c">
                <SiSupabase />
                <p>SUPABASE</p>
            </div>

            </div>
            
               
             
               </div> 

        </div>


    );
}

export default About;