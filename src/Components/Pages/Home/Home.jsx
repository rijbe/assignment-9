import React from 'react';
import Slider from '../Slider/Slider';
import Section1 from '../Section1/Section1';
import Carousel from '../Carousel/Carousel';
import Banner from '../Banner/Banner';
import SingleRoom from '../SingleRoom/SingleRoom';
import Route from '../../Route/Route';
import MultipleSlide from '../MultipleSlide/MultipleSlide';
import MarqureSlide from '../MarqureSlide/MarqureSlide';
import Experince from '../Experince/Experince';
import Footer from '../Footer/Footer';
import Towns from '../Towns/Towns';
import SuniorLiving from '../SuniorLiving/SuniorLiving';
import Swiper from 'swiper';


const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Banner></Banner>
            <Route></Route>
            <Section1></Section1>
            <MultipleSlide></MultipleSlide>
            <Towns></Towns>
            <SingleRoom></SingleRoom>
            <SuniorLiving></SuniorLiving>
            <MarqureSlide></MarqureSlide>
           
            <Footer></Footer>
        </div>
    );
};

export default Home;