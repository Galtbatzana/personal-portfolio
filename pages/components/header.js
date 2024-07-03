import Image from "next/image";
import { LuSunMedium } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";

export function Header() {
    return (
        <div className="bg-slate-200 flex justify-between h-10 text-lg pt-1.5">
            <div className="font-semibold">{`<SS />`}</div>
            <div className="hidden lg:block">Desktop Navigation</div>
            <div className="hidden lg:block pt-1.5"><LuSunMedium /></div>
            <button className="hidden lg:block bg-black text-white rounded-[10px] px-4 ">Download CV</button>
            <div className="lg:hidden size-1.5"><GiHamburgerMenu /></div>
        </div>
    );
}

