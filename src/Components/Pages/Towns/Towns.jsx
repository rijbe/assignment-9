import React from 'react';
import town from "../../../assets/h5-pic2.jpg"
import town1 from "../../../assets/h5-pic3.jpg"
import town2 from "../../../assets/h5-pic4.jpg"
const Towns = () => {
    return (
        <div className=''>
            <div className='container mx-auto '>
                <h1 className='my-20 text-6xl text-center text-white'>Our Apartments</h1>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-3'>
                <div className="shadow-xl card bg-base-100 ">
                    <div data-aos="zoom-in-down">
                        <img
                        src={town} />
                    </div>
                    <div className="card-body" data-aos="zoom-in-up">
                        <h2 className="card-title">Comfort Rooms</h2>                    
                            <li>Balcony</li>
                            <li>Air conditioning</li>
                            <li> Safe deposit box</li>
                            <li> LCD flatscreen TV</li>
                            <li>Direct dial telephone</li>
                            <li>Free wifi</li>
                    </div>
                </div>
                <div className="shadow-xl card bg-base-100">
                    <div data-aos="zoom-out-up">
                        <img
                        src={town1} />
                    </div>
                    <div className="card-body"  data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="300"
                        data-aos-duration="500" >
                        <h2 className="card-title"> Family Rooms</h2>             
                            <li>Balcony</li>
                            <li>Air conditioning</li>
                            <li> Safe deposit box</li>
                            <li> Mini bar</li>
                            <li>Direct dial telephone</li>
                            <li>Safe deposit box</li>
                    </div>
                </div>
                <div data-aos="fade-up-right" className="shadow-xl card bg-base-100">
                    <figure>
                        <img
                        src={town2} />
                    </figure>
                    <div className="card-body" data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <h2 className="card-title">Supperior Rooms</h2>                    
                            <li>Balcony</li>
                            <li>Air conditioning</li>
                            <li> Safe deposit box</li>
                            <li> LCD flatscreen TV</li>
                            <li>Direct dial telephone</li>
                            <li>Free wifi</li>
                    </div>
                </div>
            </div>
            <div className='my-20 text-center' data-aos="fade-down">
                <button className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-secondary'>View More</button>
            </div>
        </div>
        </div>
    );
};

export default Towns;