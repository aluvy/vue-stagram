<template>
  <div class="mypage">
    <ul class="tab">
      <li class="on"><button type="button">{{ follower.length }} 팔로워</button></li>
      <li><button type="button">60 팔로잉</button></li>
    </ul>

    <div class="search">
      <input placeholder="검색" @input="search($event)" />
    </div>
    <div class="follower">
      <ul>
        <li v-for="(a, i) in result" :key="i">
          <div class="profile" :style="{ backgroundImage : `url('${a.image}')` }"></div>
          <span class="profile-name">{{ a.name }}</span>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import axios from 'axios';


export default {
  name: 'MyPage',
  // created life cycle hook과 비슷함
  setup(){  // props:props / context: attrs, slots, emit등등

    let follower = ref([]);      // 데이터
    let result = ref([]);

    // mounted 후 ajax 요청함, import 필요 (on + lifecyclehook)
    onMounted(()=>{
      axios.get('./follower.json').then( data => {
        follower.value = data.data;
        result.value = data.data;
        console.log(result.value);
      });
    });

    
    function search(e){
      const value = e.target.value;
      if( !value.length ){
        result.value = follower.value;
      } else {
        result.value = result.value.filter((item) => item.name.includes(value));
      }
    }
    
    return { follower, result, search }
  },
}
</script>

<style scoped>
.tab{display:flex; align-items:center; justify-content:space-between;}
.tab li{flex:1 1 50%; border-bottom:1px solid #ddd;}
.tab li.on{border-bottom:2px solid #000;}
.tab li button{display:block; width:100%; height:4.4rem; line-height:4.4rem; font-size:1.2rem;}

.search {position:relative; margin:1.6rem 2rem 0;}
.search input{width:100%; height:3.8rem; line-height:3.8rem; background:#f2f2f2; border-radius:0.8rem; padding:0 1.2rem; padding-left:3.4rem; font-size:1.4rem;}
.search::before {content:'🔍'; position:absolute; left:1rem; top:0; display:flex; align-items:center; justify-content:center; width:2rem; height:100%; font-size:1rem;}

.follower{padding:2rem 2rem 2rem;}
.follower ul li{display:flex; align-items:center;}
.follower .profile{width:5rem; height:5rem; border-radius:3.2rem; background:#eee; margin:0.6rem 0; margin-right:1rem;}
</style>