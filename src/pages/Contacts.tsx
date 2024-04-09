import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Input } from "@material-tailwind/react";
import { BackgroundGradientAnimation } from "../components/AuBackground"
import { motion } from "framer-motion";




const contacts = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Your full Name is Required!"),
    company: yup.string(),
    number: yup.number().positive().integer().min(10),
    email: yup.string().email().required("invaild email"),
    message: yup.string(),

  });

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <BackgroundGradientAnimation>
    <div className=" ">
      <div className="w-full  h-full items-center overflow-hidden text-slate-50 absolute z-10 inset-0 top-8  ">
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
        < div className="flex flex-col md:flex-col gap-4 md:gap-4 items-center justify-between   " >


          <h1 className=" text-slate-100 text-[38px] lg:text-[48px] mt-36  md:w-4/5 hover:text-blue-100 font-bold text-lato  text-center gap-1  ">Let's chat </h1>

          <div className="flex flex-col gap-8 items-center   bg-transparent md:bg-main-100 border-transparent md:border-slate-100
          md:hover:border-blue-100 border-4 shadow-sm p-4 rounded-lg justify-center duration-500 ease-out   ">
            <p className=" text-18 text-lato text-main-20 hover:text-blue-100 duration-500 ease-out hover:scale-110">Send me a message </p>
            <form               
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/39ebb4518926d51f643edb86ed87ca05"
              method="POST" 
              autoComplete="off">
              <ul className="flex flex-col gap-6 items-start justify-start">
                <div className="borer-2 text-main-500 text-start ">
                  < li className="text-[16px] flex flex-row  gap-4 ">
                    <label className="text-main-20 hover:text-blue-100 hover:scale-110 duration-500 ease-out ">Full Name</label>
                    <input className="px-4 py-1 rounded-lg bg-transparent md:bg-main-100 border-2 border-blue-100 text-slate-100" type="text"  {...register("fullName")} />
                    <p className="error text-red-800 font-bold ">{errors.fullName?.message}</p>
                  </li>
                </div>
                <li className="borer-2 mr-4 text-main-500 text-start text-[16px] flex flex-row gap-4 ">
                  <label className="text-main-20 hover:text-blue-100 hover:scale-110 duration-500 ease-out"> Company </label>
                  <input className="px-4 py-1 rounded-lg placeholder-blue-100 bg-transparent md:bg-main-100 border-2 border-blue-100 text-slate-100" type="text" placeholder="Optional" {...register("company")} />
                </li>
                <li className="borer-2 ml-2 text-main-500 text-start text-[16px] flex flex-row gap-6 ">
                  <label className="text-main-20 hover:text-blue-100 hover:scale-110 duration-500 ease-out">Number</label>
                  <input className="px-4 py-1 rounded-lg bg-transparent md:bg-main-100 border-2 border-blue-100 text-slate-100" type="number"  {...register("number")} />

                </li>
                <li className="borer-2 ml-4 text-main-500 text-start text-[16px] flex flex-row gap-8">
                  <label   className="text-main-20 hover:text-blue-100 hover:scale-110 duration-500 ease-out">Email</label>
                  <input className="px-4 py-1 rounded-lg placeholder-blue-100 text-slate-100 bg-transparent md:bg-main-100 border-2 border-blue-100" type="email" placeholder="johnsith@gmail.com" {...register("email")} />
                  <p className="error text-red-800 font-bold ">{errors.email?.message}</p>
                </li>
                <li className="borer-2 ml-2 text-main-500 text-start text-[16px] flex flex-row gap-4">
                  <label className="text-main-20 hover:text-blue-100 hover:scale-110 duration-500 ease-out"> Message</label>
                  <input className="px-10 py-12 rounded-lg placeholder-blue-100 -text-start bg-transparent md:bg-main-100 border-2 border-blue-100 text-slate-100 " type="text" placeholder="Optional" {...register("message")} />
                </li>
              </ul>
              <div className="flex flex-col items-center justify-center mt-4">
                <button type="submit" className="py-2 px-4  item-center border-2 rounded-lg bg-slate-100 border-main-100 hover:bg-black hover:border-blue-100">
                  <p className="text-[18px] text-main-100 hover:text-slate-100 font-bold hover:scale-125 duration-100 ease-in-out " >Send </p>
                </button>
              </div>
            </form>
          </div>
        </div >
        </motion.div>
      </div >
    </div>
    </BackgroundGradientAnimation>
  );
};



export default contacts
