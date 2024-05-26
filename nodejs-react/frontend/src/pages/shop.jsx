import { useEffect, useState } from 'react';
import React from 'react'
import Header from '../components/header'
import Nav from '../components/nav'
import Footer from '../components/footer'

function Timer() {
  const [counter, setCounter] = useState(Math.floor(Math.random() * 3600))

  useEffect(() => {
    if (counter <= 0) {
      setCounter(0);
      return;
    }

    const interval = setInterval(() => {
      setCounter(prevCounter => prevCounter -1);
    }, 1000);
    return () => clearInterval(interval);
  }, [counter]);

  const hours = Math.floor(counter / 3600)
  const minutes = Math.floor((counter % 3600) / 60)
  const seconds = Math.floor(counter % 60)

  return (
    <div>
      Verbleibende Zeit:<br />
      {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
    </div>
  )
}

function Item({ item }) {
  return (
    <div className="container">
    <div className="overlay">
      <div className="items head">
        <p className="name">{item.title}</p>
        <hr />
      </div>
      <div className="items price">
        <p className="old">Old Price: <div className="line-trough">${item.oldPrice}</div></p>
        <p className="new">New Price: <div>${item.newPrice}</div></p>
      </div>
      <div className="items cart">
        <i className="fa fa-shopping-cart"></i>
        <span><strong><Timer /></strong></span>
      </div>
    </div>
    <img src={item.image} alt={item.title} className="bg-image" /> {/* Bild als Hintergrund */}
  </div>
  )
  
}

function Shop() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch('http://localhost:5000/shop')
      .then(response => response.json())
      .then(data => setData(data))
  }, []);

  return (
    <>
    <Header site={'Shop'}/>
    <Nav />
    <div className="content">
      <h2>Shop</h2>
      <div className="items-container">
      {data.map((item, index) => (
        <Item
        key={index}
        item={item}
/*         title={item.title}
        image={item.image}
        oldPrice={item.oldPrice}
        newPrice={item.newPrice} *//>
        ))}
    </div>
    </div>
    <Footer />    
    </>
  );
}

export default Shop;