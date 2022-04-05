<template>
  <div class="icon_item">
    <div class="icon_wrapper" :style="{ backgroundColor: bgColor }">
      <span :class="['iconfont', icon]" ></span>
    </div>
    <span class="icon_txt">{{ iconText }}</span>
  </div>
</template>

<script>
export default {
  name: "IconItem",
  components: {},
  props: {
    bgColor: String,
    field: String,
    icon: String,
    iconText: {
      type: String,
      default() {
        return "分类";
      }
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

.icon_item {
  @include flexColumn();
  @include flexCenter();
  width: 20%;
  padding: 0.2rem 0;

  .icon_wrapper {
    @include flexCenter();
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;

    .iconfont {
      color: #fff;
      font-size: 0.26rem;
    }
  }
  .icon_txt {
    font-size: .14rem;
    text-align: center;
    margin-top: .1rem;
  }
}
</style>
