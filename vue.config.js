module.exports = {
    runtimeCompiler: true,
    publicPath: './',
    devServer: {
      inline: true,
      contentBase: '.',
      host: "192.168.0.104",
      public: "128.73.68.223:80",
      port: 80,
      disableHostCheck: true,
      hot: true,
      hotOnly: true
    }
  }