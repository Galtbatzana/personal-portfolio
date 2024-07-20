import { Tags } from "./Tags";

export function Footer () {
    return (
        <div className="sm:w-[375px] bg-slate-200 mx-auto">
            <div className="sm:w-[343px] bg-white mx-auto flex justify-center">
                <div className="bg-slate-300 py-1 px-5 rounded-xl">
                    get in touch
                </div>
                <div>
                    What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.
                </div>
            </div>
        </div>
    );
}