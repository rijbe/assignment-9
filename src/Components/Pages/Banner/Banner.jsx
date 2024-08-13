import React from 'react';
import imge from '../../../assets/img-5.png'
const Banner = () => {
    return (
        <div className="text-black  hero opacity-1 "
            style={{
                // backgroundImage: "url(https://i.ibb.co/dk7GYq2/img-1.jpg)",
            }}>
           
            <div className="grid items-center w-2/3 md:grid-cols-2 md:my-20">
                <div className=""  data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine" >
                    <h1 className='my-4 text-5xl font-bold text text-accent'>Welcome to Your Dream Home</h1>
                    <p className="mb-5 text-xl text-white">
                        We have brought you new designs for building houses according to your needs and preferences. Our website has various designs of houses.
                    </p>
                <button className="btn btn-outline">Get Started</button>
                </div>
                <div className='ml-40 text-white'  data-aos="zoom-in-up">
                    <img src={imge}></img>
                    {/* <li className='text-xl'>Spacious 1, 2 & 3 BHK Apartments</li>
                    <li className='text-xl'>Prime Location in Dhaka, Bangladesh</li>
                    <li className='text-xl'>World-Class Amenities</li>
                    <li className='text-xl'>Modern Design & Architecture</li>
                    <li className='text-xl'>Starting from $15000</li>
                    <div>
                        <button  className="btn btn-outline btn-success text-white my-6">Book Your Visit Today!</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;