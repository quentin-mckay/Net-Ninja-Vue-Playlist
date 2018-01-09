<template>
  <div>
    <new-post></new-post>
  </div>

  
</template>

<script>
import NewPost from './components/NewPost'

export default {
  components: {
    'new-post': NewPost

  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Nunito');

body {
  margin: 0;
  font-family: Nunito;
}
</style>
