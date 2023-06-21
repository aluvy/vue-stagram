<template>
  <div class="header">
    <h1 class="logo"><a href="#" title="vue-stagram"></a></h1>
    <div class="header-button-left">
      <a href="#">Cancel</a>
    </div>
    <div class="header-button-right">
      <a href="#">Next</a>
    </div>
  </div>

  <Container :post="post" />
  <button @click="more" type="button" class="btn_more">더보기</button>

  
  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile">
      <label for="file" class="input-plus"></label>
    </ul>
  </div>
</template>

<script>
import post from './assets/data.js'
import Container from './components/Container.vue'
import axios from 'axios'
// axios.get()
// axios.post()

export default {
  name:'App',
  data(){
    return {
      post : post,
    }
  },
  methods: {
    more(){
      axios.get('https://codingapple1.github.io/vue/more0.json')
      .then( result => {
        this.post.push(result.data);
      })
      .catch( error =>{
        // 요청 실패 시
        console.log(error);
      })
    }
  },
  components:{
    Container,
  }
}
</script>

<style>
@import './assets/css/style.css';


.header {height:4.4rem; background:#fff; position:sticky; top:0; display:flex; align-items:center; justify-content:space-between; color:#333; box-sizing:border-box; padding:0 1.6rem; border-bottom:1px solid #ddd;}
.header .logo{position:absolute; left:50%; top:0; height:100%; transform:translateX(-50%);}
.header .logo a{display:block; width:10.3rem; height:100%; background:url(./assets/img/logo.svg) 0 1rem no-repeat; background-size:100% auto;}


.footer {width:100%; position:sticky; bottom:0; padding-bottom:10px; background-color:white;}
.footer-button-plus {width:80px; margin:auto; text-align:center; cursor:pointer; font-size:24px; padding-top:12px;}

.btn_more{display:block; width:calc(100% - 3.2rem); height:4.2rem; border-radius:0.5rem; border:1px solid #ddd; margin:2rem auto 1rem;}


.inputfile {display:none;}
.input-plus {cursor:pointer;}

</style>
