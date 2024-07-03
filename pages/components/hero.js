import { Aboutme } from "./AboutMe";
import { Handwaving } from "./Handwaving";
import Image from "next/image";

export function Hero() {
    return (
    <>
    <container>
            <div className="flex items-center">
                <Image className="shadow-2xl" src="/Pic.png" width={200} height={200} />
            </div>
            
            <div className="flex px-2 ">
            <h1 className="text-6xl font-bold">
                Hi, I'm Sagar
            </h1> 
                <Handwaving />
            </div>
            <div className="text-xs">
                I'm a full stack developer (React.js & Node.js)
                with a focus on creating (and occasionally designing) 
                exceptional digital experiences that are fast, accessible, 
                visually appealing, and responsive. Even though I have
                been creating web applications for over 7 years, I still
                love it as if it was something new.

              <div><span>Logo</span> Ahmedabad, India</div>
              <div><span>Green Dot</span> Availiable for new projects</div>
              <div><span>GitHub</span><span>Tweeter</span><span>Figma logo</span></div>  
            </div>   
    </container>
    </>

    );
}