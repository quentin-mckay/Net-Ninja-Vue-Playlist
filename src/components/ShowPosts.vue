<template>
  <div id="show-posts">
    <h1>All Blog Posts</h1>
    <input type="text" v-model="searchText" placeholder="Search posts...">

    <div v-for="post in filteredPosts" class="single-post">
      <h2 v-rainbow>{{ post.title | to-uppercase }}</h2>
      <p>{{ post.body | snippet }}</p>
    </div>
  </div>


</template>

<script>

export default {

  data () {
    return {
      posts: [],
      searchText: ""
    }
  },
  methods: {

  },
  created() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(responseData => {
      this.posts = responseData.body.slice(0, 10)
    })
  },
  computed: {
    filteredPosts: function() {
      return this.posts.filter((post) => {
        return post.title.match(this.searchText)
      })
    }
  },
  filters: {
    // Can do it either way
    // 'to-uppercase': function (value) {
    //   return value.toUpperCase()
    // }
    toUppercase(value) {  // named like this to be used like -> to-uppercase
      return value.toUpperCase()
    }
  },
  directives: {
    'rainbow': {
      bind(el, binding, vnode) {
        el.style.color = '#' + Math.random().toString(16).slice(2, 8)
      }
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;  /* used by input width 100% */
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

input[type="text"] {        /* box-sizing matters for search box */
  width: 100%;
  padding: 10px;
}
</style>
