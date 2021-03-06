import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './assets/tailwind.css'

// Particulas
import VueParticles from 'vue-particles'
Vue.use(VueParticles)



Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
