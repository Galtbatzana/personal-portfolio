import Image from "next/image";
import { LuSunMedium } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";

export function Header() {
    return (
        <div className="w-[1440] h-[68px] bg-slate-100 text-base">
            <div className="w-[1280px] h-[36px] bg-slate-200 flex justify-between mx-[80px] my-[16px]"> 
                <div className="font-semibold">
                    {`<SS />`}
                </div>
                <div className="flex gap-3">
                    <div className="hidden lg:flex gap-6">
                        <p>About</p>
                        <p>Work</p>
                        <p>Testimonials</p>
                        <p>Contact</p>
                    </div>
                    <div className="flex gap-6">
                        <div className="hidden lg:flex mt-1">
                            <LuSunMedium />
                        </div>
                        <button className="hidden lg:flex bg-black text-white rounded-[10px] px-4 py-px">
                            Download CV
                        </button>
                    </div>
                </div>
                <div className="lg:hidden">
                    <GiHamburgerMenu />
                </div>

            </div>
        </div>
    );
}

