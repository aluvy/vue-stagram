if(!self.define){let i,e={};const o=(o,n)=>(o=new URL(o+".js",n).href,e[o]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=o,i.onload=e,document.head.appendChild(i)}else i=o,importScripts(o),e()})).then((()=>{let i=e[o];if(!i)throw new Error(`Module ${o} didn’t register its module`);return i})));self.define=(n,c)=>{const r=i||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let s={};const a=i=>o(i,r),l={module:{uri:r},exports:s,require:a};e[r]=Promise.all(n.map((i=>l[i]||a(i)))).then((i=>(c(...i),s)))}}define(["./workbox-5b385ed2"],(function(i){"use strict";i.setCacheNameDetails({prefix:"vue-stagram"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"/css/app.c8308845.css",revision:null},{url:"/favicon.ico",revision:"dfa85bb1fd633c2ab91c0fe07586da95"},{url:"/img/ico_camera.58e6097a.svg",revision:null},{url:"/img/ico_comment.ad9900e0.svg",revision:null},{url:"/img/ico_dm.2bf809d6.svg",revision:null},{url:"/img/ico_keep.d284fab1.svg",revision:null},{url:"/img/ico_like.3fc5e050.svg",revision:null},{url:"/img/ico_like_on.abe97ab8.svg",revision:null},{url:"/img/icons/android-chrome-192x192.png",revision:"f130a0b70e386170cf6f011c0ca8c4f4"},{url:"/img/icons/android-chrome-512x512.png",revision:"0ff1bc4d14e5c9abcacba7c600d97814"},{url:"/img/icons/android-chrome-maskable-192x192.png",revision:"845a39478d0e2d4d5d32a092de2de250"},{url:"/img/icons/android-chrome-maskable-512x512.png",revision:"2695f5feb66cdb0c6f09d0e415824cf9"},{url:"/img/icons/apple-touch-icon-120x120.png",revision:"936d6e411cabd71f0e627011c3f18fe2"},{url:"/img/icons/apple-touch-icon-152x152.png",revision:"1a034e64d80905128113e5272a5ab95e"},{url:"/img/icons/apple-touch-icon-180x180.png",revision:"c43cd371a49ee4ca17ab3a60e72bdd51"},{url:"/img/icons/apple-touch-icon-60x60.png",revision:"9a2b5c0f19de617685b7b5b42464e7db"},{url:"/img/icons/apple-touch-icon-76x76.png",revision:"af28d69d59284dd202aa55e57227b11b"},{url:"/img/icons/apple-touch-icon.png",revision:"66830ea6be8e7e94fb55df9f7b778f2e"},{url:"/img/icons/favicon-16x16.png",revision:"4bb1a55479d61843b89a2fdafa7849b3"},{url:"/img/icons/favicon-32x32.png",revision:"98b614336d9a12cb3f7bedb001da6fca"},{url:"/img/icons/msapplication-icon-144x144.png",revision:"b89032a4a5a1879f30ba05a13947f26f"},{url:"/img/icons/mstile-150x150.png",revision:"058a3335d15a3eb84e7ae3707ba09620"},{url:"/img/icons/safari-pinned-tab.svg",revision:"4e857233cbd3bb2d2db4f78bed62a52f"},{url:"/img/logo.421308f1.svg",revision:null},{url:"/img/photo1.jpg",revision:"620b93ad437a178a54b660f49c5b3413"},{url:"/img/photo2.jpg",revision:"95b8a688d64ca7f98eb1b59b5bfac3d3"},{url:"/img/photo3.jpg",revision:"a5ca7061965cd130f1c556c63cd2419f"},{url:"/img/profile1.jpg",revision:"c700cd5875ca9f17805a0d26b0bdf119"},{url:"/img/profile2.jpg",revision:"60654c3f616ad9c9c771cd75571b270a"},{url:"/img/profile3.jpg",revision:"6a18136446adb5b9ded0174c323f5427"},{url:"/js/app.eeb5acdc.js",revision:null},{url:"/js/chunk-vendors.ebf67d23.js",revision:null},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
