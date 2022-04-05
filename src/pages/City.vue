<template>
  <div class="container">
    <common-header :title="title"></common-header>
    <city-scroll-wrapper></city-scroll-wrapper>
  </div>
</template>

<script>
import CommonHeader from "components/Header/CommonHeader";
import CityScrollWrapper from "components/ScrollWrapper/CityScrollWrapper";

export default {
  name: "City",
  components: {
    CommonHeader,
    CityScrollWrapper
  },
  data: () => ({
    title: "城市选择"
  }),
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss"></style>
