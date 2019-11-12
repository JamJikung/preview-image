<template>
  <div id="app">
    <button @click="showDialog=true">弹出</button>
    <preview-image :showDialog="showDialog"></preview-image>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      showDialog: false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333333;
}
</style>
