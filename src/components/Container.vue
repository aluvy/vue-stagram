<template>
  <div v-if="step==0">
    <Post v-for="(a,i) in $store.state.post" :key="i" :idx="i" />
  </div>

  <div v-if="step==1">
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
  
  <div v-if="step==2">
    <div class="writer">
      <div class="upload-image" :class="`${SelectFilter}`" :style="{ backgroundImage : `url(${uploadImage})` }"></div>
      <div class="write">
        <textarea class="write-box" ref="writeBox" placeholder="write!" @input="sendText"></textarea>
      </div>
    </div>
  </div>

  <div v-if="step==3">
    <MyPage />
  </div>

</template>

<script>
import Post from '../components/Post.vue'
import MyPage from '../components/MyPage.vue'
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
  watch: {
    step(a){
      if( a==2 ){
        setTimeout(()=>{ this.$refs.writeBox.focus() }, 0);
      }
    }
  },
  props: {
    step: Number,
    uploadImage: String,
    SelectFilter: String,
  },
  components: {
    Post,
    MyPage,
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

<style scoped>
.filters{overflow-x:scroll; white-space:nowrap;}
.filters::-webkit-scrollbar {height:5px;}
.filters::-webkit-scrollbar-track {background:#f1f1f1;}
.filters::-webkit-scrollbar-thumb {background:#888; border-radius:5px;}
.filters::-webkit-scrollbar-thumb:hover {background:#555;}
.filter-1 {display:inline-block; margin:1rem 1rem 1rem auto;}

.upload-image{padding-bottom:100%; background-size:cover; background-position:center;}

.writer .write{padding:1rem;}
.write-box {width:100%; height:15rem; padding:1rem; background:#f7f7f7; border-radius:0.8rem; }
</style>
