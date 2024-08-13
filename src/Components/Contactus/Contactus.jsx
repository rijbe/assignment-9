import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineWatchLater } from "react-icons/md";
const Contactus = () => {
    return (
        <div className="hero  min-h-screen text-white" style={{
            backgroundImage: "url(https://i.ibb.co/wyy0jtq/feminine-stylish-office-desk-with-digital-tablet-camera-coffee-mug-schedule-books-cosmetics-decorati.jpg)",
          }}>
        <div className="grid grid-cols-2 gap-10 container mx-auto">
          <div className=" lg:text-left">
            <h1 className="text-5xl font-bold my-8">Contact Us</h1>
            <p className='flex items-center gap-2 text-3xl my-4'><FaPhoneAlt className='text-green-500' /> Call Us</p>
            <p>+88027813555</p>
            <p className='flex items-center gap-2 text-3xl my-4 mt-4'><CiLocationOn className='text-orange-300' /> Location</p>
            <p>121 Rock Sreet, 21 Avenue, New York, NY 92103-9000</p>
            <p className='flex items-center gap-2 text-3xl mt-12'><MdOutlineWatchLater /> Business Hour</p>
            <span>Mon – Fri …… 10 am – 8 pm, Sat, Sun ....… Closed</span>
            
          </div>
          <div className="card w-full ">
            <form className="card-body">
                <div className='grid grid-cols-2 gap-4'>
                <div className="form-control">
                    <label className="label">
                    <span className="label-text text-xl text-white">Name</span>
                    </label>
                    <input type="text" placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                    <span className="label-text text-xl text-white">Address</span>
                    </label>
                    <input type="text" placeholder="address" className="input input-bordered" required />
                </div>
                </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl text-white">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl text-white">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl text-white">Message</span>
                </label>
                <textarea
                        placeholder="Write your message"
                        className="textarea textarea-bordered textarea-lg w-full max-w-xl"></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-outline btn-success">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Contactus;