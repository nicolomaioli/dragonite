<template>
  <div class="modal" :class="{ 'is-active': player }">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
        <h1 class="title is-1">Add Player {{ player }}</h1>

        <form v-show="showSearchForm">
          <div class="field">
            <label for="query" class="label">Commander</label>
            <div class="control">
              <input
                v-model="query"
                name="query"
                type="text"
                class="input"
                :class="{ 'is-danger': hasError }"
              />
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button class="button is-link" type="button" @click="search">
                Search
              </button>
            </div>
          </div>
        </form>

        <form v-show="showSelectForm">
          <div class="field">
            <label for="found" class="label">Commander</label>
            <div class="control">
              <div class="select">
                <select name="found" v-model="index">
                  <option v-for="(c, i) in found" :key="c.id" :value="i">
                    {{ c.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link" type="button" @click="submit">
                Select
              </button>
            </div>
            <div class="control">
              <button class="button is-light" @click="close">Cancel</button>
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
const SCRYFALL_URL = "https://api.scryfall.com/";

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
      index: 0,
      query: "",
      found: [],
      showSearchForm: true,
      hasError: false,
      showSelectForm: false,
    };
  },
  methods: {
    async search() {
      this.showSearchForm = false;
      const url = encodeURI(`${SCRYFALL_URL}/cards/search?q=${this.query}`);

      const res = await fetch(url);

      if (!res.ok) {
        this.showSearchForm = true;
        this.hasError = true;
        return;
      }

      const cards = await res.json();

      cards.data.forEach((card) => {
        this.found.push({
          id: card.id,
          name: card.name,
          image: card.image_uris.art_crop,
        });
      });

      this.showSelectForm = true;
    },
    submit() {
      this.$emit("player-add-submit", this.found[this.index]);
      this.close();
    },
    reset() {
      this.index = 0;
      this.query = "";
      this.found = [];
      this.showSearchForm = true;
      this.hasError = false;
      this.showSelectForm = false;
    },
    close() {
      this.reset();
      this.$emit("player-add-close");
    },
  },
};
</script>
