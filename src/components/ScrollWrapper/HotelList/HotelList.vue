<template>
  <div class="hotel_list">
    <hotel-item
      v-for="item of hotelData"
      :key="item.id"
      :data="item"
    ></hotel-item>
  </div>
</template>

<script>
import HotelItem from "./HotelItem.vue";

export default {
  name: "HotelList",
  components: {
    HotelItem
  },
  props: {
    hotelData: Array
  },
  data: () => ({}),
  mounted() {
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.hotel_list {
  background-color: #fff;
}
</style>
