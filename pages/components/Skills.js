import { Tag } from "./Tag";
import Image from "next/image";

export function Skills () {
    return (
        <div className="w-[1240px] mx-0">
            
            <div className="h-[100px] flex-col text-center justify-center">
                <p className="bg-[#E5E7EB] px-4 py-2 inline text-sm font-medium rounded-full">
                    Skills
                </p>
                <p className="mt-4">
                    The skills, tools and Technologies I am really good at:
                </p>
            </div>

            <div className="w-[1240px] mx-0">
                <div className="flex justify-evenly">
                    <img src="/images/JS.jpg"/>
                    <img src="/images/Ts.jpg"/>
                    <img src="/images/React.jpg"/>
                    <img src="/images/Next.jpg"/>
                    <img src="/images/Node.jpg"/>
                    <img src="/images/Ex.jpg"/>
                    <img src="/images/Nest.jpg"/>
                    <img src="/images/Socket.jpg"/>
                </div>
                <div className="flex justify-evenly">
                    <img src="/images/PostgreSQL.jpg"/>
                    <img src="/images/MongoDB.jpg"/>
                    <img src="/images/Sass.jpg"/>
                    <img src="/images/Tailwind.jpg"/>
                    <img src="/images/Figma.jpg"/>
                    <img src="/images/Cypress.jpg"/>
                    <img src="/images/Storybook.jpg"/>
                    <img src="/images/Git.jpg"/>
                </div>
            </div>
        </div>

    );
}      

{/* <img src="/images/JS.jpg"/>
<Image src="/images/Ts.jpg" width={100} height={100}/>
<Image src="/images/React.jpg" width={100} height={100}/>
<Image src="/images/Next.jpg" width={100} height={100}/>
<Image src="/images/Node.jpg" width={100} height={100}/>
<Image src="/images/Ex.jpg" width={100} height={100}/>
<Image src="/images/Next.jpg" width={100} height={100}/>
<Image src="/images/Socket.jpg" width={100} height={100}/>
</div>
<div className="flex">
<Image src="/images/PostgreSQL.jpg" width={100} height={100}/>
<Image src="/images/MongoDB.jpg" width={100} height={100}/>
<Image src="/images/Sass.jpg" width={100} height={100}/>
<Image src="/images/Tailwind.jpg" width={100} height={100}/>
<Image src="/images/Figma.jpg" width={100} height={100}/>
<Image src="/images/Cypress.jpg" width={100} height={100}/>
<Image src="/images/Storybook.jpg" width={100} height={100}/>
<Image src="/images/Git.jpg" width={100} height={100}/> */}

    // <div className="flex gap-2">
    //     <Tag title="React" />
    //     <Tag title="Next" />
    //     <Tag title="Java Script" />
    //     <Tag title="Node"/>
    // </div>