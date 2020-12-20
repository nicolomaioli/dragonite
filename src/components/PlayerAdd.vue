<template>
  <div class="modal" :class="{ 'is-active': player }">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
        <h1 class="title is-1">Add Player {{ player }}</h1>
        <form>
          <div class="field">
            <label for="commander" class="label">Commander</label>
            <div class="control">
              <input
                v-model="commander"
                name="commander"
                type="text"
                class="input"
              />
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button class="button is-link" type="button">Search</button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <button
      class="modal-close is-large"
      aria-label="close"
      @click="close"
    ></button>
  </div>
</template>

<script>
export default {
  name: "PlayerAdd",
  props: {
    player: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      commander: "",
    };
  },
  methods: {
    close() {
      this.$emit("player-add-close");
    },
  },
};
</script>
