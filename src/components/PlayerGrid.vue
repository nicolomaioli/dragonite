<template>
  <div class="columns is-multiline is-mobile">
    <PlayerShow
      v-for="i in numberOfPlayers"
      :key="i"
      :number="i"
      @player-add="setPlayer"
    ></PlayerShow>
  </div>

  <PlayerAdd :player="player" @player-add-close="playerAddClose"></PlayerAdd>
</template>

<script>
import PlayerShow from "./PlayerShow.vue";
import PlayerAdd from "./PlayerAdd.vue";

export default {
  name: "PlayerGrid",
  components: {
    PlayerShow,
    PlayerAdd,
  },
  data() {
    return {
      numberOfPlayers: 4,
      player: null,
    };
  },
  methods: {
    setPlayer(player) {
      this.player = player;
    },
    playerAddClose() {
      this.player = null;
    },
  },
};
</script>

<style>
</style>
