const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: "src/main.js",
      title: "Movie Search",
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "/REPO_NAME/" : "/",
});
