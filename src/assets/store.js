import { createStore } from "vuex"
import axios from 'axios'

import post from '@/assets/data.js'

const store = createStore({
  state () {
    return {
      post: post,
    }
  },
  mutations: {
    setAddPost(state, data){
      state.post.unshift(data);
    },
    setMore(state, data){
      state.post.push(data);
    },
    setLike(state, data){
      const idx = data;
      state.post[idx].liked = !state.post[idx].liked;
      state.post[idx].likes = (state.post[idx].liked) ? state.post[idx].likes+1 : state.post[idx].likes-1;
    }
  },
  // ajax 요청
  actions: {
    getData(context){
      axios.get(`https://codingapple1.github.io/vue/more0.json`)
      .then( result => {
        // console.log(result.data);
        context.commit('setMore', result.data);   // axios로 가져온 데이터를 mutations setMore을 이용해 저장한다. (저장을 바로 할 수 없기 때문에 commit문을 씀)
      })
      .catch( error =>{
        console.log(error);
      })
    }
  }
})

export default store;