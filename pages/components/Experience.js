import { Tags } from "./Tags";
import { Card } from "./Card";

const experiences = [
    {
        startDate: "Nov 2021 - Present",
        title: "Sr. Frontend Developer",
        listItems: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Ut pretium arcu et massa semper, id fringilla leo semper.",
            "Sed quis justo ac magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        ]
    },
    {
        startDate: "Jul 2017 - Oct 2021",
        title: "Team Lead",
        listItems: [
            "Sed quis justo ac magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Sed quis justo ac magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        ]
    },
    {
        startDate: "Dec 2015 - May 2017",
        title: "Full Stack Developer",
        listItems: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        ] 
    }
]




export function Experience () {
    return (
        <div className="mx-auto sm:w-[375px] lg:w-[1440px] bg-[#F9FAFB]">
            <div className="mx-auto lg:w-[1216px] sm-[343px] flex-col text-center justify-center pt-24">
                    <p className="bg-[#E5E7EB] text-[#4B5563] px-[20px] py-2 inline text-sm font-medium rounded-[12px]">
                        Experiences
                    </p>
                    <p className="mt-8 sm:mx-10 text-[#4B5563]">
                        Here is a quick summary of my most recent experiences:
                    </p>
            </div>
            <div className="mx-auto py-4 text-[#4B5563]">
                {experiences.map((Experience, index)=> (
                    <div key={index}>
                        <Card props={Experience}/>
                        
                    </div>
                ))}
            </div>
            
        </div>
    ); 
}

