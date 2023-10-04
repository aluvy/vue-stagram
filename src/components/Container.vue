<template>
  <div v-if="tab==0">
    <Post v-for="(a,i) in $store.state.post" :key="i" :idx="i" />
  </div>

  <div v-if="tab==1">
    <div class="filter">
        <div class="upload-image" :class="`${SelectFilter}`" :style="{ backgroundImage : `url(${uploadImage})` }"></div>
        <div class="filters">
          <ul>
              <li class="filter-1" v-for="(a,i) in filter" :key="i">
                <FilterBox :uploadImage="uploadImage" :filter="a">{{ a }}</FilterBox>
              </li>
          </ul>
        </div>
    </div>
  </div>
  
  <div v-if="tab==2">
    <div class="writer">
        <div class="upload-image" :class="`${SelectFilter}`" :style="{ backgroundImage : `url(${uploadImage})` }"></div>
        <div class="write">
            <textarea class="write-box" placeholder="write!" @input="sendText"></textarea>
        </div>
    </div>
  </div>

</template>

<script>
import Post from '../components/Post.vue'
import FilterBox from '../components/FilterBox.vue'

export default {
  name: 'compContainer',
  data(){
    return {
      filter: [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
"inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
"reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
    }
  },
  props: {
    tab: Number,
    uploadImage: String,
    SelectFilter: String,
  },
  components: {
    Post,
    FilterBox,
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
.filters{overflow-x:scroll; white-space:nowrap;}
.filters::-webkit-scrollbar {height:5px;}
.filters::-webkit-scrollbar-track {background:#f1f1f1;}
.filters::-webkit-scrollbar-thumb {background:#888; border-radius:5px;}
.filters::-webkit-scrollbar-thumb:hover {background:#555;}
.filter-1 {display:inline-block; margin:1rem 1rem 1rem auto;}

.upload-image{padding-bottom:100%; background-size:cover; background-position:center;}
.write-box {width:100%; height:15rem; padding:1rem;}
</style>
