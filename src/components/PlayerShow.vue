<template>
  <div class="column is-flex is-6 p-5" :style="styleObject">
    <div class="columns is-flex-direction-column is-flex-grow-1 is-mobile">
      <div class="column is-flex is-justify-content-space-between">
        <div>
          <p class="has-text-white text-shadow">{{ player }}</p>
        </div>
        <div>
          <font-awesome-icon
            :icon="faCog"
            size="lg"
            class="has-text-white"
            @click="openForm"
          />
        </div>
      </div>
      <div
        class="column is-flex is-flex-grow-1 is-align-items-center is-justify-content-space-between"
      >
        <div @click="decreaseLife">
          <font-awesome-icon
            :icon="faMinusSquare"
            size="lg"
            class="has-text-white"
          />
        </div>
        <div>
          <h1 class="title has-text-white is-size-1 text-shadow">{{ life }}</h1>
        </div>
        <div @click="increaseLife">
          <font-awesome-icon
            :icon="faPlusSquare"
            size="lg"
            class="has-text-white"
          />
        </div>
      </div>
      <div class="column"></div>
    </div>
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
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCog,
  faMinusSquare,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
import PlayerForm from "./PlayerForm";

const STARTING_LIFE = 40;
const DEFAULT_BACKGROUND =
  "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/c/4/c4300d24-1cae-4dd5-be7e-38cc677cf5bd.jpg?1559591399";

export default {
  name: "PlayerShow",
  components: {
    PlayerForm,
    FontAwesomeIcon,
  },
  props: {
    number: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      faCog,
      faMinusSquare,
      faPlusSquare,
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
    decreaseLife() {
      console.log("decrease life");
      this.life -= 1;
    },
    increaseLife() {
      console.log("increase life");
      this.life += 1;
    },
  },
  computed: {
    styleObject() {
      return {
        backgroundImage: `url(${this.commander.image})`,
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        boxShadow: "inset 0 0 3em 1.25em #000",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.text-shadow {
  text-shadow: 0.05em 0.05em #000;
}
</style>
