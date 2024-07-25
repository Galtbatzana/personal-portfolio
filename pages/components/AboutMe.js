import Image from "next/image";

export function Aboutme() {
    return (
        <div className="mx-auto lg:w-[1440px] sm:w-[375px] bg-[#F9FAFB]">
            <div className="mx-auto pb-4 sm:w-[343px] sm:py-16 lg:w-[1280px] lg:pb-24">
                <div className="flex items-center justify-center sm:p-6 lg:pt-24">
                    <p className="bg-[#E5E7EB] px-4 py-2 inline text-sm text-[#4B5563] font-medium rounded-full">
                        About me
                    </p>
                </div>
                <div className="lg:w-[1216px] lg:flex mx-auto g-12 bg-[#F9FAFB]">
                    <div className="sm:pb-12 w-full aspect-[5/6]">
                        <div className="sm:w-[280px] sm:h-[360px] lg:w-[584px] relative sm:right-10 bg-[slate-50]">
                            <Image src="/images/Pic01.png" width={400} height={480} className="relative block object-cover w-full"/>
                        </div>
                    </div>
                    <div className="lg:flex-col p-4">
                        <div className="text-[24px] text-[#111827] sm:pb-6 lg:pb-1.5">
                            Curious about me? Here you have it:
                        </div>
                        <div className="lg:w-[584px] text-[#4B5563]">
                            I'm passionate, <p className="underline inline-block">self-proclaned designer</p> who specialize in full stack
                            development (React.js & Node.js). I am very enthusiastic about bringing
                            the technical and visual aspects of digital products to life. User experience,
                            pixel perfect design, and writting clear, readable, highly performant code matter
                            to me.
                        </div>
                        <div className="text-[#4B5563]">
                            I began my journey as a web developer in 2015, and since then, I've continued to
                            grow and evolve as a developer, taking on new challenges and learning the latest
                            technologies along the way. Now, in my early thirties, 7 years after starting my
                            web development journey. I'm building cutting-edge web applications using modern
                            technologies such as Next.js, TypeScript, Nest.js, Tailwindccss, Superbase and
                            much more.
                        </div>
                        <div className="text-[#4B5563]">
                            I am very much a proggressive thinker and enjoy working on products end to end,
                            from ideation all the way to decelopment.
                        </div>
                        <div className="text-[#4B5563]">
                            When I'm not in full-on developer mode, you can find me hovering around on twitter
                            or on indie hacker, witnessing the journey of early of startups or enjoying some
                            free time. You can follow me on <p className="underline inline-block">Twitter</p> where I share techrelated bites and building
                            in public, or you can follw me on <p className="underline inline-block">Github</p>.
                        </div>
                        <div className="text-[#4B5563]">
                            Finally, some quick bits about me.
                        </div>
                        <div className="flex">
                            <div className="text-[#4B5563] py-4">
                                <ul role="list" className="marker:text-black list-disc pl-5 space-y-3">
                                    <li>B.E. in Computer Engineering</li>
                                    <li>Full time freelancer</li>
                                </ul>
                            </div>
                            <div className="text-[#4B5563] py-4">
                                <ul role="list" className="marker:text-black list-disc pl-5 space-y-3">
                                    <li>Avid learner</li>
                                    <li>Aspire indie hacker</li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-[#4B5563]">One last thing, i'm available for freelance work, so feel free to reach out and
                            say hello! I promise i don't bite 😉  
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    );
}

