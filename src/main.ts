import Vue from 'vue'
import ElementUI from 'element-ui' // 1. 引入element UI主文件
import 'element-ui/lib/theme-chalk/index.css' // 2. 引入element UI的样式文件

import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false

Vue.use(ElementUI) // 3. 使用

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
