import Vue from 'vue'
import App from './App.vue'

//引入混合对象
// import { hunhe, hunhe2 } from './mixin.js'

Vue.config.productionTip = false

//全局混合
// Vue.mixin(hunhe)
// Vue.mixin(hunhe2)

new Vue({
  render: h => h(App),
}).$mount('#app')
