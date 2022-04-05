<template>
  <div class="hotel_item">
    <router-link
      :to="{ path: 'detail', query: { field: 'hotel', id: data.id } }"
    >
      <div class="img">
        <img :src="data.img" :alt="data.name" class="hotel_img" />
      </div>
      <div class="con">
        <h1>{{ data.name }}</h1>
        <p class="score">{{ data.score }}分</p>
        <p class="area">{{ data.area }}</p>
        <div class="bottom">
          <span class="item"
            >￥<span class="price">{{ data.default_price }}</span
            >起</span
          >
          <span class="item">{{ data.city_name }}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HotelItem",
  components: {},
  props: {
    data: Object
  },
  data: () => ({}),
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
@import "~styles/mixins.scss";
@import "~styles/variables.scss";

.hotel_item {
  position: relative;
  background-color: #fff;
  border: 1px solid #ddd;

  .img {
    position: absolute;
    width: 1.2rem;
    height: 1.2rem;
    padding: 0.1rem;
    box-sizing: border-box;

    .hotel_img {
      width: 100%;
      height: 100%;
    }
  }

  .con {
    width: 100%;
    padding: 0.1rem 0.1rem 0 1.2rem;
    box-sizing: border-box;

    h1 {
      font-size: 0.18rem;
      color: #000;
      line-height: 0.2rem;
      @include ellipsis(1);
    }

    .score {
      font-size: 0.16rem;
      color: $starColor;
      line-height: 0.3rem;
    }

    .area {
      line-height: 0.3rem;
      font-size: 0.14rem;
      color: #999;
      @include ellipsis(1);
    }

    .bottom {
      @include fja;
      font-size: 0.14rem;
      line-height: 0.25rem;

      .item {
        &:nth-child(1) {
          color: $defaultGreen;

          .price {
            font-size: 0.2rem;
          }
        }
      }
    }
  }
}
</style>
