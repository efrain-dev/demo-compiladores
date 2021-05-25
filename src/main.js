import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Navigation from './components/Navigation.vue'

Vue.config.productionTip = false

new Vue({
  components: {
    'navigation': Navigation
  },

  router,
  render: h => h(App)
}).$mount('#app')
