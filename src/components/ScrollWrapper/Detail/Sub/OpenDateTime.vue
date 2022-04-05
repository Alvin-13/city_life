<template>
  <div class="open_date_time_bd">
    <span class="iconfont icon-datetime"></span>
    <span class="text">{{ openDateTime }}</span>
  </div>
</template>

<script>
export default {
  name: "DeatilOpenDateTime",
  components: {},
  props: {
    openDateTime: {
      type: String,
      default: "营业时间加载中..."
    }
  },
  data: () => ({}),
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.open_date_time_bd {
  display: flex;
  align-items: center;
  min-height: 0.44rem;
  padding: 0.1rem 0.15rem;
  background: #fff;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;

  .iconfont {
    font-size: 0.18rem;
    color: #999;
  }

  .text {
    font-size: 0.14rem;
    line-height: 0.18rem;
    margin-left: 0.1rem;
  }
}
</style>
