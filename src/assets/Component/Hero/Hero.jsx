import React from 'react'
import './Hero.css'
import profile from '../../../assets/profile.png';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile} alt="profile-img" />
      <h1><span>I'm Alemu Getu,</span> front-end developer based in Ethiopia.</h1>
      <p>I'm a passionate front-end developer from Gondar, Ethiopia and 
        3rd year computer science student at university of Gondar. 
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume"> <AnchorLink className='anchor-link' offset={50} href='#work'>
          My resume</AnchorLink></div>
      </div>
    </div>
  )
}

export default Hero
