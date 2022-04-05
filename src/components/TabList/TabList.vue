<template>
  <div class="tab_list">
    <tab-item
      v-for="item of cityList"
      :key="item.cityId"
      :cityInfo="item"
    ></tab-item>
  </div>
</template>

<script>
import TabItem from "./TabItem";
import cityList from "data/cities";

export default {
  name: "TabList",
  components: {
    TabItem
  },
  props: {},
  data: () => ({
    cityList
  }),
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.tab_list {
  display: flex;
  border-bottom: 1px solid #ddd;
}
</style>
