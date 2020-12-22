<template>
  <div class="box p-6">
    <form v-on:submit.prevent>
      <div class="field has-addons">
        <div class="control is-expanded">
          <input
            v-model="query"
            class="input"
            type="text"
            placeholder="Select a commander"
            :class="{ 'is-danger': hasError }"
          />
        </div>
        <div class="control">
          <a class="button is-link" @click="submit">Search</a>
        </div>
      </div>
      <p v-show="hasError" class="help is-danger">{{ error }}</p>
    </form>
  </div>
</template>

<script>
const SCRYFALL_URL = "https://api.scryfall.com/";

export default {
  name: "PlayerForm",
  data() {
    return {
      commander: {
        name: "",
        image: "",
      },
      query: "",
      hasError: false,
      error: "",
    };
  },
  methods: {
    async submit() {
      const url = encodeURI(`${SCRYFALL_URL}/cards/search?q=${this.query}`);
      const res = await fetch(url);

      if (!res.ok) {
        this.hasError = true;
        this.error = "Card not found";
        return;
      }

      const json = await res.json();

      if (json.total_cards > 1) {
        this.hasError = true;
        this.error = "Too many cards, please refine the search";
        return;
      }

      const card = json.data[0];

      this.commander = {
        name: card.name,
        image: card.image_uris.art_crop,
      };

      this.$emit("player-submit", this.player, this.commander);
      this.reset();
    },
    reset() {
      this.commander = {
        name: "",
        image: "",
      };
      this.query = "";
      this.hasError = false;
      this.error = "";
    },
  },
};
</script>
