import { type Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [ {
      jilljimmy: {
        "primary": "#2eff3f",
        "secondary": "#edf909",
        "accent": "#2537ff",
        "neutral": "#ffffff",
        "base-100": "#ffffff"
      },
  } ]
  },
  plugins: [daisyui],
} satisfies Config;
