import React from "react";
import {BackgroundGradient} from '../components/Aubackglow'
import { Suspense } from 'react';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


const Spline = React.lazy(() => import('@splinetool/react-spline'))

function Home() {
  const navigate = useNavigate();
  return (

    <div className="  w-screen overflow-x-scroll scrollbar-hide no-scrollbar min-h-screen  items-center  relative bg-black pb-20 ">
      <div id="home" className="relative">
      </div>
      <Suspense fallback={<div>Loading.....</div>}>
        <Spline className=" absolute m-0 top-0 right-0 " scene="https://prod.spline.design/iNiJqJD62wCr67w3/scene.splinecode" />
      </Suspense>

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
      <div className="w-screen h-4/5  scrollbar-hide items-center mt-64  mr-40 lg:mt-40 text-slate-50 box-border absolute">
        <div className="flex flex-col md:flex-row  justify-around md:justify-center lg:gap-[150px] md:gap-[50px] items-center">
          <div className="flex flex-col justify-center gap-4 p-1">
            <div className="block w-full [h-50]  bg-clip-text bg-gradient-to-tr from-blue-950 via-blue-100 to-slate-500">
              <h1 className=" text-transparent text-[68px] lg:text-[78px] font-extrabold text-lato italic text-center ">Hey There </h1>
            </div>
            <div className="flex flex-col gap-2 mb-2 text-main-20 text-center p-2">
              <p className="text-2xl md:text-4xl text-main-20 "> I'm Quentin Hall </p>
              <p className=" text-xlmd:text-2xl ">A fornt-end UI/UX developer </p>

            </div>
          </div>
          {/* <img className=" w-[220px] h-[200px] lg:w-[240px] lg:h-[220px]   items-center rounded-full " src="/avatar.png" alt="image of quentin" /> */}
        </div>
        <div className="absolute mt-16 lg:mt-24 lg:ml w-full   flex flex-col items-center md:item-start justify-center gap-2 ">
        <BackgroundGradient className="rounded-[18px] max-w-sm p-4 md:p-4 bg-main-100 dark:bg-zinc-900">
          <button onClick={()=>{navigate("/Contacts")}} className="" >
            <p className="text-[18px] text-slate-200 hover:text-blue-100  " >Contact Me </p>
          </button>
        </BackgroundGradient>
        </div>
      </div>
      </motion.div>
    </div>
  );
}

export default Home;
