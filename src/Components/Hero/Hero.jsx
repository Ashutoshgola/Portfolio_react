import React from 'react';
import './hero.css';
import profile from "../../assets/profile.jpeg";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
    return (
        <div id='home' className='hero'>

            <img src={profile} alt="Hero" class="profile-circle" />
            <h1><span>I am Ashutosh, </span> Full Stack Web Developer  </h1>
            <p>Welcome to my portfolio! I am a passionate Full Stack Web Developer with expertise in creating dynamic and responsive web applications. Explore my work and let's connect!</p>
            <div class='hero-buttons'>
                <button class='hero-connect'>
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></button>
                <a href="../../../public/AshutoshGola_Resume.pdf (1).pdf" target="_blank" rel="noopener noreferrer">
                    <button className='hero-resume'>My Resume</button>
                </a>
            </div>
        </div>
    )
}
export default Hero;