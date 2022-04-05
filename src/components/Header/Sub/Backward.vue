<template>
  <div class="backward" @click="goBack">
    <span class="iconfont icon-header-arrow-left"></span>
  </div>
</template>

<script>
export default {
  name: "Backward",
  components: {},
  data: () => ({}),
  mounted() {},
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped lang="scss">
@import "~styles/mixins.scss";
@import "~styles/variables.scss";

.backward {
  position: absolute;
  top: 0;
  left: 0;
  @include fja();
  width: $headerHeight;
  height: $headerHeight;
  
  .iconfont {
    font-size: 0.2rem;
  }
}
</style>
