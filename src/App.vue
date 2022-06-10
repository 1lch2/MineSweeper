<template>
  <div id="container">
    <div id="nav">
      <NavBar />
    </div>
    <div id="main">
      <div class="side" id="left">
        <ScoreBoard />
      </div>
      <div id="minefield">
        <mine-field></mine-field>
      </div>
      <div class="side" id="right">
        <SidePanel />
      </div>
    </div>
  </div>
</template>

<script>
import ScoreBoard from "./components/ScoreBoard.vue";
import SidePanel from "./components/SidePanel.vue";
import MineField from "./components/MineField.vue";
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    ScoreBoard,
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
  margin: 2vh 5vw 0 5vw;

  flex: none;

  height: 12vh;

  background-color: aquamarine;
}

div#minefield {
  flex: 1;

  background-color: grey;
}

div.side {
  flex: 0 0 25%;
  min-width: 15vd;

  background-color: darkcyan;
}
</style>
