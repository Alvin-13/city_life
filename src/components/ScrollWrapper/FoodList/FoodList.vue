<template>
  <div class="food_list">
    <food-item
      v-for="item of foodData"
      :key="item.id"
      :data="item"
    ></food-item>
  </div>
</template>

<script>
import FoodItem from "./FoodItem.vue";

export default {
  name: "FoodList",
  components: {
    FoodItem
  },
  props: {
    foodData: Array
  },
  data: () => ({}),
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.food_list {
  background: #fff;
}
</style>
