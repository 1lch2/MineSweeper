<template>
  <p id="boardTitle">Score Board</p>
  <div v-for="item in itemList" v-bind:key="item.id">
    <div class="record">
      <p class="user">{{ item.user }}</p>
      <p class="score">{{ item.score }}</p>
      <p class="date">{{ item.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScoreBorad",
  data() {
    return {
      // item: {
      //     id: 0,
      //     user: "someone",
      //     score: 114514,
      //     date: "2022-6-8"
      // }
      itemList: [
        {
          id: 0,
          user: "someone",
          score: 114514,
          date: "2022-6-8",
        },
      ],
    };
  },
  mounted() {
    //TODO: fetch data
  },
};
</script>

<style scoped>
p#boardTitle {
  margin: 0.5em 0.5em 0 0.5em;

  font-size: 1.1em;
  line-height: 1.1em;
  text-align: center;

  background-color: lightcyan;
}

div.record {
    margin: 1em 0.5em;
    padding: 0 0.2em;

    display: flex;
    justify-content: space-between;

    /* font-size: 1.1em; */
    background-color: lightgray;
}
</style>