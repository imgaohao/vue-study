const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭eslint，eslint的作用是检查代码是否符合vue的规范，这里关闭是为了方便开发
  lintOnSave: false
})
