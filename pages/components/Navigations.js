import Link from "next/link";

const navigations = [
   {
    name: "About",
    link:  "/about",
   }, 
   {
    name: "Work",
    link:  "/work",
   }, 
   {
    name: "Testimonials",
    link:  "/testimonials",
   }, 
   {
    name: "Contact",
    link:  "/contact",
   } 
];


export function Navigations () {

    return (
        <div className="flex mt-1.5 gap-6 justify-items-center justify-between items-center text-[#4B5563]">
            {navigations.map((nav)=>(
                <Link key={nav.link} href={nav.link}>
                        {nav.name}
                </Link>
            ))}
        </div>
    );
}

