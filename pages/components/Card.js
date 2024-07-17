export const Card = ({props}) => {

    const listItems = props.listItems;

    return (
        <div className="sm:w-[343px] lg:w-[896px] mx-auto mt-12">
            <div className="flex sm:flex-col lg:flex-row mx-auto px-8 py-8 gap-3 bg-white rounded-xl shadow-md">
                <div className="lg:order-1 w-[254px]">
                    <img src="/images/logo-upwork.png"/>
                </div>
                <div className="lg:order-3 w-[194px] flex justify-end sm:justify-start">
                    <div>{props.startDate}</div> 
                </div>
                <div className="lg:order-2 w-[384px] sm:w-[279px]">
                    <div className="font-bold pb-4">
                        {props.title}
                    </div>
                    <ul role="list" className="marker:text-black list-disc pl-5 space-y-3"> 
                            {listItems.map((item, index) => (
                            <li>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
};

