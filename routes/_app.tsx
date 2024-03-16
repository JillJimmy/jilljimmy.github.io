import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html lang="en" id="scroll-timeline">
      <head>
        <meta charset="utf-8" />
        <link rel="icon" href="/jj-head-graphic.svg" />
        <link rel="mask-icon" href="/jj-head-graphic.svg" color="#2eff3f" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Jill Jimmy ✨</title>
        <link rel="stylesheet" href="/styles.css" />
        
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
