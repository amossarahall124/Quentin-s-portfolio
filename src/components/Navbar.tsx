
import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import ListAltIcon from '@mui/icons-material/ListAlt';
import logo from "../assets/logo.png"
import { motion } from "framer-motion";
import Lottie from "lottie-react";

import GarlandFlags from '../lotties/garland-flags.json';

function Navbar() {


  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);


  return (
    <div className="  ">
      <div className="w-full md:w-full bg-transparent p-4 rounded-2xl flex flex-row  justify-between items-center z-50 fixed  top-6 m-0">

        <div className="flex flex-row justify-center   items-center  space-x-[320px] md:space-x-[270px] lg:space-x-[500px] ">

          <div className="w-[180px] h-[130px] rounded-xl border-4 border-white lg:ml-60 ">  <Lottie animationData={GarlandFlags} loop={true} /> </div>

          
          <div className=" hidden md:flex gap-6 items-center flex-1 justify-center t text-[18px] font-medium cursor-pointer  duration-100 ease-in-out ">
            <Link to="/" className="hover:text-blue-100 hover:scale-125"> Home </Link>
            <Link to="/About" className="hover:text-blue-100 hover:scale-125"> About </Link>
            <Link to="/Projects" className="hover:text-blue-100 hover:scale-125"> Projects </Link>
            <Link to="/Experience" className="hover:text-blue-100 hover:scale-125"> Experience </Link>
            <Link to="/Contacts" className="hover:text-blue-100 hover:scale-125"> Contacts </Link>
          </div>
          <div className=" md:hidden lg:hidden bg-transparent border-none text-blue-100 ml-12 cursor-pointer sm:ml-28 mt-8"
            onClick={() => {
              setExpandNavbar(!expandNavbar);
            }}>
            <ListAltIcon  className="w-[650px] h-[650px]  text-slate-100 hover:text-blue-100 " />
          </div>

          <div className="block md:hidden ml-auto cursor-pointer"

              >
            {expandNavbar && (
              <div className="p-4 w-[200px] top-28 bg-main-500  border-4 border-slate-100 hover:border-blue-100  bg-main-100 rounded-lg text-main-20 fixed  right-16 flex flex-col items-center justify-evenly gap-6  duration-500 ease-out ">
                <Link to="/" className="hover:text-blue-100 cursor-pointer hover:scale-110 duration-100" > Home </Link>
                <Link to="/About" className="hover:text-blue-100 cursor-pointer hover:scale-110 duration-100"> About </Link>
                <Link to="/Projects" className="hover:text-blue-100 cursor-pointer hover:scale-110 duration-100"> Projects </Link>
                <Link to="/Experience" className="hover:text-blue-100 cursor-pointer hover:scale-110 duration-100"> Experience </Link>
                <Link to="/Contacts" className="hover:text-blue-100 cursor-pointer hover:scale-110 duration-100"> Contacts </Link>
              </div>)}
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Navbar;
