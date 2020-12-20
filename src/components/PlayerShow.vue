<template>
  <div
    class="column is-6 is-flex is-align-items-center is-justify-content-center"
    :style="styleObject"
  >
    <button class="button" @click="createPlayer">
      Add Player {{ number }}
    </button>
  </div>
</template>

<script>
const STARTING_LIFE = 40;
const DEFAULT_BACKGROUND =
  "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/c/4/c4300d24-1cae-4dd5-be7e-38cc677cf5bd.jpg?1559591399";

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
      styleObject: {
        backgroundImage: `url(${DEFAULT_BACKGROUND})`,
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      },
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
