import Vue from 'vue'
import App from './App.vue'
import vuePreviewImage from './lib/index'

Vue.use(vuePreviewImage)

new Vue({
  el: '#app',
  render: h => h(App)
})
