/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react';
import { Element, scroller } from 'react-scroll';
import { Parallax } from 'react-parallax';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Page6 = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      once: false, // Whether to trigger animations only once
    });
  }, []);


  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <div className='bg-black'>
    <Parallax bgImage="/images/P6Background.png" strength={500}>
      <Element name="page6" className="section">
        <div
          id="page6"
          className="h-screen flex flex-col justify-between "
        >
          <div className="md:h-1/4"></div>
          <div className="md:h-2/4 md:ml-0  text-white text-center text-4xl font-lato tracking-2px uppercase flex flex-col items-center justify-between">
            <div data-aos="fade-right">Cars</div>
            

          </div>
          <div className="h-1/3 w-full flex items-end justify-between">
            <div className='w-[40%]'></div>
          <div className=' md:mr-28 mr-5'>
              <img
                src="/images/DownArrow.png"
                alt="Image"
                className="filter-invert md:w-24 w-12 cursor-pointer ml-20"
                onClick={() => scrollToSection('page7')}
                
              />
            </div>
            <div className="" data-aos="fade-up">
              <img src="/images/P6Image.png" alt="" className="md:ml-3 mb-3 md:w-[70%] w-full opacity-50 " />
            </div>
          </div>
        </div>
      </Element>
    </Parallax>
    </div>
  );
};

export default Page6;
