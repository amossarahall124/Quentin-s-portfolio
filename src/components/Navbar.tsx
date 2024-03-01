
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ListAltIcon from '@mui/icons-material/ListAlt';
import logo from "../assets/logo.png"
import { motion } from "framer-motion";


function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="  ">
      <div className="w-full md:w-full bg-transparent p-4 rounded-2xl flex flex-row  justify-between items- z-50 fixed inset-x-0 top-6">

        <div className="space-x-[500px] md:gap-[600px] lg:space-x-[1100px]  items-start ">
          <div className=" items-center m fixed">
            <img width={150} height={150} className="logoImg" src={logo} alt="react-logo" />
          </div>

          <div className=" hidden md:flex gap-6 items-center flex-1 justify-center t text-[18px] font-medium cursor-pointer  duration-100 ease-in-out mt-4">
            <Link to="/" className="hover:text-blue-100 hover:scale-125"> Home </Link>
            <Link to="/About" className="hover:text-blue-100 hover:scale-125"> About </Link>
            <Link to="/Projects" className="hover:text-blue-100 hover:scale-125"> Projects </Link>
            <Link to="/Experience" className="hover:text-blue-100 hover:scale-125"> Experience </Link>
            <Link to="/Contacts" className="hover:text-blue-100 hover:scale-125"> Contacts </Link>
          </div>
          <div className=" lg:hidden bg-transparent border-none text-blue-100 ml-12 cursor-pointer sm:ml-28 mt-8"
            onClick={() => {
              setExpandNavbar(!expandNavbar);
            }}>
            <ListAltIcon width={100} height={100} className="w-[450px] h-[250px]  text-slate-100 hover:text-blue-100" />
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
  );
}

export default Navbar;
