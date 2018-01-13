<template>
  <div id="single-post">
    <h1>{{ post.title }}</h1>
    <article>{{ post.body }}</article>
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
    this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.id).then(responseData => {
      this.post = responseData.body
    })

  }
}
</script>

<style scoped>
#single-post {
  max-width: 960px;
  margin: 0 auto;
}
</style>
