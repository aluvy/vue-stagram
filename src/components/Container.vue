<template>
  <div>
    
    <Post v-for="(a,i) in data" :key="i" :item="a" :idx="i" />

    <!-- <Post :data="data"/>
    <Post :data="data"/> -->
  </div>
</template>

<script>
import Post from '../components/Post.vue'

export default {
  name: 'compContainer',
  props: {
    // msg: String
    data: Array,
  },
  components: {
    Post,
  }
}
</script>

<style>
</style>
