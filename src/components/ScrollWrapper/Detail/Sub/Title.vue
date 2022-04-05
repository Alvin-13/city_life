<template>
  <div class="title_bd">
    <span :class="['iconfont', icon]"></span>
    <span class="title_text">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: "DetailTitle",
  components: {},
  props: {
    icon: String,
    title: String
  },
  data: () => ({}),
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
@import '~styles/variables.scss';

.title_bd {
  display: flex;
  align-items: center;
  min-height: 0.44rem;
  padding: 0.1rem 0.15rem;
  color: $defaultGreen;
  background: #fff;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;

  .iconfont {
    font-size: 0.18rem;
  }

  .title_text {
    font-size: 0.16rem;
    line-height: 0.18rem;
    margin-left: 0.1rem;
  }
}
</style>
