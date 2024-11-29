import React from 'react';
import Footer from '../footer/Footer';
import Home from '../Home/Home';
import Carousel from "../Partner/Carousel";

const HomePage = () => {
  return (
    <div className="homepage-container">
                <Home/>
                <Carousel/>
                <Footer/>
    </div>
  )
}

export default HomePage
