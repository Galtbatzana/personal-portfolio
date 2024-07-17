

export function Tags(props) {
  const date = props.date
  const title = props.title

    return (
        <div className="sm:w-[343px] lg:w-[896px] mx-auto mt-12">
           
            <div className="flex sm:flex-col lg:flex-row mx-auto px-8 py-8 gap-3 bg-white rounded-xl shadow-md">
                <div className="lg:order-1 w-[254px]">
                    <img src="/images/logo-upwork.png"/>
                </div>
                <div className="lg:order-3 w-[194px] flex justify-end sm:justify-start">
                    <div>{date}</div> 
                </div>
                <div className="lg:order-2 w-[384px] sm:w-[279px]">
                    <div className="font-bold pb-4">
                        {title}
                    </div>
                    <ul role="list" className="marker:text-black list-disc pl-5 space-y-3">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
                        <li>Sed quis justo ac magna.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    </ul>
                </div>
            </div>

    </div>
    );
}


// export function Tag(props) {
//     return (
//     <div className="p-4 rounded bg-slate-300">
//         {props.title}
//     </div>
//     );
// }