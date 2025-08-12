import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import devtoolsJson from "vite-plugin-devtools-json";
import icon from "astro-icon";

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
  ],
  vite: {
    plugins: [devtoolsJson()],
  },
  output: "static",
});
