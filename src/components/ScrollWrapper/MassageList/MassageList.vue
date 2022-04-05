<template>
  <div class="massage_list">
    <massage-item v-for="item of massageData" :key="item.id" :data="item"></massage-item>
  </div>
</template>

<script>
import MassageItem from "./MassageItem.vue";

export default {
  name: 'MassageList',
  components: {
    MassageItem
  },
  props: {
    massageData: Array
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
.massage_list {

}
</style>
