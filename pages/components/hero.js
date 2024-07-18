import { Aboutme } from "./AboutMe";
import { Handwaving } from "./Handwaving";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { LuGithub } from "react-icons/lu";
import { FiTwitter } from "react-icons/fi";
import { FiFigma } from "react-icons/fi";


export function Hero() {
    return (
        
        <div className="lg:flex sm:w-[343px] lg:w-[1280px] bg-yellow-200 justify-between mx-auto mt-[96px]">
            <div className="lg:order-2 sm:mb-[48px] mt-[48px]">
                <div className="h-[300px] w-[343px] relative">
                    <div className="h-[280px] w-[280px] absolute bg-[#E5E7EB] right-[35px] top-[30px]"></div>
                    <Image className="absolute z-10 right-[50px] top-[10px]" src="/Pic.png" width={240} height={280}/>
                </div>
            </div>
            <div className="lg:order-1 p-4">
                <div className="flex bg-amber-100 items-center gap-2">
                        <h1 className="font-bold sm:text-[36px] lg:text-[60px]">
                            Hi, I'm Sagar
                        </h1>
                        <Handwaving />              
                </div>
                <div className="mx-auto text-[#4B5563] bg-yellow-300 mb-[46px]">
                    I'm a full stack developer (React.js & Node.js)
                    with a focus on creating (and occasionally designing)
                    exceptional digital experiences that are fast, accessible,
                    visually appealing, and responsive. Even though I have
                    been creating web applications for over 7 years, I still
                    love it as if it was something new.
                </div>
                
                <div className="flex items-center gap-2 bg-yellow-400">
                      <span><IoLocationOutline /></span>
                      <p className="mx-3">Ahmedabad, India</p>
                </div>
                
                
                <div className="flex items-center gap-2 bg-yellow-400 mb-[46px]">
                        <div className="h-2 w-2 bg-green-500 rounded-full mx-1"></div>
                        <p className="mx-3">Availiable for new projects</p>
                </div>
                

                <div className="flex m-6 space-x-6 bg-yellow-400">
                    <span>
                        <LuGithub className="h-[24px] w-[24px]"/>
                    </span>
                    <span>
                        <FiTwitter className="h-[24px] w-[24px]"/>
                    </span>
                    <span>
                        <FiFigma className="h-[24px] w-[24px]"/>
                    </span>
                </div>
            </div>
        </div>


    );
}

