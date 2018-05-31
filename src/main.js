import Vue from 'vue'
import App from './App.vue'

require('offline-plugin/runtime').install();

new Vue({
  el: '#app',
  render: h => h(App)
})
