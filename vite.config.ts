import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { defineConfig, Plugin } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

function viteSamplePlugin(): Plugin {
  console.log("vsp: create plugin");
  return {
    name: "vite-sample-plugin",
    configResolved() {
      console.log("vsp: configResolved");
    },
    buildStart() {
      console.log("vsp: buildStart");
    },
    configureServer() {
      console.log("vsp: configureServer");
    },
  }
}

export default defineConfig({
  plugins: [remix(), tsconfigPaths(), viteSamplePlugin()],
});
