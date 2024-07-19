import Image from "next/image";
import { TbExternalLink } from "react-icons/tb";


export function Work () {
    return (

        <div className="w-[375px] mx-auto bg-white">
            <div className="w-[343px] mx-auto rounded-lg shadow">
                <div className="flex flex-col">
                    <div className="flex justify-center">
                        <Tags />
                    </div>
                    <p className="text-[#4B5563] text-center">
                        Some of the noteworthy projects I have built:
                    </p>    
                </div>
                <div>
                    <div className="w-[343px] bg-slate-200 shadow p-4">
                        <Image src="/images/work.png" width={279} height={279} className="w-full rounded-lg"/>
                    </div>
                    <div>
                        <p className="text-[#111827 text-bold p-4">
                            Fiskil
                        </p>
                        <p className="text-[#4B5563] p-4">
                            Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit. Maecenas nec urna ac 
                            tellus volutpat viverra. Vestibulum 
                            ante ipsum primis in faucibus orci 
                            luctus et ultrices posuere cubilia curae.
                        </p>
                        <div className="p-4">
                            Tags
                        </div>
                        <div>
                        <   TbExternalLink />  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
}


// const Tags = [];

export function Tags () {
    return (
        <div>
            Tag
        </div>
    );
}