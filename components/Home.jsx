import React from 'react'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Page5 from './Page5'
import Page6 from './Page6'
import Page7 from './Page7'
import Page8 from './Page8'
import Page9 from './Page9'
import Page10 from './Page10'
import Page11 from './Page11'
import Page13 from './Page13'
import Page12 from './Page12'
// import Footer from './Footer'
import Footer2 from './Footer2'
import { motion, useScroll, useSpring } from "framer-motion";



const Home = () => {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className='overflow-x-hidden '  style={{ overflowY: 'hidden !important' }}>

      <motion.div className="progress-bar" style={{ scaleX }} />
    <Page1/>
    <Page2/>
    <Page3/>
    <Page4/>
    <Page5/>
    <Page6/>
    <Page7/>
    <Page8/>
    <Page9/>
    <Page10/>
    <Page11/>
    <Page12/>
    <Page13/>
    <Footer2/>
    
    </div>
  )
}

export default Home