import React from 'react';
import './style.css';
import Header from './header'
import Nav from './nav'
import Footer from './footer'

function About() {
    return (
  <>
  <Header />
  <Nav />
    <div className="about content">
        <h2>About Us</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quaerat.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quaerat.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quaerat.
        </p>
    </div>
  <Footer />
  </>
)};

export default About;