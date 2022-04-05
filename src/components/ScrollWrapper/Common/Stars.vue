<template>
  <span class="stars">
    <span :class="['iconfont icon-star', { active: starNum >= 1 }]"></span>
    <span :class="['iconfont icon-star', { active: starNum >= 2 }]"></span>
    <span :class="['iconfont icon-star', { active: starNum >= 3 }]"></span>
    <span :class="['iconfont icon-star', { active: starNum >= 4 }]"></span>
    <span :class="['iconfont icon-star', { active: starNum >= 5 }]"></span>
  </span>
</template>

<script>
export default {
  name: "Stars",
  components: {},
  props: {
    starNum: Number
  },
  data: () => ({}),
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
@import "~styles/variables.scss";

.stars {
  color: #ccc;
  .active {
    color: $starColor;
  }
}
</style>
