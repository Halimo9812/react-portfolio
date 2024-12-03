import "./Heroimage.css"

import React from 'react'
import heroImage from '../assets/hero.png'
import { Link } from "react-router-dom"

const Heroimage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="heroImage" src={heroImage} alt="" />
      </div>

      <div className="content">
        <p> HI, I'M HALIMO</p>
        <h1> Web Developer</h1>
        <div>
           <Link to="/projects" className="btn"> Projects</Link>
           <Link to="/contact" className="btn-light"> Contact</Link>
        </div>

      </div>
    </div>
  )
}

export default Heroimage
