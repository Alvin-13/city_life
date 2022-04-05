<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <div v-if="data.status !== -1">
        <no-data-tip v-show="isNoDataTipShow"></no-data-tip>

        <div v-if="data.viewDatas && data.viewDatas.length > 0">
          <home-title title="景点结果："></home-title>
          <view-list :viewData="data.viewDatas"></view-list>
        </div>

        <div v-if="data.foodDatas && data.foodDatas.length > 0">
          <home-title title="美食结果："></home-title>
          <food-list :foodData="data.foodDatas"></food-list>
        </div>

        <div v-if="data.hotelDatas && data.hotelDatas.length > 0">
          <home-title title="酒店结果："></home-title>
          <hotel-list :hotelData="data.hotelDatas"></hotel-list>
        </div>

        <div v-if="data.massageDatas && data.massageDatas.length > 0">
          <home-title title="按摩结果："></home-title>
          <massage-list :massageData="data.massageDatas"></massage-list>
        </div>

        <div v-if="data.ktvDatas && data.ktvDatas.length > 0">
          <home-title title="KTV结果："></home-title>
          <ktv-list :ktvData="data.ktvDatas"></ktv-list>
        </div>
      </div>
      <error :isErrorShow="!data || data.status === -1"></error>
    </div>
  </div>
</template>

<script>
import HomeTitle from "./Common/HomeTitle";
import ViewList from "./ViewList/ViewList";
import FoodList from "./FoodList/FoodList";
import HotelList from "./HotelList/HotelList";
import KtvList from "./KtvList/KtvList";
import MassageList from "./MassageList/MassageList";
import NoDataTip from "./Common/NoDataTip";
import Error from "./Common/Error";

export default {
  name: "SearchScrollWrapper",
  components: {
    HomeTitle,
    ViewList,
    FoodList,
    HotelList,
    KtvList,
    MassageList,
    NoDataTip,
    Error
  },
  props: {
    data: Object
  },
  computed: {
    isNoDataTipShow() {
      return (
        (!this.data.viewDatas || this.data.viewDatas.length <= 0) &&
        (!this.data.foodDatas || this.data.foodDatas.length <= 0) &&
        (!this.data.ktvDatas || this.data.ktvDatas.length <= 0) &&
        (!this.data.massageDatas || this.data.massageDatas.length <= 0) &&
        (!this.data.ktvDatas || this.data.ktvDatas.length <= 0) 
      );
    }
  },
  data: () => ({}),
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.scroll-content {
  overflow: scroll;
}
</style>
