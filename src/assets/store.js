import { createStore } from "vuex"
import axios from 'axios'

import post from '@/assets/data.js'

const store = createStore({
  state () {
    return {
      post: post,
      likes: [ 36, 0, 5 ],
      isLikes: [false, false, false],
      more: [],
    }
  },
  mutations: {
    changeLikes(state, data){
      state.likes[data] += (state.isLikes[data]) ? -1 : 1;
      state.isLikes[data] = !state.isLikes[data]
    },
    LikesItemShift(state){
      state.likes.unshift(0);
      state.isLikes.unshift(false);
    },
    setMore(state, data){
      // state.more = data;
      state.more.push(data);
    }
  },
  actions: {
    getData(store){
      // if( this.get > 1 ){

      //   const btn_more = document.querySelector(".btn_more");
      //   const p = document.createElement("p");
      //   p.innerText = "게시물이 없습니다.";
      //   p.classList.add("no_post");
      //   btn_more.after(p);
      //   btn_more.remove();

      //   return;
      // }

      axios.get(`https://codingapple1.github.io/vue/more0.json`)
      .then( result => {
        console.log(result.data);
        store.commit('setMore', result.data);
        // this.post.push(result.data);
        // this.get++;
      })
      .catch( error =>{
        console.log(error);
      })
    }
  }
})

export default store;