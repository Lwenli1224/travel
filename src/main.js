import Vue from 'vue'
import 'babel-polyfill'
import App from './App'
import router from './router'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import fastclick from 'fastclick'

Vue.config.productionTip = false
fastclick.attach(document.body)

Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
