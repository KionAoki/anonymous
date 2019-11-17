module.exports = {
  outputDir: "dist",
  lintOnSave: true,
  runtimeCompiler: false,
  productionSourceMap: false,
  devServer: {
    open: process.platform === "darwin",
    port: 8000,
    https: false,
    hotOnly: false,
    proxy: null,
    disableHostCheck: true,
  }
};