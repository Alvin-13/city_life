<template>
  <div class="view_list">
    <view-item
      v-for="item in viewData"
      :key="item.id"
      :data="item"
    ></view-item>
  </div>
</template>

<script>
import ViewItem from "./ViewItem";

export default {
  name: "ViewList",
  components: {
    ViewItem
  },
  props: {
    viewData: Array
  },
  data: () => ({}),
  mounted() {
    
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.view_list {
  display: flex;
  flex-wrap: wrap;
  background: #fff;
}
</style>
