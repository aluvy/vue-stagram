(function(){"use strict";var e={8681:function(e,t,o){var i=o(9242),n=o(3396);const l={class:"header"},r=(0,n._)("h1",{class:"logo"},[(0,n._)("a",{href:"#",title:"vue-stagram"})],-1),a={class:"header-button-left"},s={class:"header-button-right"},u={class:"footer"},c={key:0,class:"file_wrap"},d=(0,n._)("label",{for:"file",class:"input-plus",title:"이미지 업로드"},null,-1);function p(e,t,o,i,p,g){const m=(0,n.up)("Container");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",l,[r,(0,n._)("div",a,[1==p.tab||2==p.tab?((0,n.wg)(),(0,n.iD)("a",{key:0,href:"#",onClick:t[0]||(t[0]=e=>p.tab=0)},"Cancel")):(0,n.kq)("",!0)]),(0,n._)("div",s,[1==p.tab?((0,n.wg)(),(0,n.iD)("a",{key:0,href:"#",onClick:t[1]||(t[1]=e=>p.tab=2)},"Next")):(0,n.kq)("",!0),2==p.tab?((0,n.wg)(),(0,n.iD)("a",{key:1,href:"#",onClick:t[2]||(t[2]=(...e)=>g.publish&&g.publish(...e))},"Write")):(0,n.kq)("",!0)])]),(0,n.Wm)(m,{tab:p.tab,SelectFilter:p.SelectFilter,uploadImage:p.uploadImage,onWrite:t[3]||(t[3]=e=>p.uploadText=e)},null,8,["tab","SelectFilter","uploadImage"]),0==p.tab?((0,n.wg)(),(0,n.iD)("button",{key:0,onClick:t[4]||(t[4]=t=>e.$store.dispatch("getData")),type:"button",class:"btn_more"},"더보기")):(0,n.kq)("",!0),(0,n._)("div",u,[0==p.tab?((0,n.wg)(),(0,n.iD)("div",c,[(0,n._)("input",{type:"file",id:"file",class:"inputfile",accept:"image/*",multiple:"",onChange:t[5]||(t[5]=(...e)=>g.upload&&g.upload(...e))},null,32),d])):(0,n.kq)("",!0)])],64)}o(2062);var g=o(65),m=o(7139);const f={key:0},b={key:1},v={class:"filter"},k={class:"filters"},h={key:2},_={class:"writer"},w={class:"write"};function y(e,t,o,i,l,r){const a=(0,n.up)("Post"),s=(0,n.up)("FilterBox");return(0,n.wg)(),(0,n.iD)(n.HY,null,[0==o.tab?((0,n.wg)(),(0,n.iD)("div",f,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.$store.state.post,((e,t)=>((0,n.wg)(),(0,n.j4)(a,{key:t,idx:t},null,8,["idx"])))),128))])):(0,n.kq)("",!0),1==o.tab?((0,n.wg)(),(0,n.iD)("div",b,[(0,n._)("div",v,[(0,n._)("div",{class:(0,m.C_)(["upload-image",`${o.SelectFilter}`]),style:(0,m.j5)({backgroundImage:`url(${o.uploadImage})`})},null,6),(0,n._)("div",k,[(0,n._)("ul",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.filter,((e,t)=>((0,n.wg)(),(0,n.iD)("li",{class:"filter-1",key:t},[(0,n.Wm)(s,{uploadImage:o.uploadImage,filter:e},{default:(0,n.w5)((()=>[(0,n.Uk)((0,m.zw)(e),1)])),_:2},1032,["uploadImage","filter"])])))),128))])])])])):(0,n.kq)("",!0),2==o.tab?((0,n.wg)(),(0,n.iD)("div",h,[(0,n._)("div",_,[(0,n._)("div",{class:(0,m.C_)(["upload-image",`${o.SelectFilter}`]),style:(0,m.j5)({backgroundImage:`url(${o.uploadImage})`})},null,6),(0,n._)("div",w,[(0,n._)("textarea",{class:"write-box",placeholder:"write!",onInput:t[0]||(t[0]=(...e)=>r.sendText&&r.sendText(...e))},null,32)])])])):(0,n.kq)("",!0)],64)}const I={class:"post"},x={class:"post-header"},j={class:"profile-name"},C={class:"post-content"},F={class:"icon"},D=(0,n._)("button",{type:"button",class:"btn_comment",title:"댓글 달기"},null,-1),O=(0,n._)("button",{type:"button",class:"btn_dm",title:"게시물 공유"},null,-1),S=(0,n._)("button",{type:"button",class:"btn_keep",title:"저장"},null,-1),$={class:"like"},q={class:"content"},A={class:"date"};function P(e,t,o,i,l,r){return(0,n.wg)(),(0,n.iD)("div",I,[(0,n._)("div",x,[(0,n._)("div",{class:"profile",style:(0,m.j5)({backgroundImage:`url('${e.post[o.idx].userImage}')`})},null,4),(0,n._)("span",j,(0,m.zw)(e.post[o.idx].name),1)]),(0,n._)("div",{class:(0,m.C_)(["post-body",`${e.post[o.idx].filter}`]),style:(0,m.j5)({backgroundImage:`url('${e.post[o.idx].postImage}')`}),onClick:t[0]||(t[0]=t=>e.setLike(o.idx))},null,6),(0,n._)("div",C,[(0,n._)("div",F,[(0,n._)("button",{type:"button",class:(0,m.C_)(["btn_like",{on:e.post[o.idx].liked}]),title:"좋아요",onClick:t[1]||(t[1]=t=>e.setLike(o.idx))},null,2),D,O,S]),(0,n._)("p",$,(0,m.zw)(e.post[o.idx].likes)+" Likes",1),(0,n._)("p",q,[(0,n._)("strong",null,(0,m.zw)(e.post[o.idx].name),1),(0,n.Uk)(" "+(0,m.zw)(e.post[o.idx].content),1)]),(0,n._)("p",A,(0,m.zw)(e.post[o.idx].date),1)])])}var T={name:"compPost",methods:{...(0,g.OI)(["setLike"])},computed:{...(0,g.rn)(["post"])},props:{idx:Number}},N=o(89);const z=(0,N.Z)(T,[["render",P]]);var L=z;const M={class:"filter-name"};function Z(e,t,o,i,l,r){return(0,n.wg)(),(0,n.iD)("div",{onClick:t[0]||(t[0]=(...e)=>r.mittEvent&&r.mittEvent(...e))},[(0,n._)("div",{class:(0,m.C_)(["filter-item",`${o.filter}`]),style:(0,m.j5)({backgroundImage:`url(${o.uploadImage})`})},null,6),(0,n._)("p",M,[(0,n.WI)(e.$slots,"default",{},void 0,!0)])])}var E={name:"compFilterBox",data(){return{msg:"hello"}},methods:{mittEvent(){this.emitter.emit("FilterName",this.filter)}},props:{uploadImage:String,filter:String}};const W=(0,N.Z)(E,[["render",Z],["__scopeId","data-v-4af953b4"]]);var B=W,H={name:"compContainer",data(){return{filter:["aden","_1977","brannan","brooklyn","clarendon","earlybird","gingham","hudson","inkwell","kelvin","lark","lofi","maven","mayfair","moon","nashville","perpetua","reyes","rise","slumber","stinson","toaster","valencia","walden","willow","xpro2"]}},props:{tab:Number,uploadImage:String,SelectFilter:String},components:{Post:L,FilterBox:B},emits:["write"],methods:{sendText(e){this.$emit("write",e.target.value)}}};const U=(0,N.Z)(H,[["render",y]]);var Y=U,K={name:"App",data(){return{get:0,tab:0,uploadImage:"",uploadText:"",SelectFilter:"",counter:0}},methods:{publish(){const e={name:"aluvy",userImage:"./img/profile1.jpg",postImage:this.uploadImage,likes:0,date:"May 15",liked:!1,content:this.uploadText,filter:this.SelectFilter};this.setAddPost(e),this.tab=0},upload(e){const t=e.target.files,o="image";if(-1==t[0].type.indexOf(o))return void alert("이미지만 업로드 해주세요.");const i=URL.createObjectURL(t[0]);this.tab=1,this.uploadImage=i},...(0,g.OI)(["setAddPost"])},components:{Container:Y},mounted(){this.emitter.on("FilterName",(e=>{this.SelectFilter=e,console.log(this.SelectFilter)}))}};const R=(0,N.Z)(K,[["render",p]]);var G=R,J=o(1373),Q=(o(7658),o(4161)),V=[{name:"aluvy",userImage:"./img/profile1.jpg",postImage:"./img/photo1.jpg",likes:36,date:"May 15",liked:!1,content:"귀여우니까 박제! 오늘 무엇을 했냐면요 아무것도 안했어요 ?",filter:"perpetua"},{name:"dlwlrma",userImage:"./img/profile2.jpg",postImage:"./img/photo2.jpg",likes:20,date:"Apr 20",liked:!1,content:"아이고 진심리스 열정리스 소민이 오는구나아 #드림 4월 26일 개봉⚽️",filter:"clarendon"},{name:"tmany_official",userImage:"./img/profile3.jpg",postImage:"./img/photo3.jpg",likes:49,date:"Apr 4",liked:!1,content:"#티끌모아티끌 출근을 하면서도 매일 불만이 가득했던 이유, 떼돈을 안줘서다",filter:"lofi"}],X=V;const ee=(0,g.MT)({state(){return{post:X}},mutations:{setAddPost(e,t){e.post.unshift(t)},setMore(e,t){e.post.push(t)},setLike(e,t){const o=t;e.post[o].liked=!e.post[o].liked,e.post[o].likes=e.post[o].liked?e.post[o].likes+1:e.post[o].likes-1}},actions:{getData(e){Q.Z.get("https://codingapple1.github.io/vue/more0.json").then((t=>{e.commit("setMore",t.data)})).catch((e=>{console.log(e)}))}}});var te=ee,oe=o(5431);(0,oe.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});let ie=(0,J.Z)(),ne=(0,i.ri)(G);ne.config.globalProperties.emitter=ie,ne.use(te).mount("#app")}},t={};function o(i){var n=t[i];if(void 0!==n)return n.exports;var l=t[i]={exports:{}};return e[i].call(l.exports,l,l.exports,o),l.exports}o.m=e,function(){var e=[];o.O=function(t,i,n,l){if(!i){var r=1/0;for(c=0;c<e.length;c++){i=e[c][0],n=e[c][1],l=e[c][2];for(var a=!0,s=0;s<i.length;s++)(!1&l||r>=l)&&Object.keys(o.O).every((function(e){return o.O[e](i[s])}))?i.splice(s--,1):(a=!1,l<r&&(r=l));if(a){e.splice(c--,1);var u=n();void 0!==u&&(t=u)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[i,n,l]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,l,r=i[0],a=i[1],s=i[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(n in a)o.o(a,n)&&(o.m[n]=a[n]);if(s)var c=s(o)}for(t&&t(i);u<r.length;u++)l=r[u],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(c)},i=self["webpackChunkvue_stagram"]=self["webpackChunkvue_stagram"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=o.O(void 0,[998],(function(){return o(8681)}));i=o.O(i)})();
//# sourceMappingURL=app.eeb5acdc.js.map