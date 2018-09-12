import Vue from 'vue'
import Element from 'element-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
