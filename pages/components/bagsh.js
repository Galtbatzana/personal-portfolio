import Link from "next/Link";
import { FaFigma, FaGithub, FaTwitter } from "react-icons/fa";

const socialLinks = [
    {
        link: "/github",
        Icon: FaGithub,
    },
    {
        link: "/twitter",
        Icon: FaTwitter,
    },
    {
        link: "/figma",
        Icon: FaFigma,
    },
];

export function Bagsh() {
    return (
        <div className="flex gap-4">
            {socialLinks.map(({ link, Icon }) => (
                <Link href={link}> 
                    <Icon className="w-10 h-10" />
                </Link>    
            ))}
        </div>
    )
}

