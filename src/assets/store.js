import { createStore } from "vuex";

const store = createStore({
  state () {
    return {
      // name: 'kim',
      // age: 20,
      likes: [ 36, 0, 5 ],
      isLikes: [false, false, false],
    }
  },
  mutations: {          // state 수정 함수 정의
    // changeName(state){  // state는 위에 있는 state()의 데이터를 의미한다.
    //   state.name = 'park';
    // },
    // addAge(state, data){
    //   state.age += data;
    // },
    changeLikes(state, data){
      state.likes[data] += (state.isLikes[data]) ? -1 : 1;
      state.isLikes[data] = !state.isLikes[data]
    },
    LikesItemShift(state){
      state.likes.unshift(0);
      state.isLikes.unshift(false);
    }
  }
})

export default store;