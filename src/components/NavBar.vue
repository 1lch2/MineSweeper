<template>
  <header>
    <p id="logo">this is logo</p>
    <Timer />
  </header>
</template>

<script>
import Timer from "./Timer.vue";

export default {
  components: { Timer },
};
</script>

<style scoped>
header {
  padding: 1vh 5vw;

  display: flex;
  justify-content: space-between;
}
</style>