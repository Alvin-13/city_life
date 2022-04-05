<template>
  <div class="city_list">
    <current-city></current-city>
    <city-item
      v-for="(item, index) of cityList"
      :key="index"
      :cityName="item.cityName"
      @click.native="selectCity(item)"
    ></city-item>
  </div>
</template>

<script>
import CurrentCity from "./CurrentCity";
import CityItem from "./CityItem";
import cityList from "data/cities";
import { mapMutations } from 'vuex';


export default {
  name: "CityList",
  components: {
    CurrentCity,
    CityItem
  },
  data: () => ({
    cityList
  }),
  mounted() {

  },
  methods: {
    ...mapMutations(["setCityInfo"]),
    selectCity(city) {
      this.setCityInfo(city);
      this.$router.push("/")
    }
  }
};
</script>

<style scoped lang="scss">
.city_list {
}
</style>
