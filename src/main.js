import Vue from 'vue'
import App from './App.vue'

// example: globally register component for use everywhere
// import Ninjas from './Ninjas.vue'
// Vue.component('ninjas', Ninjas)

import VueResource from 'vue-resource'  // brings it in from node_modules
Vue.use(VueResource)

// Custum Directives
Vue.directive('rainbow', {
  bind(el, binding, vnode) {
    el.style.color = '#' + Math.random().toString().slice(2, 8)
  }
})

Vue.directive('theme', {
  bind(el, binding, vnode) {
    // value example
    if (binding.value == 'wide') {
      el.style.maxWidth = '1200px'
    }
    else if (binding.value == 'narrow') {
      el.style.maxWidth = '560px'
    }

    // parameter example
    if (binding.arg == 'column') {
      el.style.background = '#ddd'
      el.style.padding = '20px'
    }
  }
})


export const bus = new Vue()

new Vue({
  el: '#app',
  render: h => h(App)
})
