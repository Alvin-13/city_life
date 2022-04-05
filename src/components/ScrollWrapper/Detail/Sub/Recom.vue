<template>
  <div class="recom_bd">
    <detail-title title="推荐菜品" icon="icon-recom"></detail-title>
    <div class="recom_content">{{ recom }}</div>
  </div>
</template>

<script>
import DetailTitle from "./Title";
export default {
  name: "DetailRecom",
  components: {
    DetailTitle
  },
  props: {
    recom: {
      type: String,
      default: "推荐菜品加载中..."
    }
  },
  data: () => ({}),
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
@import '~styles/mixins.scss';

.recom_bd {
	// @include flexColumn;
  margin-top: 0.1rem;
  min-height: 0.44rem;
  background: #fff;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;

  .recom_content {
    padding: 0.1rem 0.15rem;
    font-size: 0.14rem;
    line-height: 0.18rem;
    text-indent: 2em;
    box-sizing: border-box;
  }
}
</style>
