<template>
  <div class="tip_bd">
    <span class="iconfont icon-tip"></span>
    <span class="text">{{ tip }}</span>
  </div>
</template>

<script>
export default {
  name: "DetailTip",
  components: {},
  props: {
    tip: {
      type: String,
      default: "加载中..."
    }
  },
  data: () => ({}),
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.tip_bd {
  display: flex;
  align-items: center;
  min-height: .44rem;
  padding: 0.1rem .15rem;
  background-color: #fff;
  border-bottom: 1px soild #ddd;
  box-sizing: border-box;

  .iconfont {
    font-size: .18rem;
		color: #999;
  }

  .text {
    margin-left: .1rem;
    font-size: .16rem;
    line-height: .18rem;
  }
}
</style>
