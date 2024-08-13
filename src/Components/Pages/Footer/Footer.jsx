import React from 'react';
import sky from '../../../assets/Skyroof-Logo.png'
const Footer = () => {
    return (
      <div data-aos="fade-right"
      data-aos-offset="100"
      data-aos-easing="ease-in-sine">
        <footer className="p-10 footer bg-base-200 text-base-content">
        <aside>
          <img className='w-[70%]' src={sky}></img>
          <p className='text-2xl text-white'>
            Skyroof Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Roof Installation</a>
          <a className="link link-hover">Roof Repair</a>
          <a className="link link-hover">Roof Inspection</a>
          <a className="link link-hover">Roof Maintenance</a>
          <a className="link link-hover">Roof Replacement</a>
 
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Projects</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      </div>
    );
};

export default Footer;