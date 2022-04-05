<template>
  <div class="swiper-wrap">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(item, index) of picList" :pic="item" :key="index">
        <img class="swiper-img" :src="item" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  name: "DetailSwiper",
  components: {
    swiper,
    swiperSlide
  },
  props: {
    picList: Array
  },
  data: () => ({
    swiperOptions: {
      pagination: {
        el: ".swiper-pagination"
      }
    }
  }),
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
@import "~styles/variables.scss";

 .swiper-wrap /deep/ .swiper-pagination-bullet-active {
  background-color: $defaultGreen;
}

.swiper-slide {
  height: 2rem;
}

.swiper-img {
  width: 100%;
  height: 100%;
}
</style>
