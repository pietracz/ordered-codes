import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';
import Home from './home';
import About from './about';
import Error from './404';
import Create from './create';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs/create" element={<Create />} />
            <Route path="*" element={<Error />} />
        </Routes>
    </Router>
  );