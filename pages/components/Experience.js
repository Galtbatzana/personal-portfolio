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
        <div>
            {experiences.map((Experience, index)=> (
                <div key={index}>
                    <Card props={Experience}/>
                </div>
            ))}
        </div>
    ); 
}

