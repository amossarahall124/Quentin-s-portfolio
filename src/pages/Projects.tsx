import React from "react";
import { ProjectList } from "../helpers/ProjectList";
import { BackgroundGradientAnimation } from "../components/AuBackground"
import { motion } from "framer-motion";


function Projects() {
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
        <div className="bg-main-100 max-w-[1500px] max-h-[1000px] w-[550px] h-[600px] lg:w-[1200px] lg:h-[580px] mt-40 ml-12 lg:mt-40 lg:ml-72 border-4 border-slate-100 hover:border-blue-100 shadow-sm duration-500 ease-out  relative ">
          <div className="block w-full [h-50]  bg-clip-text bg-gradient-to-tr from-blue-950 via-blue-100 to-slate-500 ">
            <h1 className=" text-transparent text-[30px] 
          lg:text-[50px] font-extrabold text-lato italic text-center mt-2 ">My Projects </h1>
          </div>
          
            <div className="grid grid-cols-2 lg:grid-cols-4 justify-center items-center gap-4 mt-8  rounded-sm shadow-md  ">
              {ProjectList.map((project, idx) => {
                return (
                  <div className="flex  flex-col  bg-stone-800 justify-center items-center p-2 hover:scale-110 duration-200 cursor-pointer max-w-[500px] max-h-[500px] lg:w-[250px] w-[220px] ml-4 lg:ml-4 rounded-md shadow-md lg:hshadow-lg shadow-stone-600 border-2 border-slate-100 hover:border-blue-100">
                    <div className="bgImage" />
                    <div>
                    <img className=" w-[210px] h-[120px] lg:w-[230px] lg:h-[230px]  items-center justify-center rounded-sm object-cover hover:scale-110 duration-200 border-2 border-blue-100" src={project.image} alt="image of project" />
                    </div>
                    <div className="flex flex-col justify-center items-center mt-4 gap-2 hover:text-blue-100 duration-500">
                      <h1> {project.name} </h1>
                      <div className="flex flex-row items-start justify-between space-x-4 ">
                        <a href={project.git} target="_blank" className="bg-main-100 border-2 px-4 py-2 border-slate-100 hover hover:border-blue-100  hover:scale-110 duration-200 cursor-pointer shadow-md rounded-sm">GitHub</a>
                        <a href={project.domo} target="_blank" className="bg-slate-100 border-2 px-4 py-2  text-main-100 border-main-100 hover hover:border-slate-100 hover:text-slate-100 hover:bg-main-100 hover:scale-110 duration-200 cursor-pointer rounded-md font-bold">Domo</a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          </motion.div>
        </div>
    </BackgroundGradientAnimation>
  );
}

export default Projects;
