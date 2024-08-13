import React from 'react';
import slide from '../../../assets/5.jpg'
import slide1 from '../../../assets/1.jpg'
import slide2 from '../../../assets/6.jpg'
import slide3 from '../../../assets/7.jpg'

const Carousel = () => {
    return (
    <div className="carousel w-full my-20">
        <div id="slide1" className="carousel-item relative w-full">
            <img
            src= {slide1}
            className="w-full" />
            
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
            <img
            src={slide2}
            className="w-full" />

            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
            <img
            src={slide}
            className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
            <img
            src={slide3}
            className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>
        {/* Boot strap */}
        
    </div>
    );
};

export default Carousel;