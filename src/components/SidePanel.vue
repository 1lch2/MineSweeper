<template>
  <aside>
    <button id="startGame" @click="startGame">Start</button>
    <button id="resetGame">Reset</button>
    <button id="comfirmGame">Check</button>
  </aside>
</template>

<script>
import store from '../store';

export default {
  name: "SidePanel",
  data() {
    return {};
  },
  methods: {
    startGame() {
      // start timer
      store.commit("setTimer", true);
      console.log("timer started");
    }
  }
};
</script>

<style scoped>
aside {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 0 0.5em;
}

button {
  width: 100%;
  height: 2em;

  margin: 0.5em 0;

  text-align: center;
  font-size: 1.2em;

  border: 5px transparent;
  border-radius: 5px;
  background-color: rgb(0, 173, 173);
  transition: 0.2s;
}

button:hover {
  background-color: rgb(0, 197, 197);
}
</style>>
