<template>
  <div id="show-posts">
    <h1>All Blog Posts</h1>
    <input type="text" v-model="searchText" placeholder="Search posts...">

    <div v-for="post in filteredPosts" class="single-post">
      <!-- <router-link v-bind:to="{name: 'view-post', params: {id: post.id}}"> -->  <!-- this is the "named routes" way of doing it -->
      <router-link v-bind:to="'/post/' + post.id">
        <h2 v-rainbow>{{ post.title | to-uppercase }}</h2>
      </router-link>
      <p>{{ post.content | snippet }}</p>
    </div>
  </div>


</template>

<script>
import SearchMixin from '../mixins/SearchMixin'  // don't need .js

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
    this.$http.get('https://net-ninja-vue-blog.firebaseio.com/posts.json').then(responseData => {
      // this.posts = responseData.body.slice(0, 10)
      return responseData.json()   // convert to json ?? and return promise object
    }).then(data => {  // do something with promise object returned above
      let postsArray = []
      for (let key in data) {
        data[key].id = key  // make the key of each element an string id of each element as well
        postsArray.push(data[key])
      }
      this.posts = postsArray  // or could just push directly on to posts instead of creating temporary array
    })
  },
  computed: {

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
  },
  mixins: [ SearchMixin ]
}
</script>

<style scoped>
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

a {
  text-decoration: none;
}

</style>
