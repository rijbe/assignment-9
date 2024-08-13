import React from 'react';

const Routs = ({routs}) => {
    const {id, estate_title, segment_name, description, price, status, area, location, image, view_property_button} = routs;
    return (
        <div className="shadow-xl card bg-base-100 ">
            <figure>
                <img className='transition-all transform hover:scale-150'
                src={image}
                alt="" />
            </figure>
            <div className="card-body">
                <div className='' data-aos="fade-up-left">
                    <h2 className="text-3xl card-title">{estate_title}</h2>
                    <p className='text-green-400'>#{segment_name}</p>
                </div>
                <p>{description}</p>
                <p>Price: {price}</p>
                <div className='flex gap-16'>
                    <p>#{status}</p>
                    <p className='text-red-400'>Area: {area}</p>

                </div>
                <p>Location: {location}</p>
                <div className="justify-center w-full card-actions" data-aos="fade-up-right">
                <button className="btn btn-outline btn-secondary">{view_property_button}</button>
                </div>
            </div>
        </div>
    );
};

export default Routs;