<template>
  <div id="single-post">
    <h1>{{ post.title }}</h1>
    <article>{{ post.content }}</article>
    <p>Author: {{ post.author }}</p>
    <ul>
      <li v-for="category in post.categories">{{ category }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      post: {}
    }
  },
  created() {
    this.$http.get('https://net-ninja-vue-blog.firebaseio.com/posts/' + this.id + '.json').then(responseData => {
      // this.post = responseData.body
      return responseData.json() // returns promise object
    }).then(data => {
      this.post = data   // data gives us single post object
    })

  }
}
</script>

<style scoped>
#single-post {
  max-width: 800px;
  margin: 0 auto;
}
</style>
