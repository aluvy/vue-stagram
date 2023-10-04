<template>
  <div class="header" :class="{ hide : scroll.down, mypage: step==3 }">
    <h1 class="logo"><a href="./" title="vue-stagram"></a></h1>
    <div class="header-button-left">
      <button type="button" v-if="step==1 || step==2" @click="step=0">Cancel</button>
      <button type="button" v-if="step==3" @click="step=0">Back</button>
    </div>
    <div class="header-button-right">
      <button type="button" v-if="step==0" @click="step=3">mypage</button>
      <button type="button" v-if="step==1" @click="step=2">Next</button>
      <button type="button" v-if="step==2" @click="publish">Write</button>
    </div>
  </div>

  <Container :step="step" :SelectFilter="SelectFilter" :uploadImage="uploadImage" @write=" n => uploadText = n " />

  <button @click="$store.dispatch('getData')" type="button" class="btn_more" v-if="step==0">더보기</button>

  <div class="footer">
    <div class="file_wrap" v-if="step==0">
      <input type="file" id="file" class="inputfile" accept="image/*" multiple @change="upload">
      <label for="file" class="input-plus" title="이미지 업로드"></label>
    </div>
  </div>

</template>

<script>
import { mapMutations } from 'vuex'
import Container from './components/Container.vue'

export default {
  name:'App',
  data(){
    return {
      step: 0,

      uploadImage: '',
      uploadText: '',
      SelectFilter: '',

      scroll: { lastPageY: 0, pageY: 0, down: false },
    }
  },
  methods: {
    onScroll(){
      if( this.step != 0 ) return;
      let pageY = window.scrollY;
      this.scroll.pageY = pageY;
      this.scroll.down = ( this.scroll.pageY > this.scroll.lastPageY ) ? true : false;
      this.scroll.lastPageY = this.scroll.pageY;
    },
    publish(){
      const newPost = {
        name: "aluvy",
        userImage: "./img/profile1.jpg",
        postImage: this.uploadImage,
        likes: 0,
        date: "May 15",
        liked: false,
        content: this.uploadText,
        filter: this.SelectFilter,
      };
      // this.$store.commit('setAddPost', newPost);
      this.setAddPost(newPost); // mapMutations
      this.step = 0;
    },
    upload(e){
      const file = e.target.files;  // 업로드한 파일이 담겨있음
      const type = "image";

      if( file[0].type.indexOf(type) == -1 ){   // 문자열이 존재하지 않으면 -1 리턴
        alert("이미지만 업로드 해주세요.");
        return;
      }

      const url = URL.createObjectURL(file[0]); // 업로드한 파일의 임시 URL
      this.step = 1;
      this.uploadImage = url;

    },
    ...mapMutations(['setAddPost']),  // store mutations 함수 이름
  },
  components:{
    Container,
  },
  mounted(){
    this.emitter.on('FilterName', (a)=>{
      this.SelectFilter = a;
      console.log(this.SelectFilter);
    });
    window.addEventListener('scroll', this.onScroll);

  },
  unmounted(){
    window.removeEventListener('scroll', this.onScroll);
  }
}
</script>

<style>
@import './assets/css/style.css';
@import './assets/css/cssgram.css';

.header {height:4.4rem; background:#fff; position:sticky; top:0; display:flex; align-items:center; justify-content:space-between; color:#333; box-sizing:border-box; padding:0 1.6rem; border-bottom:1px solid #ddd; z-index:999; transition:transform .2s;}
.header.hide{transform:translateY(-100%);}
.header.mypage{border-bottom:0 none;}
.header .logo{position:absolute; left:50%; top:0; height:100%; transform:translateX(-50%);}
.header .logo a{display:block; width:10.3rem; height:100%; background:url(./assets/img/logo.svg) 0 1rem no-repeat; background-size:100% auto;}

.btn_more{display:block; width:calc(100% - 3.2rem); height:4.2rem; border-radius:0.5rem; border:1px solid #ddd; margin:2rem auto 1rem;}
.no_post{text-align:center; padding:9rem 1.6rem; font-size:1.4rem; color:#999;}

.footer {position:sticky; bottom:0; text-align:center;}

.file_wrap{position:relative;}
.file_wrap .inputfile {position:absolute; left:0; top:0; width:1px; height:1px; overflow:hidden; padding:0; margin:0; border:0;  clip:rect(1px, 1px, 1px, 1px); clip-path:inset(50%); word-break:initial; word-wrap:initial; z-index:-1;}
.input-plus {display:block; width:100%; height:4rem; cursor:pointer; background:url(./assets/img/ico_camera.svg) 50% 50% no-repeat #000; background-size:2.4rem;}
</style>
