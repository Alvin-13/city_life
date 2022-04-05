<template>
  <div class="city_selector">
    <router-link to="City">
      <span class="city_name">{{ cityName }}</span>
      <span class="iconfont icon-header-arrow"></span>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "CitySelector",
  components: {},
  computed: {
    ...mapState(['cityName'])
  },
  data: () => ({
  }),
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
@import "~styles/mixins.scss";
@import "~styles/variables.scss";

.city_selector {
  
  a {
    @include fja(center, center);
    width: 0.6rem;
    height: $headerHeight;

    .city_name {
      font-size: 0.16rem;
      font-weight: bold;
    }

    .iconfont {
      font-size: 0.08rem;
      margin-left: 0.03rem;
    }
  }
}
</style>
