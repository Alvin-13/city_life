<template>
  <div class="service_bd">
    <detail-title title="商家服务" icon="icon-service"></detail-title>
    <div class="content">
      <p>停车场：{{ service && service.parking ? "有" : "无" }}</p>
      <p>WIFI：{{ service && service.wifi ? "有" : "无" }}</p>
    </div>
  </div>
</template>

<script>
import DetailTitle from "./Title";

export default {
  name: "DtailService",
  components: {
    DetailTitle
  },
  props: {
    service: {
      type: Object
    }
  },
  data: () => ({}),
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.service_bd {
	margin-top: .1rem;

  .content {
    padding: .1rem .15rem;
    line-height: .18rem;
    font-size: .14rem;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
    box-sizing: border-box;
  }
}
</style>
