<template>
  <div>
    <!-- <new-post></new-post> -->
    <show-posts></show-posts>
  </div>


</template>

<script>
import NewPost from './components/NewPost'
import ShowPosts from './components/ShowPosts'

export default {
  components: {
    'new-post': NewPost,
    'show-posts': ShowPosts
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
