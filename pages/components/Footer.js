import Link from "next/link";
import { Tags } from "./Tags";
import { MdMailOutline } from "react-icons/md";
import { BiWindows } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import { FiTwitter } from "react-icons/fi";
import { FiFigma } from "react-icons/fi";


export function Footer () {
    return (
        <div className="mx-auto sm:w-[375px] lg:w-[1440px] bg-white">
            <div className="mx-auto lg:w-[1216px] sm-[343px] flex-col text-center justify-center pt-24">
                    <p className="bg-[#E5E7EB] text-[#4B5563] px-[20px] py-2 inline text-sm font-medium rounded-[12px]">
                        Get in touch
                    </p>
                    <p className="mt-8 sm:mx-10 text-[#4B5563] text-[20px]">
                        What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.
                    </p>
            </div>
            <div className="mx-auto mb-8 py-4 text-[#4B5563] flex flex-col gap-4">
                <div className="flex justify-center gap-4">
                    <div><MdMailOutline className="text-xl"/></div>
                    <a href="#" className="text-[#111827] font-bold">reachsagarshah@gmail.com</a>
                    <div><BiWindows className="text-xl"/></div>
                </div>
                <div className="flex justify-center gap-4">
                    <div><FiPhone className="text-xl"/></div>
                    <p className="text-[#111827] font-bold">+91 8980500565</p>
                    <div><BiWindows className="text-xl"/></div>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <p>You may also find me on these platforms!</p>
                    <div className="flex gap-4">
                        <LuGithub className="h-[24px] w-[24px] text-[#4B5563]"/>
                        <FiTwitter className="h-[24px] w-[24px] text-[#4B5563]"/>
                        <FiFigma className="h-[24px] w-[24px] text-[#4B5563]"/>
                    </div>
                </div>
                <div className="flex bg-[#F9FAFB] justify-center items-center gap-4 px-2 py-6">
                    <img className="w-[15px] h-[15px]" src="/images/Icon.png"></img>
                    <p className="text-[#4B5563] text-[14px]">2023 | Designed and coded with ❤️️ by Sagar Shah</p>
                    
                </div>
            </div>      
        </div>
    );
}

