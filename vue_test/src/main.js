//运行时vue，不包含模板解析器
import Vue from 'vue'

//完整版vue，包含模板解析器
// import Vue from 'vue/dist/vue'

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  //完整版vue，包含模板解析器，可以用template渲染
  //template: '<App></App/>',

  //运行时vue，不包含模板解析器，用render函数渲染
  render: h => h(App),
}).$mount('#app')
