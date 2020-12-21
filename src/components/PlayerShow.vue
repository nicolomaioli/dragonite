<template>
  <div
    class="column is-6 is-flex is-align-items-center is-justify-content-center"
    :style="styleObject"
  >
    <button class="button" @click="openForm">Add Player {{ number }}</button>
  </div>

  <!-- Add player form -->
  <div class="modal" :class="{ 'is-active': showForm }">
    <div class="modal-background"></div>
    <div class="modal-content">
      <PlayerForm @player-submit="save"></PlayerForm>
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="closeForm"
    ></button>
  </div>
</template>

<script>
import PlayerForm from "./PlayerForm";

const STARTING_LIFE = 40;
const DEFAULT_BACKGROUND =
  "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/c/4/c4300d24-1cae-4dd5-be7e-38cc677cf5bd.jpg?1559591399";

export default {
  name: "PlayerShow",
  components: {
    PlayerForm,
  },
  props: {
    number: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      showForm: false,
      player: "Player",
      commander: {
        name: "",
        image: DEFAULT_BACKGROUND,
      },
      life: STARTING_LIFE,
    };
  },
  methods: {
    openForm() {
      this.showForm = true;
    },
    closeForm() {
      this.showForm = false;
    },
    save(player, commander) {
      this.closeForm();
      this.player = player;
      this.commander = commander;
    },
  },
  computed: {
    styleObject() {
      return {
        backgroundImage: `url(${this.commander.image})`,
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      };
    },
  },
};
</script>
