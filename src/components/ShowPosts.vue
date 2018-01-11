<template>
  <div id="show-posts">
    <h1>All Blog Posts</h1>

    <div v-for="post in posts" class="single-post">
      <h2>{{ post.title | to-uppercase }}</h2>
      <p>{{ post.body | snippet }}</p>
    </div>
  </div>


</template>

<script>

export default {

  data () {
    return {
      posts: []
    }
  },
  methods: {

  },
  created() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(responseData => {
      this.posts = responseData.body.slice(0, 10)
    })
  }
}
</script>

<style>
* {
  /* box-sizing: border-box; */
}

#show-posts {
  max-width: 800px;
  margin: 0 auto;
}

/* How to do it Grid style */
/* #show-posts {
  display: grid;
  grid-template-columns: 1fr 800px 1fr;
}

#show-posts > * {
  grid-column: 2;
} */

.single-post {
  background-color: #eee;
  padding:20px;
  margin: 20px 0;
  /* box-sizing: border-box; */
}
</style>
