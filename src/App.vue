<template>
  <div>
    <!-- <show-posts></show-posts>
    <list-posts></list-posts> -->
    <router-view></router-view>
  </div>


</template>

<script>
import NewPost from './components/NewPost'
import ShowPosts from './components/ShowPosts'
import ListPosts from './components/ListPosts'

export default {
  components: {
    'new-post': NewPost,
    'show-posts': ShowPosts,
    'list-posts': ListPosts
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
