

  module.exports = {
    devServer: {
      proxy: {
        "^/api/": {
          target: "https://halimsyarif249.herokuapp.com",
          pathRewrite: { "^/api/": "/api/" },
          changeOrigin: true,
          logLevel: "debug"
        }
      }
    }
  };