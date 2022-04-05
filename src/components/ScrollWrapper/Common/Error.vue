<template>
  <div class="error" v-show="isErrorShow">
    <span class="iconfont icon-error"></span>
    <p class="error_text">网络走丢啦~</p>
  </div>
</template>

<script>
export default {
  name: "Error",
  components: {},
  props: {
    isErrorShow: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({}),
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
@import "~styles/mixins.scss";

.error {
  @include fja(center);
  flex-direction: column;
  height: 3rem;
  color: #999;

  .iconfont {
    font-size: .5rem;
  }

  .error_text {
    font-size: .14rem;
    margin-top: .1rem;
  }
}
</style>
