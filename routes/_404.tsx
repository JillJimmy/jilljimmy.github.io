import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <div class="p-3">
      <Head>
        <title>🥴 404</title>
      </Head>
      <div class="mockup-browser bg-base-200">
        <div class="mockup-browser-toolbar">
          <div class="input !bg-base-300 font-mono">jill-jimmy.com</div>
        </div>
        <div class="m-3 p-3 text-center rounded-md bg-primary">
          <h1 class="text-6xl font-cond mona font-black">
            I'm sorry, <i>what?</i>
          </h1>
          <br />
          <code class="font-semibold text-sm">
            We have no idea what the heck you just put in that address bar. Why
            don't you just completely disregard this stupid 404 page and get
            back to what you were doing?
          </code>
          <br />
          <br />
          <a href="/" class="btn btn-block btn-secondary rounded-full no-animation">Go home</a>
        </div>
      </div>
      
    </div>
  );
}
