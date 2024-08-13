import React from 'react';
import live from '../../../assets/li1.jpg'
import live1 from '../../../assets/li2.jpg'
import live2 from '../../../assets/li3.jpg'
const SuniorLiving = () => {
    return (
        <div className='container mx-auto'>
            <div className='my-20 text-center'>
                <h1 className='my-8 text-6xl text-green-400'>Everything we do is driven by services.</h1>
                <p>We know how hard it can be to choose the right senior living community. Start here <br></br> to learn more about our options, and then take our questionnaire to find out which one is right for you or your loved one.</p>
            </div>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-3 '>
                <div className="shadow-xl card card-compact bg-base-100">
                    <figure>
                       <div data-aos="zoom-in-up">
                          <img src={live1} />
                       </div>
                    </figure>
                    <div className="card-body"  data-aos="zoom-in-down">
                        <h2 className="card-title">Respite Care</h2>
                        <p>Respite Care is aform of short-term care that nursing homes and senor living communities provide to residents who require additional help with day-to-day...</p>
                        <div className="card-actions ">
                        <button className="btn btn-outline btn-success">LEARN MORE</button>
                        </div>
                    </div>
                </div>
                <div className="shadow-xl card card-compact bg-base-100">
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <img
                        src={live} />
                    </div>
                    <div className="card-body"  data-aos="fade-up"
                    data-aos-duration="3000">
                        <h2 className="card-title">Memory Care</h2>
                        <p>Memory care services features a safe and secure environment where residents are closely montited and cared for by professionally </p>
                        <div className="card-actions ">
                        <button className="btn btn-outline btn-success">LEARN MORE</button>
                        </div>
                    </div>
                </div>
                <div className="shadow-xl card card-compact bg-base-100">
                    <div data-aos="fade-left+"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                    <img
                        src={live2} />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Assisted Living</h2>
                        <p>Requiring assisted living services common for older adults. Assisted living at Onilife, however, is remakably uncommon</p>
                        <div className="card-actions ">
                        <button className="btn btn-outline btn-success">LEARN MORE</button>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='my-20 text-center'>
                <button className='btn btn-outline btn-info'>ALL LIVING OPTIONS</button>
            </div>
            
        </div>
    );
};

export default SuniorLiving;