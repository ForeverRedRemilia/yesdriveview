import Vue from 'vue'
import App from './App.vue'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import SlideVerify from 'vue-monoplasty-slide-verify'

Vue.config.productionTip = false

Vue.use(ElementUi)
Vue.use(SlideVerify)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
