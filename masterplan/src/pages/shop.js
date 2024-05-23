import React from 'react';
import Header from '../components/header'
import Nav from '../components/nav'
import Footer from '../components/footer'

const itemInformation = [
    {
        title: 'Test',
        image: "https://i.pinimg.com/564x/6f/5a/b1/6f5ab1b470beeeeaf285bb451c63ac8f.jpg",
        oldPrice: '100',
        newPrice: '50'
    },
    {
        title: 'Test',
        image: "https://i.pinimg.com/564x/6f/5a/b1/6f5ab1b470beeeeaf285bb451c63ac8f.jpg",
        oldPrice: '150',
        newPrice: '100'
    },
    {
        title: 'Test',
        image: "https://i.pinimg.com/564x/6f/5a/b1/6f5ab1b470beeeeaf285bb451c63ac8f.jpg",
        oldPrice: '200',
        newPrice: '100'
    },
    {
        title: 'Test',
        image: "https://i.pinimg.com/564x/6f/5a/b1/6f5ab1b470beeeeaf285bb451c63ac8f.jpg",
        oldPrice: '300',
        newPrice: '200'
    },
    {
        title: 'Test',
        image: "https://i.pinimg.com/564x/6f/5a/b1/6f5ab1b470beeeeaf285bb451c63ac8f.jpg",
        oldPrice: '400',
        newPrice: '300'
    },
    {
        title: 'Test',
        image: "https://i.pinimg.com/564x/6f/5a/b1/6f5ab1b470beeeeaf285bb451c63ac8f.jpg",
        oldPrice: '500',
        newPrice: '400'
    }
]

function Items({ title, image, oldPrice, newPrice }) {
    return (
      <div className="container">
        <div className="overlay"> 
          <div className="items head">
            <p className="name">{title}</p>
            <hr />
          </div>
          <div className="items price">
            <p className="old">Old Price: <div className="line-trough">${oldPrice}</div></p>
            <p className="new">New Price: <div>${newPrice}</div></p>
          </div>
          <div className="items cart">
            <i className="fa fa-shopping-cart"></i>
            <span><strong>ADD TO CART</strong></span>
          </div>
        </div>
        <img src={image} alt={title} className="bg-image" /> {/* Bild als Hintergrund */}
      </div>
    );
  }

function Shop() {
    return (
  <>
  <Header site={'Shop'}/>
  <Nav />
    <div classNameName="content">
        <h2>Shop</h2>
        <div className="items-container">
        {itemInformation.map((item) => (
        <Items 
        title={item.title}
        image={item.image}
        oldPrice={item.oldPrice}
        newPrice={item.newPrice}/>
        ))}
        </div>
        </div>
  <Footer />
  </>
)};

export default Shop;