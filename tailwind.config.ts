import type { Config } from "tailwindcss";

export default {
  content: ["./src/app/**/*.tsx"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
