<template>
  <div id="ninjas">
    <ul>
      <li v-for="ninja in ninjas" v-on:click="ninja.show = !ninja.show">
        <h2>{{ ninja.name }}</h2>
        <h3 v-show="ninja.show">{{ ninja.speciality }}</h3>
      </li>
    </ul>
    <button v-on:click="deleteNinja">Delete Ninja</button>
  </div>
</template>

<script>
export default {
  props: {
    ninjas: {
      type: Array,
      required: true
    }
  },
  data () {
    return {

    }
  },
  methods: {
    deleteNinja: function () {
      this.ninjas.pop()
    }
  }
}
</script>

<style scoped>
#ninjas {
  background-color: #eee;
  /* width: 100%; */
  max-width: 1200px;
  margin: 40px auto;
  box-sizing: border-box;
  padding: 0 20px;
}
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;

  border: 1px solid #222;
  padding: 30px;
  margin: 10px;
}
</style>
