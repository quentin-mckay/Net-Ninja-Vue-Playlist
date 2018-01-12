<template>
  <nav>
    <ul>
      <li><router-link to="/" exact>Posts</router-link></li>
      <li><router-link to="/new" exact>Add New Post</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
}
</script>

<style scoped>
nav {
  background: #444;
  padding: 14px;
  margin-bottom: 40px;
}

ul {
  list-style-type: none;
  margin: 0;
  text-align: center;


}

li {
  display: inline-block;
  margin: 0 10px;
  color: white;
}

a {
  color: white;
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 2px;
}

.router-link-active {
  background: #eee;
  color: #444;
}
</style>
