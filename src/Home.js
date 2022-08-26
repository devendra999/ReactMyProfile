import React from 'react'
import Hero from './components/hero-section/Hero'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import News from './components/news/News'
import Project from './components/project/Project'
import Service from './components/service/Service'


const Home = () => {
  return (
    <>
      
        <Hero />
        <About />
        <Service />
        <Project />
        <News />
        <Contact />
        
    </>
  )
}

export default Home