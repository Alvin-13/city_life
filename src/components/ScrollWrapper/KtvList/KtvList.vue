<template>
  <div class="ktv_list">
    <ktv-item v-for="item of ktvData" :key="item.id" :data="item"></ktv-item>
  </div>
</template>

<script>
import KtvItem from "./KtvItem";

export default {
  name: "KtvList",
  components: {
    KtvItem
  },
  props: {
    ktvData: Array
  },
  data: () => ({}),
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.ktv_list {
}
</style>
