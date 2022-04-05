<template>
  <div
    :class="['tab_item', { active: cityInfo.cityId === this.cityId }]"
    @click="selectCity(cityInfo)"
  >
    <span>{{ cityInfo.cityName }}</span>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "TabItem",
  props: {
    cityInfo: Object
  },
  computed: {
    ...mapState(["cityId"])
  },
  data: () => ({}),
  mounted() {},
  methods: {
    ...mapMutations(["setCityInfo"]),
    selectCity(cityInfo) {
      this.setCityInfo(cityInfo);
    }
  }
};
</script>

<style scoped lang="scss">
@import "~styles/variables.scss";
@import "~styles/mixins.scss";

.tab_item {
  @include flexCenter;
  flex: 1;
  height: 0.44rem;
  font-size: 0.16rem;
  background-color: #fff;
  border-bottom: 2px solid #fff;
  box-sizing: border-box;

  &.active {
    color: $defaultGreen;
    border-color: $defaultGreen;
  }
}
</style>
