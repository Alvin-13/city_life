<template>
  <div class="ktv_item">
    <router-link
      :to="{ path: '/detail', query: { field: 'ktv', id: data.id } }"
    >
      <div class="img">
        <img :src="data.img" :alt="data.name" class="ktv_img" />
      </div>
      <div class="con">
        <h1>{{ data.name }}</h1>
        <div class="stars_wrapper">
          <stars :starNum="Number(data.star)"></stars>
          <span class="score">{{ data.score }}分</span>
        </div>
        <div class="bottom">
          <span class="item">
            ￥<span class="price">{{ data.default_price }}</span
            >元
          </span>
          <span class="item">{{ data.area }}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import Stars from "../Common/Stars";

export default {
  name: "KtvItem",
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

.ktv_item {
  position: relative;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  .img {
    width: 1.2rem;
    height: 1.2rem;
    padding: 0.1rem;
    box-sizing: border-box;

    .ktv_img {
      width: 100%;
      height: 100%;
    }
  }

  .con {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0.1rem 0.1rem 0 1.2rem;
    box-sizing: border-box;

    h1 {
      font-size: 0.18rem;
      color: #000;
      line-height: .2rem;
      @include ellipsis(1);
    }

    .stars_wrapper {
      color: $starColor;
      font-size: 0.16rem;
      line-height: 0.5rem;
    }
    .bottom {
      @include fja;
      line-height: .35rem;
      
      .item {
        font-size: 0.14rem;

        .price {
          font-size: .2rem;
          color: $defaultGreen;
        }
      }
    }
  }
}
</style>
