import Image from "next/image";
import { LuSunMedium } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";

export function Header() {
    return (
    
        <div className="flex h-[36px] sm:w-[343px] lg:w-[1280px] bg-yellow-50 justify-between mx-auto mt-5">
            <div className="text-[26px] font-medium text-[#111827] mx-8">
                {'<SS/>'}
            </div> 
            <div className="sm:hidden lg:flex w-[554px] items-center">
                <div className="flex gap-6 justify-items-center justify-between items-center">
                    <p>AboutMe</p>
                    <p>Work</p>
                    <p>Testimonials</p>
                    <p>Contact</p>
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
                 <GiHamburgerMenu className="size-6"/>
            </div>
        </div>

       
    );
}

// export function Header() {
//     return (
//         <div className="w-[1440] h-[68px] bg-slate-100 text-base">
//             <div className="w-[1280px] h-[36px] bg-slate-200 flex justify-between mx-[80px] my-[16px]"> 
//                 <div className="font-semibold">
//                     {`<SS />`}
//                 </div>
//                 <div className="flex gap-3">
//                     <div className="hidden lg:flex gap-6">
//                         <p>About</p>
//                         <p>Work</p>
//                         <p>Testimonials</p>
//                         <p>Contact</p>
//                     </div>
//                     <div className="flex gap-6">
//                         <div className="hidden lg:flex mt-1">
//                             <LuSunMedium />
//                         </div>
//                         <button className="hidden lg:flex bg-black text-white rounded-[10px] px-4 py-px">
//                             Download CV
//                         </button>
//                     </div>
//                 </div>
//                 <div className="lg:hidden">
//                     <GiHamburgerMenu />
//                 </div>

//             </div>
//         </div>
//     );
// }
