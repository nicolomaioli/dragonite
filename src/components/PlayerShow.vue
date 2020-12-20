<template>
  <div class="column is-6">
    <button class="button" @click="createPlayer">
      Add Player {{ number }}
    </button>
  </div>
</template>

<script>
const STARTING_LIFE = 40;

export default {
  name: "PlayerShow",
  props: {
    number: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      life: STARTING_LIFE,
    };
  },
  methods: {
    createPlayer() {
      this.$emit("player-add", this.number);
    },
  },
};
</script>
