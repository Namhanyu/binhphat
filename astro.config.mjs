import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import devtoolsJson from "vite-plugin-devtools-json";
import icon from "astro-icon";
import showTailwindCSSBreakpoint from "astro-show-tailwindcss-breakpoint";

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    icon({
      include: {
        mdi: ["instagram", "facebook"],
      },
    }),
    showTailwindCSSBreakpoint(),
  ],
  vite: {
    plugins: [devtoolsJson()],
  },
  output: "static",
});
