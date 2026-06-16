const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭语法检查，语法检查的作用是检查代码是否符合vue的规范，这里关闭是为了方便开发
  lintOnSave: false,

  // 代理目标服务器，解决跨域问题
  // 这种配置方式，只能配置一个目标服务器
  // devServer: {
  //   proxy: 'http://localhost:9999' //目标服务器地址
  // },

  //可以根据不同路径，配置不同的目标服务器
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:9999',
        // ws: true, //用于支持websocket
        changeOrigin: true, //Host和Origin会改变，指向目标服务器的地址，而不是当前服务器的地址
        // 重写路径，去掉/api前缀
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})
