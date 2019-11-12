<template>
  <div id="previewImage" v-if="showDialog">
    <button>你好</button>
  </div>
</template>

<script>
export default {
  name: 'previewImage',
  props: {
    showDialog: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  components: {}
}
</script>

<style scoped>
</style>
