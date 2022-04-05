<template>
  <div class="home_title">
    <p class="title">{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: "HomeTitle",
  components: {},
  props: {
    title: {
      type: String,
      default: "一线生活通"
    }
  },
  data: () => ({}),
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.home_title {
  height: .5rem;
  line-height: .5rem;
  margin-top: .1rem;
  padding: 0 .15rem;
  background: #fff;
  border-bottom: 1px solid #ddd;

  .title {
    font-size: 0.18rem;
  color: #000;
  }
}
</style>
