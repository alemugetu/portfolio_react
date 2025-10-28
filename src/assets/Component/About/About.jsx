import React from 'react'
import './About.css'
 import Alex from "../../../assets/Alex.png";


const About = () => {
  return (
    
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            {/* <img src={Alex} alt="" /> */}
            </div>
            <div className="about-section">
                <div className="about-left">
               <img src={Alex} alt="" />
                </div>
              <div className="about-right">
                <div className="about-para">
                    <p>
                   I'm a 3rd-year Computer Science student at the University of Gondar.
                    I'm passionate about web development, graphic design, and photo editing. 
                    </p>
                   <p> If you're interested in going full-stack, 
                   you're welcome to join me—we can learn and grow together!</p>
                    
                </div>
                <div className="about-skills">
             <div className="about-skill"> <p>HTML & CSS</p><hr style={{width:"70%"}}/> </div>
             <div className="about-skill"> <p>JavaScript</p><hr style={{width:"60%"}}/> </div>
             <div className="about-skill"> <p>React JS</p><hr style={{width:"60%"}}/> </div>
             <div className="about-skill"> <p>C++</p><hr style={{width:"50%"}}/> </div>
                </div>
                </div>  
                </div>
      <div className="about-achivements">
 <div className="about-achivement">
    <h1>8+</h1>
    <p>Project Completed</p>
 </div>
 <hr/>
    <div className="about-achivement">
    <h1>2+</h1>
    <p>Year Experiance Team Work for class project</p>
 </div>
      </div>
    </div>
  )
}

export default About
