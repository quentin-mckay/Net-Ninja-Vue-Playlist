<template>
  <div>
    <form-helper>
      <div slot="f-header">
        <h3>This is the title of the form</h3>
        <p>Info about the form</p>
      </div>
      <div slot="f-fields">
        <input type="text" placeholder="Name" required>
        <input type="password" placeholder="Password" required>
      </div>
      <div slot="f-controls">
        <button v-on:click="handleSubmit">Submit</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
import formHelper from './components/formHelper'

export default {
  components: {
    'form-helper': formHelper
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
