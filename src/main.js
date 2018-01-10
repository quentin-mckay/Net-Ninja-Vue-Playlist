import Vue from 'vue'
import App from './App.vue'

// example: globally register component for use everywhere
// import Ninjas from './Ninjas.vue'
// Vue.component('ninjas', Ninjas)

import VueResource from 'vue-resource'
Vue.use(VueResource)


export const bus = new Vue()

new Vue({
  el: '#app',
  render: h => h(App)
})
