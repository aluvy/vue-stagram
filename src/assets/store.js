import { createStore } from "vuex";

const store = createStore({
  state () {
    return {
      name: 'kim',
      age: 20,
      likes: [ 36, 0, 5 ],
    }
  },
  mutations: {          // state 수정 함수 정의
    changeName(state){  // state는 위에 있는 state()의 데이터를 의미한다.
      state.name = 'park';
    },
    addAge(state, data){
      state.age += data;
    },
    changeLikes(state, data){
      const isLikes = data[0];
      const idx = data[1];
      state.likes[idx] += (isLikes) ? 1 : -1;
    }
  }
})

export default store;