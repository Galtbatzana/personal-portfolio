import Image from "next/image";

export function Aboutme() {
    return (
        <div className="w-[1440px] h-[auto] bg-red-500">
        
            <div className="bg-red-200 h-[100px] flex items-center justify-center">
                <p className="bg-[#E5E7EB] px-4 py-2 inline text-sm font-medium rounded-full">
                    About me
                </p>
            </div>


            <div className="flex g-[48px]">
                <div className="w-[584px] h-[694px]">
                    <Image src="/images/Pic01.png" width={400} height={480} />
                </div>
                <div className="flex-col w-[584px] h-[694px]">
                    <div className="text-[30px]">Curious about me? Here yoy have it:</div>
                    <div className="">
                        I'm passionate, self-proclaned designer who specialize in full stack
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
                        free time. You can follow me on twitter where I share techrelated bites and building
                        in public, or you can follw me on Github. 
                    </div>
                    <div>
                        Finally, some quick bits about me.
                    </div>
                    <div>
                        <ul>
                            <li>B.E. in Computer Engineering</li>
                            <li>Avid learner</li>
                        </ul>
                        <ul>
                            <li>Fulltime freelancer</li>
                            <li>Aspire indie hacker</li>
                        </ul>
                    </div>
                    <div>One last thing, i'm available for freelance work, so feel free to reach out and
                        say hello! I promise i don't bite 
                    </div>
                </div>

            </div> 
        </div>
    );
}

