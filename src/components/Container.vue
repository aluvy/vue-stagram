<template>
  <div>
    <Post v-for="(a,i) in post" :key="i" :post="a" :idx="i" />
  </div>
</template>

<script>
import Post from '../components/Post.vue'

export default {
  name: 'compContainer',
  props: {
    post: Object,
  },
  components: {
    Post,
  }
}
</script>

<style>
</style>
