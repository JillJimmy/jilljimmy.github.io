import CanOfDestiny from "../islands/CanOfDestiny.tsx";

export default function Home() {
  return (
    <div>
      <div class="bg-[#edf909] p-1 sticky text-end top-0 z-50">
        Website under construction, bear with us 🐸🐻
      </div>
      <div id="jj-head">
      </div>
      <div>
        <div class="hero min-h-screen bg-none z-10">
          <div class="hero-content text-center">
            <div class="max-w-md">
              <h3 class="text-3xl font-bold">This is</h3> <br class="sr-only" />
              <h1 class="text-7xl font-black font-cond mona">
                <span class="font-stretch-animation ">J</span>
                <span class="font-stretch-animation animation-delay-200">
                  i
                </span>
                <span class="font-stretch-animation animation-delay-400">
                  l
                </span>
                <span class="font-stretch-animation animation-delay-600">
                  l
                </span>{" "}
                <span class="font-stretch-animation animation-delay-800">
                  J
                </span>
                <span class="font-stretch-animation animation-delay-1000">
                  i
                </span>
                <span class="font-stretch-animation animation-delay-1200">
                  m
                </span>
                <span class="font-stretch-animation animation-delay-1400">
                  m
                </span>
                <span class="font-stretch-animation animation-delay-1600">
                  y
                </span>
              </h1>
            </div>
          </div>
        </div>
        <br class="sr-only" />
        <div class="z-20 p-3">
          <h1 class="text-7xl mona font-cond font-black">
            So who is Jill Jimmy, anyway?
          </h1>
          <br />
          <div class="grid sm:grid-cols-2 grid-cols-1 sm:grid-rows-1 ">
          <div class="text-end flex sm:justify-start">
              <img
                src="/bigBanner.svg"
                class="rounded-md object-cover self-end sm:w-60 w-auto h-0 sm:h-auto invisible md:visible"
                alt="A photo of Jill Jimmy standing on a roch in the beach. He is wearing a white top with the letters J J on it and has a silver and blue artificial leg."
              />
            </div>
            <p class="text-md text-end">
              Who is Jill Jimmy? Did you just say... <em>who is Jill Jimmy?</em>
              {" "}
              Wait, you seriously don't know? OK. This is crazy, but Jill Jimmy
              is kind of the{" "}
              <span class="mona font-stretch-animation font-bold">
                greatest superhero of all time.
              </span>{" "}
              <br />
              <br />
              <em>Oh yeah... and he's a frog.</em>
              <br />
              <br />
              Now I know what you're thinking. You're probably thinking...
              <br />
              <em class="font-bold">
                How come Jill Jimmy, a frog, has superpowers?
              </em>
              <br />
              And the answer is... <em>the Can of Destiny.</em>
              <br />
              <b>What is the Can of Destiny, you ask?</b>
              <br />
              You're just about to find out. It looks something like this:
            </p>
          </div>
        </div>
      </div>
      <div class="w-full text-center justify-center bg-white">
        <div class="relative flex overflow-x-hidden">
        </div>
        <div class="w-full justify-center items-center">
          <video
            src="codSpinning.webm"
            class="w-auto z-10 relative"
            autoplay
            loop
          />
          <img class="w-auto text-center justify-self-center md:-my-96 -my-32 z-20 relative h-1/2 " src="/cod-lettering.svg" aria-hidden="true" />
          <p class="sr-only">Can of Destiny</p>
        </div>
        
      </div>
      <div class="w-full p-3 bg-white mt-32 md:mt-96">
          <h2 class="text-6xl mona font-cond font-black">Cool, right?</h2>
          <p class="text-xl">There it is, in all of its glory. So what does the CoD actually do?<br />Well, it's kinda like a super-duper energy source <span class="mona font-cond font-bold">to the power of 5000.</span><br />It gives you the power of strength, intelligence and speed (the Super-Combo™) - all in one package, and its power comes from an undisclosed energy source.</p>
        </div>
    </div>
  );
}
