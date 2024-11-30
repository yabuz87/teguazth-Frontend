import React from 'react';
import Footer from '../footer/Footer';
import Home from '../Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Carousel from "../Partner/Carousel";
import PayOption from '../Home/PayOption';

const HomePage = () => {
  return (
    <div className="">
                <Home/>
                {/* <PayOption/> */}
                <Carousel/>
                <Footer/>
    </div>
  )
}

export default HomePage
