<template>
  <img :src="url + src">
</template>

<script>
  export default {
    name: 'FoodImage',
    props: {
      src: String
    },
    computed: {
      url () {
        return '/static/images/'
      }
    }
  }
</script>