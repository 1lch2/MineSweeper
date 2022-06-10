import { createStore } from 'vuex'

const store = createStore({
  state: {
    timerState: false
  },
  mutations: {
    /**
     * 改变计时器状态
     * @param {Object} state 
     * @param {Boolean} timerState 
     */
    setTimer(state, timerState) {
      state.timerState = timerState;
    }
  },
  getters: {
    getTimerState: (state) => {
      return state.timerState;
    }
  },
  modules: {
  }
})

export default store;
