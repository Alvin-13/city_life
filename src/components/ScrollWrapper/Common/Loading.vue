<template>
  <div class="loading" v-show="isLoadingShow">
    <img src="~@/assets/images/loading.gif" class="loading_img" />
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {
    isLoadingShow: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({}),
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
@import "~styles/mixins.scss";

.loading {
  @include flexCenter();
  height: 3rem;

  .loading_img {
    width: 0.8rem;
    height: 0.8rem;
  }
}
</style>
