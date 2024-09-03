<template>
  <div id="theme_dark" class="themes">
    <div id="main"></div>
    <tsr_header></tsr_header>
    <router-view />
  </div>
</template>

<script>
import tsr_header from "./components/tsr_header.vue";
export default {
  data() {
    return {};
  },
  components: {
    tsr_header,
  },
};
</script>

<style lang="scss">
</style>
