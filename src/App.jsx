import React from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/Hero/Hero.jsx';
import About from './Components/About/About.jsx';
import Services from './Components/Services/services.jsx';
import MyWork from './Components/My Work/MyWork.jsx';

import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';


function App() {
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
  );
}

export default App;
