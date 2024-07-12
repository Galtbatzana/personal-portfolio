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
        
        <div className="flex sm:w-[343px] lg:w-[1280px] bg-red-200 mx-[80px]">
          <div className="lg:flex w-[1440px] h-[552px] justify-between gap-12 bg-slate-300">
            <div className="sm:w-[343px] lg:w-[1280px] h-[360px] flex justify-between">

                <div className="h-[300px] w-[343px] relative lg:order-2 ">
                    <div className="h-[280px] w-[280px] absolute bg-[#E5E7EB] right-[35px] top-[30px]">     
                    </div>
                    <Image className="absolute z-10 right-[50px] top-[10px]" src="/Pic.png" width={240} height={280}/>
                </div>
                <div className="bg-blue-50 w-[343px] h-[404px] lg:order-1 ">
                    <div className="flex bg-amber-100 h-auto">
                        <h1 className="font-bold">Hi, I'm Sagar</h1>
                        <Handwaving/>              
                    </div>

                    <div className="text-[#4B5563] mb-12 w-[768px]">
                        I'm a full stack developer (React.js & Node.js)
                        with a focus on creating (and occasionally designing)
                        exceptional digital experiences that are fast, accessible,
                        visually appealing, and responsive. Even though I have
                        been creating web applications for over 7 years, I still
                        love it as if it was something new.
                    </div>
                    <div className="mb-2">
                        <div>
                            <div className="flex items-center gap-2">
                                <span><IoLocationOutline /></span>
                                <p className="mx-3">Ahmedabad, India</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 bg-green-500 rounded-full mx-1"></div>
                                <p className="mx-3">Availiable for new projects</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex m-6 space-x-6">
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

          </div>
        </div>


    );
}
{/* <div className="w-[1440px] h-[360px] bg-slate-300">
<div className="lg:flex w-[1280px] bg-blue-200 mx-[80px] my-[96px]">
    <div className="h-[400px] w-[360px] relative md:order-1">
        <div className="h-[320px] w-[280px] absolute bg-[#E5E7EB] right-[40px] top-[30px]"></div>
        <Image className="h-[320px] w-[280px] border-2 absolute z-10" src="/Pic.png" width={280} height={320} />
    </div>
    <div className="flex-1 ">
        <div className="flex px-2 m-6">
            <h1 className="text-6xl font-bold">
                Hi, I'm Sagar
            </h1>
            <Handwaving />
        </div>
        <div className="text-base mb-10 m-6">
            I'm a full stack developer (React.js & Node.js)
            with a focus on creating (and occasionally designing)
            exceptional digital experiences that are fast, accessible,
            visually appealing, and responsive. Even though I have
            been creating web applications for over 7 years, I still
            love it as if it was something new.
        </div>
        <div className="flex flex-col text-base mb-6 m-6">
            <div className="flex items-center gap-2">
                <span><IoLocationOutline /></span>
                <p className="mx-3">Ahmedabad, India</p>
            </div>
            <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-green-500 rounded-full mx-1"></div>
                <p className="mx-3">Availiable for new projects</p>
            </div>
        </div>
        <div className="flex m-6 space-x-6">
            <span>
                <LuGithub className="h-[36px] w-[36px]"/>
            </span>
            <span>
                <FiTwitter className="h-[36px] w-[36px]"/>
            </span>
            <span>
                <FiFigma className="h-[36px] w-[36px]"/>
            </span>
        </div>
    </div>

</div>  */}
{/* <div className="relative w-[300px] h-[300px] bg-red-300">
    <div></div>
    <div></div>
</div> */}
