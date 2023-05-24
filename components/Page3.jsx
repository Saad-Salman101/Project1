/* eslint-disable @next/next/no-img-element */
import React,{useEffect} from 'react'
import { Element, scroller } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Page3 = () => {

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
    <>
        <Element name="page3" className="section">
    <div id="page3" className='h-screen w-full flex flex-col justify-between items-center'>
      
      <div className='w-full md:h-[15%] h-[25%] flex justify-center items-end '>
        <div className='text-black tracking-[2px] text-[30px] uppercase font-lato ' data-aos="fade-down">Revolutionary</div>
      </div>
      
      <div className='md:flex flex md:flex-row flex-col justify-center items-center md:justify-around md:h-[60%] h-[40%] w-[90%] md:w-[90%] '>
  <div className=' mb-1 md:mb-0 mr-3 ' data-aos="flip-up"><img src='/images/P3Logo.png' alt='' className='w-[80%] '/></div>
  
  <div>
  <div className=" h-[2px] md:h-full ml-80 md:ml-0  transform rotate-90 md:rotate-0"><img src='/images/P3Line.png ' alt='' className=' ' /></div>
  </div>

  {/* <div className='bg-blue-500 w-[20%] ml-20'><img src='/images/P3Line.png ' alt='' className='transform rotate-90 md:rotate-0 ' /></div> */}
  <div className=' mt-1 md:mt-0 ml-3' data-aos="flip-up"><img src='/images/P3Logo2.png' alt='' className='w-[80%]'/></div>
</div>
        
        <div className='flex flex-col justify-between items-center mt-5 h-[23%] '>
        <div  className='text-black text-center tracking-[2px] text-[30px] font-lato ' data-aos="fade-up">
          The only platform of it`s kind in the world.</div>

            <a>
            <img src='/images/DownArrow.png' alt='' className='md:w-[80px] w-[40px] cursor-pointer' onClick={() => scrollToSection('page4')}/>
            </a>

        </div>

    </div>
      </Element>
    </>
  )
}

export default Page3
