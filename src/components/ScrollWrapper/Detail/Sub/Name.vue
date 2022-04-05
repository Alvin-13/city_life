<template>
  <div class="shop_name_bd">
    <span class="iconfont icon-name"></span>
    <span class="text">{{ detailName }}</span>
  </div>
</template>

<script>
export default {
  name: 'DetailName',
  components: {

  },
  props: {
    detailName: {
      type: String,
      default: "名称加载中..."
    }
  },
  data: () => ({

  }),
  mounted() {

  },
  methods: {

  },
}
</script>

<style scoped lang="scss">
.shop_name_bd {
  display: flex;
  // align-items: center;
  height: .44rem;
  line-height: .39rem;
  padding: .03rem .15rem 0;
  background: #fff;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;

  .iconfont {
    font-size: .18rem;
    color: #000;
  }

  .text {
    font-size: .14rem;
    margin-left: .1rem;
  }
}
</style>
