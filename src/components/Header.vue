<template>
  <header>
    <h1 @click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
import { bus } from '../main'

export default {
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {
      // title: 'I am local data overridden by the prop data'
    }
  },
  methods: {
    changeTitle: function () {
      // this.$emit('changeTitle', 'Vue Wizards')     emits event on this component
      // this.title = 'Vue Wizards'  // why do we need this if it's already controlled by prop
      bus.$emit('titleChanged', 'Vue Wizards')
    }
  }
}
</script>

<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>
