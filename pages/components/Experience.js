import { Tags } from "./Tags";
import { Card } from "./Card";

const experience = {
    startDate: "Nov 2021 - Present",
    endDate: "Nov 2021 - Present",
    title: "Sr. Frontend Developer",
    listItems: ["item1", "item2", "item3"]
};


export function Experience () {
    return (
        
        <div className="sm:w-[343px] lg:w-[1280px] mx-auto mt-12">
            <div className="h-[100px] flex-col text-center justify-center">
                <p className="bg-[#E5E7EB] px-4 py-2 inline text-sm font-medium rounded-full">
                    Experience
                </p>
                <p className="mt-4">
                    Here is a quick summary of my most recent experiences:
                </p>
            </div>
            <di>
                <Tags date="2024/3.6" title="Sr. Frontend Developer" />
                <Tags date="Nov 2021 - Present "/>
            </di>

        </div>
           
    
    ); 
}

