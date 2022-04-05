<template>
  <div class="fake_input">
    <router-link to="Search">
      <div class="input_area">
        <p class="placeholder">
          <span class="iconfont icon-header-search"></span>
          <span class="txt">{{ placeholderTxt }}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "FakeInput",
  components: {},
  data: () => ({
    placeholderTxt: "美食 / 景点 / 酒店 / 按摩 / KTV"
  }),
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
@import "~styles/mixins.scss";

.fake_input {
  flex: 1;
  padding: 0.06rem 0.1rem 0.06rem 0;
  box-sizing: border-box;

  .input_area {
    @include fja(center, center);
    width: 100%;
    height: 100%;
    background: #fff;

    .placeholder {
      font-size: 0.14rem;
      color: #999;

      .iconfont {
        font-size: 0.18rem;
        vertical-align: -.02rem;
        margin-right: 0.05rem;
      }
    }
  }
}
</style>
