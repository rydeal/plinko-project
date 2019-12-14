module.exports = {
  baseUrl: "/plinko-project/",
  presets: ["@vue/cli-plugin-babel/preset"],
  publicPath: process.env.NODE_ENV === "production" ? "/plinko-project/" : "/"
};
