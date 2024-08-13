import React from "react";
import Marquee from "react-fast-marquee";
import fimg from '../../../assets/a.png'
import fimg2 from '../../../assets/m.png'
import fimg3 from '../../../assets/j.png'
import fimg4 from '../../../assets/Mm.png'
const MarqureSlide = () => {
    return (
        <div className="my-20">
            <div className="text-center text-white">
                <h1 className="text-5xl">Meet our team experts in excellence</h1>
                <p className="my-8 w-1/2 mx-auto">Behind every successful residential project is a team of dedicated professionals committed to excellence. Our experts bring years of experience, creativity, and a passion for design and construction to every project we undertake..</p>
            </div>
            <Marquee>
              
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img className="w-[50%] rounded-full" src={fimg} alt="" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="flex justify-center text-3xl">Alex Brown</h2>
                        <p className="flex justify-center">Safety Inspector</p>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img className="w-[50%] rounded-full" src={fimg2} alt="" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="flex justify-center text-3xl">Michael Taylor
                        </h2>
                        <p  className="flex justify-center">Quality Control</p>
                        
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img className="w-[50%] rounded-full" src={fimg3} alt="" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="flex justify-center text-3xl">John Smith</h2>
                        <p className="flex justify-center">Roofing Specialist</p>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img className="w-[50%] rounded-full" src={fimg4} alt="" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="flex justify-center text-3xl">Mark Davis
                        </h2>
                        <p className="flex justify-center">Installation Supervisor</p>
                        
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default MarqureSlide;