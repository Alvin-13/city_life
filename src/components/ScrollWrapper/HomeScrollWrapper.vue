<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <icon-list></icon-list>

      <div v-if="!isErrorShow">
        <home-title :title="homeTitle.viewTitle"></home-title>
        <view-list :viewData="homeData.viewData"></view-list>

        <home-title :title="homeTitle.foodTitle"></home-title>
        <food-list :foodData="homeData.foodData"></food-list>

        <home-title :title="homeTitle.hotelTitle"></home-title>
        <hotel-list :hotelData="homeData.hotelData"></hotel-list>

        <home-title :title="homeTitle.massageTitle"></home-title>
        <massage-list :massageData="homeData.massageData"></massage-list>

        <home-title :title="homeTitle.ktvTitle"></home-title>
        <ktv-list :ktvData="homeData.ktvData"></ktv-list>
      </div>
      
      <error :isErrorShow="isErrorShow"></error>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
import IconList from "./IconLsit/IconList";
import HomeTitle from "./Common/HomeTitle";
import ViewList from "./ViewList/ViewList";
import FoodList from "./FoodList/FoodList";
import HotelList from "./HotelList/HotelList";
import KtvList from "./KtvList/KtvList";
import MassageList from "./MassageList/MassageList";
import Error from "./Common/Error";

import { IndexModel } from "models/index";
import { mapState } from "vuex";
import tools from "utils/tool";

export default {
  name: "HomeScrollWrapper",
  components: {
    IconList,
    HomeTitle,
    ViewList,
    FoodList,
    HotelList,
    KtvList,
    MassageList,
    Error
  },
  data: () => ({
    isErrorShow: false,
    currentCityId: 0,
    homeTitle: {
      foodTitle: "推荐美食",
      hotelTitle: "推荐酒店",
      ktvTitle: "推荐KTV",
      massageTitle: "推荐按摩",
      viewTitle: "推荐景点"
    },
    homeData: {
      foodData: [],
      hotelData: [],
      ktvData: [],
      massageData: [],
      viewData: []
    }
  }),
  computed: {
    ...mapState(["cityId"])
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BetterScroll(this.$refs.wrapper);
    });
    this.currentCityId = this.cityId;
    this.getHomeData(this.currentCityId);
  },
  activated() {
    if (this.currentCityId !== this.cityId) {
      this.currentCityId = this.cityId;
      this.getHomeData(this.currentCityId);
    }
  },
  methods: {
    getHomeData(cityId) {
      const indexModel = new IndexModel();

      indexModel.getHomeData(cityId).then(res => {
        if (res && res.status === 0) {
          const data = res.data;

          this.homeData.foodData = tools.formatJSON(data.foodDatas, "keyword");
          this.homeData.hotelData = data.hotelDatas;
          this.homeData.ktvData = data.ktvDatas;
          this.homeData.massageData = data.massageDatas;
          this.homeData.viewData = data.viewDatas;
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
