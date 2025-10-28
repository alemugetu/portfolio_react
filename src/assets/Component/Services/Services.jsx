import React from 'react'
import './Services.css'
import arrow from '../../../assets/arrow.png'
const Services = () => {
  return (
    <div id='services' className="services">
        <div className="services-title">
            <h1>My Services</h1>
    

        </div>
       <div className="services-contianer">
        <p> Front-end develoment and graphics design, <br/>
        I create responsive secure and user-friendly websites
          <h3>
            <a href="#about">
              Read More <img src={arrow} alt="Arrow" />
            </a>
          </h3>
         
        </p>
      
       </div>
    </div>
  )
}

export default Services
