<template>
  <div class="massage_item">
    <router-link :to="{ path: 'detail', query: { field: 'massage', id: data.id } }">
      <div class="img">
      <img :src="data.img" :alt="data.name" class="massage_img" />
    </div>
    <div class="con">
      <h1>{{ data.name }}</h1>
      <div class="stars_wrapper">
        <stars :starNum="Number(data.star)"></stars>
        <span class="score">{{ data.score }}分</span>
      </div>
      <div class="bottom">
        <span>
          ￥<span class="price">{{ data.default_price }}</span
          >元起
        </span>
        <span>{{ data.city_name }}</span>
      </div>
    </div>
    </router-link>
  </div>
</template>

<script>
import Stars from "../Common/Stars.vue";

export default {
  name: "MassageItem",
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

.massage_item {
  position: relative;
  background-color: #fff;
  border: 1px solid #ddd;

  .img {
    width: 1.2rem;
    height: 1.2rem;
    padding: 0.1rem;
    box-sizing: border-box;

    .massage_img {
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
      line-height: 0.2rem;
      @include ellipsis(1);
    }

    .stars_wrapper {
      font-size: 0.14rem;
      line-height: 0.5rem;
      color: #ccc;
    
      .score {
    		color: $starColor;
      }
    }

    .bottom {
      @include fja;
      line-height: 0.35rem;
      font-size: 0.14rem;

      .price {
        font-size: 0.2rem;
        color: $defaultGreen;
      }
    }
  }
}
</style>
