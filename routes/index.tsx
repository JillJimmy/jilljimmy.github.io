import { Head } from "$fresh/runtime.ts";
export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/home.css" />
      </Head>
      <div>
        <div class="grid grid-rows-5 grid-cols-1 lg:grid-cols-5 lg:grid-rows-1 gap-3 bg-base-200 min-h-screen p-3">
          <div class="row-span-4 lg:col-span-4 col-span-1 lg:row-span-1 rounded-sm bg-[#23b4fc]">
            <div class="bannerImage">
              </div>
          </div>
          <div class="lg:row-span-1 grid lg:grid-rows-3 lg:grid-cols-1 grid-rows-1 grid-cols-3 gap-3">
           <a class="p-2 bg-black text-base-200"><p class="font-mono"><b>Home</b></p></a>
           <a class="p-2 hover:cursor-pointer hover:bg-base-300"><p class="font-mono">About</p></a>
            
          </div>
        </div>
      </div>
    </>
  );
}
