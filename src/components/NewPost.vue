<template>
  <div id="new-post">

    <h2>Add New Blog Post</h2>

    <form v-on:submit.prevent>
      <label>Post Title:</label>
      <input type="text" required v-model.lazy.prevent="post.title">

      <label>Post Content:</label>
      <textarea v-model.lazy="post.content"></textarea>
    </form>

    <div id="preview">
      <h3>Preview Post</h3>
      <p>Post Title: {{ post.title }}</p>
      <p>Post Content:</p>
      <p> {{ post.content }}</p>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      post: {
        title: '',
        content: ''
      }
    }
  },
  methods: {

  }
}
</script>

<style>
#new-post * {
  box-sizing: border-box;
}

#new-post {
  /* background-color: #eee; */
  margin: 0 auto;
  max-width: 500px;
}

label {
  display: block;
  margin: 20px 0 10px ;   /* top right+left bottom */
}

input[type="text"], textarea {
  display: block;
  width: 100%;
  padding: 8px;
}

#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}

h3 {
  /* margin-top: 10px;  /* default h3 margin is 18.72 ?? too big */
}

</style>
