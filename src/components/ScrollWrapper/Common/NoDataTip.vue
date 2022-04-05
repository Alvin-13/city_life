<template>
  <div class="no_data_tip">
    <span class="text">--没有搜索到相关结果--</span>
  </div>
</template>

<script>
export default {
  name: 'NoDataTip',
  components: {

  },
  props: {

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
@import "~styles/mixins.scss";

.no_data_tip {
  @include flexCenter;
  height: 3rem;

  .text {
    color: #999;
    font-size: .16rem;
  }
}
</style>
