import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile from '../../assets/profile.jpeg'

const About = () => {
  return (
    <div id = 'about' className = 'about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className='about-left'>
                <img src={profile} alt="Profile" className='about-profile' />
            </div>
            <div className='about-right'>
                <div className="about-para">
                    <p>
                        Hello! I'm Ashutosh, a Full Stack Web Developer with a passion for creating dynamic and responsive web applications. I have a strong foundation in both front-end and back-end technologies, allowing me to build complete web solutions.</p>
                    <p>
                        I have experience working with various technologies, including HTML, CSS, JavaScript, React, Node.js, and MongoDB. My projects range from simple static websites to complex web applications that require robust back-end functionality.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p> <hr style = {{width:"60%"}}/> </div>
                    <div className="about-skill"><p>React JS</p> <hr style = {{width:"80%"}}/> </div>
                    <div className="about-skill"><p>JavaScript</p> <hr style = {{width:"65%"}}/> </div>
                    <div className="about-skill"><p>NodeJS</p> <hr style = {{width:"100%"}}/> </div>


                </div>
            </div>


        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECT COMPLETED</p>
            </div>
        </div>
    </div>
  )
}

export default About