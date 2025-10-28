import React from 'react'
import { motion } from "framer-motion";

import './MyWork.css'

import Calculater from '../../../assets/Calculater.jpg'
import Counter from '../../../assets/Counter.jpg'
import Queen from '../../../assets/Queen.png'


const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Work</h1>
      </div>
       <div className="mywork-container">
        {/* ===== Project 1: Counter ===== */}
         <motion.div
          className="work-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }} >

    <img src={Counter} alt="Counter Project" className="work-image" />
    <div className="work-info">
    <h3>Counter App</h3>
    <p>A simple Javascript counter app that tracks user clicks dynamically.</p>
    <a
      href="https://codepen.io/Aleman-Aleman/pen/wBMPyLP"
      target="_blank"
      rel="noopener noreferrer"
      className="work-btn"
    >
      View Project
    </a>
  </div>
</motion.div>

        {/* ===== Project 2: Calculator ===== */}
           <motion.div
          className="work-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <img
            src={Calculater}  alt="Calculator Project"
            className="work-image"  />
            <div className="work-info">
          <h3>Calculator </h3>
          <p>A responsive calculator built using HTML, CSS, and JavaScript.</p>
          <a
            href="https://codepen.io/Aleman-Aleman/pen/raxGbWm" 
            target="_blank"
            rel="noopener noreferrer"
            className="work-btn"
          >
            View Project
          </a>
        </div>
        </motion.div>

        {/* ===== Project 3: Queen Fashion ===== */}
         <motion.div
          className="work-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src={Queen}
            alt="Queen Fashion Project"
            className="work-image" />
            <div className="work-info">
          <h3>Queen Fashion</h3>
          <p>
            A stylish e-commerce fashion site design concept built for a modern
            look.
          </p>
        </div>
        </motion.div>
      </div>
    </div>
  )
}

export default MyWork
