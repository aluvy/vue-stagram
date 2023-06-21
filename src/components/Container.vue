<template>
  <div v-if="tab==0">
    <Post v-for="(a,i) in post" :key="i" :post="a" :idx="i" />
  </div>

  <div v-if="tab==1">
    <Filter :uploadImage="uploadImage" />
  </div>
  
  <div v-if="tab==2">
    <Write :uploadImage="uploadImage" />
  </div>

</template>

<script>
import Post from '../components/Post.vue'
import Filter from '../components/Filter.vue'
import Write from '../components/Write.vue'

export default {
  name: 'compContainer',
  props: {
    post: Object,
    tab: Number,
    uploadImage: String,
  },
  components: {
    Post,
    Filter,
    Write,
  }
}
</script>

<style>
</style>
