<template>
  <div id="container">
    <div id="nav">
      <nav-bar></nav-bar>
    </div>
    <div id="main">
      <div class="side" id="left">
        <side-panel></side-panel>
      </div>
      <div id="minefield">
        <mine-field></mine-field>
      </div>
      <div class="side" id="right">
        <side-panel></side-panel>
      </div>
    </div>
  </div>
</template>

<script>
import SidePanel from "./components/SidePanel.vue";
import MineField from "./components/MineField.vue";
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    SidePanel,
    MineField,
    NavBar,
  },
};
</script>

<style>
body {
  margin: 0 0;
}

div#container {
  display: flex;
  /* max-height: 100vh; */
  height: 100vh;
  flex-direction: column;

  background-color: antiquewhite;
}

div#main {
  display: flex;
  flex: 1;
  margin: 2vh 5vw;

  justify-content: space-between;

  height: 60vh;

  background-color: white;
}

div#nav {
  flex: none;

  height: 12vh;

  background-color: aquamarine;
}

div#minefield {
  flex: 1;

  background-color: grey;
}

div.side {
  flex: 0 0 15em;

  background-color: darkcyan;
}
</style>
