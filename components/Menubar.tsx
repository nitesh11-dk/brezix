"use client"
import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";
import { Button } from "@/components/ui/button"
import { useMenu } from "@/context/MenuContext";
import { useForm } from "@/context/FormContext";

const Menubar = () => {
  const { toggleMenu, isOpen } = useMenu();
  const { openForm } = useForm();

  return (
    <div className=" z-[799]  fixed top-4 md:top-8 right-6 flex items-center space-x-6 ">
      <Button
        onClick={openForm}
        className=" hidden md:flex  group border-none relative overflow-hidden bg-white text-black text-md  rounded-full px-4 py-3 font-medium"
      >
        <div className="absolute inset-0 rounded-3xl w-0 h-full bg-blue-600 transition-all duration-200 ease-linear group-hover:w-full z-0"></div>

        <span className="z-10 mr-1 text-xl transition-colors duration-300 group-hover:text-white">+</span>

        <div className="z-10 h-6 overflow-hidden">
          <div className="relative flex flex-col top-0 transition-all duration-300 group-hover:-top-6 group-hover:text-white">
            Become a Client
            <span>Become a Client</span>
          </div>
        </div>
      </Button>
      <span className="text-white font-medium  border border-white flex items-center p-2  px-4 rounded-2xl gap-3">EN <IoIosArrowDown /></span>
      <span
        onClick={toggleMenu}
        className={`menubutton text-white p-3 ${isOpen ? 'bg-blue-600' : 'bg-slate-200'} rounded-full cursor-pointer transition-all duration-300 hover:scale-105`}
      >
        {isOpen ? (
          <RiCloseLine size={24} className="rotate-90 transform transition-transform duration-300" />
        ) : (
          <RiMenu4Line size={24} className="transition-transform duration-300" />
        )}
      </span>
    </div>
  )
}

export default Menubar
