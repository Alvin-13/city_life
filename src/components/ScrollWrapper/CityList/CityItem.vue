<template>
  <div class="city_item">
    <span>{{ cityName }}</span>
  </div>
</template>

<script>
export default {
  name: 'CityItem',
  components: {

  },
  props: {
    cityName:  {
      type: String,
      default: "全部"
    }
  },
  data: () => ({

  }),
  mounted() {

  },
  methods: {

  },
}
</script>

<style scoped lang="scss">
@import "~styles/mixins.scss";
@import "~styles/variables.scss";

.city_item {
  @include fja(flex-start, center);
  width: 100%;
  height: .5rem;
  padding: 0 .15rem;
	font-size: .16rem;
  border-bottom: 1px solid #ddd;
  background: #fff;
}
</style>
