import React from 'react';
import about from '../img/elias.jpeg';
import Typewriter from 'typewriter-effect'

function PersonalInfo() {
    return (
        <div className="PersonalContainer">
           
            <div className="ImgContent">
            <img src={about} alt="about"/>
            </div>
            <div className="InfoContent">

             <span style={{display: "flex"}}>

              <Typewriter 
               options ={{
                   autoStart: true,
                   loop: true,
                   delay: 50,
                   strings: [
                       "I'm Elias Tesfaye"
                   ]
               }}
              />
             
             </span>
             <br />
             <p>my name is elias tesfaye I'm a graphics designer i have more than 4 years' experience as a Graphic Designer and motion graphics , I am adept in concept design,  
project management, and final design implementations. Moreover, while my on-the-job  
experience has afforded me a well-rounded skill.<br /><br />
 Designing layouts, producing images, and developing styles for websites, social media  
profiles, and corporate communications. <br />
 Contributing creative ideas during corporate brainstorming sessions.</p><br/><br/>
            
              <a href="../img/CV.pdf" target="" download className="btn">Download CV</a>
             </div>

        </div>
    )
}

export default PersonalInfo;
