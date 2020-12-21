<template>
  <form v-on:submit.prevent>
    <div class="field">
      <label for="player" class="label">Player</label>
      <div class="control">
        <input v-model="player" name="player" type="text" class="input" />
      </div>
    </div>

    <div class="field">
      <label for="query" class="label">Commander</label>
      <div class="control">
        <input
          v-model="query"
          name="query"
          type="text"
          class="input"
          :class="{ 'is-danger': hasError, 'is-warning': hasWarning }"
        />
      </div>
      <p v-show="hasWarning" class="help is-warning">Multiple cards found</p>
      <p v-show="hasError" class="help is-danger">Card not found</p>
    </div>

    <div class="field">
      <div class="control">
        <button class="button is-link" type="button" @click="submit">
          Submit
        </button>
      </div>
    </div>
  </form>
</template>

<script>
const SCRYFALL_URL = "https://api.scryfall.com/";

export default {
  name: "PlayerForm",
  data() {
    return {
      player: "",
      commander: {
        name: "",
        image: "",
      },
      query: "",
      hasError: false,
      hasWarning: false,
    };
  },
  methods: {
    async submit() {
      const url = encodeURI(`${SCRYFALL_URL}/cards/search?q=${this.query}`);
      const res = await fetch(url);

      if (!res.ok) {
        this.hasError = true;
        return;
      }

      const json = await res.json();

      if (json.total_cards > 1) {
        this.hasWarning = true;
        return;
      }

      const card = json.data[0];

      this.commander = {
        name: card.name,
        image: card.image_uris.art_crop,
      };

      this.$emit("player-add", this.player, this.commander);
      this.reset();
    },
    reset() {
      this.hasError = false;
      this.hasWarning = false;
    },
  },
};
</script>
