<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <city-list></city-list>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
import CityList from "../ScrollWrapper/CityList/CityList";

export default {
  name: "CityScrollWrapper",
  components: {
    CityList
  },
  data: () => ({}),
  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper);
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.city_scroll-wrapper {
}
</style>
