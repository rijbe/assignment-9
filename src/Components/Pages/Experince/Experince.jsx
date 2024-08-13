import React from 'react';
import Marquee from "react-fast-marquee";
import experince from '../../../assets/nnn.jpg'
import experince1 from '../../../assets/lu.jpg'
import experince2 from '../../../assets/mar.jpg'
import experince3 from '../../../assets/mic.jpg'
import experince4 from '../../../assets/testimonial-5.jpg'
import experince5 from '../../../assets/testimonial-6.jpg'
import experince6 from '../../../assets/testimonial-7.jpg'
const Experince = () => {
    return (
        <div className=''>
            <div className='grid grid-cols-1 lg:grid-cols-4'>
            <div className='col-span-3 flex text-white'>
               <Marquee>
               <div className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                        <p>"Skyroof transformed in my home, there team was efficient and professional."</p>
                    </div>
                    <figure className='flex '>
                        <img className="w-[40%] rounded-full" src= {experince}
                        alt="" />
                        <p className='ml-6 text-2xl'>Michael Carter</p> 
                        
                    </figure>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                        <p>"Skyroof provide excellent services from start to finish. I highly recommend them!."</p>
                    </div>
                    <figure>
                        <img className="w-[40%] rounded-full" src= {experince1}
                        alt="" />
                        <p className='ml-6 text-2xl'>Lucass Bennet</p>
                        
                    </figure>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                        <p>"Chossing Skyroof's was the best decision I made for my roofing needs."</p>
                    </div>
                    <figure>
                        <img className="w-[40%] rounded-full" src= {experince2} />
                        <p className='ml-6 text-2xl'>Mark Jhonson</p>
                       
                    </figure>
                   
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                        <p>"I am happy by Skyroof's attention. They made sure of my roof was perfect."</p>
                    </div>
                    <figure>
                        <div className='flex items-center'>
                            <img className="w-[40%] rounded-full" src= {experince3} /> 
                            <p className='ml-6 text-2xl'>Nathan Parker</p>
                        </div>
                        
                    </figure>
                   
                </div>
               </Marquee>
            </div>
            <div className=' p-4 text-white'>
                <h1 className='text-3xl my-2'>Elevate your experience</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <div>

                </div>
                <button className='btn btn-warning my-4'>Read More Reviews</button>
            </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-4 my-20'>
            <div className=' p-4 text-white'>
                <h1 className='text-3xl my-2'>Real experiences, real satisfaction</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <div>

                </div>
                <button className='btn btn-primary my-4'>Start Project</button>
            </div>
            <div className='md:col-span-3 grid grid-cols-1 md:grid-cols-3 text-white'>
            
               <div className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                        <p>"I can't thank Skyroof for there workmanship. My roof looks fantastic."</p>
                    </div>
                    <figure className='mb-4'>
                        <img className="w-[40%] rounded-full" src= {experince4}
                        alt="" />
                        <p className='ml-6 text-2xl'>Machon Thomposon</p> 
                        
                    </figure>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                        <p>"Skyroof team went above and beyond to insure my statisfication. I am happy."</p>
                    </div>
                    <figure className='mb-4'>
                        <img className="w-[40%] rounded-full" src= {experince5}
                        alt="" />
                        <p className='ml-6 text-2xl'>David Rodiguez</p>
                        
                    </figure>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                        <p>"Professional, reable and skilled - that's Skyroof. I am great full for there service"</p>
                    </div>
                    <figure className='mb-4'>
                        <img className="w-[40%] rounded-full" src= {experince6} />
                        <p className='ml-6 text-2xl'> Farel Lee</p>
                       
                    </figure>
                   
                </div>
               
              
            </div>
            
        </div>
        </div>
    );
};

export default Experince;