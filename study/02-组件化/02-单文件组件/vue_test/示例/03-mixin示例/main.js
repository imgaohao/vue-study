//运行时vue，不包含模板解析器
import Vue from 'vue'

//完整版vue，包含模板解析器
// import Vue from 'vue/dist/vue'

import App from './App.vue'

//引入混合对象
import { hunhe, hunhe2 } from './mixin.js'

// import { hunhe, hunhe2 } from './mixin.js'

Vue.config.productionTip = false

//全局混合
// Vue.mixin(hunhe)
// Vue.mixin(hunhe2)

new Vue({
  //完整版vue，包含模板解析器，可以用template渲染
  //template: '<App></App/>',

  //运行时vue，不包含模板解析器，用render函数渲染
  render: h => h(App),
}).$mount('#app')
