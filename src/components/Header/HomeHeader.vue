<template>
  <div class="home_header">
    <city-selector></city-selector>
    <fake-input></fake-input>
  </div>
</template>

<script>
import citySelector from "./Sub/CitySelector.vue";
import fakeInput from "./Sub/FakeInput.vue";

export default {
  name: "HomeHeader",
  components: {
    citySelector,
    fakeInput
  },
  data: () => ({}),
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
@import "~styles/mixins.scss";
@import "~styles/variables.scss";

.home_header {
  // position: fixed;
  // left: 0;
  // top: 0;
  // z-index: 99;
  width: 100%;
  display: flex;
  height: $headerHeight;
  background: $defaultBgColor;
}
</style>
