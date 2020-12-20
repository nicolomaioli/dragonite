<template>
  <PlayerGrid></PlayerGrid>
</template>

<script>
import PlayerGrid from "./components/PlayerGrid.vue";

export default {
  name: "App",
  components: {
    PlayerGrid,
  },
};
</script>

<style lang="scss">
@import "./main.scss";
</style>
