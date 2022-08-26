import React from 'react'
import './Hero.scss'

const Hero = () => {
  return (
    <>
        <div className="hero-section" style={{ "backgroundImage" : "url(images/hero-image.jpg)" }}>
            <div className="container">
                <div className="content">
                    <span>FREELANCE DIGITAL DESIGNER</span>
                    <h1>Hello, I’m <b>Devendra</b> Welcome to my World.</h1>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero