<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <div v-if="!isErrorShow">
        <detail-swiper :picList="detailData.pics"></detail-swiper>

        <detail-view
          v-if="field === 'view'"
          :detailName="detailData.name"
          :starNum="Number(detailData.star)"
          :score="detailData.score"
          :address="detailData.address"
          :price="Number(detailData.default_price)"
          :openDateTime="detailData.open_datetime"
          :tip="detailData.tip"
          :intro="detailData.intro"
          :ticketInfo="detailData.ticket_info"
        ></detail-view>

        <detail-food
          v-if="field === 'food'"
          :detailName="detailData.name"
          :starNum="Number(detailData.star)"
          :score="detailData.score"
          :address="detailData.address"
          :price="Number(detailData.default_price)"
          :openDateTime="detailData.open_datetime"
          :recom="detailData.recom"
          :commentKeyword="detailData.comment_keyword"
        ></detail-food>

        <detail-hotel
          v-if="field === 'hotel'"
          :detailName="detailData.name"
          :starNum="Number(detailData.star)"
          :score="detailData.score"
          :address="detailData.address"
          :price="Number(detailData.default_price)"
          :service="detailData.service"
        ></detail-hotel>

        <detail-massage
          v-if="field === 'massage'"
          :detailName="detailData.name"
          :starNum="Number(detailData.star)"
          :score="detailData.score"
          :address="detailData.address"
          :price="Number(detailData.default_price)"
          :openDateTime="detailData.open_datetime"
          :commentKeyword="detailData.comment_keyword"
          :service="detailData.service"
        ></detail-massage>

        <detail-ktv
          v-if="field === 'ktv'"
          :detailName="detailData.name"
          :starNum="Number(detailData.star)"
          :score="detailData.score"
          :address="detailData.address"
          :price="Number(detailData.default_price)"
          :openDateTime="detailData.open_datetime"
          :commentKeyword="detailData.comment_keyword"
          :service="detailData.service"
        ></detail-ktv>
      </div>

      <error :isErrorShow="isErrorShow"></error>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
import DetailSwiper from "./Common/Swiper";
import Error from "./Common/Error";
import DetailFood from "./Detail/Food";
import DetailView from "./Detail/View";
import DetailHotel from "./Detail/Hotel";
import DetailMassage from "./Detail/Massage";
import DetailKtv from "./Detail/Ktv";

import { DetailModel } from "models/detail";

import tool from "utils/tool";

export default {
  name: "DetailScrollWrapper",
  components: {
    Error,
    DetailSwiper,
    DetailFood,
    DetailView,
    DetailHotel,
    DetailMassage,
    DetailKtv
  },
  props: {},
  data: () => ({
    id: 0,
    field: "",
    isErrorShow: false,
    detailData: {}
  }),
  mounted() {
    let scroll = new BetterScroll(this.$refs.wrapper);
    this.id = this.$route.query.id;
    this.field = this.$route.query.field;
    this.getDetail(this.field, this.id);
  },
  activated() {
    let curId = this.$route.query.id;
    let curField = this.$route.query.field;
    if (curField !== this.field || curId !== this.id) {
      this.id = curId;
      this.field = curField;
      this.getDetail(this.field, this.id);
    }
  },
  methods: {
    getDetail(field, id) {
      let detailModel = new DetailModel();

      detailModel.getDetail(field, id).then(res => {
        if (res && res.status === 0) {
          const data = res.data;

          this.errorShow = false;

          data.pics && (data.pics = tool.jsonToArr(data.pics));
          data.comment_keyword &&
            (data.comment_keyword = tool.strToArr(data.comment_keyword));
          data.recom && (data.recom = tool.commaToSpace(data.recom));
          data.service && (data.service = tool.jsonToArr(data.service));

          this.detailData = data;
        } else {
          this.isErrorShow = true;
          console.error({
            statusCode: res.status,
            errorMsg: res.error
          });
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
.scroll-content {
  overflow: scroll;
}
</style>
