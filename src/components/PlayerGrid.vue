<template>
  <div class="columns is-multiline is-mobile fill">
    <div
      class="column is-6 is-flex is-align-items-center is-justify-content-center"
      v-for="i in numberOfPlayers"
      :key="i"
    >
      <PlayerForm @player-submit="playerAdd"></PlayerForm>
    </div>
  </div>
</template>

<script>
import PlayerForm from "./PlayerForm.vue";

export default {
  name: "PlayerGrid",
  components: {
    PlayerForm,
  },
  data() {
    return {
      numberOfPlayers: 4,
    };
  },
  methods: {
    playerAdd(player, commander) {
      // TODO

      console.log(
        `player add received, ${player}, ${JSON.stringify(commander, null, 2)}`
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.fill {
  height: 100vh;
}
</style>
