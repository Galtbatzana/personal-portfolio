import Image from "next/image";
import { LuSunMedium } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { Navigations } from "./Navigations";
import { IoMdClose } from "react-icons/io";
import { NavigationCol } from "./NavigationCol";
import { useState } from "react";


export function Header() {
    // const [open, setOpen] = useState (false);
    // console.log({open}); 
    
    function openBurger() {
        setOpen(true);
    }

    function closeBurger() { 
        setOpen(false);
    }

   
    const [isDark, setIsDark] = useState(false);
    const [open, setOpen] = useState(false);
       
    function modeHandler () {
        document.documentElement.classList.toggle("dark")
        setIsDark(!isDark);
    }
      

    
    return (
        
        <div className="mx-auto sm:w-[375px] lg:w-[1440px] bg-white dark:bg-[#111827] ">
            <div className="mx-auto sm:w-[375px] lg:w-[1280px] bg-white dark:bg-[#111827] dark:text-white">
                <div className="flex justify-between mx-auto mt-6 py-2 lg:px-20 sm:px-4 ">
                        <div className="text-[30px] font-bold text-[#111827] p-4 dark:text-white">
                            {'<SS/>'}
                        </div> 
                    <div className="sm:hidden lg:flex items-center">
                        <div className="flex justify-items-center justify-between items-center ">
                            <Navigations/>
                        </div>
                        <span className="w-[24px] text-[#F3F4F6] mx-6">|</span>
                        <div className="flex gap-4">
                            <LuSunMedium  className="mt-1.5 size-6 text-[#4B5563] dark:text-white" onClick={modeHandler}/>
                            <button className="bg-black text-white dark:bg-white dark:text-[#111827] rounded-[10px] px-4 py-1.5">
                                Download CV
                            </button>
                        </div>
                </div>
                
                <div className="lg:hidden flex justify-items-center items-center p-4">
                    <GiHamburgerMenu onClick={openBurger} className="size-8"/>
                </div>

                <div className={open ? 'block' : 'hidden'}>
                    <div className={`fixed z-50 transition-all inset-0 bg-slate-500/90 ${open ? 'block': 'hidden'}`}>
                        <div className={`fixed top-0 bottom-0 transition-all ${open ? 'right-0': '-right-full'}  w-[320px] h-[667px] bg-white shadow-lg dark:bg-[#030712]`}>
                            <div className="w-[320px] h-[667-px]">
                                <div className="flex justify-between items-center p-4"> 
                                    <div className="text-[24px] font-semibold">
                                        {'<SS/>'}
                                    </div>
                                    <IoMdClose onClick={closeBurger} className="size-6 text-[#4B5563] dark:text-white"/> 
                                </div>
                                <div className="h-[176px] w-[320px] border-y-2"> 
                                    <NavigationCol />
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex justify-between items-center p-4">
                                        <p className="text-[#4B5563] dark:text-white text-base">
                                            Switch Theme
                                        </p>
                                        <LuSunMedium className="size-6 text-[#4B5563] dark:text-white" onClick={modeHandler}/>
                                    </div>
                                    <div className="flex justify-center">
                                        <button className="bg-black text-white dark:text-[#030712] dark:bg-white rounded-[12px] py-1.5 px-4 w-[228px]">
                                                Download CV
                                        </button>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

       
    );
}
