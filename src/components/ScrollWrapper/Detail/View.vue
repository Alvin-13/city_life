<template>
  <div class="detail_wrapper">
    <detail-name :detailName="detailName"></detail-name>
    <detail-score :starNum="starNum" :score="score"></detail-score>
    <detail-address :address="address"></detail-address>
    <detail-price :price="price"></detail-price>
    <detail-open-date-time :openDateTime="openDateTime"></detail-open-date-time>
    <detail-tip :tip="tip"></detail-tip>
    <detail-intro :intro="intro"></detail-intro>
    <detail-ticket-info :ticketInfo="ticketInfo"></detail-ticket-info>
  </div>
</template>

<script>
import DetailName from "./Sub/Name";
import DetailScore from "./Sub/Score";
import DetailAddress from "./Sub/Address";
import DetailPrice from "./Sub/Price";
import DetailOpenDateTime from "./Sub/OpenDateTime";
import DetailTip from "./Sub/Tip";
import DetailIntro from "./Sub/Intro";
import DetailTicketInfo from "./Sub/TicketInfo";

export default {
  name: "DetailView",
  components: {
    DetailName,
    DetailScore,
    DetailAddress,
    DetailPrice,
    DetailOpenDateTime,
    DetailTip,
    DetailIntro,
    DetailTicketInfo
  },
  props: {
    detailName: String,
    starNum: Number,
    score: String,
    address: String,
    price: Number,
    openDateTime: String,
    tip: String,
    intro: String,
    ticketInfo: String
  },
  data: () => ({}),
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss"></style>
