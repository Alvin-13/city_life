<template>
  <div class="food_item">
    <router-link
      :to="{ path: '/detail', query: { field: 'food', id: data.id } }"
    >
      <div class="img">
        <img :src="data.img" :alt="data.name" class="food_img" />
      </div>
      <div class="con">
        <h1>{{ data.name }}</h1>
        <div class="stars_wrapper">
          <stars :starNum="Number(data.star)"></stars>
          <span class="price">￥{{ data.default_price }}/人</span>
        </div>
        <div class="tags">
          <span class="tag" v-for="(item, index) of data.keyword" :key="index">
            {{ item }}</span
          >
        </div>
        <div class="bottom">
          <span>{{ data.field }}</span>
          <span>{{ data.area }}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import Stars from "../Common/Stars";

export default {
  name: "FoodItem",
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
@import "~styles/mixins";

.food_item {
  position: relative;
  border-bottom: 1px solid #ddd;
  .img {
    position: absolute;
    left: 0;
    top: 0;
    width: 1.2rem;
    height: 1.2rem;
    padding: 0.1rem;
    box-sizing: border-box;
    
    .food_img {
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
      height: .2rem;
      line-height: .2rem;
      @include ellipsis(1);
    }

    .stars_wrapper {
      font-size: .14rem;
      line-height: .3rem;

      .price {
        color: #333;
      }
    }
    
    .tags {
      height: .3rem;
      line-height: .2rem;
      overflow: hidden;

      .tag {
        @include fontSC(.14rem, rgb(190, 158, 77));
        background-color: rgb(251, 244, 228);
        margin-right: .05rem;
        border-radius: .01rem;
      }
    }

    .bottom {
      @include fja;
      font-size: .14rem;
      line-height: .25rem;
    }
  }
}
</style>
