<template>
  <div class="detail_wrapper">
    <detail-name :detailName="detailName"></detail-name>
    <detail-score :starNum="starNum" :score="score"></detail-score>
    <detail-address :address="address"></detail-address>
    <detail-price :price="price"></detail-price>
    <detail-service :service="service"></detail-service>
  </div>
</template>

<script>
import DetailName from "./Sub/Name";
import DetailScore from "./Sub/Score";
import DetailAddress from "./Sub/Address";
import DetailPrice from "./Sub/Price";
import DetailService from "./Sub/Service";

export default {
  name: "DetailHotel",
  components: {
    DetailName,
    DetailScore,
    DetailAddress,
    DetailPrice,
    DetailService
  },
  props: {
    detailName: String,
    starNum: Number,
    score: String,
    address: String,
    price: Number,
    service: Object
  },
  data: () => ({}),
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss"></style>
