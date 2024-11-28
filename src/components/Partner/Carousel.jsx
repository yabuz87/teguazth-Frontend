import React from 'react';
import {busObject} from '../../assets/busList';
import './Carousel.css';

const Carousel = () => {
    return (
        <div className="carousel-container">
        <h1 className="text-center my-3">Partners With us</h1>
            <div className="carousel-wrapper">
                {busObject.map((content, index) => (
                    <div key={index} className="card">
                        <div className="bus-img">{content.img}</div>
                        <p className="text-center">{content.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
