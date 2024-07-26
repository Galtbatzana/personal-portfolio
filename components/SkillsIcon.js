// import Image from "next/image";

const skillsicon = [
    {
        icon: "/images/icon-javscript.png",
        name: "JavaScript",
    },
    {
        icon: "/images/icon-typescript.png",
        name: "Typescript",
    },
    {
        icon: "/images/icon-react.png",
        name: "React",
    },
    {
        icon: "/images/icon-nextjs.png",
        name: "Next.js",
    },
    {
        icon: "/images/icon-nodejs.png",
        name: "Node.js",
    },
    {
        icon: "/images/icon-express.png",
        name: "Express.js",
    },
    {
        icon: "/images/icon-nest.png",
        name: "Nest.js",
    },
    {
        icon: "/images/icon-socket.png",
        name: "Socket.io",
    },
    {
        icon: "/images/icon-postgresql.png",
        name: "PostgreSQL",
    },
    {
        icon: "/images/icon-mongodb.png",
        name: "MongoDB",
        style: "ml-1"
    },
    {
        icon: "/images/icon-sass.png",
        name: "Sass/Scss",
        sttyle: ""
    },
    {
        icon: "/images/icon-tailwindcss.png",
        name: "Tailwindcss",
    },
    {
        icon: "/images/icon-figma.png",
        name: "Figma",
    },
    {
        icon: "/images/icon-cypress.png",
        name: "Cypress",
    },
    {
        icon: "/images/icon-storybook.png",
        name: "Storybook",
    },
    {
        icon: "/images/icon-git.png",
        name: "Git",
    },
]; 

export function SkillsIcon () {
    return (
        <div className="grid sm:grid-cols-3 lg:grid-cols-8 lg:gap-y-16 text-[#4B5563] gap-x-[58px] gap-y-[16px] items-center justify-center">
            {skillsicon.map((skill)=>(
                <div className="flex flex-col justify-center items-center" key={skill.name}>
                    <img src={skill.icon}/>
                    <div className="mt-2 dark:text-white">
                        {skill.name}
                    </div>
                </div>    
            ))}
        </div>
    );
}
