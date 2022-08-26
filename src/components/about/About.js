import React from 'react'
import Title from '../title/Title'
import './About.scss'
import Tab from './Tab'

const About = () => {
  return (
    <>
        <div className="about-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="thumbnail">
                            <img className="w-100" src="images/about-7.jpg" alt="About Images" />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="about-content">
                            <Title title="About Me" description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered <a href>alteration</a> in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum," />
                            <Tab />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About