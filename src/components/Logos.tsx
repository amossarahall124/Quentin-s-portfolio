import React from 'react'
import bootstrap from "../assets/logos/bootstrap.png"
import C from "../assets/logos/c#.png"
import css from "../assets/logos/css.png"
import figma from "../assets/logos/figma.jpg"
import html from "../assets/logos/html.png"
import js from "../assets/logos/js.png"
import mui from "../assets/logos/mui.png"
import node from "../assets/logos/node.png"
import python from "../assets/logos/python.png"
import react from "../assets/logos/react.png"
import redux from "../assets/logos/redux.png"
import sass from "../assets/logos/sass.png"
import spline from "../assets/logos/spline.png"
import typescript from "../assets/logos/typescript.png"
import wix from "../assets/logos/wix.png"
import tailwind from "../assets/logos/tailwind.png"

const Logos = () => {
  return (
    <>
      <div className="block w-full [h-90]  bg-clip-text bg-gradient-to-tr from-blue-950 via-blue-100 to-slate-500">
        <h1 className=" text-transparent text-[24px] Lg:text-[32px] font-extrabold text-lato italic text-center  ">Skills </h1>
      </div>
        <div className="flex  items-center justify-center gap-4">

          <div className="bg-clip-border px-6 py-2 lg:px-4 lg:py-2   bg-stone-900 borde2-4 border-slate-100 hover:border-blue-100 flex flex-row justify-bewteen items-center lg:border-4 hover:scale-125 duration-200 cursor-pointer">
            <img src={html} alt="html" className="w-[15px] h-[15px] lg:w-[30px] lg:h-[30px]" />
            <p className="hidden text-main-20 text-[10px]">HTML</p>
          </div>
          <div className="bg-clip-border px-6 py-2 lg:px-4 lg:py-2    bg-stone-900 bord2r-4 border-slate-100 hover:border-blue-100 flex flex-row justify-bewteen items-center lg:border-4 hover:scale-125 duration-200 cursor-pointer">
            <img src={css} alt="css" className="w-[15px] h-[15px] lg:w-[30px] lg:h-[30px]" />
            <p className="text-main-20 text-[10px]"></p>
          </div>
          <div className="bg-clip-border px-6 py-2 lg:px-4 lg:py-2   bg-stone-900 borde2-4 border-slate-100 hover:border-blue-100 flex flex-row justify-bewteen items-center lg:border-4 hover:scale-125 duration-200 cursor-pointer">
            <img src={js} alt="JS" className="w-[15px] h-[15px] lg:w-[30px] lg:h-[30px]" />
            <p className="text-main-20 text-[10px]"></p>
          </div>
          <div className="bg-clip-border px-6 py-2 lg:px-4 lg:py-2  bg-stone-900 border24 border-slate-100 hover:border-blue-100 flex flex-row justify-bewteen items-center lg:border-4 hover:scale-125 duration-200 cursor-pointer">
            <img src={react} alt="react" className="w-[15px] h-[15px] lg:w-[30px] lg:h-[30px]" />
            <p className="text-main-20 text-[10px]"></p>
          </div>

        </div>

        <div className="hidden lg:flex  items-center justify-center gap-4 mt-4">
        <div className="bg-clip-border px-6 py-2 lg:px-4 lg:py-2  bg-stone-900 border24 border-slate-100 hover:border-blue-100 flex flex-row justify-bewteen items-center lg:border-4 hover:scale-125 duration-200 cursor-pointer">
            <img src={bootstrap} alt="bootstap" className="w-[15px] h-[15px] lg:w-[30px] lg:h-[30px]" />
            <p className="text-main-20 text-[10px]"></p>
          </div>
          <div className="bg-clip-border px-6 py-2 lg:px-4 lg:py-2  bg-stone-900 border24 border-slate-100 hover:border-blue-100 flex flex-row justify-bewteen items-center lg:border-4 hover:scale-125 duration-200 cursor-pointer">
            <img src={spline} alt="spline" className="w-[15px] h-[15px] lg:w-[30px] lg:h-[30px]" />
            <p className="text-main-20 text-[10px]"></p>
          </div>
          <div className="bg-clip-border px-6 p-2  lg:px-4 lg:py-2 bg-stone-900 border-2 border-slate-100 hover:border-blue-100 flex flex-row justify-bewteen items-center lg:border-4 hover:scale-125 duration-200 cursor-pointer">
            <img src={node} alt="node" className="w-[15px] h-[15px] lg:w-[30px] lg:h-[30px]" />
            <p className="text-main-20 text-[10px]"></p>
          </div>
          <div className="bg-clip-border px-6 p-2  lg:px-4 lg:py-2 bg-stone-900 border-2 border-slate-100 hover:border-blue-100 flex flex-row justify-bewteen items-center lg:border-4 hover:scale-125 duration-200 cursor-pointer">
            <img src={redux} alt="redux" className="w-[15px] h-[15px] lg:w-[30px] lg:h-[30px]" />
            <p className="text-main-20 text-[10px]"></p>
          </div>
          </div>

        <div className=" hidden lg:flex  items-center justify-center gap-4 mt-4">

          <div className="bg-clip-border px-6 py-2 lg:px-4 lg:py-2    bg-stone-900 bord2r-4 border-slate-100 hover:border-blue-100 flex flex-row justify-bewteen items-center lg:border-4 hover:scale-125 duration-200 cursor-pointer">
            <img src={typescript} alt="TS" className="w-[15px] h-[15px] lg:w-[30px] lg:h-[30px]" />
            <p className="text-main-20 text-[10px]"></p>
          </div>
          <div className="bg-clip-border px-6 py-2 lg:px-4 lg:py-2   bg-stone-900 borde2-4 border-slate-100 hover:border-blue-100 flex flex-row justify-bewteen items-center lg:border-4 hover:scale-125 duration-200 cursor-pointer">
            <img src={tailwind} alt="tailwind" className="w-[15px] h-[15px] lg:w-[30px] lg:h-[30px]" />
            <p className="text-main-20 text-[10px]"></p>
          </div>
          <div className="bg-clip-border px-6 py-2 lg:px-4 lg:py-2    bg-stone-900 bord2r-4 border-slate-100 hover:border-blue-100 flex flex-row justify-bewteen items-center lg:border-4 hover:scale-125 duration-200 cursor-pointer">
            <img src={figma} alt="fimga" className="w-[15px] h-[15px] lg:w-[30px] lg:h-[30px]" />
            <p className="text-main-20 text-[10px]"></p>
          </div>
          <div className="bg-clip-border px-6 py-2 lg:px-4 lg:py-2    bg-stone-900 bord2r-4 border-slate-100 hover:border-blue-100 flex flex-row justify-bewteen items-center lg:border-4 hover:scale-125 duration-200 cursor-pointer">
            <img src={python} alt="Python" className="w-[15px] h-[15px] lg:w-[30px] lg:h-[30px]" />
            <p className="text-main-20 text-[10px]"></p>
          </div>
          <div className="bg-clip-border px-6 p-2  lg:px-4 lg:py-2 bg-stone-900 border-2 border-slate-100 hover:border-blue-100 flex flex-row justify-bewteen items-center lg:border-4 hover:scale-125 duration-200 cursor-pointer">
            <img src={wix} alt="wix" className="w-[15px] h-[15px] lg:w-[30px] lg:h-[30px]" />
            <p className="text-main-20 text-[10px]"></p>
          </div>



        </div>




    </>
  )
}

export default Logos
