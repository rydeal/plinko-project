module.exports = {
  baseUrl: "/my-first-project/",
  presets: ["@vue/cli-plugin-babel/preset"],
  publicPath: process.env.NODE_ENV === "production" ? "/plinko-project/" : "/"
};
