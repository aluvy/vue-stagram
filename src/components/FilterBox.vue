<template>
  <div @click="mittEvent">
    <div class="filter-item" :class="`${filter}`" :style="{ backgroundImage : `url(${uploadImage})` }"></div>
    <p class="filter-name"><slot></slot></p>
  </div>
</template>

<script>
export default {
  name: 'compFilterBox',
  data(){
    return {
      msg: 'hello'
    }
  },
  methods: {
    mittEvent(){
      this.emitter.emit('FilterName', this.filter);
    }
  },
  props: {
    uploadImage: String,
    filter: String,
  }
}
</script>

<style scoped>
.filter-item {display:block; width:10rem; height:10rem; background-size:cover; background-position:center;}
.filter-name {text-align:center; font-size:1rem; margin:0.5rem}
</style>