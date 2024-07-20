import Image from "next/image";

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
    },
    {
        icon: "/images/icon-sass.png",
        name: "Sass/Scss",
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
        <div>
            {skillsicon.map((skill)=>(
                <div key={skill.name}>
                    <Image src={skill.icon} width={40} height={40} />
                    {skill.name}
                </div>    
            ))}
        </div>
    );
}
