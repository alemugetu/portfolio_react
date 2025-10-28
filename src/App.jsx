import React from 'react'
import Navbar from './assets/Component/Navebar/Navbar'
import Hero from './assets/Component/Hero/hero'
import About from './assets/Component/About/About'
import Services from './assets/Component/Services/Services'
import MyWork from './assets/Component/MyWork/MyWork'
import Contact from './assets/Component/Contact/Contact'
import Footer from './assets/Component/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
