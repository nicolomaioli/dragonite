<template>
  <div v-if="!noSleepEnabled" @click="toggleNoSleep">
    <font-awesome-icon
      :icon="faCoffee"
      size="lg"
      class="centered z-index-1 has-text-danger"
    />
  </div>
  <div v-else @click="toggleNoSleep">
    <font-awesome-icon
      :icon="faCoffee"
      size="lg"
      class="centered z-index-1 has-text-success"
    />
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import NoSleep from "nosleep.js";

const noSleep = new NoSleep();

export default {
  name: "NoSleep",
  data() {
    return {
      faCoffee,
      noSleepEnabled: false,
    };
  },
  components: {
    FontAwesomeIcon,
  },
  methods: {
    toggleNoSleep() {
      // FIXME: for some reason it takes to taps to enable

      if (this.noSleepEnabled) {
        noSleep.disable();
      } else {
        noSleep.enable();
      }

      this.noSleepEnabled = noSleep.isEnabled;
    },
  },
};
</script>

<style lang="scss">
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.z-index-1 {
  z-index: 1;
}
</style>
