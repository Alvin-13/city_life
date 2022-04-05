<template>
  <div class="common_header">
    <backward></backward>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
import backward from "./Sub/Backward.vue";

export default {
  name: "CommonHeader",
  components: {
    backward
  },
  props: {
    title: {
      type: String,
      default: "生活一线通"
    }
  },
  data: () => ({}),
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
@import "~styles/mixins.scss";
@import "~styles/variables.scss";

.common_header {
  position: relative;
  @include fja(center,center);
  height: $headerHeight;
  background: $defaultBgColor;

  h1 {
    font-size: 0.18rem;
  }
}
</style>
