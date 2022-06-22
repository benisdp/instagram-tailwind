import react from "@vitejs/plugin-react";
import "dotenv/config";
import postcss from "./postcss.config.js";

/**
 * @type {import('vite').UserConfig}
 */
export default {
  define: {
    "process.env.SHOPIFY_API_KEY": JSON.stringify(process.env.SHOPIFY_API_KEY),
    "process.env.INSTA_APP_ID": JSON.stringify(process.env.INSTA_APP_ID),
    "process.env.HOST": JSON.stringify(process.env.HOST),
  },
  plugins: [react()],
  css: {
    postcss,
  },
};
