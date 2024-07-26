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


export function NavigationCol () {

    return (
        <div className="flex flex-col gap-4 p-4 text-[#4B5563] dark:text-white">
            {navigations.map((nav)=>(
                <Link key={nav.link} href={nav.link}>
                        {nav.name}
                </Link>
            ))}
        </div>
    );
}

