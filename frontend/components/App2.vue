<template>
  <div class="container">
    {{ counter }}!!!
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'app2',
    computed: {
      ...mapGetters({'counter': 'counter/value'})
    }
  }
</script>

<style>
</style>
