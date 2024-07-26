import Image from "next/image";
import { TbExternalLink } from "react-icons/tb";


export function Work () {
    return (

        <div className="w-[375px] mx-auto lg:w-[1440px] bg-white dark:bg-[#030712]">
            <div className="w-[343px] mx-auto lg:w-[1152px] rounded-lg">
                <div className="lg:flex-col">
                    <div className="">
                        <div className="flex justify-center py-4 text-[#4B5563]">
                            <Tags name="Work"/>
                        </div>
                        <p className="text-[#4B5563] mx-6 pb-12 text-center dark:text-white">
                            Some of the noteworthy projects I have built:
                        </p>    
                    </div>
                    <WorkCard />
                    <WorkCard isReverse={true}/>
                    <WorkCard />
                </div>
            </div>
        </div>
    );
}

export function Tags ({name}) {
    return (
        <div className="bg-slate-300 py-1 px-5 rounded-xl dark:bg-[#374151] dark:text-[#D1D5DB]">
            {name}
        </div>
    );
}

const workData = [
    {
        title: 'Fiskil',
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        image: "/images/work.png",
        link: "/",
    }
];

export function WorkCard ({ isReverse = false }) {
    return (
        <div className={`shadow rounded-xl pb-4 lg:flex ${isReverse ? "lg:flex-row-reverse" : ""} `}> 
            <div className="bg-[#F3F4F6] rounded-xl mb-8 w-full dark:bg-[#1F2937]">
                <Image src="/images/work.png" width={279} height={279} className="w-full rounded-lg p-10"/>
            </div>
            <div className="lg:p-[48px] mx-8 lg:mx-0 w-full">
                <div className="text-[#111827] font-semibold sm:w-[279px] dark:text-white">
                    {workData.map((work)=>(
                        <div key={work.title}>
                            {work.title}
                        </div>
                    ))}
                </div>
                <div className="text-[#4B5563] py-6 sm:w-[279px] dark:text-white">
                 {workData.map((work) => (
                    <div key={work.desc}>
                        {work.desc}
                    </div>
                 ))}
                </div>
                <div className="flex flex-wrap pb-6 sm:w-[279px] gap-2 text-[#4B5563]">
                    <Tags name="React"/>
                    <Tags name="Next.js"/>
                    <Tags name="Typescript"/>
                    <Tags name="Nest.js"/>
                    <Tags name="PostgreSQL"/>
                    <Tags name="Tailwindcss"/> 
                    <Tags name="Figma"/>
                    <Tags name="Cypress"/>
                    <Tags name="Storybook"/>
                    <Tags name="Git"/>
                </div>
                <div>
                    <TbExternalLink className="text-[#4B5563] text-xl dark:text-white"/>  
                </div>
            </div>
        </div>
    )    
};

   