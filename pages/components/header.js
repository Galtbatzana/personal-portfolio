import Image from "next/image";
import { LuSunMedium } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { Navigations } from "./Navigations";
import { IoMdClose } from "react-icons/io";
import { NavigationCol } from "./NavigationCol";
import { useState } from "react";


export function Header() {
    const [open, setOpen] = useState (false);
    console.log({open}); 
    
    function openBurger () {
        setOpen(true);
    }

    function closeBurger () {
        setOpen(false);
    }
    return (
    
        <div className="flex h-[36px] sm:w-[343px] lg:w-[1280px] bg-yellow-50 justify-between mx-auto mt-5">
            <div className="text-[26px] font-medium text-[#111827] mx-8">
                {'<SS/>'}
            </div> 
            <div className="sm:hidden lg:flex w-[554px] items-center">
                <div className="flex gap-6 justify-items-center justify-between items-center">
                    <Navigations/>
                </div>
                <span className="w-[24px] text-[#F3F4F6] ml-4 mr-1">|</span>
                <div className="flex gap-3">
                    <LuSunMedium className="mt-1.5"/>
                    <button className="bg-black text-white rounded-[10px] px-4 py-px ml-3">
                        Download CV
                    </button>

                </div>
            </div>
            <div className="lg:hidden flex size-9 justify-items-center items-center">
                 <GiHamburgerMenu onClick={openBurger} className="size-6"/>
            </div>

            <div className={open ? 'block' : 'hidden'}>
                <div className={`fixed transition-all inset-0 bg-slate-500/90 ${open ? 'block': 'hidden'}`}>
                <div className={`fixed top-0 bottom-0 transition-all ${open ? 'right-0': '-right-full'}  w-[320px] h-[667px] bg-white shadow-lg`}>
                    <div className="w-[320px] h-[667-px] px-4">
                        <div className="flex justify-between items-center pt-2 pb-4"> 
                            <div className="text-[16px]">
                                {'<SS/>'}
                            </div>
                            <IoMdClose onClick={closeBurger}/> 
                        </div>
                        <div className="h-[176px] w-[320px] pt-2 border-black"> 
                            <NavigationCol />
                        </div>
                        <div className="flex flex-col">
                            <div className="flex justify-between items-center pb-4">
                                <p className="text-[#4B5563] text-base">
                                    Switch Theme
                                </p>
                                <LuSunMedium/>
                            </div>
                            <button className="bg-black text-white rounded-[10px] px-4 py-px ml-3">
                                    Download CV
                            </button>
                        </div>
                    </div>
                </div>

                </div>
            </div>

        </div>

       
    );
}
