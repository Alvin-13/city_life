<template>
  <div class="icon-list" @click="onRouterTo($event)">
    <icon-item
      v-for="item in iconsData"
      :key="item.id"
      v-bind="item"
      :data-path="item.field"
    ></icon-item>
  </div>
</template>

<script>
import IconItem from "./IconItem.vue";
import iconsData from "data/fields";
import { mapMutations } from 'vuex';

export default {
  name: "IconList",
  components: {
    IconItem
  },
  data: () => ({
    iconsData
  }),
  mounted() {},
  methods: {
    ...mapMutations(['setField']),
    onRouterTo(event) {
      let e = event || window.event,
        tar = e.target || e.srcElement,
        className = 'icon_item';

      while (tar.className !== className) {
        tar = tar.parentNode;
      }

      this.setField(tar.dataset.path);
      this.$router.push("/list")
    }
  }
};
</script>

<style scoped lang="scss">
@import "~styles/mixins.scss";
@import "~styles/variables.scss";

.icon-list {
  @include fja();
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #ddd;
}
</style>
