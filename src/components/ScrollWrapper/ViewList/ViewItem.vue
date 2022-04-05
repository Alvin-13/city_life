<template>
  <div class="view_item">
    <router-link :to="{name: 'Detail', query: {field: 'view', id: data.id}}">
      <div class="img">
        <img class="view_img" :src="data.img" :alt="data.name" />
      </div>
      <div class="con">
        <h1>{{ data.name }}</h1>
        <div class="stars_wrapper">
          <stars :starNum="Number(data.star)"></stars>
          <span class="score">{{ data.score }}分</span>
        </div>
        <div class="bottom">
          <span class="price_wrapper">
            ￥<span class="price">{{ data.default_price }}</span
            >起
          </span>
          <span>{{ data.city_name }}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import Stars from "../Common/Stars";

export default {
  name: "ViewItem",
  components: {
    Stars
  },
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

.view_item {
  width: 50%;
  padding: .1rem;
  box-sizing: border-box;

  .img {
    width: 100%;
    height: 1.1rem;
    overflow: hidden;

    .view_img {
      width: 100%;
      min-height: 1.1rem;
      font-size: 0.16rem;
    }
  }
  .con {
    h1 {
      height: 0.3rem;
      font-size: 0.16rem;
      line-height: 0.3rem;
      color: #000;
      @include ellipsis(1);
    }

    .stars_wrapper {
      height: 0.3rem;
      line-height: 0.3rem;
      font-size: 0.14rem;
      color: #ccc;

      .score {
        color: $starColor;
      }
    }

    .bottom {
      @include fja;
      height: 0.3rem;
      line-height: .3rem;
      font-size: 0.14rem;
      .price_wrapper {
        .price {
          font-size: 0.2rem;
          color: $defaultGreen;
          vertical-align: -0.01rem;
        }
      }
    }
  }
}
</style>
