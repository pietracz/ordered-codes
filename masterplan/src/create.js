import React from 'react';
import './style.css';
import Header from './header'
import Nav from './nav'
import Footer from './footer'

function Create() {
    return (
        <>
        <Header />
        <Nav />
        <div className="create-blog content">
          <form>
            <label htmlFor="title">Blog title:</label>
            <input type="text" id="title" name="title" required />
            <label htmlFor="snippet">Blog snippet:</label> 
            <input type="text" id="snippet" name="snippet" required />
            <label htmlFor="body">Blog body:</label>
            <textarea id="body" name="body" required></textarea> 
  
            <button>Submit</button>
          </form>
        </div>
        <Footer />
        </>
)};

export default Create;