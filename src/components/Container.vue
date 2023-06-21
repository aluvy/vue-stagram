<template>
  <div v-if="tab==0">
    <Post v-for="(a,i) in post" :key="i" :post="a" :idx="i" />
  </div>

  <div v-if="tab==1">
    <!-- <Filter :uploadImage="uploadImage" /> -->
    <div class="filter">
        <div class="upload-image" :style="{ backgroundImage : `url(${uploadImage})` }"></div>
        <div class="filters">
        <ul>
            <li class="filter-1"></li>
            <li class="filter-1"></li>
            <li class="filter-1"></li>
            <li class="filter-1"></li>
            <li class="filter-1"></li>
        </ul>
        </div>
    </div>

  </div>
  
  <div v-if="tab==2">
    <!-- <Write :uploadImage="uploadImage" @write="console.log( 'container', $event )" /> -->
    <div class="writer">
        <div class="upload-image" :style="{ backgroundImage : `url(${uploadImage})` }"></div>
        <div class="write">
            <textarea class="write-box" @change="sendText">write!</textarea>
        </div>
    </div>

  </div>

</template>

<script>
import Post from '../components/Post.vue'
// import Filter from '../components/Filter.vue'
// import Write from '../components/Write.vue'

export default {
  name: 'compContainer',
  data(){
    return {
      
    }
  },
  props: {
    post: Object,
    tab: Number,
    uploadImage: String,
  },
  components: {
    Post,
    // Filter,
    // Write,
  },
  emits: ['write'],
  methods: {
    sendText(e){
      this.$emit('write', e.target.value);
    }  
  },
}
</script>

<style>
.upload-image{padding-bottom:100%; background-size:cover; background-position:center;}
.filters{overflow-x:scroll; white-space:nowrap;}
.filter-1 {width:100px; height:100px; background-color:cornflowerblue; margin:10px 10px 10px auto; padding:8px; display:inline-block; color :white; background-size:cover;}
.filters::-webkit-scrollbar {height:5px;}
.filters::-webkit-scrollbar-track {background:#f1f1f1;}
.filters::-webkit-scrollbar-thumb {background:#888; border-radius:5px;}
.filters::-webkit-scrollbar-thumb:hover {background:#555;}
.write-box {border:none; width:90%; height:100px; padding:15px; margin:auto; display:block; outline:none;}
</style>
