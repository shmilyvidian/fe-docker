import Vue from 'vue'
import App from './components/App.vue'

Vue.config.productionTip = false
console.log('index.js')
new Vue({
  el: '#app',
  render: h => h(App)
})
