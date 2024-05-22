import React from 'react';
import Header from '../components/header'
import Nav from '../components/nav'
import Footer from '../components/footer'

function About() {
    return (
  <>
  <Header site={'About'} />
  <Nav />
    <div className="about content">
        <h2>About Us</h2>
        <p>
        It go Halle Berry or hallelujah.
        <br></br>
        - Money Trees
        </p>
        <p>
        I'm pulling up with an emo chick that's broken.
        <br></br>
        - Hot Girl Summer
        </p>
        <p>
        I want the world in my hands.
        <br></br>
        - Sweater Weather
        </p>
    </div>
  <Footer />
  </>
)};

export default About;