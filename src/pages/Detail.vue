<template>
  <div class="container">
    <common-header :title="title"></common-header>
    <detail-scroll-wrapper></detail-scroll-wrapper>
  </div>
</template>

<script>
import CommonHeader from "components/Header/CommonHeader";
import DetailScrollWrapper from "components/ScrollWrapper/DetailScrollWrapper";

export default {
  name: "Detail",
  components: {
    CommonHeader,
    DetailScrollWrapper
  },
  data: () => ({
    title: "详情"
  }),
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
</style>
