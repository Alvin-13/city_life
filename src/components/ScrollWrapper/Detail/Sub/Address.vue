<template>
  <div class="address_bd">
    <span class="iconfont icon-positioning"></span>
    <span class="text">{{ address }}</span>
  </div>
</template>

<script>
export default {
  name: "DetailAddress",
  components: {},
  props: {
    address: {
      type: String,
      default: "地址加载中..."
    }
  },
  data: () => ({}),
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.address_bd {
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
