import { LuSunMedium } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

export default function Headermenu() {
    return 
    (
    <div>
        <div className="flex">
            <p>{`<SS/>`}</p>
            <IoClose />
        </div>
        <div>
            <p>About</p>
            <p>Work</p>
            <p>Testimonials</p>
            <p>Contact</p>
        </div>
        <div>
            <div className="flex justify-between">
                <p>Switch Theme</p>
                <LuSunMedium onClick={Nav()}/>
            </div>
            <button className="bg-black text-white rounded-[10px] px-4 py-px ml-3">Download CV</button>
        </div>
    </div>
    
    );
} 

