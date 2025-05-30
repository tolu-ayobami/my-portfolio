import React,{useState} from "react";
import review from "./data";


const Project =() =>{

    const [reg, setReg] = useState(review);

    return(
        <div className="classproject">
            <div className="ab">
         <h1>Projects</h1>
        <div></div>
         </div>
<div className="raga">
         {reg.map((tour) => {
             return(
                 <div className="dep">
                     <div className="ico">
                     <span>{tour.code}</span>
                     <div className="split">
                     <span><a href={tour.url1}>{tour.git}</a></span>
                     <span><a href={tour.url2}>{tour.eye}</a></span>
                         </div>
                         </div>
                         <h2>{tour.txt}</h2>
                         <p>{tour.test}</p>

                         <div className="down">
                             <span>{tour.html}</span>
                             <span>{tour.css}</span>
                             <span>{tour.js}</span>
                             
                             </div>
                     </div>
                     
             );
         })}
         </div>

        

        </div>


    );
}

export default Project;