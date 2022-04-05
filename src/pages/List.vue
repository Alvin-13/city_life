<template>
  <div class="container">
    <common-header :title="title"></common-header>
    <tab-list></tab-list>
    <list-scroll-wrapper></list-scroll-wrapper>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import fieldList from "data/fields";

import CommonHeader from "components/Header/CommonHeader";
import ListScrollWrapper from "components/ScrollWrapper/ListScrollWrapper";
import TabList from "components/TabList/TabList";

export default {
  name: "List",
  components: {
    CommonHeader,
    ListScrollWrapper,
    TabList
  },
  computed: {
    ...mapState(["field"]),
    title: {
      get() {
        return fieldList.filter(item => item.field === this.field)[0].iconText + "列表"
      }
    }
  },
  data: () => ({
  }),
  mounted() {},
  methods: {

  }
};
</script>

<style scoped lang="scss">
</style>
