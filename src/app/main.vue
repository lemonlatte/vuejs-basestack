
<style>
body {
  padding-top: 40px;
}
</style>

<template>
<div class="jumbotron">
  <h1>Hello, {{ who }}.</h1>
  <p>This is a basestack for vuejs. This project integrate vuejs with gulp, vueify and browserify.</p>
</div>
</template>

<script>

export default {
  data () {
    return {
      "who": "world"
    }
  }
}
</script>
