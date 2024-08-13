import React from 'react';

const Profile = () => {
    return (
        <div className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/stVGxSY/1000-F-224505392-IHNQDTZavc-Fj-C0-Pl-Ui-YWi-X8-C6l-ZS85-XG.jpg)",
        }}>
        <div className="hero-overlay bg-opacity-70"></div>
        <div>
            <div className="card bg-base-100 text-white shadow-xl">
            <figure className=' -mt-20 '>
              <img className='w-[20%] rounded-full'
                src="https://i.ibb.co/SyMYPrz/Whats-App-Image-2024-04-11-at-18-10-49-c68e7265.jpg"
                alt="Shoes" />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-center text-5xl font-sans font-bold">Md. Rakib Mollah</h2>
              <p className='text-xl'>Tangail, Dhaka, Bangladesh</p>
              <p className='text-3xl mt-8 font-bold'>Bsc in CSE</p>
              <p className='text-xl'>City University (Ashulia, Dhaka)</p>
        
              <div className='grid grid-cols-3 my-10'>
                <div>
                  <h1>65</h1>
                  <p>Friends</p>
                </div>
                <div>
                  <h1>52</h1>
                  <p>Photo</p>
                </div>
                <div>
                  <h1>24</h1>
                  <p>Comment</p>
                </div>
              </div>
              <div className="card-actions justify-center">
                <button className="btn btn-outline btn-accent">Show More</button>
              </div>
            </div>
            </div>
        </div>
        
        </div>
    );
};

export default Profile;