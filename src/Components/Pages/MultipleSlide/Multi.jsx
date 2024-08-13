import React from 'react';
import { FaBed, FaBath } from "react-icons/fa";
import { FaChartArea } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";const Multi = ({multi}) => {
   
    const {id, title, name, description, price, bath, bed, area, location, image} = multi;
    return (
        <div>
        
         <div className="shadow-xl card bg-base-100 w-96">
                    <figure>
                        <img className='transition-all transform hover:scale-125'
                        src={image}
                        alt="Shoes" />
                    </figure>
                    <div className="text-white card-body" data-aos="zoom-in-right">
                        <div className='flex items-center gap-32'>
                            <button className='w-32 text-xl btn btn-outline btn-accent'>{name}</button>
                            <p className='text-xl'>${price}</p>
                        </div>
                        <div className='flex gap-16 my-4'>
                            <p className='flex items-center gap-2'><FaBed className='text-xl text-green-400'></FaBed> {bed}</p>
                            <p className='flex items-center gap-2'><FaBath className='text-xl text-gray-400' ></FaBath> {bath}</p>
                            <p className='flex items-center gap-2'><FaChartArea className='text-xl text-red-400' />{area}</p>
                        </div>
                        <h2 className="card-title">{title}</h2>
                        <p>{description}</p>
                         
                        <p className='flex items-center gap-2'><CiLocationOn className='text-xl text-indigo-700' />{location}</p>
                        
                    </div>
                    </div>
            <div>
            
        </div>
        </div>
    );
};

export default Multi;