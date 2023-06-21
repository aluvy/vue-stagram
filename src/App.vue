<template>
  <div class="header">
    <h1 class="logo"><a href="#"><span class="hidden">vue-stagram</span></a></h1>
    <div class="header-button-left">
      <a href="#">Cancel</a>
    </div>
    <div class="header-button-right">
      <a href="#">Next</a>
    </div>
  </div>

  <Container :data="data" />

  <div class="sample-box">임시박스</div>
  
  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile">
      <label for="file" class="input-plus"></label>
    </ul>
  </div>
</template>

<script>
import data from './assets/data.js'
import Container from './components/Container.vue'

export default {
  name:'App',
  data(){
    return {
      data : data,
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
.header .logo a{display:block; width:10rem; height:100%; background:url(./assets/img/logo.png) 0 1rem no-repeat; background-size:100% auto;}


.footer {width:100%; position:sticky; bottom:0; padding-bottom:10px; background-color:white;}
.footer-button-plus {width:80px; margin:auto; text-align:center; cursor:pointer; font-size:24px; padding-top:12px;}

.sample-box { width:100%; height:600px; background-color:bisque;}
.inputfile {display:none;}
.input-plus {cursor:pointer;}

</style>
