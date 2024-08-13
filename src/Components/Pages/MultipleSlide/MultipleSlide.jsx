import React, { useEffect, useState } from 'react';
import Multi from './Multi';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const MultipleSlide = () => {

    const [multiple, setMultiple] = useState([]);
    useEffect(()=> {
        fetch('singlehome.json')
        .then(res => res.json())
        .then(data => setMultiple(data))
    }, [])

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div className='container mx-auto'>
          <div className='grid items-center grid-cols-3 my-20 lg:gap-32'>
           <div className='col-span-2' data-aos="fade-right">
           <h1 className='text-6xl text-white font-poppins'>Let us help you find the perfect place to call home</h1>
           </div>
           <div className='' data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">
             <button className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-success'>Lead More +</button>
           </div>
          </div>
          <div className='gap-20 my-12'>
           
           <Carousel responsive={responsive}>
           {
               multiple.map(multi =><Multi key={multi.id} multi={multi}></Multi>)
           }
               
           </Carousel>
        </div>
        </div>
    );
};

export default MultipleSlide;