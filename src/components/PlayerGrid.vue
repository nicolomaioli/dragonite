<template>
  <NoSleep></NoSleep>
  <div class="columns is-multiline is-mobile fill">
    <PlayerShow v-for="i in numberOfPlayers" :key="i" :number="i"></PlayerShow>
  </div>
</template>

<script>
import PlayerShow from "./PlayerShow.vue";
import NoSleep from "./NoSleep.vue";

export default {
  name: "PlayerGrid",
  components: {
    PlayerShow,
    NoSleep,
  },
  data() {
    return {
      numberOfPlayers: 4,
    };
  },
};
</script>

<style lang="scss" scoped>
.fill {
  height: 100vh;
}
</style>
