import React from 'react';
import './style.css';
import Header from './header'
import Nav from './nav'
import Footer from './footer'
import calculations from './calculations'; /* importiert mehrere Funktionen aus einer Datei, die exportiert wurden */



function Home() {
    return (
  <>
  <Header />
  <Nav />
    <div className="blogs content">
        <h2>Random Calculator: {calculations.randomCalculator()}</h2> {/* Aufruf einer bestimmten Funktion, nachdem sie importiert wurde */}
        <h2>Square Root Calculator: {calculations.squareRoot()}</h2>
        <p>Datum: {calculations.date()}</p>
    </div>
  <Footer />
  </>
)};

export default Home;