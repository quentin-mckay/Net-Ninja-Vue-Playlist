<template>
  <div>
    <h1>Please fill out our form</h1>
    <form>
      <div id="form-header">
        <slot name="f-header"></slot>
      </div>
      <div id="form-fields">
        <slot name="f-fields"></slot>
      </div>
      <div id="form-controls">
        <slot name="f-controls"></slot>
      </div>
      <div id="useful-links">
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
          <li><a href="#">Link 4</a></li>
        </ul>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  components: {

  },
  data () {
    return {
      title: 'I am a dynamic slot title'
    }
  },
  methods: {

  }
}
</script>

<style>


</style>
