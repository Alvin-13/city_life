<template>
  <div class="current_city" ref="a">
    <span>当前城市：</span>
    <router-link :to="{name: path}">
      <span class="iconfont icon-positioning"></span>
      <span class="city_name">{{ cityName }}</span>
    </router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CurentCity",
  components: {},
  computed: {
    ...mapState(["cityName"])
  },
  data: () => ({
    path: "Index"
  }),
  mounted() {
    
  },
  methods: {}
};
</script>

<style scoped lang="scss">
@import "~styles/mixins.scss";
@import "~styles/variables.scss";

.current_city {
  @include fja(flex-start, center);
  height: 0.5rem;
  line-height: 0.5rem;
  padding: 0 0.15rem;
  font-size: 0.16rem;
  border-bottom: 1px solid #ccc;
  background: #fff;

  .iconfont {
    color: $defaultBgColor;
  }
}
</style>
