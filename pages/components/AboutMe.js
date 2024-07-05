import Image from "next/image";

export function Aboutme() {
    return (
        <div className="w-[1440px] h-[auto] bg-[#F9FAFB]-200">
            <p className="bg-[#E5E7EB] px-1 py-1 flex items-center justify-center ">
                About me
            </p>
            <div className="bg-blue-300 h-[100px] flex items-center justify-center">
                <p className="px-4 py-2 bg-slate-200 inline text-sm font-medium rounded-full">
                    Example
                </p>
            </div>
            {/* <div>
                <div>
                    <Image src="/images/Pic01.png" width={400} height={480} />
                </div>
                <div>
                    <div>Curious about me? Here yoy have it:</div>
                    <div>I'm passionate, self-proclaned designer </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

            </div> */}
        </div>
    );
}

