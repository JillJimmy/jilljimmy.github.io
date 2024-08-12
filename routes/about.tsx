import { Head } from "$fresh/runtime.ts";
import AboutContent from "../islands/about-content.tsx";
export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/home.css" />
      </Head>
      <div class="overflow-hidden">
        <div class="grid grid-rows-5 grid-cols-1 md:grid-cols-5 md:grid-rows-1 gap-3 bg-base-200 min-h-screen max-h-screen p-3">
          <AboutContent />
          <div class="md:row-span-1 grid md:grid-rows-3 md:grid-cols-1 grid-rows-1 grid-cols-3 gap-3">
            <a
              class="p-2 hover:cursor-pointer hover:bg-base-300 hover:font-bold"
              href="./"
            >
              <p class="font-mono">
                Home
              </p>
            </a>
            <a class="p-2 bg-black text-base-200 font-bold">
              <p class="font-mono">About</p>
            </a>
            <div class="col-span-1 row-span-1 md:grid-rows-2 grid grid-cols-2 md:grid-cols-1">
              <div></div>
              <div class="grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 content-end">
                <div class="md:content-end text-end md:text-start">
                  <a
                    class="btn btn-circle"
                    href="https://github.com/JillJimmy/web"
                  >
                    <img
                      height="32"
                      width="32"
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/github.svg"
                    />
                  </a>
                </div>
                <div class="content-end text-end">
                  <p class="font-mono font-bold">JILL JIMMY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
