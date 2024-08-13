import React from 'react';
import banner from '../../../assets/img-1.jpg'
const Slider = () => {
    return (
      <div>
        <div className="card grid grid-cols-2 gap-32 items-center container mx-auto">
       <div className='mt-4'>
       <figure>
          <img className='rounded-xl' src={banner}
            alt="Album" />
        </figure>
       </div>
        <div className="">
          
            <div className="">
              <h2 className="text-7xl font-bold text-white my-3">New album is released!</h2>
              <p className='text-white my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
          <div className='gap-y-6'>
            <p className='text-xl text-white  font-bold'>Repairing</p>
            <progress className="progress progress-error w-100" value="40" max="100"></progress>
            <p className='text-xl font-bold text-white'>Build Up</p>
            <progress className="progress progress-error w-100" value="80" max="100"></progress>
            <p className='text-xl text-white font-bold'>Cleaning</p>
            <progress className="progress progress-error w-100" value="100" max="100"></progress>
          </div>
        </div>
      </div>
      <div>
      <div className="ml-[35%] w-60 flex justify-center items-center p-5 rounded-xl -mt-16  bg-red-600 h-48">
        <p className='text-4xl font-bold text-white'>30 +
        Years  experience</p>
      </div>
      </div>
      </div>
    );
};

export default Slider