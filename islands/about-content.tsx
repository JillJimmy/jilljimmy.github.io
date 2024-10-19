import { Head } from "$fresh/runtime.ts";
export default function IndexContent() {
    return (
        <>
            <div
                class="row-span-4 md:col-span-4 col-span-1 md:row-span-1 overflow-y-auto bg-white"
                style="scrollbar-color: #000000 #e8e8e8"
            >
                <div class="hero bg-primary min-h-full">
                    <div class="hero-content text-center">
                        <div class="max-w-xl">
                            <h1 class="text-6xl mona font-stretch-animation">
                                Who is Jill Jimmy?
                            </h1>
                        </div>
                    </div>
                </div>
                <div class="p-3 bg-secondary">
                    <p>
                        <em>Who is Jill Jimmy?</em> Wait, you{" "}
                        <strong>seriously</strong>{" "}
                        don't know? OK. Well, all I want you to do is imagine
                        this:
                    </p>
                    <strong>The greatest superhero of ALL TIME.</strong>
                    <p>Pretty cool, right? Now, imagine that as a frog.</p>
                    <p>THAT's Jill Jimmy.</p>
                    <p>
                        He got his powers from this strange soda can. What was
                        it called again? Oh, yes -
                    </p>
                </div>

                <div class="w-full text-center flex flex-col justify-center items-center p-3 bg-white">
                    <img src="canOfDestiny.svg" class="w-64 flex-none" />
                    <img
                        class="cod-lettering"
                        src="/cod-lettering.svg"
                        aria-hidden="true"
                    />
                    <p class="sr-only">Can of Destiny</p>
                </div>
                <div class="w-full p-3 bg-white ">
                    <h2 class="text-6xl mona font-cond font-black">
                        Cool, right?
                    </h2>
                    <p class="text-xl">
                        There it is, in all of its glory. So what does the CoD
                        actually do?<br />Well, it's kinda like a super-duper
                        energy source{" "}
                        <span class="mona font-cond font-bold">
                            to the power of 5000.
                        </span>
                        <br />It gives you the power of strength, intelligence
                        and speed (the Super-Combo™) - all in one package, and
                        its power comes from an undisclosed energy source.
                    </p>
                </div>
                <div class="purple-hero">
                    <div class="hero-content purple-hero-content text-center">
                        <div>
                            <h1 class="text-5xl mona font-black mb-5">
                                But, of course - any superhero would need a good
                                team, right?
                            </h1>
                            <p class="text-xl">Meet the crew.</p>
                        </div>
                    </div>
                </div>
                <div class="wavy bg-black min-h-screen text-primary -my-10 p-6 pt-16 pb-16">
                    <div class="w-full glow min-h-full grid grid-rows-2 grid-cols-1 md:grid-rows-1 gap-2 md:grid-cols-2">
                        <div class="terminal-frame card border-2 border-primary min-h-full">
                            <figure>
                                <img
                                    src="moBot.svg"
                                    class="w-96 p-3 glow"
                                    alt="A computer named moBot with a terminal open and a smiley face. He has rocket thrusters."
                                />
                            </figure>
                            <div class="card-body">
                                <h2 class="text-6xl card-title mona font-black">
                                    moBot
                                </h2>
                                <p class="text-lg">
                                    moBot is Jill Jimmy's computer assistant.
                                    With a full shell and 100% coolness
                                    capacity, he can do just about anything.
                                </p>
                            </div>
                        </div>
                        <div class="terminal-frame card border-2 border-primary min-h-full">
                            <div class="card-body">
                                <h2 class="text-6xl card-title mona font-black">
                                    Bagel
                                </h2>
                                <p class="text-lg">
                                    Bagel is JJ's trusty worm. He's really cool
                                    and is absolutely PSYCHED about being{" "}
                                    <b>the</b> assistant.
                                </p>
                            </div>
                            <figure>
                                <div>
                                    <img src="/bagel.svg" class="w-72 p-7 glow" />
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
