<template>
  <v-avatar
    color="grey lighten-4"
    size="64"
  >
    <img :src="src" alt="avatar">
  </v-avatar>
</template>

<script>
  export default {
    data: () => ({
      src: '/public/v.png'
    })
  }
</script>

