<template>
  <div id="new-post">

    <h2>Add New Blog Post</h2>

    <form v-if="!submitted">
      <!-- Title Field -->
      <label>Post Title:</label>
      <input type="text" required v-model.lazy.prevent="post.title">

      <!-- Content Field -->
      <label>Post Content:</label>
      <textarea v-model.lazy="post.content"></textarea>

      <!-- Category Checkboxes -->
      <div id="checkboxes">
        <label for="ninjas">Ninjas</label>
        <input type="checkbox" id="ninjas" value="ninjas" v-model="post.categories">

        <label for="wizards">Wizards</label>
        <input type="checkbox" id="wizards" value="wizards" v-model="post.categories">

        <label for="mario">Mario</label>
        <input type="checkbox" id="mario" value="mario" v-model="post.categories">

        <label for="cheese">Cheese</label>
        <input type="checkbox" id="cheese" value="cheese" v-model="post.categories">
      </div>

      <!-- Author Select -->
      <label>Author:</label>
      <select v-model="post.author">
        <option v-for="author in authors">{{ author }}</option>
      </select>

      <!-- Submit Button -->
      <button v-on:click.prevent="submitPost">Add Post</button>

    </form>

    <div v-if="submitted">
      <h3>Your post has been submitted!</h3>
    </div>

    <div id="preview">
      <h3>Preview Post</h3>
      <p>Post Title: {{ post.title }}</p>
      <p>Post Content:</p>
      <p> {{ post.content }}</p>
      <p>Post Categories:</p>
      <ul>
        <li v-for="category in post.categories">{{ category }}</li>
      </ul>
      <p>Post Author: {{ post.author }}</p>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      post: {
        title: '',
        content: '',
        categories: [],
        author: ''
      },
      authors: ['Quentin', 'Laura', 'Azzy', 'Spiderman'],  // category options
      submitted: false  // should we show submitted   or not

    }
  },
  methods: {
    submitPost: function () {
      this.$http.post('https://jsonplaceholder.typicode.com/posts', {
        title: this.post.title,
        body: this.post.content,
        userId: 1
      }).then(data => {
        console.log(data);
        this.submitted = true
      })
    }
  }
}

</script>

<style scoped>
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
  margin-top: 10px;  /* default h3 margin is 18.72 ?? too big */
}

#checkboxes input {  /* could also do input[type="checkbox"] */
  display: inline-block;
  margin-right: 10px;
}

#checkboxes label {
  display: inline-block;
}


/* ====== MEDIA QUERY ====== */
@media (max-width: 400px) {
  #new-post {
    margin: 15px;
  }
}

</style>
