import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../logo.png";
import forward from "../../../assets/forward.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menuIcon from "../../../assets/menuIcon.jpg";
import x from "../../../assets/x.svg";


const Navbar = () => {

const [menu, setMenu] = useState("home");
const menuRef = useRef();
const openMenu=() =>{
  menuRef.current.style.right='0'
}

const closeMenu=() =>{
  menuRef.current.style.right='-350px'
}


  return (
    <div className="navbar">
    <img src={logo} alt="logo" className="logo" />
<img src={menuIcon} onClick={openMenu} alt="open-icon" className="nav-mob-open" />

      <ul ref={menuRef} className="nav-menu">
        <img src={x} onClick={closeMenu} alt="closed-icon"  className="nav-mob-close" />
        <li><AnchorLink className='anchor-link'  href='#home' ><p onClick={()=>setMenu("home")} > Home</p></AnchorLink>{menu==="home" ? <img src={forward} alt = 'forward'/> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about' ><p onClick={()=>setMenu("about")} >About Me</p></AnchorLink>{menu==="about" ? <img src={forward} alt = 'forward'/> : <></>} </li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services' ><p onClick={()=>setMenu("services")} > Services</p></AnchorLink>{menu==="services" ? <img src={forward} alt = 'forward'/> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")} >Portfolio</p></AnchorLink>{menu==="work" ? <img src={forward} alt = 'forward'/> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact" ? <img src={forward} alt = 'forward'/> : <></>}</li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
      </div>
    </div>
  )
}

export default Navbar
