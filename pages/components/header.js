import { LuSunMedium } from "react-icons/lu";

export function Header() {
    return (
    <div className="bg-slate-200 flex justify-between ">
        <div>Logo</div>
        <div className="hidden lg:block">Desktop Navigation</div>
        <div className="hidden lg:block"><LuSunMedium /></div>
        <div className="hidden lg:block">Download CV</div>
        <div className="lg:hidden">Mobile Menu</div>
    </div> 
    );
}

