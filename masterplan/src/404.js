import React from 'react';
import './style.css';
import Header from './header'
import Nav from './nav'
import Footer from './footer'

function Error() {
    return (
  <>
  <Header />
  <Nav />
    <div className="not-found content">
        <h2>Oops, page not found!</h2>
    </div>
  <Footer />
  </>
)};

export default Error;