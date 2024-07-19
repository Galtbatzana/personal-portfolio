import Image from "next/image";
import { TbExternalLink } from "react-icons/tb";


export function Work () {
    return (

        <div className="w-[375px] mx-auto lg:w-[1440px] bg-slate-100">
            <div className="w-[343px] mx-auto lg:w-[1152px] rounded-lg">
                <div className="lg:flex-col">
                    <div className="">
                        <div className="flex justify-center pb-4">
                            <Tags />
                        </div>
                        <p className="text-[#4B5563] mx-6 pb-4 text-center">
                            Some of the noteworthy projects I have built:
                        </p>    
                    </div>
                    <div className="sm:p-8 shadow rounded-xl pb-4 lg:flex">
                        <div className="bg-slate-200 rounded-t-xl flex-1">
                            <Image src="/images/work.png" width={279} height={279} className="w-full rounded-lg p-10"/>
                        </div>
                        <div className="flex-1 lg:p-12 sm:m-8">
                            <p className="text-[#111827 font-semibold">
                                Fiskil
                            </p>
                            <p className="text-[#4B5563] py-6">
                                Lorem ipsum dolor sit amet, consectetur 
                                adipiscing elit. Maecenas nec urna ac 
                                tellus volutpat viverra. Vestibulum 
                                ante ipsum primis in faucibus orci 
                                luctus et ultrices posuere cubilia curae.
                            </p>
                            <div className="pb-6">
                                <Tags/>
                                <Tags/>
                                <Tags/>
                                <Tags/>
                                <Tags/> 
                            </div>
                            <div>
                                <TbExternalLink />  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Tags () {
    return (
        <div className="bg-slate-300 py-1 px-4 rounded-3xl">
            Tag
        </div>
    );
}

