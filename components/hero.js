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
        <div className="mx-auto sm:w-[375px] lg:w-[1440px] bg-white dark:bg-[#030712]">
            <div className="mx-auto sm:w-[375px] lg:w-[1280px]">
                <div className="lg:flex justify-between lg:mx-20 lg:py-[96px] bg-white gap-12 dark:bg-[#030712]">
                    <div className="lg:order-2 sm:py-16 mx-4">
                        <div className="h-[300px] w-[343px] relative">
                            <div className="h-[280px] w-[280px] absolute bg-[#E5E7EB] right-[35px] top-[30px]">
                            </div>
                            <Image className="absolute z-10 right-[50px] top-[10px]" src="/Pic.png" width={240} height={280}/>
                        </div>
                    </div>
                    <div className="lg:order-1 lg:w-[768px] p-4">
                        <div className="flex items-center gap-2">
                                <h1 className="font-bold sm:text-[36px] lg:text-[60px] text-[#111827] dark:text-white">
                                    Hi, I'm Sagar
                                </h1>
                                <Handwaving />              
                        </div>
                        <div className="text-[#4B5563] mb-[48px] dark:text-white">
                            I'm a full stack developer (React.js & Node.js)
                            with a focus on creating (and occasionally 
                            designing) exceptional digital experiences 
                            that are fast, accessible, visually appealing, 
                            and responsive. Even though I have been 
                            creating web applications for over 7 years, I 
                            still love it as if it was something new.
                        </div>
                        
                        <div className="flex items-center gap-2 text-[#4B5563] dark:text-white">
                            <span>
                                <IoLocationOutline />
                            </span>
                            <p className="mx-3 text-[#4B5563] dark:text-white">
                                Ahmedabad, India
                            </p>
                        </div>
                        
                        
                        <div className="flex items-center gap-2 mb-[48px]">
                                <div className="h-2 w-2 bg-green-500 rounded-full mx-1"></div>
                                <p className="mx-3 text-[#4B5563] dark:text-white">
                                    Availiable for new projects
                                </p>
                        </div>
                        

                        <div className="flex m-1 space-x-6 pb-[64px]">
                            <span>
                                <LuGithub className="h-[24px] w-[24px] text-[#4B5563] dark:text-white"/>
                            </span>
                            <span>
                                <FiTwitter className="h-[24px] w-[24px] text-[#4B5563] dark:text-white"/>
                            </span>
                            <span>
                                <FiFigma className="h-[24px] w-[24px] text-[#4B5563] dark:text-white"/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

