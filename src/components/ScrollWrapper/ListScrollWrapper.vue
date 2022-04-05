<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <div v-if="!isErrorShow">
        <view-list
          v-if="field === 'view'"
          :viewData="listData[cityId]"
        ></view-list>
        <food-list
          v-if="field === 'food'"
          :foodData="listData[cityId]"
        ></food-list>
        <hotel-list
          v-if="field === 'hotel'"
          :hotelData="listData[cityId]"
        ></hotel-list>
        <massage-list
          v-if="field === 'massage'"
          :massageData="listData[cityId]"
        ></massage-list>
        <ktv-list v-if="field === 'ktv'" :ktvData="listData[cityId]"></ktv-list>

        <loading :isLoadingShow="isLoadingShow"></loading>
      </div>

      <error :isErrorShow="isErrorShow"></error>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
import { mapState } from "vuex";

import { ListModel } from "models/list";
import tool from "utils/tool";

import ViewList from "./ViewList/ViewList";
import FoodList from "./FoodList/FoodList";
import HotelList from "./HotelList/HotelList";
import KtvList from "./KtvList/KtvList";
import MassageList from "./MassageList/MassageList";
import Error from "./Common/Error";
import Loading from "./Common/Loading";

export default {
  name: "ListScrollWrapper",
  components: {
    ViewList,
    FoodList,
    HotelList,
    KtvList,
    MassageList,
    Error,
    Loading
  },
  computed: {
    ...mapState(["field", "cityId"])
  },
  data: () => ({
    isLoadingShow: true,
    isErrorShow: false,
    listData: {}
  }),
  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper, {
      pullUpLoad: true,
      scrollbar: true,
      pullDownRefresh: true
      // and so on
    });

    this.getListData(this.cityId, this.field);
  },
  watch: {
    cityId() {
      this.getListData(this.cityId, this.field);
    }
  },
  methods: {
    getListData(cityId, field) {
      if(!this.listData[cityId]) {
        let listModel = new ListModel();

      this.isLoadingShow = true;

      listModel.getListData(cityId, field).then(res => {
        if (res && res.status === 0) {
          const data = tool.formatJSON(res.data, "keyword");

          this.isErrorShow = false;

          setTimeout(() => {
            this.listData[cityId] = data;
            this.isLoadingShow = false;
          }, 500);
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
  }
};
</script>

<style scoped lang="scss">
.list_scroll-wrapper {
}
</style>
