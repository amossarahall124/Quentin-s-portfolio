import React from 'react'
import Logos from '../components/Logos'
import { BackgroundGradientAnimation } from "../components/AuBackground"
import avatar from "../assets/avatar.png"
import { motion } from "framer-motion";


const About = () => {
  return (
    <BackgroundGradientAnimation>
    <div className="  w-screen overflow-x-scroll scrollbar-hide no-scrollbar min-h-screen  items-center Lg:mt-36   pb-20 absolute z-10 ">
    <motion.div
        className=""
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 3.0 }}
        variants={{
            hidden: { opacity: 0, x: 0 },
            visible: { opacity: 1, x: 0 },
        }}>
      <div className='bg-main-100 max-w-[1500px] max-h-[1000px] w-[500px] h-[600px] lg:w-[1100px] lg:h-[580px] mt-40 ml-20 lg:mt-40 md:ml-24 md:w-[600px] lg:ml-72 border-4 border-slate-100 hover:border-blue-100 shadow-md duration-500 ease-out  relative '> 
        <div className='absolute  items-center justify-center    p-2'>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-2 lg:mt-12 ">
          <div className='lg:flex flex-col  w-full lg:w-4/5 h-full lg:h-full items-center justify-center lg:mr-24'>
            <img className=" w-[140px] h-[150px] lg:w-[220px] lg:h-[210px]   items-center justify-center rounded-md ml-44 lg:ml-0 mt-4 lg:mt-0" src={avatar} alt="image of quentin" />
            <div className=" mt-4">
              <Logos />
            </div>

          </div>
          <div className="w-full lg:w-4/5 h-4/5 lg:h-full items-center text-center justify-center gap-2">
            <div className="block w-full [h-50]  bg-clip-text bg-gradient-to-tr from-blue-950 via-blue-100 to-slate-500">
              <h1 className=" text-transparent text-[30px] 
            lg:text-[50px] font-extrabold text-lato italic text-center mt-2 ">About me </h1>
            </div>
            <div className='w-full h-full  '>
              <p className="text-center text-[20px] items-center justify-center mt-2">
              Hi, I'm Quentin Hall, a passionate junior front-end developer with a love for creating beautiful and functional websites. My journey into web development started with a curiosity for technology and a desire to bring creative ideas to life. I am always seeking to improve my skills and stay up-to-date with the latest trends.
              </p>
              <p className=" hidden lg:flex text-center text-[20px] items-center justify-center mt-2">I strive to blend aesthetics with functionality to deliver seamless and intuitive interfaces. I believe in the power of collaboration and enjoy working with teams to turn visions into reality. 
              Thank you for visiting my site, and I look forward to the opportunity to work together. 
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
      </motion.div>
    </div >
    </BackgroundGradientAnimation>

  )
}

export default About
