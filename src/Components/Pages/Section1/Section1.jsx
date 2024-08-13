import React from 'react';
import banner from '../../../assets/img-2.jpg'
import banner3 from '../../../assets/img-1.jpg'
import banner1 from '../../../assets/img-3.jpg'
import banner2 from '../../../assets/img-4.jpg'
import banner5 from '../../../assets/man.avif'
import banner6 from '../../../assets/img-6.jpg'
import banner7 from '../../../assets/s1.jpg'
import banner8 from '../../../assets/s2.jpg'

import './section.css'
const Section1 = () => {
    return (
        <div className='my-20 font-poppins'>
            <div className='text-center'>
                <div data-aos="fade-down-left">
                    <h1 className='mb-4 text-6xl text-white'>Explore our showcased projects</h1>
                </div>
                <div  data-aos="fade-down-right">
                    <p className='my-4 w-1/2 mx-auto'>Step into a world of exceptional living spaces with our curated collection of residential projects. Each development embodies a perfect blend of modern design, functionality, and luxury, crafted to meet the diverse needs of today’s homeowners.</p>
                </div>
        </div>
        <div 
            className='container grid w-full grid-cols-1 gap-10 mx-auto mt-10 lg:grid-cols-3'>
            <div className=''>
                <img className='mb-4 rounded-xl ' src={banner}></img>
               <div data-aos="fade-up-right">
                <img className='mb-4 rounded-xl ' src={banner1}></img>
               </div>
                <div data-aos="fade-up-left">
                    <img className='mb-4 rounded-xl ' src={banner7}></img>
                </div>
                
                  
            </div>
            <div >
                <div data-aos="fade-up">
                <img id='section' className='mb-4 rounded-xl' src={banner5}></img>
                </div>
               
                <div data-aos="zoom-in-right">
                    <img id='section' className='mb-4 rounded-xl' src={banner6}></img>
                </div>
            </div>
            <div >
                <div data-aos="zoom-out-down"><img className='mb-4 rounded-xl' src={banner8}></img></div>
                <div data-aos="zoom-in"> <img className='mb-4 rounded-xl' src={banner3}></img></div>
                <div  data-aos="zoom-in-left"><img className='mb-4 rounded-xl' src={banner2}></img></div>
                
            </div>
        </div>
        </div>
    );
};

export default Section1;