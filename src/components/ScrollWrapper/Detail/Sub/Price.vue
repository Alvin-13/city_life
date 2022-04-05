<template>
  <div class="price_bd">
		<span class="iconfont icon-price"></span>
    <span class="text">￥{{ price || 0 }}元起</span>
  </div>
</template>

<script>
export default {
  name: 'DetailPrice',
  components: {

  },
  props: {
    price: {
      type: Number,
      default: 0
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
@import '~styles/variables.scss';

.price_bd{
  display: flex;
  height: .44rem;
  padding: .1rem .15rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;

  .iconfont {
    font-size: .18rem;
    color: #000;
  }

  .text {
    margin-left: .1rem;
    font-size: .16rem;
    line-height: .18rem;
		color: $defaultOrange;
  }
}
</style>
