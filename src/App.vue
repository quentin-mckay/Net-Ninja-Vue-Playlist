<template>
  <div>
    <!-- <show-posts></show-posts>
    <list-posts></list-posts> -->
    <app-header></app-header>
    <router-view></router-view>
  </div>


</template>

<script>
import NewPost from './components/NewPost'
import ShowPosts from './components/ShowPosts'
import ListPosts from './components/ListPosts'
import Header from './components/Header'

export default {
  components: {
    'new-post': NewPost,
    'show-posts': ShowPosts,
    'list-posts': ListPosts,
    'app-header': Header
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
