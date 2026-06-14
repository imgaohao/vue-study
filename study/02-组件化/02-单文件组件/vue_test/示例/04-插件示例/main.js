import Vue from 'vue'
import App from './App.vue'

//引入插件
import plugin from './plugin.js'
//使用插件
Vue.use(plugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
