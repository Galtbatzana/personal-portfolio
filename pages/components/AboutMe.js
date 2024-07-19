import Image from "next/image";

export function Aboutme() {
    return (
        <div className="mx-auto lg:w-[1440px] sm:w-[375px] bg-slate-200">
            <div className="mx-auto pb-4 sm:w-[343px] lg:w-[1280px] bg-white">
                <div className="flex items-center justify-center mt-[96px]">
                    <p className="bg-[#E5E7EB] px-4 py-2 inline text-sm font-medium rounded-full">
                        About me
                    </p>
                </div>
                <div className="lg:flex mx-auto g-[48px]">
                    <div>
                        <div className="sm:w-[320px] lg:w-[584px]">
                            <Image src="/images/Pic01.png" width={400} height={480} />
                        </div>
                    </div>
                    <div className="lg:flex-col p-4">
                        <div className="text-[30px]">Curious about me? Here yoy have it:</div>
                        <div className="lg:w-[584px]">
                            I'm passionate, <p className="underline inline-block">self-proclaned designer</p> who specialize in full stack
                            development (React.js & Node.js). I am very enthusiastic about bringing
                            the technical and visual aspects of digital products to life. User experience,
                            pixel perfect design, and writting clear, readable, highly performant code matter
                            to me.
                        </div>
                        <div>
                            I began my journey as a web developer in 2015, and since then, I've continued to
                            grow and evolve as a developer, taking on new challenges and learning the latest
                            technologies along the way. Now, in my early thirties, 7 years after starting my
                            web development journey. I'm building cutting-edge web applications using modern
                            technologies such as Next.js, TypeScript, Nest.js, Tailwindccss, Superbase and
                            much more.
                        </div>
                        <div>
                            I am very much a proggressive thinker and enjoy working on products end to end,
                            from ideation all the way to decelopment.
                        </div>
                        <div>
                            When I'm not in full-on developer mode, you can find me hovering around on twitter
                            or on indie hacker, witnessing the journey of early of startups or enjoying some
                            free time. You can follow me on <p className="underline inline-block">Twitter</p> where I share techrelated bites and building
                            in public, or you can follw me on <p className="underline inline-block">Github</p>.
                        </div>
                        <div>
                            Finally, some quick bits about me.
                        </div>
                        <div className="flex">
                            <div>
                                <ul role="list" className="marker:text-black list-disc pl-5 space-y-3">
                                    <li>B.E. in Computer Engineering</li>
                                    <li>Fulltime freelancer</li>
                                </ul>
                            </div>
                            <div>
                                <ul role="list" className="marker:text-black list-disc pl-5 space-y-3">
                                    <li>Avid learner</li>
                                    <li>Aspire indie hacker</li>
                                </ul>
                            </div>
                        </div>
                        <div>One last thing, i'm available for freelance work, so feel free to reach out and
                            say hello! I promise i don't bite 😉  
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    );
}

