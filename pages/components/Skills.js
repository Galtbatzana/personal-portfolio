import { SkillsIcon } from "./SkillsIcon";
import { Tag } from "./Tags";
import Image from "next/image";


export function Skills () {
    return (
        <div className="mx-auto py-5 sm:w-[375px] lg:w-[1440px] bg-white">
            <div className="sm:w-[343px] sm:py-[64px] mx-auto lg:w-[1280px] lg:mt-12 p-2 ">
                <div className="flex-col text-center justify-center">
                    <p className="bg-[#E5E7EB] text-[#4B5563] px-4 py-2 inline text-sm font-medium rounded-full">
                        Skills
                    </p>
                    <p className="m-4 p-2 text-[#4B5563] mb-16">
                        The skills, tools and Technologies I am really good at:
                    </p>
                </div>

                <div>
                        <SkillsIcon/>
                </div> 
            </div>
        </div>
    );
}      

