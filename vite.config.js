import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  devServer: {
    historyApiFallback: true,
  },
});

//This help reload the pages without 404 error, historyApiFallback
// devServer: {
//   historyApiFallback: true,
// },
