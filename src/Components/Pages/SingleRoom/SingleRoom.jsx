import React from 'react';
import img from '../../../assets/ho1.jpg'
import img1 from '../../../assets/ho3.jpg'
import img2 from '../../../assets/ho4.jpg'
import img3 from '../../../assets/ho5.jpg'
import img4 from '../../../assets/ho6.jpg'
import img5 from '../../../assets/hp2.jpg'

const SingleRoom = () => {
    return (
        <div className='my-12 '>
            <div data-aos="fade-right">
                <h1 className='mb-8 text-5xl font-bold text-center'>Student <span className='text-red-500'>Housing</span> Area</h1>
                <p className='w-1/2 text-center mx-auto my-6'>Welcome to our Residential Student Housing Area, where comfort, convenience, and community come together. Designed with students in mind, our housing offers a perfect blend of modern amenities and a supportive living environment.</p>
            </div>
            <div className='container grid grid-cols-1 gap-10 mx-auto md:grid-cols-3 '>
                <div data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"><img src={img}></img></div>
                <div data-aos="fade-down">
                    <img src={img1}></img>
                </div>
                <div data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-anchor-placement="top-center">
                    <img src={img2}></img>
                </div>

                <div data-aos="zoom-in">
                    <img src={img3}></img>
                </div>
                <div data-aos="fade-up">
                    <img src={img4}></img>
                </div>
                <div data-aos="flip-left" >
                    <img src={img5}></img>
                </div>
            
           
            </div>
       
        </div>
    );
};

export default SingleRoom;